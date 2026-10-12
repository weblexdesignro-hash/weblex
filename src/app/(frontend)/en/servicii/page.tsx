import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import RevealOnScroll, { StaggerGroup } from "@/components/RevealOnScroll";
import { getServices, getPricingTiers, getPageTexts } from "@/lib/payload-data";
import { ui } from "@/content/i18n";

export const metadata: Metadata = {
  title: "Services — Website creation, online stores, SEO, digitalization",
  description:
    "Business website creation, online stores, on-page SEO, maintenance, software applications, business digitalization and Start-Up Nation / EU funding eligible websites.",
  alternates: { canonical: "/en/servicii", languages: { "ro-RO": "/servicii", "en-US": "/en/servicii" } },
  openGraph: { locale: "en_US" },
};

export const dynamic = "force-dynamic";

export default async function ServiciiPageEn() {
  const t = ui.en;
  const [services, { website: websitePricing, shop: shopPricing }, texts] = await Promise.all([
    getServices("en"),
    getPricingTiers("en"),
    getPageTexts("en"),
  ]);

  return (
    <>
      <section className="container-px mx-auto max-w-5xl pb-16 pt-40 text-center">
        <RevealOnScroll>
          <p className="text-sm font-medium text-brand">{t.serviciiEyebrow}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">{t.serviciiHeading}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-mist">{t.serviciiSubheading}</p>
        </RevealOnScroll>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24">
        <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} locale="en" />
          ))}
        </StaggerGroup>
      </section>

      <section id="preturi-site-web" className="container-px mx-auto max-w-7xl py-16">
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

      <section id="preturi-magazin-online" className="container-px mx-auto max-w-7xl py-16">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-brand">{t.homePricingEyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{t.serviciiPricingShopHeading}</h2>
        </RevealOnScroll>
        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {shopPricing.map((tier) => (
            <PricingCard key={tier.name} tier={tier} locale="en" />
          ))}
        </StaggerGroup>
      </section>

      <CTASection locale="en" />
    </>
  );
}
