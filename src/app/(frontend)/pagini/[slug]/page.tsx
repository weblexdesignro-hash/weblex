import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageBySlug, type Locale } from "@/lib/payload-data";
import BlockRenderer from "@/components/BlockRenderer";
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
  const locale = resolveLocale(lang);
  const page = await getPageBySlug(slug, locale);
  if (!page) return {};
  return {
    title: page.seoTitle || page.title,
    description: page.seoDescription || undefined,
  };
}

export default async function CustomPage({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<Search>;
}) {
  const { slug } = await params;
  const { lang } = await searchParams;
  const locale = resolveLocale(lang);
  const page = await getPageBySlug(slug, locale);

  if (!page) notFound();

  return (
    <>
      <LanguageSwitcher locale={locale} />
      <BlockRenderer blocks={page.layout || []} />
      <CTASection />
    </>
  );
}
