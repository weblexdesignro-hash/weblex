/**
 * Populează valorile în limba engleză (locale "en") pentru câmpurile deja bilingve
 * din Payload (localized: true) — PageTexts (hero + home, plus despre/portofoliu/
 * contact/blog ca să fie pregătite pentru runda următoare), Services (titlu/rezumat/
 * descriere + pachetele de preț ale serviciului "site-web"), Testimonials (quote/role)
 * și Projects (summary), pentru conținutul afișat pe homepage-ul în engleză (/en).
 *
 * Nu modifică structura niciunei colecții și nu șterge/schimbă valorile românești —
 * scrie DOAR varianta "en" a câmpurilor localizate, prin `payload.update(...,
 * { locale: "en" })` / `payload.updateGlobal(..., { locale: "en" })`. Sigur de rulat
 * de mai multe ori (suprascrie aceleași valori engleze, nu creează duplicate).
 *
 * Rulează, pe server, din folderul proiectului:
 *
 *   npx tsx src/seed/seed-en-content.ts
 */
import "dotenv/config";
import { getPayload } from "payload";
import config from "@payload-config";
import { websitePricing, shopPricing } from "../content/pricing";

// ---------------------------------------------------------------------------
// PageTexts (global) — hero + home sunt obligatorii pentru homepage; celelalte
// grupuri sunt incluse acum, la cost marginal mic, pentru runda viitoare
// (Servicii / Portofoliu / Despre / Contact / FAQ).
// ---------------------------------------------------------------------------
const pageTextsEn = {
  hero: {
    heading: "Websites and online stores that bring",
    headingHighlight: "real customers.",
    subheading:
      "We design and build fast, modern, conversion-optimized online presences — from the first brief to ongoing maintenance.",
    ctaPrimaryLabel: "Get a quote",
    ctaSecondaryLabel: "See our portfolio",
  },
  home: {
    servicesHeading: "Everything you need for a solid online presence",
    portfolioHeading: "Featured projects",
    benefitsHeading: "Clear benefits, no empty promises",
    benefitsText: "Every project starts from a concrete business goal, not just a nice design.",
    benefits: [
      { title: "Fast delivery", text: "Clear deadlines, agreed from the first conversation." },
      { title: "Admin panel included", text: "Manage your own content, no developer needed." },
      { title: "On-page SEO included", text: "Not a separate add-on — it's part of the delivery." },
      { title: "Ongoing maintenance", text: "We stay by your side after launch too." },
    ],
    processHeading: "How we work together",
    pricingHeading: "Business website",
  },
  despre: {
    heading: "Since {since}, we've been building online presences that actually work",
    paragraph1:
      "Weblex Design is a web development team with over {experienceYears} years of experience, specialized in presentation websites and online stores built around clear business goals, not just aesthetics.",
    paragraph2:
      "We handle every project end to end, from the first brief to launch and ongoing maintenance — the same team sees it through, not a different freelancer at every step.",
    paragraph3:
      "Over the years we've delivered {projectsDelivered}+ projects for clients in Romania and abroad, across presentation websites, online stores and complete redesigns.",
  },
  portofoliu: {
    heading: "Projects delivered for our clients",
    subheading: "Over 400 completed projects — presentation websites, online stores and complete redesigns.",
  },
  contact: {
    heading: "Let's talk about your project",
    subheading: "Fill in the form and we'll get back to you with a tailored quote within one business day.",
  },
  blog: {
    heading: "Blog",
    emptyMessage: "No articles published yet.",
  },
};

// ---------------------------------------------------------------------------
// Services — titlu/rezumat/descriere traduse pentru toate cele 9 (nu doar cele 4
// afisate pe homepage), cost marginal mic si ajuta direct runda /en/servicii.
// Cheie = slug-ul din collection (vezi src/content/services.ts, campul `id`).
// ---------------------------------------------------------------------------
const servicesEn: Record<string, { title: string; summary: string; description: string }> = {
  "site-web": {
    title: "Business website",
    summary: "Responsive design, built from scratch around your brand.",
    description:
      "We build custom presentation websites tailored to each client's needs. Every site is 100% responsive — almost half of a site's traffic comes from mobile, so every page is designed mobile-first. The same project is carried from brief to launch by the same team.",
  },
  "magazin-online": {
    title: "Online store",
    summary: "A turnkey store with its own admin panel and unlimited products.",
    description:
      "An online store removes the cost of rent and extra staff, but results depend on how well it's optimized and promoted. We deliver stores with their own admin panel (no external management fees), unlimited products, cash-on-delivery and card payment, automatic shipping calculation, and a promotions and coupons system.",
  },
  seo: {
    title: "SEO",
    summary: "On-page optimization included in every project, not a separate add-on.",
    description:
      "Every website and online store we deliver includes on-page SEO optimization from day one: correct heading structure, fast loading speed, structured data, and Google Search Console and Analytics integration, so the site is ready for indexing from day one.",
  },
  promovare: {
    title: "Advertising (Google Ads & Facebook Ads)",
    summary: "Advertising campaigns for measurable traffic and sales.",
    description:
      "Alongside an optimized website, a consistent Google Ads or Facebook Ads program is essential to generate qualified traffic and turn visits into real orders.",
  },
  mentenanta: {
    title: "Maintenance",
    summary: "Websites and online stores kept secure and up to date.",
    description:
      "We recommend ongoing maintenance for both presentation websites and online stores: security updates, regular backups, and fast fixes whenever an issue comes up.",
  },
  redesign: {
    title: "Redesign & Rebranding",
    summary: "Your old website, rebuilt with a modern, fast design.",
    description:
      "We take over existing websites and rebuild them completely — design, structure and speed — while keeping the identity and valuable content already built up, just like in this project.",
  },
  foto: {
    title: "Product photography services",
    summary: "Professional product photos for your online store.",
    description:
      "For online stores, the quality of product photos matters just as much as the website itself. We offer professional photography services so your catalog looks flawless.",
  },
  "start-up-nation": {
    title: "Websites for Start-Up Nation and EU funding",
    summary: "Eligible website, delivered with the documents needed for reimbursement.",
    description:
      "We build presentation websites and online stores that are eligible as an expense under the Start-Up Nation program and other European funding schemes (the digitalization voucher, non-reimbursable funds). We deliver the project on time against your funding application deadline, together with the invoice, acceptance report and a screenshot of the working website, ready for your reimbursement file. The site already includes on-page SEO optimization, so a single project covers both the eligible expense and the real online presence your business needs.",
  },
  "digitalizare-aplicatii": {
    title: "Business digitalization and software applications",
    summary: "Custom web applications and digitalization solutions for your company's processes.",
    description:
      "We develop custom web applications and digitalization solutions for companies that want to replace spreadsheets and manual processes with their own system: admin panels, integrations with other systems, automations and internal workflows. Projects are built on the same platform used for our websites and online stores, so they can integrate directly with them.",
  },
};

// Pachetele de preț ale serviciului "site-web" (Business Basic/Standard/Pro) —
// traducem name/note/features.label; price/oldPrice/highlighted rămân neschimbate
// (nu sunt localizate în schema Payload).
const siteWebTiersEn = [
  {
    name: "Business Basic",
    note: "A single page, ideal for a business just starting out.",
    features: [
      "1 page, custom responsive design",
      "Contact form + location map",
      "Domain and hosting (setup assistance)",
      "Custom email, SSL certificate, GDPR, cookie banner",
      "Animated slider + Facebook/WhatsApp chat",
      "On-page SEO + speed optimization",
      "Google Business, Analytics & Search Console",
      "12-month warranty",
    ],
  },
  {
    name: "Business Standard",
    note: "1-20 pages, for businesses with several services to showcase.",
    features: ["Everything in Business Basic", "1-20 responsive pages", "Photo gallery"],
    // (3 features, matching websitePricing's Business Standard tier)
  },
  {
    name: "Business Pro",
    note: "1-50 pages, for complex, multi-location businesses.",
    features: ["Everything in Business Standard", "1-50 responsive pages"],
  },
];

// Pachetele serviciului "magazin-online" (Shop Basic/Standard/Pro) — traduse din
// aceleasi motive ca mai sus (self-heal RO + varianta EN), desi magazinul nu e
// afisat pe homepage — evitam sa blocam salvarea title/summary/description ale
// acestui serviciu din cauza unor pachete cu date incomplete pe "ro".
const shopTiersEn = [
  {
    name: "Shop Basic",
    note: "Import of 1-50 products.",
    features: [
      "Responsive design, animated slider, chat/WhatsApp",
      "Unlimited products (physical/digital), import of 1-50 products",
      "Checkout, shipping calculation by zone, cash-on-delivery and card payment",
      "Promotions, coupons and loyalty system",
      "Newsletter, sales reports",
      "On-page SEO, Google Business, Analytics & Search Console",
    ],
  },
  {
    name: "Shop Standard",
    note: "Import of 1-500 products.",
    features: ["Everything in Shop Basic", "Import of 1-500 products"],
  },
  {
    name: "Shop Pro",
    note: "Import of 1-1000 products.",
    features: ["Everything in Shop Standard", "Import of 1-1000 products"],
  },
];

// ---------------------------------------------------------------------------
// Testimonials — după `name` (Daniel e deja în engleză, nu-l includem aici).
// ---------------------------------------------------------------------------
const testimonialsEn: Record<string, { role: string; quote: string }> = {
  Nicu: {
    role: "CEO, XWELD",
    quote:
      "The Weblex Design team understood exactly what we needed and delivered a website that truly represents our brand. Communication was clear throughout the whole project and the result exceeded our expectations.",
  },
  Florin: {
    role: "CEO, alertelicitatii.ro",
    quote:
      "We got a fast, well-structured platform that works exactly as we envisioned it. The team was professional and responsive at every step, from the first discussion to launch.",
  },
  Mihaela: {
    role: "Psychotherapist & Speech Therapist, Founder of Logobrain",
    quote:
      "I'm delighted with the website — it's clear, easy to navigate and reflects the professionalism of our center. Clients tell us they found exactly what they were looking for, quickly.",
  },
};

// ---------------------------------------------------------------------------
// Projects — summary tradus pentru toate proiectele "featured" de pe homepage.
// Titlurile raman neschimbate (nume de brand/companie).
// ---------------------------------------------------------------------------
const projectsEn: Record<string, string> = {
  "shim-residence":
    "A presentation website for a group of luxury hotel-style apartments in Rădăuți, with a photo gallery for each apartment type and information about amenities and the surrounding area.",
  "v-smartcard":
    "An online store for NFC digital business cards and Google Review cards, including a dedicated card for the digital menus of HORECA businesses.",
  "arizona-true-construction":
    "A presentation website for a construction and renovation company based in Phoenix, Arizona, with a portfolio of kitchen, bathroom and exterior projects.",
  "mav-boutique-villa":
    "A presentation website for a group of boutique villas and an urban guesthouse on the Romanian coast (Eforie Nord and Constanța), featuring each location's amenities and a booking engine.",
  "full-moving":
    "A presentation website for a removals company based in Cardiff, UK, covering local, commercial and international moves plus storage services.",
};

async function run() {
  const payload = await getPayload({ config });

  // 1) PageTexts global
  console.log("Scriu PageTexts (en)...");
  await payload.updateGlobal({ slug: "page-texts", data: pageTextsEn as any, locale: "en" });
  console.log("  ✓ PageTexts actualizat.");

  // 2) Services (titlu/rezumat/descriere + pricingTiers pentru site-web)
  console.log("Scriu Services (en)...");
  for (const [slug, en] of Object.entries(servicesEn)) {
    const existing = await payload.find({ collection: "services", where: { slug: { equals: slug } }, limit: 1 });
    const doc = existing.docs[0] as any;
    if (!doc) {
      console.log(`  - Serviciul "${slug}" nu există încă în DB — sar peste (rulează mai întâi seed.ts / seed-new-services.ts).`);
      continue;
    }

    const data: any = { title: en.title, summary: en.summary, description: en.description };

    // Pachetele de preț (pricingTiers) ale acestui serviciu, dacă există —
    // "site-web" și "magazin-online" sunt singurele cu pachete reale.
    const roFallback = slug === "site-web" ? websitePricing : slug === "magazin-online" ? shopPricing : null;
    const enFallback = slug === "site-web" ? siteWebTiersEn : slug === "magazin-online" ? shopTiersEn : null;
    const existingTiers = (doc.pricingTiers || []) as any[];

    if (roFallback && enFallback && existingTiers.length) {
      // Pe această bază de date locală (sandbox), câmpurile localizate
      // name/note/features.label ale pachetelor pot fi goale pe "ro" (date
      // incomplete față de producție) — fără o valoare "ro" validă, Payload
      // respinge și scrierea pe "en" (required pe același câmp, orice locale),
      // chiar dacă update-ul curent nu modifică deloc pricingTiers — Payload
      // validează tot documentul, nu doar câmpurile trimise. Le completăm/
      // reconfirmăm aici din sursa reală (src/content/pricing.ts) înainte să
      // scriem varianta engleză — pe producție, unde sunt deja corecte, asta
      // rescrie pur și simplu aceleași valori (idempotent).
      // Păstrăm id-ul fiecărui rând (pachet) și al fiecărei caracteristici —
      // array-ul în sine nu e localizat, Payload identifică rândurile între
      // locale-uri după `id`; fără el ar crea rânduri noi și validarea pe
      // câmpurile required (name/label) ar pica.
      const roTiers = existingTiers.map((tier, i) => {
        const roTier = roFallback[i];
        if (!roTier) return tier;
        return {
          id: tier.id,
          name: roTier.name,
          price: tier.price,
          oldPrice: tier.oldPrice,
          note: roTier.note,
          highlighted: tier.highlighted,
          features: (tier.features || []).map((f: any, fi: number) => ({ id: f.id, label: roTier.features[fi] ?? f.label })),
        };
      });
      // Payload poate regenera id-urile rândurilor la update — folosim
      // id-urile proaspete din rezultat (nu cele din `doc`, deja vechi) ca
      // scrierea pe "en" de mai jos să targeteze aceleași rânduri.
      const afterRo: any = await payload.update({ collection: "services", id: doc.id, data: { pricingTiers: roTiers }, locale: "ro" });
      const freshTiers = (afterRo.pricingTiers || []) as any[];

      data.pricingTiers = freshTiers.map((tier, i) => {
        const enTier = enFallback[i];
        if (!enTier) return tier;
        return {
          id: tier.id,
          name: enTier.name,
          price: tier.price,
          oldPrice: tier.oldPrice,
          note: enTier.note,
          highlighted: tier.highlighted,
          features: (tier.features || []).map((f: any, fi: number) => ({ id: f.id, label: enTier.features[fi] ?? f.label })),
        };
      });
    }

    await payload.update({ collection: "services", id: doc.id, data, locale: "en" });
    console.log(`  ✓ ${slug}`);
  }

  // 3) Testimonials (quote/role, după name)
  console.log("Scriu Testimonials (en)...");
  for (const [name, en] of Object.entries(testimonialsEn)) {
    const existing = await payload.find({ collection: "testimonials", where: { name: { equals: name } }, limit: 1 });
    const doc = existing.docs[0] as any;
    if (!doc) {
      console.log(`  - Testimonialul "${name}" nu a fost găsit — sar peste.`);
      continue;
    }
    await payload.update({ collection: "testimonials", id: doc.id, data: { role: en.role, quote: en.quote }, locale: "en" });
    console.log(`  ✓ ${name}`);
  }

  // 4) Projects (summary, după slug) — toate cele featured + oricare altul definit mai sus
  console.log("Scriu Projects (en)...");
  for (const [slug, summary] of Object.entries(projectsEn)) {
    const existing = await payload.find({ collection: "projects", where: { slug: { equals: slug } }, limit: 1 });
    const doc = existing.docs[0] as any;
    if (!doc) {
      console.log(`  - Proiectul "${slug}" nu a fost găsit — sar peste.`);
      continue;
    }
    // `title` e un câmp required+localized — Payload cere o valoare pentru
    // "en" de fiecare dată când scriem orice câmp pe acest locale, chiar dacă
    // nu-l modificăm noi acum. Titlurile sunt nume de brand/companie (nu au
    // nevoie de traducere), așa că trimitem aceeași valoare ca pe "ro".
    await payload.update({ collection: "projects", id: doc.id, data: { title: doc.title, summary }, locale: "en" });
    console.log(`  ✓ ${slug}`);
  }

  console.log("Conținut în engleză populat cu succes.");
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
