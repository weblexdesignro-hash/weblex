import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import crypto from "crypto";
import { sendContractLink, sendSignedConfirmation } from "@/lib/email";

// Modulul de contracte cu semnătură electronică.
// Flux: 1) creezi contractul aici, în admin, cu textul final (poți edita oricând cât
// timp e "ciobuit" / draft). 2) Schimbi statusul pe "trimis" -> se generează automat
// un link unic (publicToken) și se trimite pe emailul clientului. 3) Clientul deschide
// linkul public /contract/[token], citește textul și semnează cu mouse-ul/degetul.
// 4) La semnare, statusul devine automat "semnat", se salvează semnătura (imagine +
// nume tastat + IP + oră), iar tu și clientul primiți o confirmare pe email.
export const Contracts: CollectionConfig = {
  slug: "contracts",
  admin: {
    useAsTitle: "projectTitle",
    group: "Mesaje",
    defaultColumns: ["projectTitle", "clientName", "status", "updatedAt"],
  },
  access: {
    read: ({ req: { user } }) => Boolean(user),
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    { name: "projectTitle", type: "text", required: true, admin: { description: 'Ex: "Contract site web — Restaurant X"' } },
    { name: "clientName", type: "text", required: true },
    { name: "clientEmail", type: "email", required: true },
    { name: "relatedPackage", type: "text", admin: { description: "Pachetul/oferta la care se referă contractul (opțional)." } },
    {
      name: "contractBody",
      type: "richText",
      editor: lexicalEditor(),
      required: true,
      admin: { description: "Textul integral al contractului — editează-l aici direct, ca într-un Word." },
    },
    {
      name: "status",
      type: "select",
      defaultValue: "draft",
      options: [
        { label: "Ciornă (nevăzut de client)", value: "draft" },
        { label: "Trimis spre semnare", value: "sent" },
        { label: "Semnat", value: "signed" },
      ],
    },
    {
      name: "publicToken",
      type: "text",
      unique: true,
      admin: { readOnly: true, description: "Generat automat — face parte din linkul public de semnare." },
    },
    { name: "sentAt", type: "date", admin: { readOnly: true } },
    {
      name: "signature",
      type: "group",
      admin: { description: "Completat automat când clientul semnează." },
      fields: [
        { name: "dataUrl", type: "textarea", admin: { readOnly: true, description: "Imaginea semnăturii (desenată), în format base64." } },
        { name: "signedByName", type: "text", admin: { readOnly: true } },
        { name: "signedAt", type: "date", admin: { readOnly: true } },
        { name: "signerIp", type: "text", admin: { readOnly: true } },
      ],
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (!data.publicToken) {
          data.publicToken = crypto.randomBytes(20).toString("hex");
        }
        return data;
      },
    ],
    afterChange: [
      async ({ doc, previousDoc, operation }) => {
        const justSent = doc.status === "sent" && previousDoc?.status !== "sent";
        const justSigned = doc.status === "signed" && previousDoc?.status !== "signed";

        if (operation === "update" && justSent) {
          await sendContractLink(doc).catch((err) => console.error("Nu s-a putut trimite linkul de contract:", err));
        }
        if (justSigned) {
          await sendSignedConfirmation(doc).catch((err) => console.error("Nu s-a putut trimite confirmarea de semnare:", err));
        }
      },
    ],
  },
};
