import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: { useAsTitle: "title", group: "Portofoliu" },
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    {
      name: "category",
      type: "select",
      required: true,
      options: ["Site de prezentare", "Magazin online", "Redesign"],
    },
    { name: "summary", type: "textarea" },
    { name: "coverImage", type: "upload", relationTo: "media", required: true },
    { name: "gallery", type: "upload", relationTo: "media", hasMany: true },
    { name: "liveUrl", type: "text" },
    { name: "featured", type: "checkbox", defaultValue: false },
    { name: "seoTitle", type: "text" },
    { name: "seoDescription", type: "textarea" },
  ],
};
