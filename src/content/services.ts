// Servicii reale, consolidate din cele 7 pagini fragmentate ale site-ului vechi
// (creare-site-web, magazin-online, seo, promovare, mentenanta, rebranding, service-foto).

export type Service = {
  id: string;
  title: string;
  summary: string;
  description: string;
  icon: "globe" | "cart" | "search" | "megaphone" | "wrench" | "camera" | "refresh" | "rocket" | "code";
  // Optional: pagina de servicii dedicata (hiper-optimizata SEO) catre care
  // trimitem din acest card, cand exista una corespunzatoare.
  landingHref?: string;
};

export const services: Service[] = [
  {
    id: "site-web",
    title: "Site web de prezentare",
    summary: "Design responsive, construit de la zero, in jurul brandului tau.",
    description:
      "Realizam site-uri web de prezentare la comanda, in functie de necesitatile fiecarui client. Toate site-urile sunt 100% responsive - aproape jumatate din traficul unui site vine de pe mobil, asa ca fiecare pagina este gandita intai pentru telefon. Acelasi proiect este dus de la brief pana la lansare de aceeasi echipa.",
    icon: "globe",
    landingHref: "/creare-site-web-prezentare",
  },
  {
    id: "magazin-online",
    title: "Magazin online",
    summary: "Magazin la cheie, cu panou de administrare propriu si produse nelimitate.",
    description:
      "Un magazin online elimina costurile de chirie si personal suplimentar, insa rezultatele depind de cum este optimizat si promovat. Livram magazine cu panou de administrare propriu (fara costuri externe de management), produse nelimitate, plata ramburs si cu cardul, calcul automat de livrare si sistem de promotii si cupoane.",
    icon: "cart",
    landingHref: "/creare-magazin-online",
  },
  {
    id: "seo",
    title: "SEO",
    summary: "Optimizare on-page inclusa in fiecare proiect, nu un add-on separat.",
    description:
      "Fiecare site si magazin online livrat de noi include optimizare SEO on-page inca din prima zi: structura corecta de titluri, viteza de incarcare, date structurate si integrare Google Search Console si Analytics, astfel incat site-ul sa fie pregatit pentru indexare din prima zi.",
    icon: "search",
    landingHref: "/optimizare-seo",
  },
  {
    id: "promovare",
    title: "Promovare (Google Ads & Facebook Ads)",
    summary: "Campanii de promovare pentru trafic si vanzari masurabile.",
    description:
      "Pe langa un site optimizat, este esential un program constant de promovare pe Google Ads sau Facebook Ads, pentru a genera trafic calificat si a transforma vizitele in comenzi reale.",
    icon: "megaphone",
  },
  {
    id: "mentenanta",
    title: "Mentenanta",
    summary: "Site-uri si magazine online mentinute in siguranta si la zi.",
    description:
      "Recomandam mentenanta continua atat pentru site-urile de prezentare, cat si pentru magazinele online: actualizari de securitate, back-up-uri regulate si interventii rapide atunci cand apare o problema.",
    icon: "wrench",
    landingHref: "/mentenanta-site-web",
  },
  {
    id: "redesign",
    title: "Redesign & Rebranding",
    summary: "Site-ul tau vechi, reconstruit cu un design modern si rapid.",
    description:
      "Preluam site-uri existente si le reconstruim complet - design, structura si viteza - pastrand identitatea si continutul valoros deja acumulat, exact ca in acest proiect.",
    icon: "refresh",
    landingHref: "/redesign-site-web",
  },
  {
    id: "foto",
    title: "Servicii foto pentru produse",
    summary: "Fotografii profesionale de produs pentru magazinul tau online.",
    description:
      "Pentru magazinele online, calitatea pozelor de produs conteaza la fel de mult ca site-ul in sine. Oferim servicii foto profesionale, astfel incat catalogul tau sa arate impecabil.",
    icon: "camera",
  },
  {
    id: "start-up-nation",
    title: "Site-uri pentru Start-Up Nation si fonduri europene",
    summary: "Website eligibil, livrat cu documentele necesare pentru decontare.",
    description:
      "Realizam site-uri de prezentare si magazine online eligibile ca cheltuiala in cadrul programului Start-Up Nation si al altor finantari europene (voucherul de digitalizare, fonduri nerambursabile). Livram proiectul la timp fata de termenul din cererea de finantare, cu factura, proces-verbal de receptie si captura de ecran a site-ului functional, pregatite pentru dosarul de decontare. Site-ul include deja optimizare SEO on-page, deci bifezi dintr-un singur proiect atat cheltuiala eligibila, cat si prezenta online reala de care afacerea ta are nevoie.",
    icon: "rocket",
    landingHref: "/digitalizare-afaceri",
  },
  {
    id: "digitalizare-aplicatii",
    title: "Digitalizare firme si aplicatii software",
    summary: "Aplicatii web personalizate si solutii de digitalizare pentru procesele firmei.",
    description:
      "Dezvoltam aplicatii web la comanda si solutii de digitalizare pentru firme care vor sa inlocuiasca Excel-urile si procesele manuale cu un sistem propriu: panouri de administrare, integrari cu alte sisteme, automatizari si fluxuri interne. Proiectele sunt construite pe aceeasi platforma folosita si pentru site-urile si magazinele noastre online, deci se pot integra direct cu acestea.",
    icon: "code",
    landingHref: "/dezvoltare-software-custom",
  },
];
