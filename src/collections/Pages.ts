import type { CollectionConfig } from "payload";
import { AIGenerateTextField } from "../components/admin/afterInput";

/**
 * Pagini construite din blocuri — tip „page builder”. Fiecare bloc e o secțiune
 * (Hero, Text, Text+Imagine, Grilă de beneficii, Call-to-action, Galerie).
 * Poți adăuga oricâte blocuri, în orice ordine, și le tragi (drag) ca să le rearanjezi.
 * Conținutul e bilingv (Română / Engleză) — comuți limba din selectorul din admin.
 */
export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    group: "Pagini",
    defaultColumns: ["title", "slug", "updatedAt"],
    description:
      "Pagini noi, construite din blocuri (drag & drop) — apar la adresa /pagini/<slug-ul-tau>.",
  },
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true, localized: true },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: { description: "Partea din URL, ex: „despre-echipa” → site.ro/pagini/despre-echipa" },
    },
    {
      name: "layout",
      type: "blocks",
      localized: true,
      labels: { singular: "Bloc", plural: "Blocuri" },
      blocks: [
        {
          slug: "hero",
          labels: { singular: "Hero (secțiune principală)", plural: "Hero" },
          fields: [
            { name: "heading", type: "text", required: true, ...AIGenerateTextField("titlul secțiunii hero") },
            { name: "subheading", type: "textarea", ...AIGenerateTextField("subtitlul secțiunii hero") },
            { name: "image", type: "upload", relationTo: "media" },
            { name: "ctaLabel", type: "text", admin: { description: "Text buton (opțional)" } },
            { name: "ctaHref", type: "text", admin: { description: "Link buton (opțional)" } },
          ],
        },
        {
          slug: "text",
          labels: { singular: "Bloc de text", plural: "Text" },
          fields: [
            { name: "heading", type: "text" },
            { name: "richText", type: "richText", ...AIGenerateTextField("conținutul blocului de text") },
          ],
        },
        {
          slug: "imageText",
          labels: { singular: "Text + Imagine", plural: "Text + Imagine" },
          fields: [
            { name: "heading", type: "text" },
            { name: "text", type: "textarea", ...AIGenerateTextField("textul acestui bloc text+imagine") },
            { name: "image", type: "upload", relationTo: "media", required: true },
            {
              name: "imagePosition",
              type: "select",
              defaultValue: "right",
              options: [
                { label: "Imagine dreapta", value: "right" },
                { label: "Imagine stânga", value: "left" },
              ],
            },
          ],
        },
        {
          slug: "featureGrid",
          labels: { singular: "Grilă de beneficii", plural: "Grile de beneficii" },
          fields: [
            { name: "heading", type: "text" },
            {
              name: "items",
              type: "array",
              minRows: 1,
              fields: [
                { name: "icon", type: "text", admin: { description: "Nume icon (ex: rocket, shield, star)" } },
                { name: "title", type: "text", required: true },
                { name: "text", type: "textarea" },
              ],
            },
          ],
        },
        {
          slug: "cta",
          labels: { singular: "Call-to-action", plural: "Call-to-action" },
          fields: [
            { name: "heading", type: "text", required: true },
            { name: "text", type: "textarea" },
            { name: "buttonLabel", type: "text", required: true },
            { name: "buttonHref", type: "text", required: true },
          ],
        },
        {
          slug: "gallery",
          labels: { singular: "Galerie foto", plural: "Galerii foto" },
          fields: [{ name: "images", type: "upload", relationTo: "media", hasMany: true, required: true }],
        },
      ],
    },
    { name: "seoTitle", type: "text", localized: true, ...AIGenerateTextField("titlul SEO (max 60 caractere)") },
    {
      name: "seoDescription",
      type: "textarea",
      localized: true,
      ...AIGenerateTextField("descrierea SEO (max 160 caractere)"),
    },
  ],
};
