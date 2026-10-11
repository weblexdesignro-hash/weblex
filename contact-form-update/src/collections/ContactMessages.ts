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
    { name: "name", type: "text", required: true, label: "Nume persoană de contact" },
    {
      name: "cui",
      type: "text",
      required: true,
      label: "CUI",
      admin: { description: "Codul Unic de Inregistrare al firmei. Completat de client, cu autocompletare din ANAF." },
    },
    { name: "company", type: "text", required: true, label: "Denumire firmă" },
    { name: "email", type: "email", required: true },
    { name: "phone", type: "text", required: true },
    {
      name: "serviceType",
      type: "select",
      required: true,
      label: "Serviciu solicitat",
      options: [
        { label: "Site web de prezentare", value: "site-web" },
        { label: "Magazin online", value: "magazin-online" },
        { label: "Redesign site web", value: "redesign" },
        { label: "CRM", value: "crm" },
        { label: "Aplicație web Custom", value: "aplicatie-custom" },
        { label: "Mentenanță", value: "mentenanta" },
        { label: "SEO on-page", value: "seo" },
        { label: "Alt serviciu", value: "altul" },
      ],
    },
    {
      name: "selectedPackage",
      type: "text",
      label: "Pachet ales",
      admin: { description: "Pachetul de preț ales de client în formular (ex: „Business Standard — €479”), doar pentru site web/magazin online." },
    },
    {
      name: "siteUrl",
      type: "text",
      label: "Link site existent",
      admin: { description: "Link-ul site-ului vechi/existent, pentru redesign, mentenanță sau audit SEO." },
    },
    { name: "message", type: "textarea", label: "Detalii despre proiect" },
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
