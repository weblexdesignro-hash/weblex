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
