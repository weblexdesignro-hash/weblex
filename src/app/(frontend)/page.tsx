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

export default async function HomePage() {
  const [services, projects, { website: websitePricing }, testimonials, texts] = await Promise.all([
    getServices(),
    getProjects(),
    getPricingTiers(),
    getTestimonials(),
    getPageTexts(),
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
      />

      {/* Servicii */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-brand">Servicii</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{texts.home.servicesHeading}</h2>
        </RevealOnScroll>

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </StaggerGroup>

        <div className="mt-10 text-center">
          <Link href="/servicii" className="text-sm font-medium text-brand hover:underline">
            Vezi toate serviciile &rarr;
          </Link>
        </div>
      </section>

      {/* Proiecte reprezentative */}
      <section className="container-px mx-auto max-w-7xl py-12">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-brand">Portofoliu</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{texts.home.portfolioHeading}</h2>
        </RevealOnScroll>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.filter((p) => p.featured).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </StaggerGroup>

        <div className="mt-10 text-center">
          <Link href="/portofoliu" className="text-sm font-medium text-brand hover:underline">
            Vezi tot portofoliul &rarr;
          </Link>
        </div>
      </section>

      {/* Beneficii */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <RevealOnScroll>
            <p className="text-sm font-medium text-brand">De ce Weblex Design</p>
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

      {/* Procesul de lucru */}
      <section className="container-px mx-auto max-w-7xl py-12">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-brand">Procesul de lucru</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{texts.home.processHeading}</h2>
        </RevealOnScroll>
        <div className="mt-16">
          <ProcessTimeline />
        </div>
      </section>

      {/* Pricing preview */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-brand">Preturi</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{texts.home.pricingHeading}</h2>
        </RevealOnScroll>
        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {websitePricing.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </StaggerGroup>
      </section>

      {/* Testimoniale */}
      <section className="container-px mx-auto max-w-7xl py-12">
        <TestimonialCarousel items={testimonials} />
      </section>

      <CTASection />
    </>
  );
}
