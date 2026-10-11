import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPageTemplate from "@/components/LandingPageTemplate";
import { getNichePageBySlug } from "@/content/niche-pages";

const SLUG = "site-web-fotovoltaice";

export function generateMetadata(): Metadata {
  const page = getNichePageBySlug(SLUG);
  if (!page) return {};
  return { title: page.seoTitle, description: page.seoDescription, alternates: { canonical: page.path } };
}

export default function Page() {
  const page = getNichePageBySlug(SLUG);
  if (!page) notFound();
  return <LandingPageTemplate page={page} />;
}
