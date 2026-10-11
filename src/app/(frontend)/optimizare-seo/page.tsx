import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPageTemplate from "@/components/LandingPageTemplate";
import { getLandingPageBySlug } from "@/content/landing-pages";

const SLUG = "optimizare-seo";

export function generateMetadata(): Metadata {
  const page = getLandingPageBySlug(SLUG);
  if (!page) return {};
  return { title: page.seoTitle, description: page.seoDescription, alternates: { canonical: page.path } };
}

export default function Page() {
  const page = getLandingPageBySlug(SLUG);
  if (!page) notFound();
  return <LandingPageTemplate page={page} />;
}
