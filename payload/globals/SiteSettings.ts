import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  admin: { group: "Setari" },
  access: { read: () => true },
  fields: [
    { name: "logo", type: "upload", relationTo: "media" },
    { name: "phone", type: "text" },
    { name: "email", type: "email" },
    { name: "address", type: "text" },
    {
      name: "social",
      type: "group",
      fields: [
        { name: "facebook", type: "text" },
        { name: "instagram", type: "text" },
        { name: "twitter", type: "text" },
      ],
    },
    {
      name: "seoDefaults",
      type: "group",
      fields: [
        { name: "title", type: "text" },
        { name: "description", type: "textarea" },
        { name: "ogImage", type: "upload", relationTo: "media" },
      ],
    },
  ],
};
