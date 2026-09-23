import { getPayload } from "payload";
import config from "@payload-config";
import { services as fallbackServices } from "@/content/services";
import { projects as fallbackProjects } from "@/content/projects";
import { testimonials as fallbackTestimonials } from "@/content/testimonials";
import type { Service } from "@/content/services";
import type { Project } from "@/content/projects";
import type { Testimonial } from "@/content/testimonials";
import type { PricingTier } from "@/content/pricing";

export type Locale = "ro" | "en" | "all";

// Sursa de adevăr pentru conținut e acum Payload CMS (baza de date). Fiecare funcție
// de mai jos citește din CMS și, dacă baza de date nu e încă populată sau nu răspunde
// (ex. prima instalare, înainte de a rula seed-ul), cade automat pe conținutul static
// din src/content/*.ts — site-ul rămâne funcțional indiferent de starea CMS-ului.
//
// Parametrul `locale` e opțional (implicit "ro") — paginile existente (Home, Despre,
// Servicii, Portofoliu) nu îl folosesc încă și continuă să afișeze conținutul în
// română; noile pagini construite din blocuri (/pagini/*) și articolele de blog
// folosesc localizarea completă RO/EN.

export async function getServices(locale: Locale = "ro"): Promise<Service[]> {
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({ collection: "services", limit: 100, sort: "order", depth: 0, locale });
    if (!res.docs.length) return fallbackServices;
    return res.docs.map((d: any) => ({
      id: d.slug,
      title: d.title,
      summary: d.summary,
      description: d.description,
      icon: d.icon,
    }));
  } catch {
    return fallbackServices;
  }
}

export async function getPricingTiers(locale: Locale = "ro"): Promise<{ website: PricingTier[]; shop: PricingTier[]; all: { serviceTitle: string; tier: PricingTier }[] }> {
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({ collection: "services", limit: 100, sort: "order", depth: 0, locale });
    const all: { serviceTitle: string; tier: PricingTier }[] = [];
    const bySlug: Record<string, PricingTier[]> = {};
    for (const d of res.docs as any[]) {
      const tiers: PricingTier[] = (d.pricingTiers || []).map((t: any) => ({
        name: t.name,
        price: t.price,
        oldPrice: t.oldPrice,
        note: t.note,
        highlighted: t.highlighted,
        features: (t.features || []).map((f: any) => f.label),
      }));
      bySlug[d.slug] = tiers;
      tiers.forEach((tier) => all.push({ serviceTitle: d.title, tier }));
    }
    if (!all.length) throw new Error("empty");
    return { website: bySlug["site-web"] || [], shop: bySlug["magazin-online"] || [], all };
  } catch {
    const { websitePricing, shopPricing } = await import("@/content/pricing");
    return {
      website: websitePricing,
      shop: shopPricing,
      all: [
        ...websitePricing.map((tier) => ({ serviceTitle: "Site web de prezentare", tier })),
        ...shopPricing.map((tier) => ({ serviceTitle: "Magazin online", tier })),
      ],
    };
  }
}

export async function getProjects(locale: Locale = "ro"): Promise<Project[]> {
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({ collection: "projects", limit: 100, sort: "order", depth: 1, locale });
    if (!res.docs.length) return fallbackProjects;
    return res.docs.map((d: any) => ({
      slug: d.slug,
      title: d.title,
      category: d.category,
      summary: d.summary || "",
      image: typeof d.coverImage === "object" && d.coverImage?.url ? d.coverImage.url : "/projects/placeholder-1.jpg",
      featured: d.featured,
    }));
  } catch {
    return fallbackProjects;
  }
}

export async function getTestimonials(locale: Locale = "ro"): Promise<Testimonial[]> {
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({
      collection: "testimonials",
      limit: 50,
      where: { published: { equals: true } },
      depth: 0,
      locale,
    });
    if (!res.docs.length) return fallbackTestimonials;
    return res.docs.map((d: any) => ({ name: d.name, role: d.role || "", quote: d.quote }));
  } catch {
    return fallbackTestimonials;
  }
}

export async function getPageBySlug(slug: string, locale: Locale = "ro") {
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({
      collection: "pages",
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 2,
      locale,
    });
    return res.docs[0] || null;
  } catch {
    return null;
  }
}

export async function getBlogPosts(locale: Locale = "ro") {
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({
      collection: "blog-posts",
      limit: 100,
      sort: "-publishedAt",
      depth: 1,
      locale,
    });
    return res.docs;
  } catch {
    return [];
  }
}

export async function getBlogPostBySlug(slug: string, locale: Locale = "ro") {
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({
      collection: "blog-posts",
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 1,
      locale,
    });
    return res.docs[0] || null;
  } catch {
    return null;
  }
}

// Textele implicite (copywriting original al site-ului) — folosite ca fallback
// pentru orice câmp necompletat încă în `Pagini → Page Texts` din admin, ca site-ul
// să nu afișeze niciodată un gol dacă cineva nu a completat totul.
export const defaultPageTexts = {
  hero: {
    heading: "Site-uri web si magazine online care aduc",
    headingHighlight: "clienti reali.",
    subheading:
      "Proiectam si construim prezente online rapide, moderne si optimizate pentru conversii — de la primul brief pana la mentenanta continua.",
    ctaPrimaryLabel: "Cere oferta",
    ctaSecondaryLabel: "Vezi portofoliul",
  },
  home: {
    servicesHeading: "Tot ce ai nevoie pentru o prezenta online solida",
    portfolioHeading: "Proiecte reprezentative",
    benefitsHeading: "Beneficii clare, fara promisiuni goale",
    benefitsText: "Fiecare proiect pleaca de la un obiectiv de business concret, nu doar de la un design frumos.",
    benefits: [
      { title: "Livrare rapida", text: "Termene clare, comunicate din prima discutie." },
      { title: "Panou de administrare inclus", text: "Gestionezi singur continutul, fara programator." },
      { title: "SEO on-page inclus", text: "Nu e un add-on separat, e parte din livrabil." },
      { title: "Mentenanta continua", text: "Ramanem alaturi de tine si dupa lansare." },
    ],
    processHeading: "Cum lucram impreuna",
    pricingHeading: "Site web de prezentare",
  },
  despre: {
    heading: "Din {since}, construim prezente online care functioneaza cu adevarat",
    paragraph1:
      "Weblex Design a fost infiintata in {since}, dar echipa din spate are peste {experienceYears} ani de experienta in dezvoltare web. De atunci, ne-am axat constant pe un singur lucru: sa oferim clientilor nostri calitate si profesionalism, nu doar un site „care arata bine”.",
    paragraph2:
      "Am construit site-uri de prezentare pentru afaceri locale, restaurante, pensiuni si hoteluri, si magazine online complete — cu plata ramburs, card sau transfer bancar — pentru comercianti care vor sa vanda online fara batai de cap tehnice.",
    paragraph3:
      "Pana acum am finalizat peste {projectsDelivered} de proiecte, pastrand aceeasi echipa alaturi de client de la primul brief pana la lansare — si dupa, prin mentenanta continua.",
  },
  portofoliu: {
    heading: "Proiecte livrate clientilor nostri",
    subheading:
      "Peste 400 de proiecte finalizate — site-uri de prezentare, magazine online si redesign-uri complete.",
  },
  contact: {
    heading: "Hai sa vorbim despre proiectul tau",
    subheading: "Completeaza formularul si iti raspundem cu o oferta personalizata in maximum o zi lucratoare.",
  },
  blog: {
    heading: "Blog",
    emptyMessage: "Niciun articol publicat încă.",
  },
  stats: {
    since: 2017,
    experienceYears: 10,
    projectsDelivered: 400,
  },
};

export type PageTexts = typeof defaultPageTexts;

function fillDefaults<T extends Record<string, any>>(fetched: any, defaults: T): T {
  if (!fetched || typeof fetched !== "object") return defaults;
  const result: any = Array.isArray(defaults) ? [...defaults] : { ...defaults };
  for (const key of Object.keys(defaults)) {
    const defVal = (defaults as any)[key];
    const fetchedVal = fetched[key];
    if (fetchedVal === undefined || fetchedVal === null || fetchedVal === "") {
      result[key] = defVal;
    } else if (typeof defVal === "object" && !Array.isArray(defVal) && defVal !== null) {
      result[key] = fillDefaults(fetchedVal, defVal);
    } else {
      result[key] = fetchedVal;
    }
  }
  return result;
}

function interpolate(text: string, vars: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (_, key) => (key in vars ? String(vars[key]) : `{${key}}`));
}

export async function getPageTexts(locale: Locale = "ro"): Promise<PageTexts> {
  let fetched: any = null;
  try {
    const payload = await getPayload({ config });
    fetched = await payload.findGlobal({ slug: "page-texts", depth: 0, locale });
  } catch {
    fetched = null;
  }
  const merged = fillDefaults(fetched, defaultPageTexts);

  // interpolăm {since}, {experienceYears}, {projectsDelivered} în textele din Despre
  const vars = merged.stats;
  merged.despre = {
    heading: interpolate(merged.despre.heading, vars),
    paragraph1: interpolate(merged.despre.paragraph1, vars),
    paragraph2: interpolate(merged.despre.paragraph2, vars),
    paragraph3: interpolate(merged.despre.paragraph3, vars),
  };

  return merged;
}
