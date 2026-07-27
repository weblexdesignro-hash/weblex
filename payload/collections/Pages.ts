import type { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: { useAsTitle: "title", group: "Continut" },
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "heroTitle", type: "text" },
    { name: "heroSubtitle", type: "textarea" },
    {
      name: "blocks",
      type: "blocks",
      blocks: [
        {
          slug: "richTextBlock",
          fields: [{ name: "content", type: "richText" }],
        },
        {
          slug: "statsBlock",
          fields: [
            {
              name: "stats",
              type: "array",
              fields: [
                { name: "value", type: "text" },
                { name: "label", type: "text" },
              ],
            },
          ],
        },
      ],
    },
    { name: "seoTitle", type: "text" },
    { name: "seoDescription", type: "textarea" },
    { name: "seoImage", type: "upload", relationTo: "media" },
  ],
};
