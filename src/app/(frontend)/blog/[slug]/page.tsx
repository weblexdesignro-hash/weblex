import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import { getBlogPostBySlug, type Locale } from "@/lib/payload-data";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import CTASection from "@/components/CTASection";
import ShareButtons from "@/components/ShareButtons";
import FAQAccordion from "@/components/FAQAccordion";
import { buildFaqJsonLd } from "@/lib/seo";

const SITE_URL = "https://weblexdesign.ro";

type Params = { slug: string };
type Search = { lang?: string };

function resolveLocale(lang?: string): Locale {
  return lang === "en" ? "en" : "ro";
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<Search>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { lang } = await searchParams;
  const post = await getBlogPostBySlug(slug, resolveLocale(lang));
  if (!post) return {};
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt || undefined,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPostPage({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<Search>;
}) {
  const { slug } = await params;
  const { lang } = await searchParams;
  const locale = resolveLocale(lang);
  const post = await getBlogPostBySlug(slug, locale);

  if (!post) notFound();

  const cover = typeof post.coverImage === "object" && post.coverImage?.url ? post.coverImage.url : null;
  // Intrebari frecvente optionale, atasate articolului din admin (Blog -> FAQ) —
  // afisate ca accordion la final SI ca date structurate Schema.org FAQPage, ca
  // Google si asistentii AI (ChatGPT, Perplexity etc.) sa poata extrage direct
  // raspunsurile ca fragmente/citate.
  const faqItems = (post.faq || []).filter((f): f is { question: string; answer: string } => Boolean(f.question && f.answer));
  const faqJsonLd = faqItems.length ? buildFaqJsonLd(faqItems) : null;

  return (
    <>
      {faqJsonLd && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <LanguageSwitcher locale={locale} />
      <article className="container-px mx-auto max-w-3xl pb-24 pt-10">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">{post.title}</h1>
        {cover && (
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image src={cover} alt={post.title} fill className="object-cover" />
          </div>
        )}
        {post.content && (
          <div
            className="prose prose-neutral mt-10 max-w-none text-ink/80"
            dangerouslySetInnerHTML={{ __html: convertLexicalToHTML({ data: post.content as any }) }}
          />
        )}
        {faqItems.length > 0 && (
          <div className="mt-14">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">Întrebări frecvente</h2>
            <div className="mt-6">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        )}
        <div className="mt-12 border-t border-black/5 pt-8">
          <ShareButtons url={`${SITE_URL}/blog/${slug}`} title={post.title} />
        </div>
      </article>
      <CTASection />
    </>
  );
}
