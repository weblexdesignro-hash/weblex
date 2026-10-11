// Helper pentru datele structurate Schema.org FAQPage, reutilizat pe pagina
// /intrebari-frecvente si pe cele 4 pagini de servicii dedicate (fiecare are
// propriul FAQ, mai scurt si specific paginii).
import type { FaqItem } from "@/content/faq";

export function buildFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// Schema.org BreadcrumbList — folosit pe cele 4 pagini de servicii dedicate,
// ca sa arate clar in Google ierarhia Acasa > Servicii > Pagina curenta.
export function buildBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
