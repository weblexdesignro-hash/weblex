import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import RevealOnScroll, { StaggerGroup, StaggerItem } from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import { getPageTexts } from "@/lib/payload-data";
import { ui } from "@/content/i18n";
import { site, ogImage } from "@/content/site";

const titleEn = "About us — Web design agency with 10+ years of experience";
const descriptionEn =
  "Weblex Design: website, online store and business digitalization agency since 2017. Over 400 delivered projects, the same team from brief to launch.";

export const metadata: Metadata = {
  title: titleEn,
  description: descriptionEn,
  alternates: { canonical: "/en/despre", languages: { "ro-RO": "/despre", "en-US": "/en/despre" } },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    url: "/en/despre",
    title: titleEn,
    description: descriptionEn,
    images: [{ ...ogImage, alt: titleEn }],
  },
  twitter: {
    card: "summary_large_image",
    title: titleEn,
    description: descriptionEn,
    images: [ogImage.url],
  },
};

export const dynamic = "force-dynamic";

export default async function DesprePageEn() {
  const t = ui.en;
  const texts = await getPageTexts("en");
  const { despre, stats } = texts;

  return (
    <>
      <section className="container-px mx-auto max-w-4xl pb-16 pt-40 text-center">
        <RevealOnScroll>
          <p className="text-sm font-medium text-brand">{t.despreEyebrow}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">{despre.heading}</h1>
        </RevealOnScroll>
      </section>

      <section className="container-px mx-auto max-w-4xl pb-24">
        <RevealOnScroll className="space-y-6 text-lg leading-relaxed text-ink/80">
          <p>{despre.paragraph1}</p>
          <p>{despre.paragraph2}</p>
          <p>{despre.paragraph3}</p>
        </RevealOnScroll>

        <StaggerGroup className="mt-16 grid grid-cols-3 gap-8 border-t border-black/5 pt-10 text-center">
          <StaggerItem>
            <p className="font-display text-4xl font-semibold">
              <AnimatedCounter value={stats.projectsDelivered} suffix="+" />
            </p>
            <p className="mt-1 text-sm text-mist">{t.statProjects}</p>
          </StaggerItem>
          <StaggerItem>
            <p className="font-display text-4xl font-semibold">
              <AnimatedCounter value={stats.experienceYears} suffix="+" />
            </p>
            <p className="mt-1 text-sm text-mist">{t.statExperience}</p>
          </StaggerItem>
          <StaggerItem>
            <p className="font-display text-4xl font-semibold">{stats.since}</p>
            <p className="mt-1 text-sm text-mist">{t.despreStatSince}</p>
          </StaggerItem>
        </StaggerGroup>
      </section>

      <CTASection locale="en" />
    </>
  );
}
