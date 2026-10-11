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
  {
    slug: "craiova",
    name: "Craiova",
    county: "Dolj",
    profile:
      "Craiova este cel mai mare centru economic din Oltenia, cu industrie auto si energetica puternica (producatori mari de componente si energie), plus o piata regionala de servicii si comert in crestere.",
    highlights: [
      "cel mai mare centru economic si universitar din Oltenia",
      "industrie auto si energetica puternica, cu angajatori mari in zona",
      "piata principala pentru intreaga regiune, cu afaceri care deservesc mai multe judete din jur",
    ],
    population: "peste 230.000 de locuitori",
  },
  {
    slug: "galati",
    name: "Galati",
    county: "Galati",
    profile:
      "Galati este un oras-port la Dunare, cu o traditie industriala puternica (siderurgie, constructii navale) si o piata locala de afaceri mici si mijlocii care abia incepe sa investeasca serios in prezenta online.",
    highlights: [
      "oras-port la Dunare, cu traditie industriala si logistica fluviala",
      "piata locala cu concurenta online inca redusa, deci oportunitate pentru afacerile care investesc primele",
      "cerere in crestere din partea afacerilor mici si mijlocii pentru prezenta profesionala online",
    ],
    population: "peste 220.000 de locuitori",
  },
  {
    slug: "ploiesti",
    name: "Ploiesti",
    county: "Prahova",
    profile:
      "Ploiesti este centrul industriei petroliere si energetice din Romania, aflat foarte aproape de Bucuresti — o piata cu afaceri industriale consacrate, dar si cu tot mai multe firme de servicii care deservesc atat orasul, cat si zona metropolitana a Capitalei.",
    highlights: [
      "centrul traditional al industriei petroliere si energetice din Romania",
      "pozitie aproape de Bucuresti, cu afaceri care deservesc ambele piete",
      "sector de servicii si comert in crestere, langa cel industrial traditional",
    ],
    population: "peste 200.000 de locuitori",
  },
  {
    slug: "oradea",
    name: "Oradea",
    county: "Bihor",
    profile:
      "Oradea este unul dintre cele mai dinamice orase din vestul tarii, cu investitii straine mari in industrie si un sector de servicii in crestere rapida, beneficiind de apropierea de granita cu Ungaria.",
    highlights: [
      "unul dintre cele mai dinamice orase din vestul Romaniei, cu investitii straine mari",
      "pozitie de granita, cu afaceri care fac comert si cu piata maghiara",
      "sector de servicii si HoReCa in crestere rapida, langa cel industrial",
    ],
    population: "peste 190.000 de locuitori",
  },
  {
    slug: "sibiu",
    name: "Sibiu",
    county: "Sibiu",
    profile:
      "Sibiu combina un centru istoric turistic foarte vizitat cu o industrie puternica (auto, componente), fiind unul dintre orasele cu cel mai mare PIB pe cap de locuitor din Romania.",
    highlights: [
      "unul dintre orasele cu cel mai mare PIB pe cap de locuitor din tara",
      "turism urban puternic, langa o industrie auto si de componente consacrata",
      "piata cu putere de cumparare ridicata, unde calitatea prezentei online conteaza direct",
    ],
    population: "peste 170.000 de locuitori",
  },
  {
    slug: "arad",
    name: "Arad",
    county: "Arad",
    profile:
      "Arad este un important nod logistic si industrial la granita de vest, cu multe companii de productie si transport care deservesc atat piata locala, cat si exportul catre Europa de Vest.",
    highlights: [
      "nod logistic si industrial important, la granita cu Ungaria",
      "multe companii de productie si transport orientate spre export",
      "piata locala de servicii in crestere, langa cea industriala consacrata",
    ],
    population: "peste 150.000 de locuitori",
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
