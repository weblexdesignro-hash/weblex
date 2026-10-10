/**
 * Înlocuiește proiectele placeholder din Portofoliu cu lista reală de site-uri
 * livrate de echipa Weblex Design (din src/content/projects.ts), și le atașează
 * o imagine de copertă — un screenshot al fiecărui site live, din
 * src/seed/portfolio-images/<slug>.jpg.
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
 * doar conținutul.
 */
import "dotenv/config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { getPayload } from "payload";
import config from "@payload-config";
import { projects } from "../content/projects";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "portfolio-images");

async function run() {
  const payload = await getPayload({ config });

  const existingProjects = await payload.find({ collection: "projects", limit: 200 });
  if (existingProjects.docs.length) {
    console.log(`Șterg ${existingProjects.docs.length} proiecte existente (placeholder)...`);
    for (const doc of existingProjects.docs) {
      await payload.delete({ collection: "projects", id: doc.id });
    }
  }

  console.log(`Populez Projects cu ${projects.length} proiecte reale din portofoliu...`);
  for (const [i, p] of projects.entries()) {
    let coverImageId: number | undefined;

    const imagePath = path.join(imagesDir, `${p.slug}.jpg`);
    if (fs.existsSync(imagePath)) {
      const data = fs.readFileSync(imagePath);
      // Evităm duplicarea imaginii dacă scriptul rulează de mai multe ori.
      const existingMedia = await payload.find({
        collection: "media",
        where: { filename: { equals: `${p.slug}.jpg` } },
        limit: 1,
      });
      if (existingMedia.docs.length) {
        coverImageId = existingMedia.docs[0].id;
      } else {
        const media = await payload.create({
          collection: "media",
          data: { alt: `Captură site ${p.title}` },
          file: { data, mimetype: "image/jpeg", name: `${p.slug}.jpg`, size: data.length },
        });
        coverImageId = media.id;
      }
    }

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
        coverImage: coverImageId,
        seoTitle: `${p.title} | Portofoliu Weblex Design`,
        seoDescription: p.summary.slice(0, 160),
      },
    });
    console.log(`  ✓ ${p.title}${coverImageId ? " (cu imagine)" : " (FĂRĂ imagine — adaugă manual din admin)"}`);
  }

  console.log("Portofoliu populat cu succes.");
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
