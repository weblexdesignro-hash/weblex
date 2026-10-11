// Pagini dedicate pe nisa/industrie — spre deosebire de landing-pages.ts (organizate dupa
// TIPUL de serviciu: site de prezentare, magazin online etc.), aceste pagini sunt organizate
// dupa DOMENIUL DE ACTIVITATE al clientului (hotel, pensiune, service auto, restaurant etc.),
// cu functionalitati si argumente specifice fiecarei industrii. Nu sunt incrucisate cu orasul
// (vezi decizia din discutia cu clientul) — sunt pagini unice, la nivel national.
//
// Refolosim exact tipul LandingPage din landing-pages.ts (acelasi Hero/Beneficii/Proces/
// De ce noi/CTA/FAQ) si acelasi LandingPageTemplate, ca sa nu mai introducem un tip si o
// componenta noua doar pentru acest set de pagini — campul "beneficii" e folosit aici pentru
// functionalitatile specifice fiecarei nise.
import type { LandingPage } from "./landing-pages";

export const nichePages: LandingPage[] = [
  // ------------------------------------------------------------------
  // 1. Hotel
  // ------------------------------------------------------------------
  {
    slug: "site-web-hotel",
    path: "/site-web-hotel",
    navLabel: "Site web pentru hotel",
    seoTitle: "Creare Site Web pentru Hotel — Prezentare si Rezervari Online",
    seoDescription:
      "Site web pentru hotel, cu galerie foto profesionala, prezentare camere si optiune de rezervare online. Design modern, optimizat pentru mobil si Google. Cere o oferta.",
    breadcrumbName: "Site web pentru hotel",
    heroEyebrow: "Site web pentru hotel",
    h1: "Site web pentru hotel care transforma vizitatorii in rezervari",
    heroSubheading:
      "Construim site-ul hotelului tau in jurul a ceea ce conteaza cu adevarat pentru un oaspete inainte sa rezerve: poze de calitate, informatii clare despre camere si un drum cat mai scurt catre rezervare.",
    heroBullets: [
      "Galerie foto si prezentare camere, gandite pentru conversie",
      "Optiune de rezervare online sau integrare cu motorul tau de rezervari",
      "Design responsive, testat special pentru cautari de pe mobil",
    ],
    beneficiiHeading: "Ce are nevoie, concret, site-ul unui hotel",
    beneficiiSubheading:
      "Un oaspete potential compara mai multe optiuni in cateva minute, de pe telefon — site-ul tau trebuie sa castige increderea lui rapid.",
    beneficii: [
      {
        icon: "camera",
        title: "Galerie foto si prezentare camere",
        text: "Sectiuni dedicate fiecarui tip de camera, cu poze de calitate, facilitati si pret — exact informatia dupa care un oaspete decide.",
      },
      {
        icon: "globe",
        title: "Rezervare online sau integrare cu sistemul tau",
        text: "Putem adauga un formular de rezervare direct pe site sau integra un motor de rezervari existent (Booking, Channel Manager etc.), dupa nevoie.",
      },
      {
        icon: "search",
        title: "SEO local pentru zona si statiunea ta",
        text: "Optimizam site-ul pentru cautari relevante ('hotel in [oras/statiune]'), ca sa apari in fata oaspetilor care cauta exact ce oferi.",
      },
      {
        icon: "star",
        title: "Prezentare facilitati si experiente",
        text: "Restaurant, spa, piscina, evenimente — fiecare facilitate are propriul spatiu, nu e inghesuita intr-o singura pagina generica.",
      },
    ],
    procesHeading: "Cum se desfasoara proiectul, pas cu pas",
    proces: [
      { title: "Discutie & brief", desc: "Intelegem tipul de hotel, camerele si facilitatile pe care vrei sa le prezinti." },
      { title: "Design & concept", desc: "Propunem o directie vizuala potrivita pozitionarii hotelului (business, boutique, resort etc.)." },
      { title: "Dezvoltare", desc: "Construim site-ul, inclusiv sectiunea de camere si rezervari." },
      { title: "Testare & lansare", desc: "Verificam viteza, afisarea pe mobil si functionarea formularului de rezervare." },
      { title: "Mentenanta continua", desc: "Te ajutam sa actualizezi preturi, poze si disponibilitate dupa lansare." },
    ],
    deceNoiHeading: "De ce sa alegi Weblex Design",
    deceNoiSubheading: "Peste 10 ani de experienta si 400+ proiecte livrate, inclusiv in turism si HoReCa.",
    deceNoi: [
      {
        title: "Intelegem specificul turismului",
        text: "Stim ce cauta un oaspete inainte sa rezerve si construim site-ul in jurul acelor informatii, nu al unui format generic.",
      },
      {
        title: "Flexibilitate la integrari",
        text: "Daca folosesti deja un motor de rezervari sau un channel manager, il integram in site in loc sa te obligam sa schimbi sistemul.",
      },
      {
        title: "Preturi clare, fara costuri ascunse",
        text: "Primesti o oferta exacta inainte sa incepem, cu tot ce este inclus — inclusiv eventualele module de rezervare.",
      },
      {
        title: "Suport real dupa livrare",
        text: "Te ajutam sa actualizezi site-ul inainte de fiecare sezon, cu poze, preturi si oferte noi.",
      },
    ],
    ctaHeading: "Hai sa construim site-ul care umple camerele hotelului tau",
    ctaText: "Spune-ne cateva detalii despre hotel si iti trimitem o oferta personalizata, fara obligatii.",
    ctaButtonLabel: "Cere o oferta gratuita",
    faqHeading: "Intrebari frecvente despre site-urile pentru hoteluri",
    faq: [
      {
        question: "Pot avea rezervare online direct pe site, fara comision catre platforme terte?",
        answer:
          "Da. Putem construi un formular de rezervare/pre-rezervare direct pe site-ul tau, fara comisioane, sau integra un motor de rezervari existent daca deja folosesti unul.",
      },
      {
        question: "Cat costa un site pentru hotel?",
        answer:
          "Pornim de la pachetele noastre standard de site de prezentare (de la 249 EUR), iar pentru functionalitati specifice (rezervare online, integrare cu channel manager) facem o oferta personalizata, in functie de ce ai nevoie exact.",
      },
      {
        question: "Puteti integra site-ul cu Booking.com sau alte platforme?",
        answer:
          "Da, putem adauga widget-uri sau linkuri catre platformele pe care esti deja listat, astfel incat oaspetii sa poata alege unde rezerva.",
      },
      {
        question: "Site-ul va fi optimizat pentru cautari locale (ex. statiunea noastra)?",
        answer:
          "Da, optimizarea SEO on-page pentru zona/statiunea ta este inclusa, ca sa apari in cautarile relevante pentru locatia hotelului.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // 2. Pensiune (cu pachet de gestionare rezervari, tip Stayo)
  // ------------------------------------------------------------------
  {
    slug: "site-web-pensiune",
    path: "/site-web-pensiune",
    navLabel: "Site web pentru pensiune",
    seoTitle: "Creare Site Web pentru Pensiune — cu Sistem de Rezervari",
    seoDescription:
      "Site web pentru pensiune turistica, cu galerie foto, prezentare camere si optiune de sistem complet de gestionare a rezervarilor. Design modern, optimizat pentru mobil.",
    breadcrumbName: "Site web pentru pensiune",
    heroEyebrow: "Site web pentru pensiune",
    h1: "Site web pentru pensiune, cu gestionare completa a rezervarilor",
    heroSubheading:
      "Pe langa un site de prezentare modern, oferim si optiunea unui sistem dedicat de gestionare a rezervarilor — calendar de disponibilitate, rezervari online si administrare simpla, fara sa mai tii evidenta in caiet sau Excel.",
    heroBullets: [
      "Galerie foto si prezentare camere/cabane",
      "Optiune: sistem complet de gestionare rezervari (calendar, disponibilitate, plati online)",
      "Design responsive, gandit pentru cautari de pe mobil din ultimul moment",
    ],
    beneficiiHeading: "Ce iti ofera un site dedicat pentru pensiunea ta",
    beneficiiSubheading:
      "Multi oaspeti decid in ultimul moment, de pe telefon — un site rapid si clar, cu disponibilitate vizibila, iti aduce rezervari pe care altfel le pierzi.",
    beneficii: [
      {
        icon: "camera",
        title: "Prezentare camere si cabane",
        text: "Fiecare tip de cazare are propria sectiune, cu poze, facilitati, capacitate si pret, usor de comparat de catre oaspete.",
      },
      {
        icon: "globe",
        title: "Sistem de gestionare rezervari (optional)",
        text: "Putem adauga un sistem complet de rezervari — calendar de disponibilitate in timp real, confirmare automata si, optional, plata online a avansului — similar cu solutii tip Stayo, integrat direct in site-ul tau.",
      },
      {
        icon: "search",
        title: "SEO local pentru zona turistica",
        text: "Optimizam site-ul pentru cautari relevante pentru zona ta (munte, delta, litoral etc.), ca sa apari in fata oaspetilor potriviti.",
      },
      {
        icon: "star",
        title: "Prezentare activitati si imprejurimi",
        text: "O sectiune dedicata activitatilor din zona (drumetii, pescuit, atractii locale) ajuta oaspetele sa decida mai usor sa rezerve la tine.",
      },
    ],
    procesHeading: "Cum se desfasoara proiectul, pas cu pas",
    proces: [
      { title: "Discutie & brief", desc: "Intelegem tipul de cazare, numarul de camere/cabane si daca ai nevoie de sistem de rezervari." },
      { title: "Design & concept", desc: "Propunem o directie vizuala calda, potrivita unei pensiuni, cu accent pe poze." },
      { title: "Dezvoltare", desc: "Construim site-ul si, daca e cazul, configuram sistemul de gestionare a rezervarilor." },
      { title: "Testare & lansare", desc: "Verificam fluxul de rezervare de la cautare pana la confirmare, pe toate device-urile." },
      { title: "Mentenanta continua", desc: "Te ajutam sa actualizezi disponibilitatea, preturile si pozele dupa lansare." },
    ],
    deceNoiHeading: "De ce sa alegi Weblex Design",
    deceNoiSubheading: "Peste 10 ani de experienta si 400+ proiecte livrate, inclusiv site-uri cu sistem propriu de rezervari.",
    deceNoi: [
      {
        title: "Sistem de rezervari fara costuri lunare ascunse",
        text: "Spre deosebire de unele platforme terte, sistemul integrat in site-ul tau e al tau — nu platesti comision la fiecare rezervare.",
      },
      {
        title: "O echipa, de la brief la lansare",
        text: "Acelasi proiect este dus de la inceput pana la final de aceeasi echipa, inclusiv configurarea sistemului de rezervari.",
      },
      {
        title: "Preturi clare, fara costuri ascunse",
        text: "Primesti o oferta exacta inainte sa incepem, cu tot ce este inclus — site plus, optional, sistemul de rezervari.",
      },
      {
        title: "Suport real dupa livrare",
        text: "Raman alaturi de tine cu mentenanta continua si interventii rapide, mai ales inainte de sezon.",
      },
    ],
    ctaHeading: "Hai sa construim site-ul si sistemul de rezervari al pensiunii tale",
    ctaText: "Spune-ne cateva detalii despre pensiune si iti trimitem o oferta personalizata, fara obligatii.",
    ctaButtonLabel: "Cere o oferta gratuita",
    faqHeading: "Intrebari frecvente despre site-urile pentru pensiuni",
    faq: [
      {
        question: "Ce inseamna, concret, sistemul de gestionare a rezervarilor?",
        answer:
          "Este un modul integrat in site-ul tau, cu calendar de disponibilitate in timp real, rezervare online si, optional, incasare avans — asemanator cu solutii dedicate tip Stayo, dar parte din propriul tau site, fara comisioane catre terti.",
      },
      {
        question: "Pot avea acest sistem si fara sa refac intregul site?",
        answer:
          "Da, daca ai deja un site, putem analiza daca se poate adauga sistemul de rezervari pe structura existenta sau daca e nevoie de un site nou — iti spunem clar din prima discutie.",
      },
      {
        question: "Cat costa un site cu sistem de rezervari pentru pensiune?",
        answer:
          "Pornim de la pachetele noastre standard de site de prezentare (de la 249 EUR), iar sistemul de rezervari se adauga la oferta, in functie de complexitatea dorita (calendar simplu vs. plati online incluse).",
      },
      {
        question: "Functioneaza bine pe telefon, pentru oaspetii care rezerva de pe mobil?",
        answer:
          "Da, intregul site, inclusiv procesul de rezervare, este testat si optimizat special pentru utilizare de pe telefon, de unde vine o mare parte din rezervarile de ultim moment.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // 3. Service auto
  // ------------------------------------------------------------------
  {
    slug: "site-web-service-auto",
    path: "/site-web-service-auto",
    navLabel: "Site web pentru service auto",
    seoTitle: "Creare Site Web pentru Service Auto — cu Programari Online",
    seoDescription:
      "Site web pentru service auto, cu lista de servicii, preturi orientative si programare online. Design modern, optimizat pentru cautari locale. Cere o oferta.",
    breadcrumbName: "Site web pentru service auto",
    heroEyebrow: "Site web pentru service auto",
    h1: "Site web pentru service auto care aduce programari, nu doar vizitatori",
    heroSubheading:
      "Construim site-ul service-ului tau auto in jurul a ceea ce cauta un client: ce servicii oferi, cat costa orientativ si cum poate face o programare rapid, fara telefon.",
    heroBullets: [
      "Lista clara de servicii (revizii, diagnoza, anvelope, caroserie etc.)",
      "Formular sau sistem de programare online",
      "SEO local, pentru cautari de tipul 'service auto in [oras]'",
    ],
    beneficiiHeading: "Ce are nevoie, concret, site-ul unui service auto",
    beneficiiSubheading:
      "Un client care cauta un service compara rapid 2-3 optiuni, pe telefon, de obicei intr-o situatie urgenta — site-ul tau trebuie sa raspunda rapid la intrebarile lui.",
    beneficii: [
      {
        icon: "wrench",
        title: "Lista de servicii si preturi orientative",
        text: "O sectiune clara cu toate serviciile oferite (revizii, diagnoza computerizata, anvelope, caroserie) ii da clientului incredere inainte sa sune.",
      },
      {
        icon: "globe",
        title: "Programare online",
        text: "Adaugam un formular sau un sistem de programare online, ca sa poti primi cereri si in afara orelor de program, fara sa pierzi clienti.",
      },
      {
        icon: "search",
        title: "SEO local pentru orasul si cartierul tau",
        text: "Optimizam site-ul pentru cautari relevante ('service auto in [oras/cartier]'), ca sa apari in fata soferilor din zona ta.",
      },
      {
        icon: "star",
        title: "Recenzii si incredere",
        text: "Integram recenziile de pe Google si prezentam echipamentele/certificarile, argumente importante cand clientul alege intre mai multe service-uri.",
      },
    ],
    procesHeading: "Cum se desfasoara proiectul, pas cu pas",
    proces: [
      { title: "Discutie & brief", desc: "Intelegem gama de servicii oferite si cum lucrezi cu programarile acum." },
      { title: "Design & concept", desc: "Propunem o structura clara: servicii, preturi orientative, programare, contact." },
      { title: "Dezvoltare", desc: "Construim site-ul, inclusiv formularul sau sistemul de programare." },
      { title: "Testare & lansare", desc: "Verificam viteza, afisarea pe mobil si functionarea programarilor." },
      { title: "Mentenanta continua", desc: "Te ajutam sa actualizezi servicii, preturi si disponibilitate dupa lansare." },
    ],
    deceNoiHeading: "De ce sa alegi Weblex Design",
    deceNoiSubheading: "Peste 10 ani de experienta si 400+ proiecte livrate, inclusiv pentru afaceri locale din domeniul auto.",
    deceNoi: [
      {
        title: "Intelegem cum cauta clientii un service",
        text: "Construim site-ul in jurul intrebarilor reale ale unui client — ce faceti, cat costa orientativ, cand pot veni — nu al unui format generic.",
      },
      {
        title: "SEO local inclus, nu optional",
        text: "Optimizarea pentru cautari din zona ta face parte din livrare, esentiala intr-un domeniu unde clientii cauta 'aproape de mine'.",
      },
      {
        title: "Preturi clare, fara costuri ascunse",
        text: "Primesti o oferta exacta inainte sa incepem, cu tot ce este inclus detaliat.",
      },
      {
        title: "Suport real dupa livrare",
        text: "Te ajutam sa actualizezi lista de servicii si preturile oricand e nevoie, fara bataie de cap.",
      },
    ],
    ctaHeading: "Hai sa construim site-ul care iti umple agenda de programari",
    ctaText: "Spune-ne cateva detalii despre service si iti trimitem o oferta personalizata, fara obligatii.",
    ctaButtonLabel: "Cere o oferta gratuita",
    faqHeading: "Intrebari frecvente despre site-urile pentru service-uri auto",
    faq: [
      {
        question: "Pot primi programari direct de pe site, fara telefon?",
        answer:
          "Da, putem adauga un formular de programare sau un sistem mai complex de rezervare pe interval orar, in functie de cum functioneaza service-ul tau.",
      },
      {
        question: "Cat costa un site pentru service auto?",
        answer:
          "Pornim de la pachetele noastre standard de site de prezentare (de la 249 EUR). Pentru un sistem de programare mai complex facem o oferta personalizata.",
      },
      {
        question: "Ma puteti ajuta sa apar mai sus in Google cand cineva cauta 'service auto' in orasul meu?",
        answer:
          "Da, optimizarea SEO locala pentru orasul si cartierul tau este inclusa in livrare, iar pentru rezultate si mai bune oferim si servicii dedicate de optimizare SEO continua.",
      },
      {
        question: "Pot afisa preturi orientative fara sa ma leg contractual de ele?",
        answer:
          "Da, de obicei recomandam preturi orientative sau 'de la', cu mentiunea ca pretul final se stabileste dupa diagnoza — asa procedeaza majoritatea service-urilor.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // 4. Restaurant (cu meniu digital si comenzi online)
  // ------------------------------------------------------------------
  {
    slug: "site-web-restaurant",
    path: "/site-web-restaurant",
    navLabel: "Site web pentru restaurant",
    seoTitle: "Creare Site Web pentru Restaurant — Meniu Digital si Comenzi Online",
    seoDescription:
      "Site web pentru restaurant, cu meniu digital (si QR code), galerie foto si optiune de comenzi online. Design modern, optimizat pentru mobil si Google. Cere o oferta.",
    breadcrumbName: "Site web pentru restaurant",
    heroEyebrow: "Site web pentru restaurant",
    h1: "Site web pentru restaurant, cu meniu digital si comenzi online",
    heroSubheading:
      "Construim site-ul restaurantului tau cu un meniu digital clar (inclusiv acces prin QR code la masa) si, optional, un sistem de comenzi online — ca sa transformi vizitatorii site-ului in clienti, nu doar in curiosi.",
    heroBullets: [
      "Meniu digital actualizabil, cu acces si prin QR code la masa",
      "Optiune: sistem de comenzi online, pentru livrare sau ridicare din local",
      "Galerie foto cu preparate si ambianta, gandita pentru apetit",
    ],
    beneficiiHeading: "Ce are nevoie, concret, site-ul unui restaurant",
    beneficiiSubheading:
      "Inainte sa vina sau sa comande, un client vrea sa vada meniul, preturile si ambianta — rapid, de pe telefon.",
    beneficii: [
      {
        icon: "globe",
        title: "Meniu digital, usor de actualizat",
        text: "Iti administrezi singur meniul — preparate, preturi, categorii — fara sa mai astepti refacerea unui meniu PDF de fiecare data cand schimbi ceva.",
      },
      {
        icon: "cart",
        title: "Comenzi online (optional)",
        text: "Putem adauga un sistem de comenzi online pentru livrare sau ridicare din local, integrat direct in site, fara comisioane catre platforme terte de delivery.",
      },
      {
        icon: "camera",
        title: "Galerie foto cu preparate si ambianta",
        text: "Poze de calitate cu mancarea si localul cresc increderea si apetitul — un argument puternic de conversie pentru restaurante.",
      },
      {
        icon: "search",
        title: "SEO local pentru zona ta",
        text: "Optimizam site-ul pentru cautari relevante ('restaurant in [oras/cartier]'), ca sa apari in fata clientilor din apropiere.",
      },
    ],
    procesHeading: "Cum se desfasoara proiectul, pas cu pas",
    proces: [
      { title: "Discutie & brief", desc: "Intelegem specificul restaurantului, meniul si daca ai nevoie de comenzi online." },
      { title: "Design & concept", desc: "Propunem o directie vizuala potrivita conceptului tau (casual, fine dining, fast-casual etc.)." },
      { title: "Dezvoltare", desc: "Construim site-ul, meniul digital si, daca e cazul, sistemul de comenzi." },
      { title: "Testare & lansare", desc: "Verificam fluxul de comanda si afisarea meniului pe toate device-urile." },
      { title: "Mentenanta continua", desc: "Te ajutam sa actualizezi meniul, preturile si fotografiile dupa lansare." },
    ],
    deceNoiHeading: "De ce sa alegi Weblex Design",
    deceNoiSubheading: "Peste 10 ani de experienta si 400+ proiecte livrate, inclusiv site-uri cu meniu digital si comenzi online.",
    deceNoi: [
      {
        title: "Comenzi online fara comision la fiecare vanzare",
        text: "Spre deosebire de platformele de delivery, sistemul de comenzi integrat in site-ul tau nu iti ia comision pe fiecare comanda.",
      },
      {
        title: "Meniu usor de tinut la zi",
        text: "Schimbi preturi, adaugi sau scoti preparate singur, din panoul de administrare, fara sa ne astepti pe noi pentru fiecare modificare.",
      },
      {
        title: "Preturi clare, fara costuri ascunse",
        text: "Primesti o oferta exacta inainte sa incepem, cu tot ce este inclus — site, meniu digital si, optional, comenzi online.",
      },
      {
        title: "Suport real dupa livrare",
        text: "Raman alaturi de tine cu mentenanta continua si interventii rapide, mai ales in perioadele aglomerate.",
      },
    ],
    ctaHeading: "Hai sa construim site-ul care iti aduce mai multe comenzi",
    ctaText: "Spune-ne cateva detalii despre restaurant si iti trimitem o oferta personalizata, fara obligatii.",
    ctaButtonLabel: "Cere o oferta gratuita",
    faqHeading: "Intrebari frecvente despre site-urile pentru restaurante",
    faq: [
      {
        question: "Pot avea meniu accesibil prin QR code la masa?",
        answer:
          "Da, meniul digital poate fi accesat printr-un cod QR afisat la masa, care duce direct la pagina de meniu de pe site, fara aplicatii suplimentare.",
      },
      {
        question: "Comenzile online merg direct la mine, fara comision catre o platforma terta?",
        answer:
          "Da, sistemul de comenzi este integrat in propriul tau site, deci comenzile vin direct la tine, fara comisioane de platforma — platesti o singura data pentru dezvoltare.",
      },
      {
        question: "Cat costa un site pentru restaurant cu meniu digital si comenzi online?",
        answer:
          "Pornim de la pachetele noastre standard de site de prezentare (de la 249 EUR) pentru site si meniu digital, iar sistemul de comenzi online se adauga la oferta, in functie de complexitate.",
      },
      {
        question: "Pot actualiza singur meniul, preturile si fotografiile?",
        answer:
          "Da, livram site-ul cu panou de administrare propriu, din care poti actualiza meniul, preturile si pozele oricand, fara cunostinte tehnice.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // 5. Cabinet de avocatura
  // ------------------------------------------------------------------
  {
    slug: "site-web-cabinet-avocatura",
    path: "/site-web-cabinet-avocatura",
    navLabel: "Site web pentru cabinet de avocatura",
    seoTitle: "Creare Site Web pentru Cabinet de Avocatura",
    seoDescription:
      "Site web pentru cabinet de avocatura, cu prezentare arii de practica, articole juridice si formular de programare confidential. Design profesional, optimizat pentru Google.",
    breadcrumbName: "Site web pentru cabinet de avocatura",
    heroEyebrow: "Site web pentru cabinet de avocatura",
    h1: "Site web pentru cabinet de avocatura care inspira incredere",
    heroSubheading:
      "Construim site-ul cabinetului tau in jurul increderii: prezentare clara a ariilor de practica, a experientei echipei si un formular de contact discret, pentru clienti care au adesea nevoie de confidentialitate.",
    heroBullets: [
      "Prezentare clara a ariilor de practica si a experientei echipei",
      "Formular de contact/programare discret si securizat",
      "Design profesional, care construieste incredere din prima secunda",
    ],
    beneficiiHeading: "Ce are nevoie, concret, site-ul unui cabinet de avocatura",
    beneficiiSubheading:
      "Cineva care cauta un avocat este, de cele mai multe ori, intr-o situatie tensionata — site-ul tau trebuie sa transmita profesionalism si incredere rapid.",
    beneficii: [
      {
        icon: "globe",
        title: "Arii de practica prezentate clar",
        text: "Fiecare arie de practica (civil, penal, comercial, familie etc.) are propria sectiune, usor de gasit de cineva care cauta exact acel tip de ajutor.",
      },
      {
        icon: "wrench",
        title: "Formular de programare confidential",
        text: "Oferim un formular de contact discret, fara campuri inutile, pentru clienti care prefera sa inceapa printr-un mesaj, nu printr-un apel.",
      },
      {
        icon: "search",
        title: "SEO pentru cautari relevante",
        text: "Optimizam site-ul pentru cautari de tipul 'avocat [specializare] in [oras]', ca sa apari in fata oamenilor care au exact nevoie de tine.",
      },
      {
        icon: "star",
        title: "Articole si resurse juridice (optional)",
        text: "Putem adauga o sectiune de articole/blog juridic, utila atat pentru vizitatori, cat si pentru pozitionarea in Google pe termen lung.",
      },
    ],
    procesHeading: "Cum se desfasoara proiectul, pas cu pas",
    proces: [
      { title: "Discutie & brief", desc: "Intelegem ariile de practica, pozitionarea cabinetului si publicul tinta." },
      { title: "Design & concept", desc: "Propunem o directie vizuala sobra si profesionala, potrivita domeniului juridic." },
      { title: "Dezvoltare", desc: "Construim site-ul, inclusiv formularul de contact/programare." },
      { title: "Testare & lansare", desc: "Verificam viteza, afisarea pe mobil si functionarea formularelor." },
      { title: "Mentenanta continua", desc: "Te ajutam sa actualizezi continutul si articolele dupa lansare." },
    ],
    deceNoiHeading: "De ce sa alegi Weblex Design",
    deceNoiSubheading: "Peste 10 ani de experienta si 400+ proiecte livrate, cu atentie la domenii unde increderea si confidentialitatea conteaza mult.",
    deceNoi: [
      {
        title: "Design care construieste incredere",
        text: "Alegem o directie vizuala sobra si profesionala, potrivita unui cabinet de avocatura, nu sabloane generice.",
      },
      {
        title: "SEO on-page inclus, nu facturat separat",
        text: "Optimizarea pentru Google face parte din livrare, esentiala intr-un domeniu cu concurenta mare pe cuvinte cheie.",
      },
      {
        title: "Preturi clare, fara costuri ascunse",
        text: "Primesti o oferta exacta inainte sa incepem, cu tot ce este inclus detaliat.",
      },
      {
        title: "Suport real dupa livrare",
        text: "Oferim mentenanta continua: actualizari de securitate, back-up-uri si interventii rapide cand apare o problema.",
      },
    ],
    ctaHeading: "Hai sa construim site-ul cabinetului tau de avocatura",
    ctaText: "Spune-ne cateva detalii despre cabinet si iti trimitem o oferta personalizata, fara obligatii.",
    ctaButtonLabel: "Cere o oferta gratuita",
    faqHeading: "Intrebari frecvente despre site-urile pentru cabinete de avocatura",
    faq: [
      {
        question: "Formularul de contact este confidential?",
        answer:
          "Da, construim formularele astfel incat informatiile trimise sa ajunga direct la tine, prin canale securizate, fara sa fie stocate sau expuse public.",
      },
      {
        question: "Cat costa un site pentru cabinet de avocatura?",
        answer:
          "Pornim de la pachetele noastre standard de site de prezentare (de la 249 EUR), in functie de numarul de arii de practica si pagini necesare.",
      },
      {
        question: "Puteti scrie voi continutul despre ariile de practica?",
        answer:
          "Putem ajuta la structurare si formulare, dar continutul juridic de fond (descrierea exacta a serviciilor, termenii specifici) este indicat sa vina de la tine, pentru acuratete.",
      },
      {
        question: "Site-ul va aparea in Google cand cineva cauta un avocat in orasul meu?",
        answer:
          "Optimizarea SEO on-page pentru orasul si specializarile tale este inclusa in livrare, iar pentru rezultate si mai bune oferim si servicii dedicate de optimizare SEO continua.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // 6. Industrie (companii de productie/industriale)
  // ------------------------------------------------------------------
  {
    slug: "site-web-industrie",
    path: "/site-web-industrie",
    navLabel: "Site web pentru companii industriale",
    seoTitle: "Creare Site Web pentru Companii Industriale si de Productie",
    seoDescription:
      "Site web pentru companii industriale, cu prezentare produse, certificari si formular de cerere oferta B2B. Design profesional, optimizat pentru Google. Cere o oferta.",
    breadcrumbName: "Site web pentru companii industriale",
    heroEyebrow: "Site web pentru companii industriale",
    h1: "Site web pentru companii industriale, gandit pentru clienti B2B",
    heroSubheading:
      "Construim site-ul companiei tale industriale in jurul a ceea ce cauta un potential partener de afaceri: ce produci sau fabrici, ce certificari ai si cum poate cere rapid o oferta.",
    heroBullets: [
      "Prezentare clara a produselor/serviciilor si capacitatii de productie",
      "Sectiune dedicata certificarilor si standardelor de calitate",
      "Formular de cerere oferta, gandit pentru clienti B2B",
    ],
    beneficiiHeading: "Ce are nevoie, concret, site-ul unei companii industriale",
    beneficiiSubheading:
      "Un potential partener de afaceri verifica site-ul tau inainte sa te contacteze — trebuie sa gaseasca rapid ce il intereseaza: capacitate, calitate, seriozitate.",
    beneficii: [
      {
        icon: "wrench",
        title: "Prezentare produse si capacitate de productie",
        text: "O sectiune clara, cu specificatii tehnice si capacitati, usor de parcurs de un decident tehnic sau de achizitii.",
      },
      {
        icon: "star",
        title: "Certificari si standarde de calitate",
        text: "Certificarile ISO si alte standarde pe care le detii sunt afisate vizibil — un argument important pentru clienti industriali.",
      },
      {
        icon: "globe",
        title: "Formular de cerere oferta B2B",
        text: "Un formular structurat (produs, cantitate, specificatii) face mai usor pentru clienti sa iti trimita o cerere clara, nu doar un mesaj vag.",
      },
      {
        icon: "search",
        title: "Vizibilitate pentru cautari de nisa",
        text: "Optimizam site-ul pentru cuvinte cheie specifice industriei tale, unde concurenta e mai mica, dar relevanta e foarte mare.",
      },
    ],
    procesHeading: "Cum se desfasoara proiectul, pas cu pas",
    proces: [
      { title: "Discutie & brief", desc: "Intelegem produsele/serviciile, certificarile si publicul tinta (B2B, B2C sau ambele)." },
      { title: "Design & concept", desc: "Propunem o directie vizuala profesionala, potrivita unei companii industriale." },
      { title: "Dezvoltare", desc: "Construim site-ul, inclusiv sectiunile de produse si formularul de cerere oferta." },
      { title: "Testare & lansare", desc: "Verificam viteza, afisarea pe mobil si functionarea formularelor." },
      { title: "Mentenanta continua", desc: "Te ajutam sa actualizezi produsele si certificarile dupa lansare." },
    ],
    deceNoiHeading: "De ce sa alegi Weblex Design",
    deceNoiSubheading: "Peste 10 ani de experienta si 400+ proiecte livrate, inclusiv pentru companii industriale si de productie.",
    deceNoi: [
      {
        title: "Intelegem vanzarile B2B",
        text: "Construim site-ul in jurul ciclului de decizie B2B, mai lung si mai tehnic decat la vanzarile catre consumatori.",
      },
      {
        title: "SEO de nisa, nu doar cuvinte cheie generice",
        text: "Optimizam pentru termenii tehnici specifici industriei tale, unde concurenta e mai mica si rezultatele vin mai rapid.",
      },
      {
        title: "Preturi clare, fara costuri ascunse",
        text: "Primesti o oferta exacta inainte sa incepem, cu tot ce este inclus detaliat.",
      },
      {
        title: "Suport real dupa livrare",
        text: "Oferim mentenanta continua: actualizari de securitate, back-up-uri si interventii rapide cand apare o problema.",
      },
    ],
    ctaHeading: "Hai sa construim site-ul care iti aduce parteneri de afaceri noi",
    ctaText: "Spune-ne cateva detalii despre companie si iti trimitem o oferta personalizata, fara obligatii.",
    ctaButtonLabel: "Cere o oferta gratuita",
    faqHeading: "Intrebari frecvente despre site-urile pentru companii industriale",
    faq: [
      {
        question: "Puteti prezenta specificatii tehnice detaliate ale produselor?",
        answer:
          "Da, putem crea pagini de produs/serviciu cu fise tehnice, specificatii si documente descarcabile (PDF), in functie de ce ai nevoie.",
      },
      {
        question: "Cat costa un site pentru o companie industriala?",
        answer:
          "Pornim de la pachetele noastre standard de site de prezentare (de la 249 EUR), iar pentru site-uri cu multe produse sau cataloage complexe facem o oferta personalizata.",
      },
      {
        question: "Site-ul poate fi folosit si pentru clienti internationali?",
        answer:
          "Da, putem construi site-ul multilingv (de exemplu romana si engleza), util daca lucrezi sau vrei sa lucrezi cu parteneri din afara tarii.",
      },
      {
        question: "Includeti si optimizare SEO pentru termenii tehnici din domeniul nostru?",
        answer:
          "Da, optimizarea SEO on-page pentru termenii specifici industriei tale este inclusa in livrare.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // 7. Energie
  // ------------------------------------------------------------------
  {
    slug: "site-web-energie",
    path: "/site-web-energie",
    navLabel: "Site web pentru companii din energie",
    seoTitle: "Creare Site Web pentru Companii din Domeniul Energiei",
    seoDescription:
      "Site web pentru companii din domeniul energiei, cu prezentare servicii, proiecte realizate si formular de cerere oferta. Design profesional, optimizat pentru Google.",
    breadcrumbName: "Site web pentru companii din energie",
    heroEyebrow: "Site web pentru companii din energie",
    h1: "Site web pentru companii din domeniul energiei, care genereaza cereri de oferta",
    heroSubheading:
      "Construim site-ul companiei tale din domeniul energiei in jurul increderii si expertizei: proiecte realizate, certificari si un drum clar catre o cerere de oferta.",
    heroBullets: [
      "Prezentare servicii si proiecte realizate, cu rezultate concrete",
      "Sectiune dedicata certificarilor si autorizatiilor",
      "Formular de cerere oferta, simplu si rapid de completat",
    ],
    beneficiiHeading: "Ce are nevoie, concret, site-ul unei companii din energie",
    beneficiiSubheading:
      "Fie ca vorbim despre clienti rezidentiali sau comerciali, increderea conteaza enorm intr-un domeniu cu investitii mari — site-ul tau trebuie sa o construiasca rapid.",
    beneficii: [
      {
        icon: "star",
        title: "Proiecte realizate, cu rezultate concrete",
        text: "O sectiune de tip portofoliu, cu proiecte finalizate si, daca e posibil, economii sau rezultate masurabile, construieste incredere mai bine decat orice descriere.",
      },
      {
        icon: "wrench",
        title: "Certificari si autorizatii vizibile",
        text: "Autorizatiile si certificarile pe care le detii sunt afisate clar — un argument important cand clientul compara mai multi furnizori.",
      },
      {
        icon: "globe",
        title: "Formular de cerere oferta",
        text: "Un formular simplu, cu campurile potrivite (tip proiect, consum estimat etc.), face mai usor pentru clienti sa iti trimita o cerere clara.",
      },
      {
        icon: "search",
        title: "SEO local si de nisa",
        text: "Optimizam site-ul atat pentru cautari locale, cat si pentru termeni specifici domeniului energetic.",
      },
    ],
    procesHeading: "Cum se desfasoara proiectul, pas cu pas",
    proces: [
      { title: "Discutie & brief", desc: "Intelegem serviciile oferite, zona de acoperire si tipul de clienti (rezidentiali/comerciali)." },
      { title: "Design & concept", desc: "Propunem o directie vizuala profesionala, care transmite incredere si expertiza." },
      { title: "Dezvoltare", desc: "Construim site-ul, inclusiv sectiunea de proiecte si formularul de cerere oferta." },
      { title: "Testare & lansare", desc: "Verificam viteza, afisarea pe mobil si functionarea formularelor." },
      { title: "Mentenanta continua", desc: "Te ajutam sa actualizezi proiectele si certificarile dupa lansare." },
    ],
    deceNoiHeading: "De ce sa alegi Weblex Design",
    deceNoiSubheading: "Peste 10 ani de experienta si 400+ proiecte livrate, cu intelegere pentru domenii unde increderea tehnica e esentiala.",
    deceNoi: [
      {
        title: "Design care transmite expertiza",
        text: "Alegem o directie vizuala profesionala, potrivita unui domeniu tehnic, nu sabloane generice de prezentare.",
      },
      {
        title: "SEO local si de nisa, inclus",
        text: "Optimizarea pentru cautari locale si pentru termenii specifici domeniului energetic face parte din livrare.",
      },
      {
        title: "Preturi clare, fara costuri ascunse",
        text: "Primesti o oferta exacta inainte sa incepem, cu tot ce este inclus detaliat.",
      },
      {
        title: "Suport real dupa livrare",
        text: "Oferim mentenanta continua: actualizari de securitate, back-up-uri si interventii rapide cand apare o problema.",
      },
    ],
    ctaHeading: "Hai sa construim site-ul care iti aduce cereri de oferta calificate",
    ctaText: "Spune-ne cateva detalii despre companie si iti trimitem o oferta personalizata, fara obligatii.",
    ctaButtonLabel: "Cere o oferta gratuita",
    faqHeading: "Intrebari frecvente despre site-urile pentru companii din energie",
    faq: [
      {
        question: "Puteti prezenta proiecte finalizate, cu poze si rezultate?",
        answer:
          "Da, putem crea o sectiune de tip portofoliu/proiecte, cu poze, descriere si, daca ai aceste date, rezultate masurabile (economii, capacitate instalata etc.).",
      },
      {
        question: "Cat costa un site pentru o companie din domeniul energiei?",
        answer:
          "Pornim de la pachetele noastre standard de site de prezentare (de la 249 EUR), in functie de numarul de pagini si functionalitati necesare.",
      },
      {
        question: "Puteti adauga un calculator sau simulator pentru clienti?",
        answer:
          "Da, putem discuta un modul de tip calculator/simulator (de exemplu estimare economii), tratat ca o functionalitate custom, cu oferta separata.",
      },
      {
        question: "Includeti optimizare SEO pentru zona in care activam?",
        answer:
          "Da, optimizarea SEO on-page pentru zona/zonele in care activezi este inclusa in livrare.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // 8. Instalatii
  // ------------------------------------------------------------------
  {
    slug: "site-web-instalatii",
    path: "/site-web-instalatii",
    navLabel: "Site web pentru firme de instalatii",
    seoTitle: "Creare Site Web pentru Firme de Instalatii",
    seoDescription:
      "Site web pentru firme de instalatii (sanitare, electrice, termice), cu lista de servicii, zone deservite si formular de solicitare interventie. Cere o oferta.",
    breadcrumbName: "Site web pentru firme de instalatii",
    heroEyebrow: "Site web pentru firme de instalatii",
    h1: "Site web pentru firme de instalatii, care aduce solicitari reale",
    heroSubheading:
      "Construim site-ul firmei tale de instalatii in jurul a ceea ce cauta un client cu o problema urgenta: ce servicii oferi, in ce zone lucrezi si cum te poate contacta rapid.",
    heroBullets: [
      "Lista clara de servicii (sanitare, electrice, termice, interventii urgente)",
      "Zone/orase deservite, afisate clar",
      "Formular sau buton rapid de solicitare interventie",
    ],
    beneficiiHeading: "Ce are nevoie, concret, site-ul unei firme de instalatii",
    beneficiiSubheading:
      "Un client cu o problema de instalatii cauta de obicei rapid, uneori in regim de urgenta — site-ul tau trebuie sa raspunda la fel de rapid.",
    beneficii: [
      {
        icon: "wrench",
        title: "Servicii prezentate clar, pe categorii",
        text: "Instalatii sanitare, electrice, termice sau interventii de urgenta — fiecare categorie are propria sectiune, usor de gasit.",
      },
      {
        icon: "globe",
        title: "Zone si orase deservite",
        text: "Afisam clar in ce zone lucrezi, ca sa nu pierzi timp cu solicitari din afara ariei tale de acoperire.",
      },
      {
        icon: "megaphone",
        title: "Contact rapid pentru urgente",
        text: "Buton de apel direct si formular scurt, vizibile din orice pagina — util cand clientul are o problema care nu suporta amanare.",
      },
      {
        icon: "search",
        title: "SEO local pentru fiecare zona deservita",
        text: "Optimizam site-ul pentru cautari de tipul 'instalator in [oras/cartier]', ca sa apari in fata clientilor din zonele tale.",
      },
    ],
    procesHeading: "Cum se desfasoara proiectul, pas cu pas",
    proces: [
      { title: "Discutie & brief", desc: "Intelegem serviciile oferite, zonele deservite si cum gestionezi acum solicitarile." },
      { title: "Design & concept", desc: "Propunem o structura clara: servicii, zone, contact rapid." },
      { title: "Dezvoltare", desc: "Construim site-ul, inclusiv formularul/butonul de solicitare interventie." },
      { title: "Testare & lansare", desc: "Verificam viteza, afisarea pe mobil si functionarea formularelor." },
      { title: "Mentenanta continua", desc: "Te ajutam sa actualizezi serviciile si zonele deservite dupa lansare." },
    ],
    deceNoiHeading: "De ce sa alegi Weblex Design",
    deceNoiSubheading: "Peste 10 ani de experienta si 400+ proiecte livrate, inclusiv pentru afaceri locale de servicii.",
    deceNoi: [
      {
        title: "Intelegem urgenta clientului",
        text: "Construim site-ul astfel incat clientul sa gaseasca in cateva secunde raspunsul la 'faceti ce am eu nevoie?' si 'cum va contactez?'.",
      },
      {
        title: "SEO local inclus, nu optional",
        text: "Optimizarea pentru cautari din zonele tale face parte din livrare, esentiala intr-un domeniu unde clientii cauta 'aproape de mine'.",
      },
      {
        title: "Preturi clare, fara costuri ascunse",
        text: "Primesti o oferta exacta inainte sa incepem, cu tot ce este inclus detaliat.",
      },
      {
        title: "Suport real dupa livrare",
        text: "Te ajutam sa actualizezi site-ul oricand e nevoie, fara bataie de cap.",
      },
    ],
    ctaHeading: "Hai sa construim site-ul care iti aduce solicitari reale",
    ctaText: "Spune-ne cateva detalii despre firma ta si iti trimitem o oferta personalizata, fara obligatii.",
    ctaButtonLabel: "Cere o oferta gratuita",
    faqHeading: "Intrebari frecvente despre site-urile pentru firme de instalatii",
    faq: [
      {
        question: "Pot afisa mai multe orase/zone deservite pe acelasi site?",
        answer:
          "Da, putem structura site-ul cu o sectiune dedicata zonelor deservite, astfel incat clientii din fiecare zona sa gaseasca usor informatia relevanta.",
      },
      {
        question: "Cat costa un site pentru o firma de instalatii?",
        answer:
          "Pornim de la pachetele noastre standard de site de prezentare (de la 249 EUR), in functie de numarul de servicii si zone pe care vrei sa le prezinti.",
      },
      {
        question: "Pot primi solicitari si in afara orelor de program?",
        answer:
          "Da, formularul de pe site functioneaza non-stop, deci poti primi solicitari si in afara programului, pe care le preiei cand esti disponibil.",
      },
      {
        question: "Ma ajuta site-ul sa apar pentru cautari de urgenta, gen 'instalator non-stop'?",
        answer:
          "Da, daca oferi servicii de urgenta, le evidentiem clar pe site si optimizam pentru cautarile specifice acestui tip de cerere.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // 9. Fotovoltaice
  // ------------------------------------------------------------------
  {
    slug: "site-web-fotovoltaice",
    path: "/site-web-fotovoltaice",
    navLabel: "Site web pentru firme de fotovoltaice",
    seoTitle: "Creare Site Web pentru Firme de Panouri Fotovoltaice",
    seoDescription:
      "Site web pentru firme de instalare panouri fotovoltaice, cu prezentare sisteme, proiecte realizate si formular de cerere oferta personalizata. Cere o oferta.",
    breadcrumbName: "Site web pentru firme de fotovoltaice",
    heroEyebrow: "Site web pentru firme de fotovoltaice",
    h1: "Site web pentru firme de fotovoltaice, care transforma vizitatorii in cereri de oferta",
    heroSubheading:
      "Construim site-ul firmei tale de panouri fotovoltaice in jurul increderii si claritatii: ce sisteme oferi, ce proiecte ai realizat si cum poate un client sa ceara rapid o oferta personalizata.",
    heroBullets: [
      "Prezentare clara a sistemelor si pachetelor oferite",
      "Proiecte realizate, cu poze si, daca e posibil, economii estimate",
      "Formular de cerere oferta personalizata, simplu de completat",
    ],
    beneficiiHeading: "Ce are nevoie, concret, site-ul unei firme de fotovoltaice",
    beneficiiSubheading:
      "Un potential client se informeaza mult inainte sa investeasca intr-un sistem fotovoltaic — site-ul tau trebuie sa raspunda la intrebarile lui si sa construiasca incredere.",
    beneficii: [
      {
        icon: "star",
        title: "Prezentare sisteme si pachete",
        text: "O sectiune clara cu tipurile de sisteme oferite (on-grid, off-grid, hibrid), puteri disponibile si ce este inclus in fiecare pachet.",
      },
      {
        icon: "camera",
        title: "Proiecte realizate, cu poze",
        text: "Un portofoliu de instalari finalizate, cu poze si, daca ai aceste date, economii estimate, este unul dintre cele mai puternice argumente de vanzare.",
      },
      {
        icon: "globe",
        title: "Formular de cerere oferta personalizata",
        text: "Un formular cu campurile potrivite (consum estimat, suprafata disponibila, tip acoperis) face mai usor pentru clienti sa iti trimita o cerere completa.",
      },
      {
        icon: "search",
        title: "SEO local si de nisa",
        text: "Optimizam site-ul atat pentru cautari locale, cat si pentru termeni specifici domeniului (panouri fotovoltaice, sisteme on-grid etc.).",
      },
    ],
    procesHeading: "Cum se desfasoara proiectul, pas cu pas",
    proces: [
      { title: "Discutie & brief", desc: "Intelegem sistemele oferite, zona de acoperire si tipul de clienti (rezidentiali/comerciali)." },
      { title: "Design & concept", desc: "Propunem o directie vizuala moderna, care transmite incredere si expertiza tehnica." },
      { title: "Dezvoltare", desc: "Construim site-ul, inclusiv sectiunea de proiecte si formularul de cerere oferta." },
      { title: "Testare & lansare", desc: "Verificam viteza, afisarea pe mobil si functionarea formularelor." },
      { title: "Mentenanta continua", desc: "Te ajutam sa actualizezi proiectele si pachetele dupa lansare." },
    ],
    deceNoiHeading: "De ce sa alegi Weblex Design",
    deceNoiSubheading: "Peste 10 ani de experienta si 400+ proiecte livrate, cu intelegere pentru domenii unde decizia de cumparare ia timp.",
    deceNoi: [
      {
        title: "Design care construieste incredere pe termen lung",
        text: "O investitie in panouri fotovoltaice se ia dupa mai multe vizite pe site — construim o experienta care rezista la comparatii repetate.",
      },
      {
        title: "SEO local si de nisa, inclus",
        text: "Optimizarea pentru cautari locale si pentru termenii specifici domeniului fotovoltaic face parte din livrare.",
      },
      {
        title: "Preturi clare, fara costuri ascunse",
        text: "Primesti o oferta exacta inainte sa incepem, cu tot ce este inclus detaliat.",
      },
      {
        title: "Suport real dupa livrare",
        text: "Oferim mentenanta continua: actualizari de securitate, back-up-uri si interventii rapide cand apare o problema.",
      },
    ],
    ctaHeading: "Hai sa construim site-ul care iti aduce cereri de oferta calificate",
    ctaText: "Spune-ne cateva detalii despre firma ta si iti trimitem o oferta personalizata, fara obligatii.",
    ctaButtonLabel: "Cere o oferta gratuita",
    faqHeading: "Intrebari frecvente despre site-urile pentru firme de fotovoltaice",
    faq: [
      {
        question: "Puteti adauga un calculator de economie/randament pe site?",
        answer:
          "Da, putem discuta un modul de tip calculator (estimare economie, perioada de amortizare), tratat ca o functionalitate custom, cu oferta separata.",
      },
      {
        question: "Cat costa un site pentru o firma de fotovoltaice?",
        answer:
          "Pornim de la pachetele noastre standard de site de prezentare (de la 249 EUR), in functie de numarul de pagini si functionalitati necesare.",
      },
      {
        question: "Puteti prezenta certificari si parteneriate cu producatori de panouri?",
        answer:
          "Da, putem crea o sectiune dedicata certificarilor, autorizatiilor si parteneriatelor cu producatori/distribuitori, argumente importante pentru clienti.",
      },
      {
        question: "Includeti optimizare SEO pentru zona in care instalam sisteme?",
        answer:
          "Da, optimizarea SEO on-page pentru zona/zonele in care activezi este inclusa in livrare.",
      },
    ],
  },
];

export function getNichePageBySlug(slug: string): LandingPage | undefined {
  return nichePages.find((p) => p.slug === slug);
}
