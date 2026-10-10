/**
 * Înlocuiește proiectele placeholder din Portofoliu cu lista reală de site-uri
 * livrate de echipa Weblex Design (din src/content/projects.ts).
 *
 * ATENȚIE: șterge toate documentele existente din collection-ul "projects" înainte
 * să le recreeze — dacă ai adăugat deja proiecte reale manual din admin, exportă-le
 * întâi sau rulează scriptul doar o singură dată, la populare inițială.
 *
 * Rulează, pe server, din folderul proiectului:
 *
 *   npx tsx src/seed/seed-portfolio.ts
 *
 * Nu necesită o migrare nouă — collection-ul "projects" nu își schimbă structura,
 * doar conținutul. Imaginile de copertă (coverImage) nu sunt incluse — se pot adăuga
 * ulterior din admin, la fiecare proiect (Portofoliu → alege proiectul → Cover Image).
 * Până atunci, fiecare proiect are un fundal gradient, deci site-ul rămâne corect vizual.
 */
import "dotenv/config";
import { getPayload } from "payload";
import config from "@payload-config";
import { projects } from "../content/projects";

async function run() {
  const payload = await getPayload({ config });

  const existing = await payload.find({ collection: "projects", limit: 200 });
  if (existing.docs.length) {
    console.log(`Șterg ${existing.docs.length} proiecte existente (placeholder)...`);
    for (const doc of existing.docs) {
      await payload.delete({ collection: "projects", id: doc.id });
    }
  }

  console.log(`Populez Projects cu ${projects.length} proiecte reale din portofoliu...`);
  for (const [i, p] of projects.entries()) {
    await payload.create({
      collection: "projects",
      data: {
        title: p.title,
        slug: p.slug,
        category: p.category,
        summary: p.summary,
        liveUrl: p.liveUrl,
        featured: Boolean(p.featured),
        order: i,
        seoTitle: `${p.title} | Portofoliu Weblex Design`,
        seoDescription: p.summary.slice(0, 160),
      },
    });
    console.log(`  ✓ ${p.title}`);
  }

  console.log("Portofoliu populat cu succes.");
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
