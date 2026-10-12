import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import PricingCard from "@/components/PricingCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTASection from "@/components/CTASection";
import RevealOnScroll, { StaggerGroup } from "@/components/RevealOnScroll";
import { getServices, getProjects, getPricingTiers, getTestimonials, getPageTexts } from "@/lib/payload-data";
import { ui } from "@/content/i18n";

// English homepage (/en). Mirrors src/app/(frontend)/page.tsx but reads every
// Payload-backed content piece with locale="en" and uses the EN dictionary
// (src/content/i18n.ts) for the "chrome" text (eyebrows, link labels) that isn't
// stored in Payload. When Services/Testimonials/Projects/PageTexts don't have an
// English value saved yet, Payload's localization `fallback: true` quietly shows
// the Romanian text instead of breaking — translate those fields from the admin
// panel (Conținut -> ...) whenever you're ready and they'll appear here live.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Weblex Design — Websites and online stores that bring real customers",
  description:
    "Weblex Design builds fast, modern, conversion-optimized websites and online stores. 10+ years of experience, 400+ delivered projects.",
  alternates: {
    canonical: "/en",
    languages: { "ro-RO": "/", "en-US": "/en" },
  },
  openGraph: { locale: "en_US" },
};

export default async function HomePageEn() {
  const t = ui.en;
  const [services, projects, { website: websitePricing }, testimonials, texts] = await Promise.all([
    getServices("en"),
    getProjects("en"),
    getPricingTiers("en"),
    getTestimonials("en"),
    getPageTexts("en"),
  ]);

  return (
    <>
      <Hero
        heading={texts.hero.heading}
        headingHighlight={texts.hero.headingHighlight}
        subheading={texts.hero.subheading}
        ctaPrimaryLabel={texts.hero.ctaPrimaryLabel}
        ctaSecondaryLabel={texts.hero.ctaSecondaryLabel}
        experienceYears={texts.stats.experienceYears}
        projectsDelivered={texts.stats.projectsDelivered}
        locale="en"
      />

      {/* Services */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-brand">{t.homeServicesEyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{texts.home.servicesHeading}</h2>
        </RevealOnScroll>

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((s) => (
            <ServiceCard key={s.id} service={s} locale="en" />
          ))}
        </StaggerGroup>

        <div className="mt-10 text-center">
          <Link href="/servicii" className="text-sm font-medium text-brand hover:underline">
            {t.homeServicesLink} &rarr;
          </Link>
        </div>
      </section>

      {/* Featured projects */}
      <section className="container-px mx-auto max-w-7xl py-12">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-brand">{t.homePortfolioEyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{texts.home.portfolioHeading}</h2>
        </RevealOnScroll>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.filter((p) => p.featured).map((p) => (
            <ProjectCard key={p.slug} project={p} locale="en" />
          ))}
        </StaggerGroup>

        <div className="mt-10 text-center">
          <Link href="/portofoliu" className="text-sm font-medium text-brand hover:underline">
            {t.homePortfolioLink} &rarr;
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <RevealOnScroll>
            <p className="text-sm font-medium text-brand">{t.homeBenefitsEyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{texts.home.benefitsHeading}</h2>
            <p className="mt-4 text-mist">{texts.home.benefitsText}</p>
          </RevealOnScroll>

          <StaggerGroup className="grid gap-6 sm:grid-cols-2">
            {texts.home.benefits.map((b) => (
              <div key={b.title} className="rounded-3xl border border-black/5 bg-white/60 p-6">
                <p className="font-display font-semibold">{b.title}</p>
                <p className="mt-2 text-sm text-mist">{b.text}</p>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* How we work */}
      <section className="container-px mx-auto max-w-7xl py-12">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-brand">{t.homeProcessEyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{texts.home.processHeading}</h2>
        </RevealOnScroll>
        <div className="mt-16">
          <ProcessTimeline locale="en" />
        </div>
      </section>

      {/* Pricing preview */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-brand">{t.homePricingEyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{texts.home.pricingHeading}</h2>
        </RevealOnScroll>
        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {websitePricing.map((tier) => (
            <PricingCard key={tier.name} tier={tier} locale="en" />
          ))}
        </StaggerGroup>
      </section>

      {/* Testimonials */}
      <section className="container-px mx-auto max-w-7xl py-12">
        <TestimonialCarousel items={testimonials} locale="en" />
      </section>

      <CTASection locale="en" />
    </>
  );
}
