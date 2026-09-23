import type { CollectionConfig } from "payload";

// Biblioteca de imagini — logo, poze de portofoliu, poze testimoniale etc.
// Din admin poți face upload direct (drag & drop), Payload generează automat
// variante redimensionate (thumbnail, card, tablet) pentru încărcare rapidă.
export const Media: CollectionConfig = {
  slug: "media",
  access: { read: () => true },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      admin: { description: "Text alternativ (accesibilitate + SEO) — descrie ce se vede în imagine." },
    },
  ],
  upload: {
    imageSizes: [
      { name: "thumbnail", width: 400, height: 300, position: "centre" },
      { name: "card", width: 800, height: 600, position: "centre" },
      { name: "hero", width: 1600, height: 900, position: "centre" },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"],
  },
};
