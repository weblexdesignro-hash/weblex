import { getPayload } from "payload";
import config from "@payload-config";
import { services as fallbackServices } from "@/content/services";
import { projects as fallbackProjects } from "@/content/projects";
import { testimonials as fallbackTestimonials } from "@/content/testimonials";
import type { Service } from "@/content/services";
import type { Project } from "@/content/projects";
import type { Testimonial } from "@/content/testimonials";
import type { PricingTier } from "@/content/pricing";

// Sursa de adevăr pentru conținut e acum Payload CMS (baza de date). Fiecare funcție
// de mai jos citește din CMS și, dacă baza de date nu e încă populată sau nu răspunde
// (ex. prima instalare, înainte de a rula seed-ul), cade automat pe conținutul static
// din src/content/*.ts — site-ul rămâne funcțional indiferent de starea CMS-ului.

export async function getServices(): Promise<Service[]> {
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({ collection: "services", limit: 100, sort: "order", depth: 0 });
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

export async function getPricingTiers(): Promise<{ website: PricingTier[]; shop: PricingTier[]; all: { serviceTitle: string; tier: PricingTier }[] }> {
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({ collection: "services", limit: 100, sort: "order", depth: 0 });
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

export async function getProjects(): Promise<Project[]> {
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({ collection: "projects", limit: 100, sort: "order", depth: 1 });
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

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({ collection: "testimonials", limit: 50, where: { published: { equals: true } }, depth: 0 });
    if (!res.docs.length) return fallbackTestimonials;
    return res.docs.map((d: any) => ({ name: d.name, role: d.role || "", quote: d.quote }));
  } catch {
    return fallbackTestimonials;
  }
}
