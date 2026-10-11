import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalLandingTemplate from "@/components/LocalLandingTemplate";
import { getLandingPageBySlug } from "@/content/landing-pages";
import { cities, getCityBySlug } from "@/content/cities";
import { buildLocalPageContent } from "@/content/local-landing";

const SERVICE_SLUG = "digitalizare-afaceri" as const;

type Params = { oras: string };

export function generateStaticParams() {
  return cities.map((c) => ({ oras: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { oras } = await params;
  const city = getCityBySlug(oras);
  if (!city) return {};
  const content = buildLocalPageContent(SERVICE_SLUG, city);
  return {
    title: content.seoTitle,
    description: content.seoDescription,
    alternates: { canonical: `/${SERVICE_SLUG}/${city.slug}` },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { oras } = await params;
  const service = getLandingPageBySlug(SERVICE_SLUG);
  const city = getCityBySlug(oras);
  if (!service || !city) notFound();
  const content = buildLocalPageContent(SERVICE_SLUG, city);
  return <LocalLandingTemplate service={service} city={city} content={content} path={`/${SERVICE_SLUG}/${city.slug}`} />;
}
