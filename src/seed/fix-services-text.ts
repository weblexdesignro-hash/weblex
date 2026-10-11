/**
 * REPARĂ o pierdere de date mai veche: migrarea care a făcut localizabile (RO/EN)
 * câmpurile "title", "summary" și "description" din collection-ul "services" a convertit
 * coloanele vechi (nelocalizate) în tabelul nou "services_locales" — dar fără să copieze
 * valorile deja existente. Cele 7 servicii originale (create înainte de acea migrare) au
 * rămas astfel cu titlu/rezumat/descriere goale, deși documentul exista.
 *
 * Acest script verifică fiecare serviciu din src/content/services.ts (sursa de adevăr) și,
 * dacă documentul corespunzător din baza de date are title/summary/description goale,
 * le completează. Nu atinge serviciile care au deja text (inclusiv cele 2 adăugate recent
 * cu seed-new-services.ts) — sigur de rulat de mai multe ori.
 *
 * Rulează, pe server, din folderul proiectului:
 *
 *   npx tsx src/seed/fix-services-text.ts
 */
import "dotenv/config";
import { getPayload } from "payload";
import config from "@payload-config";
import { services } from "../content/services";

async function run() {
  const payload = await getPayload({ config });

  let fixed = 0;
  for (const s of services) {
    const existing = await payload.find({ collection: "services", where: { slug: { equals: s.id } }, limit: 1 });
    const doc = existing.docs[0] as any;

    if (!doc) {
      console.log(`  ! "${s.title}" (slug: ${s.id}) nu există în baza de date — sar peste.`);
      continue;
    }

    if (doc.title && doc.summary && doc.description) {
      console.log(`  - "${doc.title}" are deja text — sar peste.`);
      continue;
    }

    await payload.update({
      collection: "services",
      id: doc.id,
      data: {
        title: s.title,
        summary: s.summary,
        description: s.description,
      },
    });
    fixed++;
    console.log(`  ✓ Reparat: ${s.title}`);
  }

  console.log(fixed ? `Am reparat ${fixed} servicii.` : "Nimic de reparat — toate serviciile au deja text.");
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
