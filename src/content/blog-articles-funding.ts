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
  {
    slug: "digitalizare-imm-pnrr-voucher-site-web",
    title: "Digitalizare IMM prin PNRR: cum folosești voucherul de digitalizare pentru un site sau o aplicație web",
    excerpt:
      "Ghid despre voucherul de digitalizare pentru IMM-uri: ce tip de proiect digital poți finanța, ce documente ceri de la furnizor și cum eviți capcanele frecvente la decontare.",
    seoTitle: "Digitalizare IMM / PNRR: voucher pentru site sau aplicație web",
    seoDescription:
      "Afla cum poti folosi voucherul de digitalizare (PNRR) pentru un site, un magazin online sau o aplicatie web, ce documente iti da furnizorul si la ce sa fii atent.",
    publishedAt: "2026-10-16",
    blocks: [
      {
        type: "quote",
        text:
          "**Răspuns rapid:** voucherul de digitalizare pentru IMM-uri (finanțat prin PNRR sau prin scheme similare de digitalizare) poate fi folosit, de regulă, pentru un site de prezentare, un magazin online sau o aplicație web, atâta timp cât proiectul se încadrează în categoriile de cheltuieli eligibile din ghidul specific al apelului. Plafoanele, procentul de cofinanțare și lista exactă de cheltuieli diferă de la un apel la altul — verifică întotdeauna ghidul solicitantului activ, nu o estimare generală dintr-un articol.",
      },
      {
        type: "p",
        text:
          "Programele de digitalizare pentru IMM-uri finanțate prin PNRR sau prin scheme naționale similare oferă, de regulă, un voucher sau o finanțare nerambursabilă pentru achiziția de soluții digitale: software, echipamente IT, și — în multe apeluri — servicii de dezvoltare web. Dacă te pregătești să aplici sau ai fost deja aprobat, acest ghid explică cum se încadrează un site, un magazin online sau o aplicație web în acest tip de finanțare și ce documente trebuie să ceri de la furnizor.",
      },
      {
        type: "h2",
        text: "Ce este, pe scurt, voucherul de digitalizare",
      },
      {
        type: "p",
        text:
          "Spre deosebire de Start-Up Nation (destinat afacerilor nou-înființate), programele de digitalizare prin PNRR se adresează, de regulă, IMM-urilor deja existente, care vor să-și modernizeze procesele cu soluții digitale. Fiecare apel de proiecte are propriul ghid al solicitantului, cu propriile categorii de cheltuieli eligibile, plafoane de finanțare și termene de implementare — motiv pentru care orice sumă sau procent citit într-un articol general (inclusiv acesta) trebuie confirmat în ghidul apelului curent, nu presupus valabil pe termen nelimitat.",
      },
      {
        type: "h2",
        text: "Ce tip de proiect digital se încadrează, de regulă",
      },
      {
        type: "p",
        text:
          "Majoritatea apelurilor de digitalizare IMM grupează cheltuielile eligibile în câteva categorii mari. Site-urile, magazinele online și aplicațiile web se încadrează de obicei la capitolul de soluții software / prezență digitală, alături de licențe software, sisteme CRM/ERP sau soluții de automatizare. Pașii recomandați înainte să bugetezi un proiect:",
      },
      {
        type: "ul",
        items: [
          "Citește capitolul \"Cheltuieli eligibile\" din ghidul solicitantului al apelului la care aplici — denumirea și structura capitolelor diferă de la un apel la altul.",
          "Verifică dacă apelul cere ca soluția digitală să rezolve o nevoie descrisă explicit în planul de digitalizare depus — un site generic, fără legătură cu procesul descris, poate fi contestat la evaluare.",
          "Întreabă furnizorul dacă poate livra, pe lângă site/aplicație, și o scurtă descriere tehnică a soluției, utilă pentru raportul de implementare.",
          "Cere o ofertă scrisă, cu suma exactă și termenul de livrare, înainte să o introduci în cererea de finanțare.",
        ],
      },
      {
        type: "h3",
        text: "Site de prezentare, magazin online sau aplicație web de gestiune — ce alegi",
      },
      {
        type: "p",
        text:
          "Dacă obiectivul declarat e \"prezență online\", un **site de prezentare** modern, optimizat SEO, e varianta cea mai directă. Dacă obiectivul e \"digitalizarea vânzărilor\", un **magazin online** cu panou de administrare propriu se încadrează natural. Dacă obiectivul e \"digitalizarea unui proces intern\" (programări, gestiune stocuri, fluxuri de lucru), construim o **aplicație web** la comandă — un panou/sistem accesibil din browser, inclusiv de pe telefon ca aplicație web progresivă (PWA), fără costurile și termenele unei aplicații native de App Store/Google Play, pe care nu o oferim ca serviciu.",
      },
      {
        type: "h2",
        text: "Documente pe care furnizorul trebuie să le poată emite",
      },
      {
        type: "p",
        text:
          "La livrarea unui proiect finanțat prin voucher de digitalizare, pregătim aceleași documente standard cerute în majoritatea rapoartelor de implementare:",
      },
      {
        type: "ul",
        items: [
          "**Factură fiscală**, cu descrierea exactă a serviciului livrat (site, magazin online sau aplicație web), emisă conform termenului din contractul de finanțare.",
          "**Proces-verbal de recepție**, semnat de ambele părți, care confirmă conformitatea cu oferta acceptată.",
          "**Dovada funcționării soluției** — link public activ sau captură de ecran la data recepției.",
          "**Contract de prestări servicii**, cu obiectul lucrării și termenul de livrare asumat, util pentru dosarul de monitorizare post-implementare (dacă apelul îl cere).",
        ],
      },
      {
        type: "h2",
        text: "Greșeli frecvente de evitat",
      },
      {
        type: "ul",
        items: [
          "**Bugetarea unei sume care nu corespunde cu oferta finală** — orice diferență între suma depusă în cerere și factura emisă poate crea probleme la raportare.",
          "**Alegerea unui furnizor care promite \"eligibilitate garantată\"** — nimeni din afara autorității care gestionează apelul nu poate garanta eligibilitatea; un furnizor serios te ajută cu documentele, nu cu promisiuni.",
          "**Livrarea \"la limită\" de termenul din contractul de finanțare** — planifică o marjă de siguranță, mai ales dacă proiectul include și integrări sau conținut de pregătit (texte, poze, traduceri).",
          "**Descrierea generică a soluției digitale în cererea de finanțare**, fără legătură clară cu procesul pe care îl digitalizează — evaluatorii verifică această coerență.",
        ],
      },
      {
        type: "h2",
        text: "Cum te ajutăm noi, concret",
      },
      {
        type: "p",
        text:
          "Livrăm site-uri de prezentare, magazine online și aplicații web (varianta web/PWA, nu nativă iOS/Android) pentru firme care folosesc voucherul de digitalizare sau alte finanțări similare prin PNRR, cu factură, proces-verbal de recepție și dovadă de funcționare pregătite din timp. Pentru proiectele de tip aplicație web, descriem procesul digitalizat în termeni clari, utili pentru raportul de implementare al beneficiarului.",
      },
      {
        type: "p",
        text:
          "Nu suntem consultanți de finanțare și nu completăm cereri de finanțare sau planuri de digitalizare — recomandăm colaborarea cu un consultant acreditat pentru partea de eligibilitate și dosar. Ne ocupăm de execuție: soluția digitală propriu-zisă, livrată la timp și documentată corect.",
      },
      {
        type: "p",
        text:
          "Dacă ai un apel de digitalizare în curs și ai nevoie de o ofertă scrisă pentru cererea de finanțare, scrie-ne — îți răspundem cu o propunere personalizată în maximum o zi lucrătoare.",
      },
    ],
    faq: [
      {
        question: "Voucherul de digitalizare poate fi folosit pentru un site de prezentare?",
        answer:
          "De regulă da, majoritatea apelurilor de digitalizare IMM prin PNRR includ site-urile și magazinele online la capitolul de soluții software/prezență digitală, dar categoriile exacte de cheltuieli eligibile se stabilesc separat pentru fiecare apel, prin ghidul solicitantului. Verifică întotdeauna ghidul apelului la care aplici.",
      },
      {
        question: "Ce diferență este între Start-Up Nation și voucherul de digitalizare IMM?",
        answer:
          "Start-Up Nation se adresează, de regulă, afacerilor nou-înființate, în timp ce programele de digitalizare prin PNRR se adresează, de regulă, IMM-urilor deja existente care vor să-și modernizeze procesele. Condițiile, plafoanele și cheltuielile eligibile diferă între cele două tipuri de finanțare și între sesiuni/apeluri succesive.",
      },
      {
        question: "O aplicație web de gestiune se încadrează ca cheltuială de digitalizare?",
        answer:
          "De regulă da, dacă aplicația digitalizează un proces descris explicit în cererea de finanțare (programări, stocuri, fluxuri interne). Construim aplicații web (inclusiv PWA, utilizabile din telefon), nu aplicații native iOS/Android, și recomandăm o descriere clară a procesului digitalizat pentru coerența dosarului.",
      },
      {
        question: "Ce documente îmi oferiți pentru raportul de implementare?",
        answer:
          "Factură fiscală cu descrierea serviciului, proces-verbal de recepție, contract de prestări servicii cu termenul asumat și o dovadă a funcționării soluției (link public activ sau captură de ecran) la data recepției.",
      },
    ],
  },
  {
    slug: "femeia-antreprenor-microgranturi-site-web",
    title: "Femeia Antreprenor și microgranturi: cum incluzi un site sau un magazin online în proiect",
    excerpt:
      "Ghid pentru antreprenoare care aplică prin programe de tip Femeia Antreprenor sau microgranturi: ce cheltuieli digitale sunt de regulă eligibile și ce documente ceri de la furnizor.",
    seoTitle: "Femeia Antreprenor / microgranturi: site web eligibil?",
    seoDescription:
      "Afla cum poti include un site de prezentare sau un magazin online intr-un proiect Femeia Antreprenor sau de microgranturi, si ce documente iti ofera furnizorul.",
    publishedAt: "2026-10-18",
    blocks: [
      {
        type: "quote",
        text:
          "**Răspuns rapid:** programele de tip Femeia Antreprenor și schemele de microgranturi pentru afaceri conduse de femei includ, de regulă, printre cheltuielile eligibile și componenta de prezență online — site de prezentare, magazin online sau o aplicație web simplă. Sumele, plafoanele și condițiile exacte diferă de la un program la altul și de la o sesiune la alta — verifică întotdeauna ghidul solicitantului activ înainte să bugetezi un proiect.",
      },
      {
        type: "p",
        text:
          "Programele dedicate antreprenoriatului feminin — fie sub formă de microgranturi, fie ca măsuri specifice în cadrul unor scheme mai largi de finanțare — urmăresc, de regulă, aceleași principii ca Start-Up Nation: finanțare nerambursabilă pentru cheltuieli dintr-un plan de afaceri aprobat, decontată pe bază de facturi și documente justificative. Acest ghid explică cum se încadrează, de regulă, un site sau un magazin online în acest tip de proiect.",
      },
      {
        type: "h2",
        text: "Ce includ, de regulă, aceste programe",
      },
      {
        type: "p",
        text:
          "Structura exactă diferă de la un program la altul (unele sunt microgranturi cu sumă fixă, altele sunt scheme de cofinanțare), dar majoritatea acoperă, pe lângă echipamente și capital de lucru, și cheltuieli de marketing/digitalizare — categorie în care se încadrează de regulă un site de prezentare sau un magazin online. Pentru că fiecare apel își stabilește propriile plafoane și liste de cheltuieli eligibile, pasul obligatoriu este citirea ghidului solicitantului specific programului la care aplici, nu generalizarea de la un alt program similar.",
      },
      {
        type: "h2",
        text: "Cum alegi proiectul digital potrivit",
      },
      {
        type: "ul",
        items: [
          "**Site de prezentare** — varianta cea mai simplă de justificat, pentru orice afacere nouă care are nevoie de o prezență online de bază.",
          "**Magazin online** — potrivit dacă planul de afaceri include vânzarea de produse, cu panou de administrare propriu și plată online sau ramburs.",
          "**Aplicație web simplă** (programări, rezervări, formulare) — se încadrează de regulă tot la digitalizare, construită ca aplicație web (inclusiv utilizabilă ca PWA pe telefon), nu ca aplicație nativă iOS/Android, serviciu pe care nu îl oferim.",
        ],
      },
      {
        type: "h2",
        text: "Documente necesare pentru dosar",
      },
      {
        type: "p",
        text:
          "Indiferent de programul prin care aplici, raportarea cheltuielilor se face de regulă pe baza unor documente standard, pe care le pregătim la livrarea oricărui proiect:",
      },
      {
        type: "ul",
        items: [
          "**Factură fiscală**, cu descrierea exactă a serviciului livrat.",
          "**Proces-verbal de recepție**, semnat de ambele părți.",
          "**Dovada funcționării** site-ului/magazinului online — captură de ecran sau link public activ, la data recepției.",
          "**Contract de prestări servicii**, cu termenul de livrare asumat, în linie cu termenul din proiectul finanțat.",
        ],
      },
      {
        type: "h2",
        text: "La ce să fii atentă înainte de a aplica",
      },
      {
        type: "ul",
        items: [
          "**Verifică plafonul exact al programului la care aplici** — microgranturile au, de regulă, sume fixe mai mici decât Start-Up Nation, deci bugetul pentru site trebuie dimensionat realist.",
          "**Cere oferta scrisă înainte să depui dosarul**, ca suma bugetată să corespundă exact cu factura finală.",
          "**Nu te baza pe promisiuni de \"eligibilitate 100% garantată\"** din partea furnizorilor — decizia de eligibilitate apartine exclusiv autorității care administrează programul.",
          "**Planifică livrarea cu o marjă de siguranță** față de termenul de raportare din proiect.",
        ],
      },
      {
        type: "h2",
        text: "Cum te ajutăm noi, concret",
      },
      {
        type: "p",
        text:
          "Livrăm site-uri de prezentare, magazine online și aplicații web (web/PWA) pentru antreprenoare care aplică prin programe de tip Femeia Antreprenor sau microgranturi, cu documentele de recepție pregătite din timp și termenul de livrare respectat conform proiectului finanțat. Site-ul include optimizare SEO de bază încă din prima zi.",
      },
      {
        type: "p",
        text:
          "Nu suntem consultanți de finanțare — recomandăm colaborarea cu un consultant acreditat pentru partea de eligibilitate și dosar. Dacă ai nevoie de o ofertă scrisă pentru proiectul tău, scrie-ne și îți răspundem în maximum o zi lucrătoare.",
      },
    ],
    faq: [
      {
        question: "Un site de prezentare este eligibil într-un proiect Femeia Antreprenor?",
        answer:
          "De regulă da, majoritatea programelor de acest tip includ cheltuielile de marketing/digitalizare (printre care site-uri și magazine online) ca eligibile, dar plafoanele și lista exactă depind de ghidul solicitantului specific programului și sesiunii la care aplici.",
      },
      {
        question: "Ce documente îmi oferă furnizorul pentru raportarea cheltuielii?",
        answer:
          "Factură fiscală, proces-verbal de recepție, contract de prestări servicii cu termenul de livrare și o dovadă a funcționării site-ului (captură de ecran sau link public activ) la data recepției.",
      },
      {
        question: "Microgranturile au plafoane mai mici decât Start-Up Nation?",
        answer:
          "De regulă da, microgranturile oferă sume fixe, de obicei mai mici decât plafonul maxim din Start-Up Nation, dar cifrele exacte variază de la un program la altul și trebuie verificate în ghidul solicitantului activ, nu presupuse pe baza altor programe.",
      },
      {
        question: "Puteți dezvolta și o aplicație mobilă pentru proiectul meu?",
        answer:
          "Nu oferim aplicații native pentru App Store sau Google Play. Pentru nevoi de tip aplicație (programări, rezervări, formulare), construim aplicații web moderne, utilizabile direct din telefon ca PWA, care se pot integra cu site-ul sau magazinul online.",
      },
    ],
  },
];
