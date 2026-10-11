// Planul editorial de blog — 30 de articole, impartite in 5 runde de cate 6.
// Fiecare runda e scrisa integral (titlu, excerpt, continut, SEO) si livrata ca
// script de seed in Payload (vezi src/seed/seed-blog.ts), nu doar ca idei.
//
// Status: Runda 1 (articolele 1-6) — SCRISA, livrata.
// Runda 2 (7-12), Runda 3 (13-18), Runda 4 (19-24), Runda 5 (25-30) — de scris.

export type BlogPlanItem = {
  order: number;
  title: string;
  category: string;
  targetKeyword: string;
  angle: string;
  round: 1 | 2 | 3 | 4 | 5;
};

export const blogPlan: BlogPlanItem[] = [
  // ---- Runda 1 — ghiduri de baza, cele mai cautate subiecte (SCRISA) ----
  { order: 1, title: "Cât costă un site de prezentare în 2026 — ghid complet de preț", category: "Prețuri", targetKeyword: "cat costa un site de prezentare", angle: "Ghid de pret pe pachete (Basic/Standard/Pro), factori care influenteaza costul, capcane de evitat.", round: 1 },
  { order: 2, title: "Magazin online sau pagină de Facebook? De ce afacerea ta are nevoie de propriul site", category: "E-commerce", targetKeyword: "magazin online vs pagina facebook", angle: "Compara dependenta de platforme sociale cu detinerea unui magazin propriu — control, SEO, plati, date clienti.", round: 1 },
  { order: 3, title: "Cum alegi firma potrivită pentru crearea unui site web: 7 întrebări de pus înainte să semnezi", category: "Ghid cumparare", targetKeyword: "cum aleg firma de web design", angle: "Checklist practic pentru antreprenori care cauta o agentie — portofoliu, mentenanta, SEO inclus, timp de livrare.", round: 1 },
  { order: 4, title: "SEO local pentru afaceri mici: ghid practic pas cu pas", category: "SEO", targetKeyword: "seo local afaceri mici", angle: "Pasii concreti: Google Business Profile, cuvinte cheie locale, recenzii, backlink-uri locale, continut pe oras.", round: 1 },
  { order: 5, title: "De ce are nevoie afacerea ta de un CRM (și când e momentul să investești)", category: "Digitalizare", targetKeyword: "cand am nevoie de crm", angle: "Semne ca procesele manuale (Excel, hartii) te incetinesc, beneficii concrete, cum arata un CRM custom vs unul generic.", round: 1 },
  { order: 6, title: "Mentenanță site web: ce include și de ce contează pentru securitate și SEO", category: "Mentenanta", targetKeyword: "mentenanta site web ce inseamna", angle: "Ce se intampla cu un site neintretinut (vulnerabilitati, plugin-uri vechi, viteza), ce presupune un abonament de mentenanta.", round: 1 },

  // ---- Runda 2 — nise verticale (hotel, HoReCa, servicii) ----
  { order: 7, title: "Site web pentru pensiuni și hoteluri: ce funcții chiar aduc rezervări", category: "Nise", targetKeyword: "site web pensiune rezervari online", angle: "Sistem de rezervare tip Stayo, calendar disponibilitate, poze, integrare plata online.", round: 2 },
  { order: 8, title: "Meniu digital și comenzi online pentru restaurante: ghid 2026", category: "Nise", targetKeyword: "meniu digital restaurant comenzi online", angle: "QR code meniu, comenzi fara aplicatie terta, costuri comparate cu Glovo/Bolt Food.", round: 2 },
  { order: 9, title: "Site web pentru service auto: cum atragi clienți din căutările Google", category: "Nise", targetKeyword: "site web service auto", angle: "Programari online, lista servicii cu preturi orientative, recenzii, SEO local pentru 'service auto + oras'.", round: 2 },
  { order: 10, title: "Site de prezentare pentru cabinete de avocatură: încredere, claritate, conversii", category: "Nise", targetKeyword: "site web cabinet avocatura", angle: "Ce cauta clientii pe un site de avocatura, formular de contact discret, pagini pe arii de practica.", round: 2 },
  { order: 11, title: "Digitalizare pentru firme din industrie și producție: de unde începi", category: "Nise", targetKeyword: "digitalizare firma industriala", angle: "Site de prezentare B2B, catalog de produse, cereri de oferta, integrare cu sisteme interne.", round: 2 },
  { order: 12, title: "Site web pentru firme de instalații și energie regenerabilă (panouri fotovoltaice)", category: "Nise", targetKeyword: "site web firma fotovoltaice", angle: "Calculator orientativ economii, formular cerere oferta, portofoliu de proiecte, SEO pentru 'panouri fotovoltaice + oras'.", round: 2 },

  // ---- Runda 3 — SEO si marketing digital in profunzime ----
  { order: 13, title: "Cuvinte cheie locale: cum găsești ce caută clienții tăi din orașul tău", category: "SEO", targetKeyword: "cuvinte cheie locale seo", angle: "Instrumente gratuite, exemple concrete, diferenta intre volum mare si intentie de cumparare.", round: 3 },
  { order: 14, title: "Google Business Profile: ghid complet de optimizare pentru afaceri locale", category: "SEO", targetKeyword: "optimizare google business profile", angle: "Completare profil, poze, recenzii, postari, intrebari frecvente.", round: 3 },
  { order: 15, title: "Viteza site-ului și SEO: de ce contează Core Web Vitals pentru afacerea ta", category: "SEO", targetKeyword: "viteza site seo core web vitals", angle: "Legatura dintre viteza, rata de respingere si pozitia in Google; exemple din auditurile PageSpeed.", round: 3 },
  { order: 16, title: "Redesign de site vechi: 8 semne că e timpul să schimbi site-ul afacerii tale", category: "Redesign", targetKeyword: "cand sa fac redesign la site", angle: "Semne vizuale si tehnice (nu e responsive, viteza mica, design invechit, fara SSL), pasii unui redesign fara sa pierzi SEO.", round: 3 },
  { order: 17, title: "Content marketing pentru afaceri locale: ce tip de conținut chiar aduce clienți", category: "Marketing", targetKeyword: "content marketing afaceri locale", angle: "Articole de blog utile vs promotionale, studii de caz, continut pe pagini de servicii.", round: 3 },
  { order: 18, title: "Diferența dintre SEO on-page și SEO tehnic (și de ce ai nevoie de amândouă)", category: "SEO", targetKeyword: "seo on page vs seo tehnic", angle: "Explicatie clara cu exemple din site-uri reale, ce optimizam noi in auditurile SEO.", round: 3 },

  // ---- Runda 4 — e-commerce si vanzari online ----
  { order: 19, title: "Cum lansezi un magazin online în România: ghid pas cu pas pentru 2026", category: "E-commerce", targetKeyword: "cum lansez magazin online romania", angle: "De la alegerea produselor la plata online, curierat, ANAF/facturare, legislatie de baza.", round: 4 },
  { order: 20, title: "Plata ramburs vs card online: ce metode de plată să oferi în magazinul tău", category: "E-commerce", targetKeyword: "metode de plata magazin online", angle: "Avantaje/dezavantaje, comisioane procesatori de plati, asteptarile clientilor romani.", round: 4 },
  { order: 21, title: "Cum scrii descrieri de produs care chiar vând (nu doar umplu pagina)", category: "E-commerce", targetKeyword: "cum scriu descrieri de produs", angle: "Structura, beneficii vs caracteristici, cuvinte cheie naturale, exemple inainte/dupa.", round: 4 },
  { order: 22, title: "Coș abandonat: de ce pleacă clienții fără să cumpere și cum repari asta", category: "E-commerce", targetKeyword: "cos abandonat magazin online", angle: "Cauze frecvente (costuri ascunse, checkout complicat, lipsa incredere), solutii practice.", round: 4 },
  { order: 23, title: "Start-Up Nation și fonduri europene pentru digitalizare: ce poți deconta dintr-un site sau magazin online", category: "Finantare", targetKeyword: "startup nation site web decontare", angle: "Tipuri de cheltuieli eligibile, documentatie necesara din partea furnizorului, atentie (informativ, nu consultanta financiara).", round: 4 },
  { order: 24, title: "Aplicații web custom vs soluții gata făcute: cum alegi varianta potrivită pentru afacerea ta", category: "Digitalizare", targetKeyword: "aplicatie web custom vs software gata facut", angle: "Cand merita investitia intr-o solutie custom, exemple de procese care beneficiaza.", round: 4 },

  // ---- Runda 5 — incredere, portofoliu, povesti de clienti, concluzii ----
  { order: 25, title: "De la idee la site live: cum arată procesul nostru de lucru, pas cu pas", category: "Despre noi", targetKeyword: "proces creare site web", angle: "Brief, design, dezvoltare, testare, lansare, mentenanta — transparenta pentru clienti potentiali.", round: 5 },
  { order: 26, title: "Studiu de caz: cum a crescut traficul XWELD după noul site și optimizarea SEO", category: "Studiu de caz", targetKeyword: "studiu de caz site web industrial", angle: "Bazat pe testimonialul real XWELD — provocare, solutie, rezultate (fara cifre inventate, formulat generic).", round: 5 },
  { order: 27, title: "Studiu de caz: platforma Alerta Licitații — cum am construit un produs SaaS de la zero", category: "Studiu de caz", targetKeyword: "studiu de caz platforma saas", angle: "Provocari tehnice, functionalitati cheie, rezultate dupa optimizarea SEO.", round: 5 },
  { order: 28, title: "Greșeli frecvente pe care le văd pe site-urile firmelor românești (și cum le eviți)", category: "Ghid practic", targetKeyword: "greseli site web firma", angle: "Lipsa CTA clar, fara telefon vizibil, fara HTTPS, design neresponsive, incarcare lenta.", round: 5 },
  { order: 29, title: "Site web multilingv: când și de ce să îți traduci site-ul în engleză", category: "International", targetKeyword: "site web multilingv engleza", angle: "Cand are sens (clienti internationali, piete de export), ce presupune SEO pentru o varianta in engleza.", round: 5 },
  { order: 30, title: "Întrebări frecvente despre crearea unui site web: răspundem direct, fără jargon", category: "FAQ", targetKeyword: "intrebari frecvente creare site web", angle: "Compilatie FAQ (durata, cine scrie continutul, ce se intampla dupa lansare, cine detine site-ul), buna pentru featured snippets.", round: 5 },
];
