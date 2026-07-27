// Servicii reale, consolidate din cele 7 pagini fragmentate ale site-ului vechi
// (creare-site-web, magazin-online, seo, promovare, mentenanta, rebranding, service-foto).

export type Service = {
  id: string;
  title: string;
  summary: string;
  description: string;
  icon: "globe" | "cart" | "search" | "megaphone" | "wrench" | "camera" | "refresh";
};

export const services: Service[] = [
  {
    id: "site-web",
    title: "Site web de prezentare",
    summary: "Design responsive, construit de la zero, in jurul brandului tau.",
    description:
      "Realizam site-uri web de prezentare la comanda, in functie de necesitatile fiecarui client. Toate site-urile sunt 100% responsive - aproape jumatate din traficul unui site vine de pe mobil, asa ca fiecare pagina este gandita intai pentru telefon. Acelasi proiect este dus de la brief pana la lansare de aceeasi echipa.",
    icon: "globe",
  },
  {
    id: "magazin-online",
    title: "Magazin online",
    summary: "Magazin la cheie, cu panou de administrare propriu si produse nelimitate.",
    description:
      "Un magazin online elimina costurile de chirie si personal suplimentar, insa rezultatele depind de cum este optimizat si promovat. Livram magazine cu panou de administrare propriu (fara costuri externe de management), produse nelimitate, plata ramburs si cu cardul, calcul automat de livrare si sistem de promotii si cupoane.",
    icon: "cart",
  },
  {
    id: "seo",
    title: "SEO",
    summary: "Optimizare on-page inclusa in fiecare proiect, nu un add-on separat.",
    description:
      "Fiecare site si magazin online livrat de noi include optimizare SEO on-page inca din prima zi: structura corecta de titluri, viteza de incarcare, date structurate si integrare Google Search Console si Analytics, astfel incat site-ul sa fie pregatit pentru indexare din prima zi.",
    icon: "search",
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
  },
  {
    id: "redesign",
    title: "Redesign & Rebranding",
    summary: "Site-ul tau vechi, reconstruit cu un design modern si rapid.",
    description:
      "Preluam site-uri existente si le reconstruim complet - design, structura si viteza - pastrand identitatea si continutul valoros deja acumulat, exact ca in acest proiect.",
    icon: "refresh",
  },
  {
    id: "foto",
    title: "Servicii foto pentru produse",
    summary: "Fotografii profesionale de produs pentru magazinul tau online.",
    description:
      "Pentru magazinele online, calitatea pozelor de produs conteaza la fel de mult ca site-ul in sine. Oferim servicii foto profesionale, astfel incat catalogul tau sa arate impecabil.",
    icon: "camera",
  },
];
