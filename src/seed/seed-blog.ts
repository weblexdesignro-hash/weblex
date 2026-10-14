/**
 * Populeaza (sau actualizeaza) articolele de blog din planul editorial
 * (src/content/blog-plan.ts) folosind continutul scris in
 * src/content/blog-articles-round1.ts (si rundele urmatoare, pe masura ce
 * se adauga fisiere noi — vezi ROUND_FILES mai jos).
 *
 * Sigur de rulat de mai multe ori: daca un articol cu acelasi slug exista deja,
 * ii actualizeaza continutul in loc sa creeze un duplicat.
 *
 * Ruleaza, pe server, din folderul proiectului:
 *
 *   npx tsx src/seed/seed-blog.ts
 */
import "dotenv/config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { getPayload } from "payload";
import config from "@payload-config";
import { blogArticlesRound1, type BlogArticle, type ContentBlock } from "../content/blog-articles-round1";
import { blogArticlesRound2 } from "../content/blog-articles-round2";
import { blogArticlesFunding } from "../content/blog-articles-funding";

// Pe masura ce scriem rundele urmatoare (3-5), le adaugam aici — scriptul le
// populeaza pe toate intr-o singura rulare. blogArticlesFunding e seria GEO
// dedicata fondurilor nerambursabile (vezi blog-articles-funding.ts) —
// Articolul 1 indeplineste item-ul #23 din blog-plan.ts.
const ROUND_FILES: BlogArticle[][] = [blogArticlesRound1, blogArticlesRound2, blogArticlesFunding];

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Imagini de coperta generate pentru articole, denumite exact ca slug-ul
// articolului: src/seed/blog-images/<slug>.webp
const imagesDir = path.join(__dirname, "blog-images");

function textNode(text: string, bold = false) {
  // format: 1 = bold, in formatul bitmask Lexical standard.
  return { type: "text", detail: 0, format: bold ? 1 : 0, mode: "normal", style: "", text, version: 1 };
}

// Transforma markdown simplu "**bold**" in mai multe noduri de text (normal +
// bold), ca sa putem scrie continutul articolelor ca text simplu si sa obtinem
// totusi cuvinte/sintagme evidentiate in Lexical, fara JSON scris de mana.
function inlineNodes(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  const nodes = [];
  for (let i = 0; i < parts.length; i++) {
    if (parts[i] === "") continue;
    // Dupa split cu grup captat, indicii impari sunt mereu continutul dintre **...**.
    nodes.push(textNode(parts[i], i % 2 === 1));
  }
  return nodes.length ? nodes : [textNode(text)];
}

function paragraphNode(text: string) {
  return {
    type: "paragraph",
    children: inlineNodes(text),
    direction: "ltr",
    format: "",
    indent: 0,
    version: 1,
  };
}

function quoteNode(text: string) {
  return {
    type: "quote",
    children: inlineNodes(text),
    direction: "ltr",
    format: "",
    indent: 0,
    version: 1,
  };
}

function headingNode(text: string, tag: "h2" | "h3" = "h2") {
  return {
    type: "heading",
    tag,
    children: inlineNodes(text),
    direction: "ltr",
    format: "",
    indent: 0,
    version: 1,
  };
}

function listNode(items: string[]) {
  return {
    type: "list",
    tag: "ul",
    listType: "bullet",
    start: 1,
    children: items.map((item, i) => ({
      type: "listitem",
      value: i + 1,
      children: inlineNodes(item),
      direction: "ltr",
      format: "",
      indent: 0,
      version: 1,
    })),
    direction: "ltr",
    format: "",
    indent: 0,
    version: 1,
  };
}

// Transforma blocurile simple (h2/h3/p/ul/quote) scrise in fisierele de continut
// intr-un document Lexical valid, in formatul pe care il asteapta campul richText
// din Payload (@payloadcms/richtext-lexical).
function blocksToLexical(blocks: ContentBlock[]) {
  const children = blocks.map((b) => {
    if (b.type === "h2") return headingNode(b.text, "h2");
    if (b.type === "h3") return headingNode(b.text, "h3");
    if (b.type === "ul") return listNode(b.items);
    if (b.type === "quote") return quoteNode(b.text);
    return paragraphNode(b.text);
  });
  return {
    root: {
      type: "root",
      children,
      direction: "ltr" as const,
      format: "" as const,
      indent: 0,
      version: 1,
    },
  };
}

async function run() {
  const payload = await getPayload({ config });
  const articles = ROUND_FILES.flat();

  console.log(`Populez/actualizez ${articles.length} articole de blog...`);

  let withImages = 0;

  for (const article of articles) {
    const content = blocksToLexical(article.blocks);
    const existing = await payload.find({
      collection: "blog-posts",
      where: { slug: { equals: article.slug } },
      limit: 1,
    });

    // Daca exista o imagine generata pentru acest articol (src/seed/blog-images/<slug>.webp),
    // o incarcam (sau o refolosim, daca a mai fost incarcata o data) si o atasam ca coverImage.
    let coverImageId: number | undefined;
    const imagePath = path.join(imagesDir, `${article.slug}.webp`);
    if (fs.existsSync(imagePath)) {
      const imgData = fs.readFileSync(imagePath);
      const filename = `${article.slug}.webp`;
      const existingMedia = await payload.find({
        collection: "media",
        where: { filename: { equals: filename } },
        limit: 10,
      });
      if (existingMedia.docs.length) {
        coverImageId = existingMedia.docs[0].id as number;
      } else {
        const media = await payload.create({
          collection: "media",
          data: { alt: article.title },
          file: { data: imgData, mimetype: "image/webp", name: filename, size: imgData.length },
        });
        coverImageId = media.id as number;
      }
      withImages++;
    }

    const data = {
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt,
      content,
      seoTitle: article.seoTitle,
      seoDescription: article.seoDescription,
      publishedAt: article.publishedAt,
      author: "Weblex Design",
      ...(article.faq?.length ? { faq: article.faq } : {}),
      ...(coverImageId ? { coverImage: coverImageId } : {}),
    };

    if (existing.docs.length) {
      await payload.update({ collection: "blog-posts", id: existing.docs[0].id, data });
      console.log(`  ~ actualizat: ${article.title}${coverImageId ? " (cu imagine)" : ""}`);
    } else {
      await payload.create({ collection: "blog-posts", data });
      console.log(`  + creat: ${article.title}${coverImageId ? " (cu imagine)" : ""}`);
    }
  }

  console.log(`Gata. ${withImages}/${articles.length} articole au imagine de copertă.`);
  if (withImages < articles.length) {
    console.log("Articolele fără imagine o poți adăuga manual din admin (Blog), sau cu butonul de generare AI de acolo.");
  }
  process.exit(0);
}

run().catch((err) => {
  console.error("Eroare la seed-ul articolelor de blog:", err);
  process.exit(1);
});
