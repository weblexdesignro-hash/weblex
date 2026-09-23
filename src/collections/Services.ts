import type { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
  slug: "services",
  admin: { useAsTitle: "title", group: "Conținut", defaultColumns: ["title", "order", "updatedAt"] },
  access: { read: () => true },
  defaultSort: "order",
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true, admin: { description: "Folosit ca ancoră: /servicii#slug" } },
    { name: "order", type: "number", defaultValue: 0, admin: { description: "Ordinea de afișare (mai mic = mai sus)." } },
    {
      name: "icon",
      type: "select",
      options: ["globe", "cart", "search", "megaphone", "wrench", "camera", "refresh"],
      defaultValue: "globe",
    },
    { name: "summary", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "pricingTiers",
      type: "array",
      labels: { singular: "Pachet", plural: "Pachete" },
      admin: { description: "Pachetele afișate ca și carduri de preț pentru acest serviciu — clientul le poate alege din formularul de contact." },
      fields: [
        { name: "name", type: "text", required: true },
        { name: "price", type: "text", required: true, admin: { description: 'Ex: "€249"' } },
        { name: "oldPrice", type: "text" },
        { name: "note", type: "text" },
        { name: "highlighted", type: "checkbox", defaultValue: false, admin: { description: "Îl marchează ca „Cel mai popular”." } },
        { name: "features", type: "array", fields: [{ name: "label", type: "text", required: true }] },
      ],
    },
    { name: "seoTitle", type: "text", admin: { description: "Meta title (SEO)" } },
    { name: "seoDescription", type: "textarea", admin: { description: "Meta description (SEO)" } },
  ],
};
