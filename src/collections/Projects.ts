import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: { useAsTitle: "title", group: "Portofoliu", defaultColumns: ["title", "category", "featured"] },
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
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      admin: { description: "Recomandat — dacă lipsește, se afișează un fundal gradient placeholder pe site." },
    },
    { name: "gallery", type: "upload", relationTo: "media", hasMany: true },
    { name: "liveUrl", type: "text", admin: { description: "Link către site-ul live al clientului (opțional)." } },
    { name: "featured", type: "checkbox", defaultValue: false, admin: { description: "Apare și pe pagina Home, în secțiunea „Proiecte reprezentative”." } },
    { name: "order", type: "number", defaultValue: 0 },
    { name: "seoTitle", type: "text" },
    { name: "seoDescription", type: "textarea" },
  ],
};
