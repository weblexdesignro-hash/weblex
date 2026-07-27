import type { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
  slug: "services",
  admin: { useAsTitle: "title", group: "Continut" },
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "icon", type: "select", options: ["globe", "cart", "search", "megaphone", "wrench", "camera", "refresh"] },
    { name: "summary", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "pricingTiers",
      type: "array",
      labels: { singular: "Pachet", plural: "Pachete" },
      fields: [
        { name: "name", type: "text", required: true },
        { name: "price", type: "text", required: true },
        { name: "oldPrice", type: "text" },
        { name: "note", type: "text" },
        { name: "highlighted", type: "checkbox", defaultValue: false },
        { name: "features", type: "array", fields: [{ name: "label", type: "text", required: true }] },
      ],
    },
    { name: "seoTitle", type: "text", admin: { description: "Meta title (SEO)" } },
    { name: "seoDescription", type: "textarea", admin: { description: "Meta description (SEO)" } },
  ],
};
