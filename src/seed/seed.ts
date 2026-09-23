/**
 * Populează baza de date cu conținutul real extras din auditul site-ului vechi
 * (servicii + pachete de preț) și câteva proiecte/testimoniale placeholder, gata de
 * completat din admin. Rulează o singură dată, după prima migrare a bazei de date:
 *
 *   npm run seed
 *
 * E sigur să rulezi scriptul de mai multe ori — sare peste orice colecție care are
 * deja documente, nu creează duplicate.
 */
import "dotenv/config";
import { getPayload } from "payload";
import config from "@payload-config";
import { services } from "../content/services";
import { websitePricing, shopPricing } from "../content/pricing";
import { projects } from "../content/projects";
import { testimonials } from "../content/testimonials";

async function run() {
  const payload = await getPayload({ config });

  const existingServices = await payload.count({ collection: "services" });
  if (existingServices.totalDocs === 0) {
    console.log("Populez Services...");
    for (const [i, s] of services.entries()) {
      const pricingTiers =
        s.id === "site-web" ? websitePricing : s.id === "magazin-online" ? shopPricing : [];
      await payload.create({
        collection: "services",
        data: {
          title: s.title,
          slug: s.id,
          order: i,
          icon: s.icon,
          summary: s.summary,
          description: s.description,
          pricingTiers: pricingTiers.map((t) => ({
            name: t.name,
            price: t.price,
            oldPrice: t.oldPrice,
            note: t.note,
            highlighted: Boolean(t.highlighted),
            features: t.features.map((label) => ({ label })),
          })),
        },
      });
    }
  } else {
    console.log("Services are deja date — sar peste.");
  }

  const existingProjects = await payload.count({ collection: "projects" });
  if (existingProjects.totalDocs === 0) {
    console.log("Populez Projects (placeholder — completează cu proiectele reale din admin)...");
    for (const [i, p] of projects.entries()) {
      await payload.create({
        collection: "projects",
        data: {
          title: p.title,
          slug: p.slug,
          category: p.category,
          summary: p.summary,
          featured: Boolean(p.featured),
          order: i,
          // coverImage e obligatoriu în Payload — adaugă o imagine din admin după seed,
          // la fiecare proiect placeholder (secțiunea Portofoliu → fiecare proiect).
        },
      });
    }
  } else {
    console.log("Projects au deja date — sar peste.");
  }

  const existingTestimonials = await payload.count({ collection: "testimonials" });
  if (existingTestimonials.totalDocs === 0) {
    console.log("Populez Testimonials (placeholder, nepublicate)...");
    for (const t of testimonials) {
      await payload.create({
        collection: "testimonials",
        data: {
          name: t.name,
          role: t.role,
          quote: t.quote,
          published: false,
        },
      });
    }
  } else {
    console.log("Testimonials au deja date — sar peste.");
  }

  console.log("Seed complet.");
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
