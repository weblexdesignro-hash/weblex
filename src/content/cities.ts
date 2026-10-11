// Profilurile oraselor pentru paginile locale de SEO (ex: /creare-site-web-prezentare/cluj-napoca).
// Fiecare profil e scris distinct, bazat pe profilul economic real al orasului, ca paginile
// locale sa aiba continut cu adevarat diferit intre ele — nu doar numele orasului schimbat
// (vezi analiza-tehnica-seo.md pentru riscul de "thin content" la pagini locale duplicate).
export type City = {
  slug: string;
  name: string;
  /** Numele orasului la genitiv/local, pt propozitii gen "afaceri din Cluj-Napoca" */
  county: string;
  /** 1-2 propoziatii despre profilul economic real al orasului — folosite in intro-uri. */
  profile: string;
  /** Sectoare/repere economice distincte, folosite in sectiunea "De ce [serviciu] in [oras]". */
  highlights: string[];
  population: string;
};

export const cities: City[] = [
  {
    slug: "cluj-napoca",
    name: "Cluj-Napoca",
    county: "Cluj",
    profile:
      "Cluj-Napoca este cel mai mare hub IT si de startup-uri din afara Bucurestiului, cu o concentratie mare de companii de tehnologie, agentii si afaceri antreprenoriale tinere, intr-o piata unde prezenta online de calitate este un diferentiator real, nu un moft.",
    highlights: [
      "cel mai mare cluster IT si de startup-uri din Transilvania",
      "o piata universitara mare (peste 70.000 de studenti), deci cerere constanta de servicii noi",
      "concurenta puternica intre afaceri locale, unde un site slab te scoate rapid din joc",
    ],
    population: "peste 320.000 de locuitori",
  },
  {
    slug: "bucuresti",
    name: "Bucuresti",
    county: "Bucuresti",
    profile:
      "Bucurestiul este cea mai mare si mai diversificata piata din Romania — corporate, retail, servicii financiare, HoReCa si productie coexista in acelasi oras, iar concurenta online este cea mai acerba din tara, in orice domeniu.",
    highlights: [
      "cea mai mare piata din Romania, cu cea mai mare concurenta online",
      "cerere mare pentru site-uri rapide, pentru ca atentia utilizatorilor e cea mai scurta",
      "acces la cea mai mare densitate de clienti potentiali din tara, in orice nisa",
    ],
    population: "peste 1.800.000 de locuitori",
  },
  {
    slug: "timisoara",
    name: "Timisoara",
    county: "Timis",
    profile:
      "Timisoara este \"poarta de vest\" a Romaniei — un oras industrial puternic, cu multinationale si productie, dar si un sector IT in crestere rapida, conectat strans cu pietele din Europa Centrala si de Vest.",
    highlights: [
      "industrie si productie puternica, cu multe companii multinationale",
      "sector IT in crestere rapida, apropiat de standardele din Europa de Vest",
      "pozitie geografica de granita, cu afaceri care fac comert si cu Ungaria/Serbia",
    ],
    population: "peste 250.000 de locuitori",
  },
  {
    slug: "iasi",
    name: "Iasi",
    county: "Iasi",
    profile:
      "Iasi este cel mai mare centru universitar si cultural din Moldova, cu un sector IT in crestere accelerata in ultimii ani si o piata locala de afaceri mici si mijlocii foarte activa.",
    highlights: [
      "cel mai mare centru universitar din regiunea Moldovei",
      "sector IT in crestere accelerata, cu tot mai multe firme de tehnologie",
      "piata principala pentru intreaga regiune Moldova, nu doar pentru oras",
    ],
    population: "peste 290.000 de locuitori",
  },
  {
    slug: "constanta",
    name: "Constanta",
    county: "Constanta",
    profile:
      "Constanta este cel mai mare port la Marea Neagra si principala destinatie turistica de litoral din Romania — o economie dubla, cu industrie navala si logistica pe de o parte, si turism sezonier puternic pe de alta.",
    highlights: [
      "cel mai mare port la Marea Neagra din Romania, cu industrie navala si logistica",
      "principala destinatie turistica de litoral, cu cerere sezoniera puternica",
      "afaceri care au nevoie de rezervari online si vizibilitate inainte de sezonul estival",
    ],
    population: "peste 280.000 de locuitori",
  },
  {
    slug: "brasov",
    name: "Brasov",
    county: "Brasov",
    profile:
      "Brasov imbina turismul montan (unul dintre cele mai vizitate orase din Romania) cu o industrie solida, de la componente auto pana la productie — o piata cu nevoi foarte diferite intre sectorul turistic si cel industrial.",
    highlights: [
      "unul dintre cele mai vizitate orase din Romania, cu turism montan puternic",
      "industrie solida (componente auto, productie), pe langa sectorul turistic",
      "cerere mare pentru site-uri de pensiuni, hoteluri si restaurante, langa cea industriala",
    ],
    population: "peste 250.000 de locuitori",
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
