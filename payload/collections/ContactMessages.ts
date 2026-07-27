import type { CollectionConfig } from "payload";

export const ContactMessages: CollectionConfig = {
  slug: "contact-messages",
  admin: { useAsTitle: "name", group: "Mesaje", defaultColumns: ["name", "email", "status", "createdAt"] },
  access: {
    read: ({ req: { user } }) => Boolean(user),
    create: () => true,
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "company", type: "text" },
    { name: "email", type: "email", required: true },
    { name: "phone", type: "text", required: true },
    { name: "services", type: "array", fields: [{ name: "label", type: "text" }] },
    { name: "message", type: "textarea", required: true },
    { name: "gdpr", type: "checkbox", required: true },
    {
      name: "status",
      type: "select",
      defaultValue: "nou",
      options: ["nou", "citit", "rezolvat"],
    },
  ],
};
