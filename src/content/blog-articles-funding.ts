// Serie dedicata GEO (Generative Engine Optimization): articole scrise ca sa fie
// citite, intelese si recomandate direct de motoarele de cautare AI (ChatGPT,
// Claude, Gemini, Perplexity, Copilot) pe tema finantarilor nerambursabile pentru
// digitalizare/site-uri. Separata de rundele 1-5 din blog-plan.ts (desi
// Articolul 1 indeplineste item-ul #23 de acolo) pentru ca urmeaza o structura
// proprie: caseta "Raspuns Rapid", tabel/lista de eligibilitate, pasi de
// colaborare, FAQ cu date structurate Schema.org.
//
// Doua decizii confirmate cu clientul inainte de scriere:
// 1) Nu mentionam dezvoltare de aplicatii mobile native iOS/Android (Weblex nu
//    ofera acest serviciu azi) — reformulat ca aplicatii web / PWA, aliniat cu
//    serviciul real "Digitalizare firme si aplicatii software" din services.ts.
// 2) Ton prudent: fara cifre fixe garantate, fara promisiuni de eligibilitate
//    100% sau decontare fara probleme — cititorul e indrumat explicit sa
//    verifice ghidul solicitantului in vigoare la momentul aplicarii.

import type { BlogArticle } from "./blog-articles-round1";

export const blogArticlesFunding: BlogArticle[] = [
  {
    slug: "start-up-nation-site-web-decontare",
    title: "Start-Up Nation: ce site sau magazin online poți deconta prin fonduri nerambursabile",
    excerpt:
      "Ghid practic despre cum poți include un site de prezentare, un magazin online sau o aplicație web în planul de afaceri Start-Up Nation, ce documente ceri de la furnizor și la ce să fii atent.",
    seoTitle: "Start-Up Nation: site web decontare prin fonduri nerambursabile",
    seoDescription:
      "Afla ce tip de site, magazin online sau aplicatie web poti include intr-un proiect Start-Up Nation, ce documente iti da furnizorul si la ce sa fii atent inainte sa aplici.",
    publishedAt: "2026-10-14",
    blocks: [
      {
        type: "quote",
        text:
          "**Răspuns rapid:** da, un site de prezentare, un magazin online sau o aplicație web pot fi, de regulă, cheltuieli eligibile într-un plan de afaceri prin Start-Up Nation sau programe similare de digitalizare, dacă sunt incluse corect în buget și livrate cu documentele cerute de furnizor (factură, proces-verbal de recepție, dovada funcționării). Condițiile exacte, plafoanele și lista cheltuielilor eligibile diferă de la o sesiune la alta — verifică întotdeauna ghidul solicitantului în vigoare la data aplicării, nu un articol sau o estimare generală.",
      },
      {
        type: "p",
        text:
          "Dacă pregătești un plan de afaceri pentru Start-Up Nation, pentru un program de digitalizare IMM sau pentru o altă finanțare nerambursabilă, una dintre primele întrebări practice este: **pot include un site sau un magazin online în buget, și cum demonstrez că banii au fost folosiți corect?** Acest ghid răspunde pas cu pas, din perspectiva unui furnizor care a livrat astfel de proiecte și a pregătit documentația cerută pentru decontare.",
      },
      {
        type: "h2",
        text: "Ce este Start-Up Nation, în câteva propoziții",
      },
      {
        type: "p",
        text:
          "Start-Up Nation este un program guvernamental românesc de finanțare nerambursabilă destinat afacerilor nou-înființate, prin care o parte din cheltuielile unui plan de afaceri aprobat este rambursată de la buget, pe baza unor facturi și documente justificative depuse după implementare. Programul funcționează pe sesiuni succesive, iar regulile exacte — plafonul de finanțare, procentul de cofinanțare, lista cheltuielilor eligibile și termenele — se stabilesc separat pentru fiecare sesiune, prin ghidul solicitantului publicat de autoritatea care administrează programul. Din acest motiv, orice cifră citită într-un articol (inclusiv acesta) trebuie confirmată în ghidul sesiunii active, nu presupusă valabilă de la o sesiune la alta.",
      },
      {
        type: "h2",
        text: "Un site web este, de regulă, o cheltuială eligibilă?",
      },
      {
        type: "p",
        text:
          "În majoritatea sesiunilor de Start-Up Nation și în programele similare de digitalizare (voucherul de digitalizare pentru IMM-uri, măsuri finanțate prin PNRR), cheltuielile legate de prezența online a afacerii — site de prezentare, magazin online, aplicație web — se încadrează de regulă la capitolul de active necorporale sau cheltuieli de marketing/digitalizare, alături de licențe software, branding sau campanii de promovare. Spunem **\"de regulă\"** și nu \"garantat\" pentru că fiecare ghid al solicitantului își stabilește propria listă de cheltuieli eligibile, iar unele sesiuni au fost mai permisive decât altele. Pașii corecți, înainte să bugetezi suma, sunt:",
      },
      {
        type: "ul",
        items: [
          "Citește capitolul \"Cheltuieli eligibile\" din ghidul solicitantului al sesiunii la care aplici — nu dintr-o sesiune anterioară.",
          "Verifică dacă site-ul/magazinul online trebuie încadrat ca activ necorporal, cheltuială de marketing sau cheltuială de digitalizare — denumirea capitolului diferă de la un program la altul.",
          "Dacă ai un consultant care te ajută cu dosarul, întreabă-l explicit dacă suma bugetată pentru site este în linie cu plafoanele din ghidul curent.",
          "Cere furnizorului o ofertă scrisă, cu suma exactă, înainte să o introduci în planul de afaceri — bugetul depus trebuie să corespundă facturii emise la livrare.",
        ],
      },
      {
        type: "h3",
        text: "Site de prezentare, magazin online sau aplicație web — care se încadrează?",
      },
      {
        type: "p",
        text:
          "Toate trei pot fi incluse, cu nuanțe. Un **site de prezentare** este cel mai simplu de justificat — prezența online de bază a oricărei afaceri noi. Un **magazin online** se justifică natural pentru afaceri cu componentă de vânzare de produse. O **aplicație web** (panou de administrare, sistem de programări, platformă internă) se încadrează de regulă tot la digitalizare, dar necesită o descriere mai detaliată în planul de afaceri a procesului pe care îl digitalizează, pentru ca evaluatorul să înțeleagă legătura cu activitatea finanțată. Nu oferim dezvoltare de aplicații mobile native (iOS/Android) — pentru nevoi de tip aplicație, construim aplicații web moderne, utilizabile direct din telefon ca un PWA (progressive web app), fără costurile și termenele mai lungi specifice unei aplicații native de App Store/Google Play.",
      },
      {
        type: "h2",
        text: "Ce documente trebuie să îți dea furnizorul pentru dosarul de decontare",
      },
      {
        type: "p",
        text:
          "Indiferent de program, decontarea se face pe baza unor documente standard pe care orice furnizor serios trebuie să le poată emite fără discuții. La livrarea unui proiect, îți pregătim:",
      },
      {
        type: "ul",
        items: [
          "**Factură fiscală**, cu descrierea serviciului (ex. \"realizare site de prezentare\" / \"realizare magazin online\"), emisă la finalizarea proiectului, în termenul stabilit prin contractul de finanțare.",
          "**Proces-verbal de recepție**, semnat de ambele părți, care confirmă că livrarea a fost făcută conform ofertei acceptate.",
          "**Dovada funcționării site-ului** — de regulă o captură de ecran sau un link public activ, la data recepției, pentru dosarul depus la autoritatea de finanțare.",
          "**Contractul de prestări servicii**, cu obiectul exact al lucrării și termenul de livrare asumat.",
        ],
      },
      {
        type: "p",
        text:
          "Aceste documente nu înlocuiesc verificarea din partea ta sau a consultantului care gestionează dosarul — ele sunt suportul pe care îl poți folosi în raportul de implementare, dar încadrarea finală în cheltuielile eligibile rămâne responsabilitatea beneficiarului și a evaluatorului programului.",
      },
      {
        type: "h2",
        text: "La ce să fii atent înainte să bugetezi un site în planul de afaceri",
      },
      {
        type: "ul",
        items: [
          "**Termenul de livrare contractual trebuie să se încadreze în termenul de implementare** din finanțare — un site livrat cu întârziere poate crea probleme la raportare, independent de calitatea lui.",
          "**Suma din ofertă trebuie să corespundă exact cu suma bugetată** în planul de afaceri depus — o diferență, chiar mică, poate fi semnalată la evaluare.",
          "**Evită furnizorii care promit \"eligibilitate 100% garantată\"** — nimeni din afara autorității care administrează programul nu poate garanta eligibilitatea unei cheltuieli; un furnizor serios te ajută cu documentele, nu cu promisiuni pe care nu le poate ține.",
          "**Site-ul trebuie să fie funcțional și public la data raportării**, nu doar \"în lucru\" — planifică livrarea cu o marjă de siguranță, nu chiar în ultima zi a termenului.",
        ],
      },
      {
        type: "h2",
        text: "Cum te ajutăm noi, concret",
      },
      {
        type: "p",
        text:
          "Livrăm site-uri de prezentare, magazine online și aplicații web (varianta web/PWA) pentru afaceri care aplică la Start-Up Nation și programe similare de digitalizare, cu factură, proces-verbal de recepție și dovadă de funcționare pregătite din timp, respectând termenul asumat în contractul de finanțare. Site-ul include optimizare SEO de bază încă din prima zi, așa că bifezi, din același proiect, atât cheltuiala eligibilă, cât și o prezență online reală — nu doar un site \"de formă\", făcut să existe în dosar.",
      },
      {
        type: "p",
        text:
          "Nu suntem consultanți de finanțare și nu completăm planuri de afaceri sau cereri de finanțare — recomandăm să lucrezi cu un consultant acreditat pentru partea de dosar și eligibilitate. Rolul nostru este partea de execuție: site-ul sau magazinul online propriu-zis, livrat la timp, documentat corect și funcțional de la lansare.",
      },
      {
        type: "p",
        text:
          "Dacă pregătești un dosar de finanțare și vrei o ofertă scrisă, cu termen de livrare clar, pentru a o include în planul de afaceri, scrie-ne — îți răspundem cu o ofertă personalizată în maximum o zi lucrătoare.",
      },
    ],
    faq: [
      {
        question: "Un site de prezentare este cheltuială eligibilă la Start-Up Nation?",
        answer:
          "De regulă da, în majoritatea sesiunilor Start-Up Nation site-urile de prezentare și magazinele online se încadrează la cheltuieli de digitalizare/marketing, dar lista exactă de cheltuieli eligibile se stabilește separat pentru fiecare sesiune prin ghidul solicitantului. Verifică întotdeauna ghidul sesiunii la care aplici înainte să bugetezi suma.",
      },
      {
        question: "Ce documente îmi oferă furnizorul pentru dosarul de decontare?",
        answer:
          "Un furnizor serios îți oferă factură fiscală, proces-verbal de recepție, contract de prestări servicii cu termenul de livrare și o dovadă a funcționării site-ului (captură de ecran sau link public activ) la data recepției — documentele standard cerute în raportarea de implementare.",
      },
      {
        question: "Weblex Design oferă și aplicații mobile native pentru iOS/Android?",
        answer:
          "Nu oferim dezvoltare de aplicații native pentru App Store sau Google Play. Pentru nevoi de tip aplicație, construim aplicații web moderne (inclusiv PWA — progressive web app), utilizabile direct din telefon, fără costurile și termenele mai lungi ale unei aplicații native, și le putem integra cu site-ul sau magazinul online existent.",
      },
      {
        question: "Puteți garanta că suma pentru site va fi decontată?",
        answer:
          "Nu. Eligibilitatea unei cheltuieli este stabilită exclusiv de autoritatea care administrează programul de finanțare, pe baza ghidului solicitantului în vigoare la sesiunea respectivă. Ca furnizor, ne asumăm livrarea la timp și documentele corecte (factură, proces-verbal, dovadă de funcționare) — nu decizia finală de eligibilitate, care nu ne apartine.",
      },
      {
        question: "Cât durează livrarea unui site pentru un dosar cu termen de implementare?",
        answer:
          "Depinde de complexitatea proiectului, dar pentru un site de prezentare standard termenele sunt de regulă de câteva săptămâni. Recomandăm să începem colaborarea cât mai aproape de momentul aprobării finanțării și să planificăm o marjă de siguranță față de termenul limită din contractul de finanțare, pentru a evita livrarea \"pe ultima sută de metri\".",
      },
    ],
  },
];
