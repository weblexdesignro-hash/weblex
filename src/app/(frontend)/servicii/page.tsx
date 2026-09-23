import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import RevealOnScroll, { StaggerGroup } from "@/components/RevealOnScroll";
import { getServices, getPricingTiers } from "@/lib/payload-data";

export const metadata: Metadata = {
  title: "Servicii",
  description:
    "Creare site web de prezentare, magazin online, SEO, promovare, mentenanta si redesign — cu preturi transparente.",
};

export default async function ServiciiPage() {
  const [services, { website: websitePricing, shop: shopPricing }] = await Promise.all([
    getServices(),
    getPricingTiers(),
  ]);

  return (
    <>
      <section className="container-px mx-auto max-w-5xl pb-16 pt-40 text-center">
        <RevealOnScroll>
          <p className="text-sm font-medium text-brand">Servicii</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Tot ce ai nevoie pentru o prezenta online completa
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-mist">
            De la primul site de prezentare pana la un magazin online complex, cu SEO,
            promovare si mentenanta incluse in proces.
          </p>
        </RevealOnScroll>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24">
        <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </StaggerGroup>
      </section>

      <section id="preturi-site-web" className="container-px mx-auto max-w-7xl py-16">
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

      <section id="preturi-magazin-online" className="container-px mx-auto max-w-7xl py-16">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-brand">Preturi</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Magazin online
          </h2>
        </RevealOnScroll>
        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {shopPricing.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </StaggerGroup>
      </section>

      <CTASection />
    </>
  );
}
