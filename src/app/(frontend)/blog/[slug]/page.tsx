import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import { getBlogPostBySlug, type Locale } from "@/lib/payload-data";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import CTASection from "@/components/CTASection";

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
  return { title: post.seoTitle || post.title, description: post.seoDescription || post.excerpt || undefined };
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

  return (
    <>
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
      </article>
      <CTASection />
    </>
  );
}
