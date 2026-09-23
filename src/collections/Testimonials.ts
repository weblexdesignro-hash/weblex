import type { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  admin: { useAsTitle: "name", group: "Conținut" },
  access: { read: () => true },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "role", type: "text" },
    { name: "quote", type: "textarea", required: true },
    { name: "rating", type: "number", min: 1, max: 5, defaultValue: 5 },
    { name: "photo", type: "upload", relationTo: "media" },
    {
      name: "published",
      type: "checkbox",
      defaultValue: false,
      admin: { description: "Doar testimonialele bifate apar pe site." },
    },
  ],
};
