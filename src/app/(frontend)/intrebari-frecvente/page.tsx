import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import RevealOnScroll from "@/components/RevealOnScroll";
import { faqCategories } from "@/content/faq";
import { buildFaqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Intrebari frecvente — preturi, durata, ce este inclus",
  description:
    "Raspunsuri clare la intrebarile frecvente despre creare site web, realizare magazin online, digitalizare si aplicatii software: cost, durata de livrare, mentenanta si securitate.",
  alternates: { canonical: "/intrebari-frecvente" },
};

// Toate intrebarile (din toate categoriile), pentru datele structurate
// FAQPage — Google poate afisa aceste intrebari direct in rezultatele cautarii.
const allFaqItems = faqCategories.flatMap((c) => c.items);
const faqJsonLd = buildFaqJsonLd(allFaqItems);

export default function IntrebariFrecventePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="container-px mx-auto max-w-4xl pb-16 pt-40 text-center">
        <RevealOnScroll>
          <p className="text-sm font-medium text-brand">Intrebari frecvente</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Tot ce vrei sa stii inainte sa pornim proiectul
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-mist">
            Raspunsuri clare despre preturi, durata de livrare, ce este inclus in fiecare pachet si cum
            functioneaza mentenanta — pentru site-uri de prezentare, magazine online, digitalizare si
            aplicatii software la comanda.
          </p>
        </RevealOnScroll>
      </section>

      <section className="container-px mx-auto max-w-3xl space-y-14 pb-24">
        {faqCategories.map((category) => (
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

      <CTASection />
    </>
  );
}
