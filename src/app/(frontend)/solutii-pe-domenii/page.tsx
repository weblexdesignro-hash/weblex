import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import RevealOnScroll, { StaggerGroup, StaggerItem } from "@/components/RevealOnScroll";
import { nichePages } from "@/content/niche-pages";

export const metadata: Metadata = {
  title: "Site-uri Web pe Domenii de Activitate — Hotel, Restaurant, Service Auto si Altele",
  description:
    "Solutii de site web construite pentru domeniul tau: hoteluri, pensiuni, service-uri auto, restaurante, cabinete de avocatura, companii industriale, energie, instalatii si fotovoltaice.",
  alternates: { canonical: "/solutii-pe-domenii" },
};

export default function SolutiiPeDomeniiPage() {
  return (
    <>
      <section className="container-px mx-auto max-w-5xl pb-16 pt-40 text-center">
        <RevealOnScroll>
          <p className="text-sm font-medium text-brand">Solutii pe domenii de activitate</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Site-uri web construite pentru domeniul tau de activitate
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-mist">
            Fiecare domeniu are nevoi diferite. Construim site-uri cu functionalitatile potrivite
            pentru afacerea ta — de la sisteme de rezervari pentru hoteluri si pensiuni, pana la
            meniu digital si comenzi online pentru restaurante.
          </p>
        </RevealOnScroll>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24">
        <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {nichePages.map((page) => (
            <StaggerItem key={page.slug}>
              <Link
                href={page.path}
                className="group flex h-full flex-col rounded-3xl border border-black/5 bg-white/70 p-8 shadow-card transition duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
                  <Icon name={page.beneficii[0]?.icon ?? "globe"} className="h-6 w-6" />
                </div>
                <h2 className="mt-6 font-display text-xl font-semibold">{page.navLabel}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{page.heroSubheading}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand transition group-hover:gap-1.5">
                  Vezi pagina completa <span aria-hidden>→</span>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <CTASection />
    </>
  );
}
