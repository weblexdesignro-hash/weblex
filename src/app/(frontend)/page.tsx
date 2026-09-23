import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import PricingCard from "@/components/PricingCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTASection from "@/components/CTASection";
import RevealOnScroll, { StaggerGroup } from "@/components/RevealOnScroll";
import { getServices, getProjects, getPricingTiers, getTestimonials } from "@/lib/payload-data";

export default async function HomePage() {
  const [services, projects, { website: websitePricing }, testimonials] = await Promise.all([
    getServices(),
    getProjects(),
    getPricingTiers(),
    getTestimonials(),
  ]);

  return (
    <>
      <Hero />

      {/* Servicii */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-brand">Servicii</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Tot ce ai nevoie pentru o prezenta online solida
          </h2>
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
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Proiecte reprezentative
          </h2>
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
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Beneficii clare, fara promisiuni goale
            </h2>
            <p className="mt-4 text-mist">
              Fiecare proiect pleaca de la un obiectiv de business concret, nu doar de la un
              design frumos.
            </p>
          </RevealOnScroll>

          <StaggerGroup className="grid gap-6 sm:grid-cols-2">
            {[
              { title: "Livrare rapida", desc: "Termene clare, comunicate din prima discutie." },
              { title: "Panou de administrare inclus", desc: "Gestionezi singur continutul, fara programator." },
              { title: "SEO on-page inclus", desc: "Nu e un add-on separat, e parte din livrabil." },
              { title: "Mentenanta continua", desc: "Ramanem alaturi de tine si dupa lansare." },
            ].map((b) => (
              <div key={b.title} className="rounded-3xl border border-black/5 bg-white/60 p-6">
                <p className="font-display font-semibold">{b.title}</p>
                <p className="mt-2 text-sm text-mist">{b.desc}</p>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Procesul de lucru */}
      <section className="container-px mx-auto max-w-7xl py-12">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-brand">Procesul de lucru</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Cum lucram impreuna
          </h2>
        </RevealOnScroll>
        <div className="mt-16">
          <ProcessTimeline />
        </div>
      </section>

      {/* Pricing preview */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-brand">Preturi</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Site web de prezentare
          </h2>
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
