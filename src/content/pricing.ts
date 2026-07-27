// Pachetele si preturile reale de pe weblexdesign.ro (preturi-site-web, preturi-magazin-online).
// Continut de conversie validat - restilizat, nu rescris.

export type PricingTier = {
  name: string;
  price: string;
  oldPrice?: string;
  note: string;
  features: string[];
  highlighted?: boolean;
};

export const websitePricing: PricingTier[] = [
  {
    name: "Business Basic",
    price: "€249",
    oldPrice: "€312",
    note: "O singura pagina, ideal pentru un business la inceput de drum.",
    features: [
      "1 pagina, design responsive personalizat",
      "Formular de contact + harta locatie",
      "Domeniu si hosting (asistenta configurare)",
      "Email personalizat, certificat SSL, GDPR, cookie banner",
      "Slider animat + chat Facebook/WhatsApp",
      "SEO on-page + optimizare viteza",
      "Google Business, Analytics & Search Console",
      "Garantie 12 luni",
    ],
  },
  {
    name: "Business Standard",
    price: "€479",
    oldPrice: "€599",
    note: "1-20 pagini, pentru afaceri cu mai multe servicii de prezentat.",
    features: [
      "Tot ce include Business Basic",
      "1-20 pagini responsive",
      "Galerie foto",
    ],
    highlighted: true,
  },
  {
    name: "Business Pro",
    price: "€749",
    oldPrice: "€936",
    note: "1-50 pagini, pentru afaceri complexe si multi-locatie.",
    features: [
      "Tot ce include Business Standard",
      "1-50 pagini responsive",
    ],
  },
];

export const shopPricing: PricingTier[] = [
  {
    name: "Shop Basic",
    price: "€799",
    note: "Import 1-50 produse.",
    features: [
      "Design responsive, slider animat, chat/WhatsApp",
      "Produse nelimitate (fizice/virtuale), import 1-50 produse",
      "Checkout, calcul livrare pe zone, plata ramburs si card",
      "Sistem de promotii, cupoane si fidelizare",
      "Newsletter, rapoarte de vanzari",
      "SEO on-page, Google Business, Analytics & Search Console",
    ],
  },
  {
    name: "Shop Standard",
    price: "€1.199",
    note: "Import 1-500 produse.",
    features: ["Tot ce include Shop Basic", "Import 1-500 produse"],
    highlighted: true,
  },
  {
    name: "Shop Pro",
    price: "€1.599",
    note: "Import 1-1000 produse.",
    features: ["Tot ce include Shop Standard", "Import 1-1000 produse"],
  },
];
