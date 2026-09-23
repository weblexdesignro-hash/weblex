import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getBlogPosts, type Locale } from "@/lib/payload-data";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articole despre web design, marketing si vanzari online.",
};

function resolveLocale(lang?: string): Locale {
  return lang === "en" ? "en" : "ro";
}

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang } = await searchParams;
  const locale = resolveLocale(lang);
  const posts = await getBlogPosts(locale);

  return (
    <>
      <LanguageSwitcher locale={locale} />
      <section className="container-px mx-auto max-w-5xl pb-24 pt-10">
        <RevealOnScroll>
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">Blog</h1>
        </RevealOnScroll>

        {posts.length === 0 ? (
          <p className="mt-10 text-ink/60">Niciun articol publicat încă.</p>
        ) : (
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: any) => {
              const cover = typeof post.coverImage === "object" && post.coverImage?.url ? post.coverImage.url : null;
              return (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}${locale === "en" ? "?lang=en" : ""}`}
                  className="group block overflow-hidden rounded-2xl border border-black/5"
                >
                  <div className="relative aspect-[16/10] bg-mist/10">
                    {cover && (
                      <Image
                        src={cover}
                        alt={post.title}
                        fill
                        className="object-cover transition group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="p-5">
                    <h2 className="font-display text-lg font-semibold">{post.title}</h2>
                    {post.excerpt && <p className="mt-2 text-sm text-ink/70">{post.excerpt}</p>}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
