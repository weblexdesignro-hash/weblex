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
import { getPayload } from "payload";
import config from "@payload-config";
import { blogArticlesRound1, type BlogArticle, type ContentBlock } from "../content/blog-articles-round1";

// Pe masura ce scriem rundele urmatoare (2-5), le adaugam aici — scriptul le
// populeaza pe toate intr-o singura rulare.
const ROUND_FILES: BlogArticle[][] = [blogArticlesRound1];

function textNode(text: string) {
  return { type: "text", detail: 0, format: 0, mode: "normal", style: "", text, version: 1 };
}

function paragraphNode(text: string) {
  return {
    type: "paragraph",
    children: [textNode(text)],
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
    children: [textNode(text)],
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
      children: [textNode(item)],
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

// Transforma blocurile simple (h2/p/ul) scrise in fisierele de continut intr-un
// document Lexical valid, in formatul pe care il asteapta campul richText din
// Payload (@payloadcms/richtext-lexical).
function blocksToLexical(blocks: ContentBlock[]) {
  const children = blocks.map((b) => {
    if (b.type === "h2") return headingNode(b.text, "h2");
    if (b.type === "ul") return listNode(b.items);
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

  for (const article of articles) {
    const content = blocksToLexical(article.blocks);
    const existing = await payload.find({
      collection: "blog-posts",
      where: { slug: { equals: article.slug } },
      limit: 1,
    });

    const data = {
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt,
      content,
      seoTitle: article.seoTitle,
      seoDescription: article.seoDescription,
      publishedAt: article.publishedAt,
      author: "Weblex Design",
    };

    if (existing.docs.length) {
      await payload.update({ collection: "blog-posts", id: existing.docs[0].id, data });
      console.log(`  ~ actualizat: ${article.title}`);
    } else {
      await payload.create({ collection: "blog-posts", data });
      console.log(`  + creat: ${article.title}`);
    }
  }

  console.log("Gata. Nota: niciun articol nu are inca imagine de copertă — adaugă-le manual din admin (Blog), sau folosește butonul de generare AI de acolo.");
  process.exit(0);
}

run().catch((err) => {
  console.error("Eroare la seed-ul articolelor de blog:", err);
  process.exit(1);
});
