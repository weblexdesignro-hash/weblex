import type { GlobalConfig } from "payload";
import { AIGenerateTextField } from "../components/admin/afterInput";

/**
 * Textele fixe de pe paginile principale ale site-ului (Home, Despre, Portofoliu,
 * Contact, Blog) — cele care până acum erau scrise direct în cod. Modificarea lor
 * aici apare live pe site, fără redeploy. Câmpurile sunt bilingve (RO/EN).
 */
export const PageTexts: GlobalConfig = {
  slug: "page-texts",
  admin: { group: "Pagini", description: "Textele fixe de pe Home, Despre, Portofoliu, Contact și Blog." },
  access: { read: () => true },
  fields: [
    {
      name: "hero",
      type: "group",
      label: "Home — Hero (secțiunea de sus)",
      fields: [
        {
          name: "heading",
          type: "text",
          localized: true,
          admin: {
            description: "Titlul mare. Ultimul cuvânt/grup poate fi evidențiat separat mai jos.",
            ...AIGenerateTextField("titlul principal (hero) al paginii de start").admin,
          },
        },
        {
          name: "headingHighlight",
          type: "text",
          localized: true,
          admin: { description: 'Partea evidențiată cu culoare, ex: "clienti reali."' },
        },
        {
          name: "subheading",
          type: "textarea",
          localized: true,
          ...AIGenerateTextField("subtitlul de sub titlul principal, de pe pagina de start"),
        },
        { name: "ctaPrimaryLabel", type: "text", localized: true, defaultValue: "Cere ofertă" },
        { name: "ctaSecondaryLabel", type: "text", localized: true, defaultValue: "Vezi portofoliul" },
      ],
    },
    {
      name: "home",
      type: "group",
      label: "Home — restul secțiunilor",
      fields: [
        { name: "servicesHeading", type: "text", localized: true, defaultValue: "Tot ce ai nevoie pentru o prezență online solidă" },
        { name: "portfolioHeading", type: "text", localized: true, defaultValue: "Proiecte reprezentative" },
        {
          name: "benefitsHeading",
          type: "text",
          localized: true,
          defaultValue: "Beneficii clare, fără promisiuni goale",
        },
        {
          name: "benefitsText",
          type: "textarea",
          localized: true,
          defaultValue: "Fiecare proiect pleacă de la un obiectiv de business concret, nu doar de la un design frumos.",
          ...AIGenerateTextField("textul introductiv al secțiunii de beneficii de pe Home"),
        },
        {
          name: "benefits",
          type: "array",
          labels: { singular: "Beneficiu", plural: "Beneficii" },
          fields: [
            { name: "title", type: "text", required: true, localized: true },
            { name: "text", type: "text", localized: true },
          ],
        },
        { name: "processHeading", type: "text", localized: true, defaultValue: "Cum lucrăm împreună" },
        { name: "pricingHeading", type: "text", localized: true, defaultValue: "Site web de prezentare" },
      ],
    },
    {
      name: "despre",
      type: "group",
      label: "Despre noi",
      fields: [
        {
          name: "heading",
          type: "text",
          localized: true,
          admin: {
            description: 'Poți folosi {since} — se înlocuiește automat cu anul înființării.',
            ...AIGenerateTextField("titlul paginii Despre noi").admin,
          },
        },
        {
          name: "paragraph1",
          type: "textarea",
          localized: true,
          admin: {
            description: "Poți folosi {since} și {experienceYears}.",
            ...AIGenerateTextField("primul paragraf al paginii Despre noi").admin,
          },
        },
        { name: "paragraph2", type: "textarea", localized: true, ...AIGenerateTextField("al doilea paragraf al paginii Despre noi") },
        {
          name: "paragraph3",
          type: "textarea",
          localized: true,
          admin: {
            description: "Poți folosi {projectsDelivered}.",
            ...AIGenerateTextField("al treilea paragraf al paginii Despre noi").admin,
          },
        },
      ],
    },
    {
      name: "portofoliu",
      type: "group",
      label: "Portofoliu",
      fields: [
        { name: "heading", type: "text", localized: true, defaultValue: "Proiecte livrate clienților noștri" },
        {
          name: "subheading",
          type: "textarea",
          localized: true,
          defaultValue: "Peste 400 de proiecte finalizate — site-uri de prezentare, magazine online și redesign-uri complete.",
        },
      ],
    },
    {
      name: "contact",
      type: "group",
      label: "Contact",
      fields: [
        { name: "heading", type: "text", localized: true, defaultValue: "Hai să vorbim despre proiectul tău" },
        {
          name: "subheading",
          type: "textarea",
          localized: true,
          defaultValue: "Completează formularul și îți răspundem cu o ofertă personalizată în maximum o zi lucrătoare.",
        },
      ],
    },
    {
      name: "blog",
      type: "group",
      label: "Blog",
      fields: [
        { name: "heading", type: "text", localized: true, defaultValue: "Blog" },
        { name: "emptyMessage", type: "text", localized: true, defaultValue: "Niciun articol publicat încă." },
      ],
    },
    {
      name: "stats",
      type: "group",
      label: "Statistici (folosite pe Home și Despre)",
      fields: [
        { name: "since", type: "number", defaultValue: 2017, admin: { description: "Anul înființării." } },
        { name: "experienceYears", type: "number", defaultValue: 10 },
        { name: "projectsDelivered", type: "number", defaultValue: 400 },
      ],
    },
  ],
};
