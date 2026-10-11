/**
 * Adaugă în collection-ul "services" cele 2 servicii noi (Start-Up Nation / fonduri
 * europene, și digitalizare firme / aplicații software) introduse pentru rotunjirea
 * SEO on-page — fără să șteargă sau să dubleze cele 7 servicii existente deja din
 * prima rulare a src/seed/seed.ts.
 *
 * Verifică fiecare serviciu nou după slug și îl creează doar dacă nu există deja —
 * sigur de rulat de mai multe ori.
 *
 * Rulează, pe server, din folderul proiectului:
 *
 *   npx tsx src/seed/seed-new-services.ts
 */
import "dotenv/config";
import { getPayload } from "payload";
import config from "@payload-config";
import { services } from "../content/services";

const NEW_SLUGS = ["start-up-nation", "digitalizare-aplicatii"];

async function run() {
  const payload = await getPayload({ config });

  const existingCount = await payload.count({ collection: "services" });
  const nextOrderStart = existingCount.totalDocs;

  let created = 0;
  for (const slug of NEW_SLUGS) {
    const s = services.find((svc) => svc.id === slug);
    if (!s) continue;

    const existing = await payload.find({ collection: "services", where: { slug: { equals: slug } }, limit: 1 });
    if (existing.docs.length) {
      console.log(`  - "${s.title}" există deja — sar peste.`);
      continue;
    }

    await payload.create({
      collection: "services",
      data: {
        title: s.title,
        slug: s.id,
        order: nextOrderStart + created,
        icon: s.icon,
        summary: s.summary,
        description: s.description,
      },
    });
    created++;
    console.log(`  ✓ Adăugat: ${s.title}`);
  }

  console.log(created ? `Am adăugat ${created} servicii noi.` : "Nimic nou de adăugat — serviciile existau deja.");
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
