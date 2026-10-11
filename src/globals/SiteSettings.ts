import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  admin: { group: "Setări" },
  access: { read: () => true },
  fields: [
    {
      name: "allowIndexing",
      type: "checkbox",
      defaultValue: false,
      label: "Permite indexarea în Google (robots: index, follow)",
      admin: {
        description:
          "Lasă DEZACTIVAT cât timp site-ul e pe domeniul de test (holy-glade.1wp.site) — ca Google să nu îl indexeze prematur. Activează abia după ce site-ul e live pe weblexdesign.ro.",
      },
    },
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
