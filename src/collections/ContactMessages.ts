import type { CollectionConfig } from "payload";
import { sendContactNotification } from "@/lib/email";

export const ContactMessages: CollectionConfig = {
  slug: "contact-messages",
  admin: {
    useAsTitle: "name",
    group: "Mesaje",
    defaultColumns: ["name", "email", "selectedPackage", "status", "createdAt"],
  },
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
    {
      name: "selectedPackage",
      type: "text",
      admin: { description: "Pachetul de preț ales de client în formular (ex: „Business Standard — €479”)." },
    },
    { name: "message", type: "textarea", required: true },
    { name: "gdpr", type: "checkbox", required: true },
    {
      name: "status",
      type: "select",
      defaultValue: "nou",
      options: ["nou", "citit", "rezolvat"],
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        if (operation === "create") {
          await sendContactNotification(doc).catch((err) => {
            console.error("Nu s-a putut trimite notificarea de mesaj nou:", err);
          });
        }
      },
    ],
  },
};
