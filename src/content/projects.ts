// Portofoliul real de proiecte livrate de echipa Weblex Design.
// Lista de mai jos e folosită ca fallback (dacă baza de date nu răspunde) și ca sursă
// pentru scriptul de seed (src/seed/seed-portfolio.ts). Sursa de adevăr pentru conținutul
// live este collection-ul "Projects" din Payload CMS — poate fi editat oricând din admin.

export type Project = {
  slug: string;
  title: string;
  category: "Site de prezentare" | "Magazin online" | "Redesign";
  summary: string;
  image: string;
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "xweld",
    title: "XWELD — utilaje de sudură și curățare laser",
    category: "Site de prezentare",
    summary:
      "Site de prezentare pentru un producător român de utilaje de sudură și curățare cu laser și roboți colaborativi, cu secțiuni dedicate fiecărei industrii deservite (auto, construcții metalice, agricultură, aerospațial).",
    image: "/projects/placeholder-1.jpg",
    liveUrl: "https://xweld.wp1.host",
  },
  {
    slug: "alerta-licitatii",
    title: "Alerta Licitații — alerte SEAP pentru licitații publice",
    category: "Site de prezentare",
    summary:
      "Platformă SaaS care monitorizează SEAP non-stop și trimite alerte pe Telegram sau email cu licitațiile publice potrivite firmei, cu pachete de prețuri clare și perioadă gratuită de testare.",
    image: "/projects/placeholder-2.jpg",
    liveUrl: "https://alertalicitatii.ro",
  },
  {
    slug: "stayo",
    title: "Stayo — software de management hotelier",
    category: "Site de prezentare",
    summary:
      "Site de prezentare pentru un soft de management hotelier: recepție, tarife, housekeeping, facturare cu e-Factura și motor de rezervări directe, fără comision.",
    image: "/projects/placeholder-3.jpg",
    liveUrl: "https://stayo.ro",
  },
  {
    slug: "shim-residence",
    title: "Shim Residence — apartamente de lux, Rădăuți",
    category: "Site de prezentare",
    summary:
      "Site de prezentare pentru o reședință cu apartamente de lux în regim hotelier din Rădăuți, cu galerie foto pentru fiecare tip de apartament și informații despre facilități și zona din jur.",
    image: "/projects/placeholder-4.jpg",
    liveUrl: "https://shimresidence.ro",
    featured: true,
  },
  {
    slug: "logobrain",
    title: "LogoBrain — Centrul de Logopedie și Psihoterapie",
    category: "Site de prezentare",
    summary:
      "Site de prezentare pentru un centru de logopedie și psihoterapie din Cluj-Napoca, cu descrierea serviciilor, programare online și acces rapid la lista de tarife.",
    image: "/projects/placeholder-1.jpg",
    liveUrl: "https://logobrain.ro",
  },
  {
    slug: "vine-platforma",
    title: "Vine Platforma Recovery — tractări auto Cluj-Napoca",
    category: "Site de prezentare",
    summary:
      "Site de prezentare pentru o firmă de tractări auto non-stop din Cluj-Napoca, cu acoperire pe tot județul și pe autostrada A3, optimizat pentru apeluri rapide din căutări locale.",
    image: "/projects/placeholder-2.jpg",
    liveUrl: "https://vineplatforma.ro/",
  },
  {
    slug: "crafter-mobila",
    title: "Crafter Mobilă — mobilă la comandă",
    category: "Site de prezentare",
    summary:
      "Site de prezentare pentru un producător de mobilă la comandă pentru interior și exterior, de la design și producție până la montaj și transport.",
    image: "/projects/placeholder-3.jpg",
    liveUrl: "http://craftermobila.ro/",
  },
  {
    slug: "vladimirus",
    title: "Vladimirus Confecții Metalice — garduri debitate",
    category: "Site de prezentare",
    summary:
      "Site de prezentare pentru o firmă de confecții metalice din Călărași, specializată în garduri debitate cu plasmă, structuri metalice și reparații de utilaje agricole.",
    image: "/projects/placeholder-4.jpg",
    liveUrl: "https://vladimirus.ro/",
  },
  {
    slug: "v-smartcard",
    title: "V-SmartCard — cărți de vizită digitale NFC",
    category: "Magazin online",
    summary:
      "Magazin online de cărți de vizită digitale NFC și carduri Google Review, cu un card dedicat pentru meniul digital al afacerilor HORECA.",
    image: "/projects/placeholder-1.jpg",
    liveUrl: "https://v-smartcard.ro",
    featured: true,
  },
  {
    slug: "arizona-true-construction",
    title: "Arizona True Construction — construcții & renovări, Phoenix",
    category: "Site de prezentare",
    summary:
      "Site de prezentare în limba engleză pentru o firmă de construcții și renovări din Phoenix, Arizona, cu portofoliu de proiecte de bucătării, băi și lucrări exterioare.",
    image: "/projects/placeholder-2.jpg",
    liveUrl: "https://arizonatrueconstruction.com/",
    featured: true,
  },
  {
    slug: "hainute-dragalase",
    title: "Hăinuțe Drăgălașe — magazin online haine de botez",
    category: "Magazin online",
    summary:
      "Magazin online cu haine și seturi de botez pentru copii, cont de client, coș de cumpărături și livrare gratuită peste un prag minim.",
    image: "/projects/placeholder-3.jpg",
    liveUrl: "https://hainutedragalase.ro/",
  },
  {
    slug: "mav-boutique-villa",
    title: "MAV Boutique Villa — cazare la malul mării, Eforie Nord",
    category: "Site de prezentare",
    summary:
      "Site de prezentare pentru un grup de vile boutique și o pensiune urbană pe litoral (Eforie Nord și Constanța), cu facilitățile fiecărei locații și motor de rezervare.",
    image: "/projects/placeholder-4.jpg",
    liveUrl: "https://mavboutiquevilla.ro/",
    featured: true,
  },
  {
    slug: "tradalma",
    title: "Tradalma — traduceri autorizate",
    category: "Site de prezentare",
    summary:
      "Site de prezentare pentru o agenție de traduceri autorizate, legalizări și apostilare, cu servicii de interpretariat pentru conferințe și întâlniri de afaceri.",
    image: "/projects/placeholder-1.jpg",
    liveUrl: "https://tradalma.ro/",
  },
  {
    slug: "full-moving",
    title: "Full Moving — servicii de relocare, Cardiff",
    category: "Site de prezentare",
    summary:
      "Site de prezentare în limba engleză pentru o firmă de relocări din Cardiff, Marea Britanie, cu mutări locale, comerciale, internaționale și servicii de depozitare.",
    image: "/projects/placeholder-2.jpg",
    liveUrl: "https://fullmoving.co.uk/",
    featured: true,
  },
  {
    slug: "reparatii-tct",
    title: "Reparații TCT — service electronice, Drobeta-Turnu Severin",
    category: "Site de prezentare",
    summary:
      "Site de prezentare cu magazin integrat pentru un service de reparații telefoane, laptopuri și televizoare din Drobeta-Turnu Severin.",
    image: "/projects/placeholder-3.jpg",
    liveUrl: "https://reparatiitct.ro/",
  },
];
