// Continut real extras din auditul weblexdesign.ro (Faza 1).
// Aceste date vor deveni un "SiteSettings" global in Payload CMS.

export const site = {
  name: "Weblex Design",
  legalName: "Weblex Design SRL",
  cui: "37639616",
  regCom: "J12/2957/2017",
  tagline: "Site-uri web si magazine online care aduc clienti reali.",
  since: 2017,
  experienceYears: 10,
  projectsDelivered: 400,
  phone: "+40 745 931 326",
  phoneHref: "tel:+40745931326",
  email: "contact@weblexdesign.ro",
  city: "Cluj-Napoca",
  social: {
    facebook: "https://facebook.com/weblexdesign",
    instagram: "https://instagram.com/creare_site_web_cluj",
    twitter: "https://twitter.com/WeblexD",
  },
  legalLinks: [
    { label: "Politica de confidentialitate", href: "/politica-de-confidentialitate" },
    { label: "Politica de cookie", href: "/politica-de-cookie" },
  ],
};

// Imaginea folosita pentru og:image / twitter:image pe toate paginile (RO si EN) —
// un singur loc de editat daca schimbam vizualul folosit la share pe retele sociale.
export const ogImage = { url: "/og/og-image.png", width: 1200, height: 630 };

export const nav = [
  { label: "Servicii", href: "/servicii" },
  { label: "Portofoliu", href: "/portofoliu" },
  { label: "Blog", href: "/blog" },
  { label: "Despre noi", href: "/despre" },
  { label: "Contact", href: "/contact" },
];
