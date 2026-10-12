import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import RevealOnScroll from "@/components/RevealOnScroll";
import { faqCategoriesEn } from "@/content/faq";
import { buildFaqJsonLd } from "@/lib/seo";
import { ui } from "@/content/i18n";
import { site, ogImage } from "@/content/site";

const titleEn = "FAQ — pricing, timelines, what's included";
const descriptionEn =
  "Clear answers to frequently asked questions about building a website, online store, digitalization and software applications: cost, delivery time, maintenance and security.";

export const metadata: Metadata = {
  title: titleEn,
  description: descriptionEn,
  alternates: {
    canonical: "/en/intrebari-frecvente",
    languages: { "ro-RO": "/intrebari-frecvente", "en-US": "/en/intrebari-frecvente" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    url: "/en/intrebari-frecvente",
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

// Toate intrebarile (din toate categoriile), pentru datele structurate
// FAQPage — Google poate afisa aceste intrebari direct in rezultatele cautarii.
const allFaqItems = faqCategoriesEn.flatMap((c) => c.items);
const faqJsonLd = buildFaqJsonLd(allFaqItems);

export default function IntrebariFrecventePageEn() {
  const t = ui.en;
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="container-px mx-auto max-w-4xl pb-16 pt-40 text-center">
        <RevealOnScroll>
          <p className="text-sm font-medium text-brand">{t.faqEyebrow}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">{t.faqHeading}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-mist">{t.faqSubheading}</p>
        </RevealOnScroll>
      </section>

      <section className="container-px mx-auto max-w-3xl space-y-14 pb-24">
        {faqCategoriesEn.map((category) => (
          <div key={category.id} id={category.id}>
            <RevealOnScroll>
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">{category.label}</h2>
            </RevealOnScroll>
            <div className="mt-6">
              <FAQAccordion items={category.items} />
            </div>
          </div>
        ))}
      </section>

      <CTASection locale="en" />
    </>
  );
}
