// Dictionar pentru textele fixe ale interfetei (meniu, footer, butoane, formular,
// bara de cookie) — cele care NU vin din Payload CMS. Continutul propriu-zis al
// paginilor (titluri, descrieri, pachete, testimoniale) e deja bilingv in Payload
// (localized: true + fallback: true pe "ro"); dictionarul asta acopera doar
// "scheletul" vizibil pe fiecare pagina, indiferent de continut.
//
// Cum se adauga o pagina noua in engleza:
// 1. Creezi fisierul sub src/app/(frontend)/en/<pagina>/page.tsx, care cheama
//    aceleasi functii din payload-data.ts dar cu locale="en".
// 2. Adaugi { label, href: "/en/<pagina>" } in NAV_EN de mai jos, ca sa apara
//    corect in meniu si in footer cand esti pe o pagina in engleza.
// Pana atunci, orice pagina care nu are inca varianta in engleza ramane legata
// la versiunea romana (mai bine o pagina corecta in romana decat un link stricat).

export type Locale = "ro" | "en";

export type NavItem = { label: string; href: string };

export const NAV_RO: NavItem[] = [
  { label: "Servicii", href: "/servicii" },
  { label: "Portofoliu", href: "/portofoliu" },
  { label: "Blog", href: "/blog" },
  { label: "Despre noi", href: "/despre" },
  { label: "Contact", href: "/contact" },
];

// Servicii, Portofoliu, Despre si Contact au acum varianta /en/ proprie.
// Blog ramane spre varianta romana — articolele de blog nu sunt traduse inca
// (au propriul mecanism de limba, bazat pe query param, separat de /en/).
export const NAV_EN: NavItem[] = [
  { label: "Services", href: "/en/servicii" },
  { label: "Portfolio", href: "/en/portofoliu" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/en/despre" },
  { label: "Contact", href: "/en/contact" },
];

export function getNav(locale: Locale): NavItem[] {
  return locale === "en" ? NAV_EN : NAV_RO;
}

// Determina limba curenta direct din URL (pathname), ca sa poata fi recalculata
// pe client la fiecare navigare — vezi nota de mai jos.
//
// De ce nu citim locale-ul dintr-un prop venit din layout.tsx (via middleware +
// headers()): Next.js App Router NU re-executa layout-ul (si deci nici
// componentele randate direct in el — Navbar, Footer, WhatsAppButton,
// CookieConsentBar) la o navigare client-side (<Link>) intre doua pagini care
// impart acelasi layout — "/" si "/en" sunt exact in cazul asta. Rezultatul:
// un prop `locale` calculat o singura data in layout ramane "inghetat" la
// valoarea de la primul randare pe server, chiar daca userul navigheaza intre
// RO si EN — meniul/footerul/butonul WhatsApp raman in limba paginii initiale.
// Solutia: aceste componente isi calculeaza singure limba din `usePathname()`
// (care SE actualizeaza corect la fiecare navigare client-side), in loc sa
// primeasca limba ca prop.
export function localeFromPathname(pathname: string | null | undefined): Locale {
  if (!pathname) return "ro";
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ro";
}

// Tinta corecta pentru orice buton "Cere oferta" / "Get a quote" — un singur
// loc de adevar, ca sa nu mai ramana linkuri catre /contact hardcodate pe
// paginile in engleza (bug raportat de client: butonul ducea mereu la /contact
// in romana, indiferent de limba paginii).
export function contactHref(locale: Locale): string {
  return locale === "en" ? "/en/contact" : "/contact";
}

// Pentru fiecare pagina care exista deja in ambele limbi, mapam calea curenta ->
// echivalentul in cealalta limba, ca switch-ul de limba din Navbar sa duca exact
// la aceeasi pagina, nu doar la homepage. Se completeaza pe masura ce adaugam
// pagini noi in engleza.
export const PATH_RO_TO_EN: Record<string, string> = {
  "/": "/en",
  "/servicii": "/en/servicii",
  "/portofoliu": "/en/portofoliu",
  "/despre": "/en/despre",
  "/contact": "/en/contact",
  "/intrebari-frecvente": "/en/intrebari-frecvente",
};
export const PATH_EN_TO_RO: Record<string, string> = {
  "/en": "/",
  "/en/servicii": "/servicii",
  "/en/portofoliu": "/portofoliu",
  "/en/despre": "/despre",
  "/en/contact": "/contact",
  "/en/intrebari-frecvente": "/intrebari-frecvente",
};

export const processSteps = {
  ro: [
    { title: "Discutie & brief", desc: "Intelegem afacerea ta, obiectivele si publicul tinta." },
    { title: "Design & concept", desc: "Propunem directia vizuala si structura site-ului." },
    { title: "Dezvoltare", desc: "Construim site-ul cu tehnologii moderne, rapide si sigure." },
    { title: "Testare & lansare", desc: "Verificam viteza, SEO si responsive-ul pe toate device-urile." },
    { title: "Mentenanta continua", desc: "Ramanem alaturi de tine cu actualizari si suport." },
  ],
  en: [
    { title: "Discovery & brief", desc: "We get to know your business, goals and target audience." },
    { title: "Design & concept", desc: "We propose the visual direction and the site structure." },
    { title: "Development", desc: "We build the site with modern, fast and secure technology." },
    { title: "Testing & launch", desc: "We check speed, SEO and responsiveness on every device." },
    { title: "Ongoing maintenance", desc: "We stay by your side with updates and support." },
  ],
};

export const ui = {
  ro: {
    getQuote: "Cere ofertă",
    openMenu: "Deschide meniul",
    whatsappLabel: "Scrie-ne pe WhatsApp",
    switchLangTo: "EN",

    footerTagline: (years: number, projects: number) =>
      `Site-uri web si magazine online create de o echipa cu peste ${years} ani de experienta si ${projects}+ proiecte livrate.`,
    footerNavHeading: "Navigare",
    footerServicesHeading: "Servicii",
    footerContactHeading: "Contact",
    footerSolutionsLabel: "Solutii pe domenii",
    footerFaqLabel: "Intrebari frecvente",

    cookieText: "Folosim cookie-uri esentiale pentru functionarea site-ului si, optional, cookie-uri de analiza. Poti citi detalii in",
    cookiePolicyLinkLabel: "politica de cookie",
    cookieReject: "Doar esentiale",
    cookieAccept: "Accepta toate",

    ctaHeadingLine1: "Hai sa construim",
    ctaHeadingLine2: "urmatorul tau proiect online.",
    ctaText: "Raspundem in maximum o zi lucratoare cu o oferta personalizata.",
    ctaButton: "Cere oferta personalizata",

    homeServicesEyebrow: "Servicii",
    homeServicesLink: "Vezi toate serviciile",
    homePortfolioEyebrow: "Portofoliu",
    homePortfolioLink: "Vezi tot portofoliul",
    homeBenefitsEyebrow: "De ce Weblex Design",
    homeProcessEyebrow: "Procesul de lucru",
    homePricingEyebrow: "Preturi",

    serviceCardLink: "Vezi pagina completa",
    projectCardLink: "Vezi site-ul live",
    pricingPopular: "Cel mai popular",
    pricingCta: "Cere oferta",
    testimonialPrev: "Testimonial anterior",
    testimonialNext: "Testimonial urmator",
    statProjects: "proiecte finalizate",
    statExperience: "ani experienta",
    statResponsive: "responsive",
    heroBadge: (years: number, projects: number) => `${years}+ ani experienta · ${projects}+ proiecte livrate`,

    serviciiEyebrow: "Servicii",
    serviciiHeading: "Tot ce ai nevoie pentru o prezenta online completa",
    serviciiSubheading:
      "De la primul site de prezentare pana la un magazin online complex, cu SEO, promovare si mentenanta incluse in proces.",
    serviciiPricingShopHeading: "Magazin online",

    portofoliuEyebrow: "Portofoliu",

    despreEyebrow: "Despre noi",
    despreStatSince: "anul infiintarii",

    contactEyebrow: "Contact",
    contactPhoneLabel: "Telefon: ",
    contactEmailLabel: "Email: ",
    contactLocationLabel: "Locatie: ",

    faqEyebrow: "Intrebari frecvente",
    faqHeading: "Tot ce vrei sa stii inainte sa pornim proiectul",
    faqSubheading:
      "Raspunsuri clare despre preturi, durata de livrare, ce este inclus in fiecare pachet si cum functioneaza mentenanta — pentru site-uri de prezentare, magazine online, digitalizare si aplicatii software la comanda.",

    contactForm: {
      nameLabel: "Nume persoana de contact",
      emailLabel: "Email",
      phoneLabel: "Telefon",
      cuiLabel: "CUI firma",
      cuiPlaceholder: "ex: RO12345678",
      anafButton: "Preia date ANAF",
      anafLoading: "Se cauta...",
      anafErrorNoCui: "Introdu mai intai un CUI valid.",
      anafErrorNotFound: "Nu am gasit firma. Completeaza denumirea manual.",
      anafErrorContact: "Nu am putut contacta ANAF. Completeaza denumirea manual.",
      anafSuccessPrefix: "Preluat din ANAF: ",
      anafSuccessGeneric: "Date preluate din ANAF.",
      companyLabel: "Denumire firma",
      serviceLabel: "Ce servicii te intereseaza?",
      serviceChoose: "Alege un serviciu",
      serviceOptions: [
        { value: "site-web", label: "Site web de prezentare" },
        { value: "magazin-online", label: "Magazin online" },
        { value: "redesign", label: "Redesign site web" },
        { value: "crm", label: "CRM" },
        { value: "aplicatie-custom", label: "Aplicatie web Custom" },
        { value: "mentenanta", label: "Mentenanta" },
        { value: "seo", label: "SEO on-page" },
        { value: "altul", label: "Alt serviciu" },
      ] as { value: string; label: string }[],
      packagesLabel: "Alege pachetul",
      customLabel: "Custom",
      shopCustomLabel: "Shop Custom",
      customDesc: "Detaliezi tu mai jos ce ai nevoie",
      siteUrlLabel: "Link site existent",
      detailsLabel: "Detaliaza proiectul",
      detailsPlaceholder: "Spune-ne cateva cuvinte despre ce ai nevoie.",
      gdprText: "Sunt de acord cu prelucrarea datelor conform politicii de confidentialitate.",
      submitButton: "Trimite cererea",
      submitLoading: "Se trimite...",
      successMessage: "Multumim! Iti raspundem in cel mai scurt timp.",
      errorMessage: "A aparut o eroare. Te rugam sa ne contactezi direct.",
    },
  },
  en: {
    getQuote: "Get a quote",
    openMenu: "Open menu",
    whatsappLabel: "Message us on WhatsApp",
    switchLangTo: "RO",

    footerTagline: (years: number, projects: number) =>
      `Websites and online stores built by a team with over ${years} years of experience and ${projects}+ delivered projects.`,
    footerNavHeading: "Navigation",
    footerServicesHeading: "Services",
    footerContactHeading: "Contact",
    footerSolutionsLabel: "Solutions by industry",
    footerFaqLabel: "FAQ",

    cookieText: "We use essential cookies to run the site and, optionally, analytics cookies. You can read details in our",
    cookiePolicyLinkLabel: "cookie policy",
    cookieReject: "Essential only",
    cookieAccept: "Accept all",

    ctaHeadingLine1: "Let's build",
    ctaHeadingLine2: "your next online project.",
    ctaText: "We respond within one business day with a tailored quote.",
    ctaButton: "Get a tailored quote",

    homeServicesEyebrow: "Services",
    homeServicesLink: "See all services",
    homePortfolioEyebrow: "Portfolio",
    homePortfolioLink: "See the full portfolio",
    homeBenefitsEyebrow: "Why Weblex Design",
    homeProcessEyebrow: "How we work",
    homePricingEyebrow: "Pricing",

    serviceCardLink: "See full page",
    projectCardLink: "See live site",
    pricingPopular: "Most popular",
    pricingCta: "Get a quote",
    testimonialPrev: "Previous testimonial",
    testimonialNext: "Next testimonial",
    statProjects: "projects completed",
    statExperience: "years of experience",
    statResponsive: "responsive",
    heroBadge: (years: number, projects: number) => `${years}+ years of experience · ${projects}+ projects delivered`,

    serviciiEyebrow: "Services",
    serviciiHeading: "Everything you need for a complete online presence",
    serviciiSubheading:
      "From your first presentation website to a complex online store, with SEO, advertising and maintenance included along the way.",
    serviciiPricingShopHeading: "Online store",

    portofoliuEyebrow: "Portfolio",

    despreEyebrow: "About us",
    despreStatSince: "founding year",

    contactEyebrow: "Contact",
    contactPhoneLabel: "Phone: ",
    contactEmailLabel: "Email: ",
    contactLocationLabel: "Location: ",

    faqEyebrow: "FAQ",
    faqHeading: "Everything you want to know before we start the project",
    faqSubheading:
      "Clear answers about pricing, delivery time, what's included in each package and how maintenance works — for presentation websites, online stores, digitalization and custom software applications.",

    contactForm: {
      nameLabel: "Contact person's name",
      emailLabel: "Email",
      phoneLabel: "Phone",
      cuiLabel: "Company registration number (CUI)",
      cuiPlaceholder: "e.g.: RO12345678",
      anafButton: "Look up via ANAF",
      anafLoading: "Looking up...",
      anafErrorNoCui: "Enter a valid CUI first.",
      anafErrorNotFound: "We couldn't find the company. Please fill in the name manually.",
      anafErrorContact: "We couldn't reach ANAF. Please fill in the name manually.",
      anafSuccessPrefix: "Retrieved from ANAF: ",
      anafSuccessGeneric: "Data retrieved from ANAF.",
      companyLabel: "Company name",
      serviceLabel: "Which service are you interested in?",
      serviceChoose: "Choose a service",
      serviceOptions: [
        { value: "site-web", label: "Business website" },
        { value: "magazin-online", label: "Online store" },
        { value: "redesign", label: "Website redesign" },
        { value: "crm", label: "CRM" },
        { value: "aplicatie-custom", label: "Custom web application" },
        { value: "mentenanta", label: "Maintenance" },
        { value: "seo", label: "On-page SEO" },
        { value: "altul", label: "Other service" },
      ] as { value: string; label: string }[],
      packagesLabel: "Choose a package",
      customLabel: "Custom",
      shopCustomLabel: "Shop Custom",
      customDesc: "Tell us below what you need",
      siteUrlLabel: "Existing website link",
      detailsLabel: "Tell us about your project",
      detailsPlaceholder: "Give us a few details about what you need.",
      gdprText: "I agree to the processing of my data in accordance with the privacy policy.",
      submitButton: "Send request",
      submitLoading: "Sending...",
      successMessage: "Thank you! We'll get back to you shortly.",
      errorMessage: "Something went wrong. Please contact us directly.",
    },
  },
};

// Tip pentru dictionarul "contactForm" — reutilizat in ContactForm.tsx ca
// ContactForm sa primeasca tipul corect de props indiferent de limba.
export type ContactFormDict = (typeof ui)["ro"]["contactForm"];
