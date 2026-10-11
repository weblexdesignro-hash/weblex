/**
 * REPARĂ o pierdere de date mai veche: migrarea care a făcut localizabile (RO/EN)
 * câmpurile din collection-ul "services" a convertit coloanele vechi (nelocalizate) în
 * tabele noi de traduceri — dar fără să copieze valorile deja existente. Afectează:
 *   - services: title, summary, description
 *   - services_pricing_tiers: name, note
 *   - services_pricing_tiers_features: label
 * Cele 7 servicii originale (create înainte de acea migrare) au rămas astfel cu text gol
 * la toate aceste câmpuri, deși documentele existau (inclusiv pachetele de preț pentru
 * "Site web de prezentare" și "Magazin online" — prețul în sine nu e localizat, deci se
 * vedea, dar numele pachetului, nota și fiecare bifă din listă erau goale).
 *
 * Acest script verifică fiecare serviciu din src/content/services.ts și fiecare pachet din
 * src/content/pricing.ts (sursele de adevăr) și completează orice text lipsă găsit în baza
 * de date. Nu atinge nimic care are deja text — sigur de rulat de mai multe ori.
 *
 * Rulează, pe server, din folderul proiectului:
 *
 *   npx tsx src/seed/fix-services-text.ts
 */
import "dotenv/config";
import { getPayload } from "payload";
import config from "@payload-config";
import { services } from "../content/services";
import { websitePricing, shopPricing } from "../content/pricing";

function pricingTiersFor(slug: string) {
  if (slug === "site-web") return websitePricing;
  if (slug === "magazin-online") return shopPricing;
  return null;
}

function pricingTiersBroken(doc: any): boolean {
  const tiers = doc.pricingTiers || [];
  if (!tiers.length) return false; // nimic de reparat daca nu exista deloc pachete
  return tiers.some((t: any) => !t.name || !t.note || (t.features || []).some((f: any) => !f.label));
}

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

    const data: any = {};
    let needsFix = false;

    if (!doc.title || !doc.summary || !doc.description) {
      data.title = s.title;
      data.summary = s.summary;
      data.description = s.description;
      needsFix = true;
    }

    const sourceTiers = pricingTiersFor(s.id);
    if (sourceTiers && pricingTiersBroken(doc)) {
      data.pricingTiers = sourceTiers.map((t) => ({
        name: t.name,
        price: t.price,
        oldPrice: t.oldPrice,
        note: t.note,
        highlighted: Boolean(t.highlighted),
        features: t.features.map((label) => ({ label })),
      }));
      needsFix = true;
    }

    if (!needsFix) {
      console.log(`  - "${doc.title}" are deja tot textul (inclusiv preturile) — sar peste.`);
      continue;
    }

    await payload.update({ collection: "services", id: doc.id, data });
    fixed++;
    console.log(`  ✓ Reparat: ${doc.title || s.title}${data.pricingTiers ? " (inclusiv pachetele de pret)" : ""}`);
  }

  console.log(fixed ? `Am reparat ${fixed} servicii.` : "Nimic de reparat — totul are deja text.");
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
