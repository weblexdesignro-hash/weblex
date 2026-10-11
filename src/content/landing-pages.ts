// Continutul celor 4 pagini de servicii dedicate, hiper-optimizate pentru
// cuvintele cheie tinta: creare site web, realizare site web, creare magazin
// online, realizare magazin online, magazine online, software, digitalizare.
// Fiecare pagina are propriul Hero, Beneficii, Proces de lucru, De ce noi,
// CTA si un FAQ scurt specific paginii (cu date structurate FAQPage proprii).
import type { FaqItem } from "./faq";

export type LandingBeneficiu = {
  icon: "globe" | "cart" | "search" | "megaphone" | "wrench" | "camera" | "refresh" | "rocket" | "code" | "star" | "check";
  title: string;
  text: string;
};

export type LandingProcesStep = { title: string; desc: string };
export type LandingDeceNoi = { title: string; text: string };

export type LandingPage = {
  slug: string;
  path: string;
  navLabel: string;
  seoTitle: string;
  seoDescription: string;
  breadcrumbName: string;
  heroEyebrow: string;
  h1: string;
  heroSubheading: string;
  heroBullets: string[];
  beneficiiHeading: string;
  beneficiiSubheading: string;
  beneficii: LandingBeneficiu[];
  procesHeading: string;
  proces: LandingProcesStep[];
  deceNoiHeading: string;
  deceNoiSubheading: string;
  deceNoi: LandingDeceNoi[];
  ctaHeading: string;
  ctaText: string;
  ctaButtonLabel: string;
  faqHeading: string;
  faq: FaqItem[];
};

export const landingPages: LandingPage[] = [
  // ------------------------------------------------------------------
  // 1. Creare / Realizare Site Web de Prezentare
  // ------------------------------------------------------------------
  {
    slug: "creare-site-web-prezentare",
    path: "/creare-site-web-prezentare",
    navLabel: "Creare site web",
    seoTitle: "Creare Site Web de Prezentare — de la 249 EUR | Weblex Design",
    seoDescription:
      "Creare si realizare site web de prezentare, 100% responsive, cu SEO on-page inclus din prima zi. Preturi clare de la 249 EUR, livrare in 2-3 saptamani. Cere o oferta.",
    breadcrumbName: "Creare site web de prezentare",
    heroEyebrow: "Creare site web de prezentare",
    h1: "Creare site web de prezentare care aduce clienti reali",
    heroSubheading:
      "Realizam site-ul tau de prezentare de la zero, in jurul brandului si obiectivelor afacerii — design responsive, optimizat pentru viteza si pentru Google inca din prima zi.",
    heroBullets: [
      "Pachete de la 249 EUR, fara costuri ascunse",
      "Livrare in 2-3 saptamani de la primirea continutului",
      "SEO on-page inclus, nu optional",
    ],
    beneficiiHeading: "De ce ai nevoie de un site web de prezentare",
    beneficiiSubheading:
      "Un site de prezentare bine facut este cartea ta de vizita non-stop — lucreaza pentru afacerea ta si cand tu nu esti disponibil.",
    beneficii: [
      {
        icon: "globe",
        title: "Prima impresie, controlata de tine",
        text: "Clientii te cauta pe Google inainte sa te contacteze. Un site modern, rapid si clar iti construieste credibilitatea din primele secunde.",
      },
      {
        icon: "search",
        title: "Vizibilitate in Google din prima zi",
        text: "Fiecare site livrat de noi are structura corecta de titluri, viteza de incarcare optimizata si date structurate — pregatit pentru indexare, nu adaugat ulterior.",
      },
      {
        icon: "star",
        title: "Design 100% responsive",
        text: "Aproape jumatate din trafic vine de pe mobil. Fiecare pagina este gandita intai pentru telefon, apoi adaptata pentru tableta si desktop.",
      },
      {
        icon: "wrench",
        title: "Panou de administrare propriu",
        text: "Poti edita singur texte, poze si pagini noi, fara cunostinte tehnice si fara sa depinzi de noi pentru fiecare modificare mica.",
      },
    ],
    procesHeading: "Cum se desfasoara proiectul, pas cu pas",
    proces: [
      { title: "Discutie & brief", desc: "Intelegem afacerea ta, obiectivele si publicul tinta." },
      { title: "Design & concept", desc: "Propunem directia vizuala si structura paginilor site-ului." },
      { title: "Dezvoltare", desc: "Construim site-ul cu tehnologii moderne, rapide si sigure." },
      { title: "Testare & lansare", desc: "Verificam viteza, SEO si comportamentul pe toate device-urile." },
      { title: "Mentenanta continua", desc: "Ramanem alaturi de tine cu actualizari si suport, dupa lansare." },
    ],
    deceNoiHeading: "De ce sa alegi Weblex Design",
    deceNoiSubheading: "Peste 10 ani de experienta si 400+ proiecte livrate — nu site-uri generice, ci construite pentru afacerea ta.",
    deceNoi: [
      {
        title: "O echipa, de la brief la lansare",
        text: "Acelasi proiect este dus de la inceput pana la final de aceeasi echipa, fara predari intre freelanceri diferiti.",
      },
      {
        title: "SEO on-page inclus, nu facturat separat",
        text: "Optimizarea pentru Google face parte din livrare, nu este un serviciu aditional pe care il descoperi dupa ce ai platit.",
      },
      {
        title: "Preturi clare, fara costuri ascunse",
        text: "Primesti o oferta exacta inainte sa incepem, cu tot ce este inclus detaliat — fara surprize in factura finala.",
      },
      {
        title: "Suport real dupa livrare",
        text: "Oferim mentenanta continua: actualizari de securitate, back-up-uri si interventii rapide cand apare o problema.",
      },
    ],
    ctaHeading: "Hai sa construim site-ul de care afacerea ta are nevoie",
    ctaText: "Spune-ne cateva detalii despre afacerea ta si iti trimitem o oferta personalizata, fara obligatii.",
    ctaButtonLabel: "Cere o oferta gratuita",
    faqHeading: "Intrebari frecvente despre crearea unui site de prezentare",
    faq: [
      {
        question: "Cat costa crearea unui site de prezentare?",
        answer:
          "Preturile pornesc de la 249 EUR pentru o pagina (Business Basic) si ajung la 749 EUR pentru proiecte complexe, cu 1-50 de pagini (Business Pro). Pretul final depinde de numarul de pagini si functionalitatile necesare.",
      },
      {
        question: "In cat timp primesc site-ul finalizat?",
        answer:
          "In medie, 2-3 saptamani pentru un site de 1-5 pagini, de la primirea continutului (texte, poze, logo). Proiectele mai mari pot dura 4-6 saptamani.",
      },
      {
        question: "Site-ul include si optimizare SEO?",
        answer:
          "Da, optimizarea SEO on-page (titluri, viteza, date structurate, integrare Google Search Console si Analytics) este inclusa in fiecare pachet, nu este un cost separat.",
      },
      {
        question: "Pot sa imi administrez singur site-ul dupa livrare?",
        answer:
          "Da, livram site-ul cu panou de administrare propriu, din care poti edita texte si poze fara cunostinte tehnice. Te instruim la predare.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // 2. Creare / Realizare Magazin Online (E-commerce)
  // ------------------------------------------------------------------
  {
    slug: "creare-magazin-online",
    path: "/creare-magazin-online",
    navLabel: "Creare magazin online",
    seoTitle: "Creare Magazin Online (E-commerce) — de la 799 EUR | Weblex Design",
    seoDescription:
      "Creare si realizare magazin online la cheie: panou de administrare propriu, produse nelimitate, plata ramburs si card. Preturi de la 799 EUR. Cere o oferta.",
    breadcrumbName: "Creare magazin online",
    heroEyebrow: "Creare magazin online",
    h1: "Creare magazin online care vinde, nu doar afisaj",
    heroSubheading:
      "Realizam magazine online la cheie, cu panou de administrare propriu, produse nelimitate si tot ce ai nevoie pentru a transforma vizitatorii in clienti.",
    heroBullets: [
      "Pachete de la 799 EUR, fara costuri lunare de management",
      "Plata ramburs si cu cardul, calcul automat de livrare",
      "SEO on-page si integrari Google incluse",
    ],
    beneficiiHeading: "De ce sa iti deschizi magazinul online cu noi",
    beneficiiSubheading:
      "Un magazin online elimina costurile de chirie si personal suplimentar, dar rezultatele depind de cum este optimizat si promovat.",
    beneficii: [
      {
        icon: "cart",
        title: "Produse nelimitate, panou propriu",
        text: "Administrezi singur catalogul — produse, preturi, stocuri — fara costuri lunare externe de management al platformei.",
      },
      {
        icon: "check",
        title: "Checkout simplu, plata ramburs si card",
        text: "Procesul de comanda este gandit sa reduca abandonul de cos: calcul automat de livrare pe zone si metode de plata flexibile.",
      },
      {
        icon: "megaphone",
        title: "Sistem de promotii si cupoane",
        text: "Poti lansa reduceri, cupoane si campanii de fidelizare direct din panoul de administrare, fara interventie tehnica.",
      },
      {
        icon: "search",
        title: "SEO on-page inclus pentru fiecare produs",
        text: "Pagini de produs si categorii optimizate pentru Google din prima zi, plus integrare Analytics si Search Console.",
      },
    ],
    procesHeading: "Cum se desfasoara proiectul, pas cu pas",
    proces: [
      { title: "Discutie & brief", desc: "Intelegem catalogul de produse, furnizorii de livrare si metodele de plata necesare." },
      { title: "Design & concept", desc: "Propunem structura magazinului si parcursul de la pagina de produs la checkout." },
      { title: "Dezvoltare & import produse", desc: "Construim magazinul si importam catalogul initial de produse." },
      { title: "Testare & lansare", desc: "Testam complet fluxul de comanda, plata si livrarea, pe toate device-urile." },
      { title: "Mentenanta continua", desc: "Ramanem alaturi de tine cu actualizari, back-up-uri si suport dupa lansare." },
    ],
    deceNoiHeading: "De ce sa alegi Weblex Design pentru magazinul tau online",
    deceNoiSubheading: "Nu livram doar un magazin — livram un sistem pe care il poti administra singur, pe termen lung.",
    deceNoi: [
      {
        title: "Fara costuri lunare externe de platforma",
        text: "Magazinul este al tau, cu panou de administrare propriu — nu platesti un abonament lunar unei platforme terte.",
      },
      {
        title: "Import rapid de produse",
        text: "Pachetele acopera de la 50 la 1.000 de produse importate, in functie de dimensiunea catalogului tau.",
      },
      {
        title: "Integrare cu promovarea platita",
        text: "Oferim si campanii de Google Ads si Facebook Ads, pentru trafic calificat si vanzari masurabile dupa lansare.",
      },
      {
        title: "Servicii foto de produs, la cerere",
        text: "Pentru ca pozele de produs conteaza la fel de mult ca site-ul, oferim si fotografie profesionala de produs ca serviciu separat.",
      },
    ],
    ctaHeading: "Hai sa construim magazinul online care vinde pentru tine",
    ctaText: "Spune-ne cate produse ai si ce metode de livrare/plata iti sunt necesare — iti trimitem o oferta personalizata.",
    ctaButtonLabel: "Cere o oferta gratuita",
    faqHeading: "Intrebari frecvente despre crearea unui magazin online",
    faq: [
      {
        question: "Cat costa realizarea unui magazin online?",
        answer:
          "Pachetele pornesc de la 799 EUR pentru import de 1-50 de produse si ajung la 1.599 EUR pentru cataloage de pana la 1.000 de produse.",
      },
      {
        question: "In cat timp este livrat magazinul online?",
        answer:
          "In medie 3-4 saptamani pentru un catalog de 1-50 de produse. Pentru cataloage mai mari sau integrari suplimentare (facturare, curieri), termenul poate creste la 6-8 saptamani.",
      },
      {
        question: "Ce metode de plata si livrare sunt incluse?",
        answer:
          "Plata ramburs si cu cardul, plus calcul automat de livrare pe zone. Putem integra si alti curieri sau metode de plata, la cerere.",
      },
      {
        question: "Platesc un abonament lunar pentru platforma magazinului?",
        answer:
          "Nu. Magazinul are panou de administrare propriu, fara costuri lunare externe de management al platformei. Costurile recurente optionale sunt doar domeniul, hostingul si mentenanta, daca o alegi.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // 3. Dezvoltare Software Custom & Aplicatii Web
  // ------------------------------------------------------------------
  {
    slug: "dezvoltare-software-custom",
    path: "/dezvoltare-software-custom",
    navLabel: "Software la comanda",
    seoTitle: "Dezvoltare Software Custom & Aplicatii Web | Weblex Design",
    seoDescription:
      "Dezvoltam software la comanda si aplicatii web personalizate: panouri de administrare, integrari si automatizari pentru procesele firmei tale. Audit gratuit si oferta clara.",
    breadcrumbName: "Software custom & aplicatii web",
    heroEyebrow: "Software la comanda",
    h1: "Dezvoltare software custom si aplicatii web pentru procesele tale",
    heroSubheading:
      "Inlocuim Excel-urile si procesele manuale cu aplicatii web construite special pentru afacerea ta: panouri de administrare, integrari cu alte sisteme si automatizari.",
    heroBullets: [
      "Audit gratuit al proceselor, inainte de oferta",
      "Aplicatii construite pe aceeasi platforma ca site-urile noastre",
      "Integrari cu sisteme existente (ERP, facturare, CRM)",
    ],
    beneficiiHeading: "Cand are sens o aplicatie software la comanda",
    beneficiiSubheading:
      "Un software generic nu se potriveste niciodata perfect pe procesul tau. O aplicatie construita special, da.",
    beneficii: [
      {
        icon: "code",
        title: "Panouri de administrare personalizate",
        text: "Construim exact interfata de care angajatii tai au nevoie, nu o adaptare fortata a unui produs generic.",
      },
      {
        icon: "refresh",
        title: "Integrari cu sistemele existente",
        text: "Conectam aplicatia noua cu ERP-ul, sistemul de facturare sau CRM-ul folosit deja in firma, ca sa nu dublezi munca.",
      },
      {
        icon: "rocket",
        title: "Automatizarea proceselor repetitive",
        text: "Fluxuri interne, aprobari, rapoarte automate — tot ce se face manual si repetitiv poate fi automatizat.",
      },
      {
        icon: "wrench",
        title: "Scalabil pe masura ce cresti",
        text: "Aplicatia este construita pe o arhitectura moderna, pregatita sa primeasca module noi atunci cand afacerea creste.",
      },
    ],
    procesHeading: "Cum se desfasoara un proiect de software custom",
    proces: [
      { title: "Audit gratuit", desc: "Analizam procesul actual si identificam exact ce poate fi digitalizat sau automatizat." },
      { title: "Specificatie & oferta", desc: "Primesti un document clar cu functionalitati, termene si pret, inainte de a incepe." },
      { title: "Dezvoltare pe sprinturi", desc: "Construim aplicatia in etape, cu demo-uri periodice ca sa vezi progresul real." },
      { title: "Testare & migrare date", desc: "Testam fluxurile critice si migram datele existente (din Excel sau alt sistem)." },
      { title: "Lansare & suport", desc: "Instruim echipa ta si ramanem disponibili pentru interventii si module noi." },
    ],
    deceNoiHeading: "De ce sa alegi Weblex Design pentru aplicatia ta",
    deceNoiSubheading: "Aceeasi echipa care iti construieste site-ul sau magazinul online iti poate construi si aplicatia interna.",
    deceNoi: [
      {
        title: "O singura platforma pentru tot",
        text: "Aplicatiile sunt construite pe aceeasi platforma folosita pentru site-urile si magazinele noastre online, deci se pot integra direct cu acestea.",
      },
      {
        title: "Oferta clara, dupa un audit real",
        text: "Nu estimam la intuitie — facem intai un audit gratuit al proceselor tale, apoi iti dam un pret si un termen pe care ne tinem.",
      },
      {
        title: "Fara blocaj pe un singur dezvoltator",
        text: "Lucrezi cu o echipa, nu cu o singura persoana — proiectul nu se blocheaza daca un om este indisponibil.",
      },
      {
        title: "Eligibil pentru finantari europene",
        text: "Multe proiecte de digitalizare si automatizare sunt eligibile in cadrul voucherului de digitalizare sau al altor fonduri europene.",
      },
    ],
    ctaHeading: "Hai sa discutam despre procesul pe care vrei sa il digitalizezi",
    ctaText: "Programeaza un audit gratuit — iti spunem clar ce se poate automatiza si cat ar costa.",
    ctaButtonLabel: "Cere un audit gratuit",
    faqHeading: "Intrebari frecvente despre software la comanda",
    faq: [
      {
        question: "Cat costa o aplicatie software la comanda?",
        answer:
          "Depinde de complexitatea procesului digitalizat. Facem un audit gratuit al cerintelor tale si iti trimitem o oferta cu pret si termen clare, fara obligatii.",
      },
      {
        question: "Cat timp dureaza dezvoltarea unei aplicatii personalizate?",
        answer:
          "Variaza de la cateva saptamani pentru un panou de administrare simplu, la cateva luni pentru sisteme complexe cu multiple integrari. Primesti un termen exact in oferta.",
      },
      {
        question: "Puteti integra aplicatia cu sistemul nostru de facturare sau ERP existent?",
        answer:
          "Da, integrarea cu sisteme existente (ERP, facturare, CRM) este una dintre cele mai frecvente cerinte pe care le rezolvam in proiectele de digitalizare.",
      },
      {
        question: "Proiectul este eligibil pentru fonduri europene sau voucherul de digitalizare?",
        answer:
          "In multe cazuri, da. Discutam de la inceput despre finantarea pe care vrei sa o folosesti, ca sa livram proiectul conform cerintelor acesteia.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // 4. Digitalizare Afaceri & Automatizari
  // ------------------------------------------------------------------
  {
    slug: "digitalizare-afaceri",
    path: "/digitalizare-afaceri",
    navLabel: "Digitalizare afaceri",
    seoTitle: "Digitalizare Afaceri & Automatizari | Weblex Design",
    seoDescription:
      "Digitalizare pentru firme: site-uri si aplicatii eligibile Start-Up Nation si fonduri europene, automatizari de procese si integrari. Audit gratuit, oferta clara.",
    breadcrumbName: "Digitalizare afaceri",
    heroEyebrow: "Digitalizare afaceri",
    h1: "Digitalizare afaceri: de la prezenta online la automatizari reale",
    heroSubheading:
      "Ajutam firmele sa treaca de la procese pe hartie si Excel-uri la solutii digitale complete — site, magazin online, aplicatii interne si automatizari, inclusiv eligibile pentru finantari europene.",
    heroBullets: [
      "Eligibil Start-Up Nation si fonduri europene / voucher de digitalizare",
      "Documente pregatite pentru decontare (factura, proces-verbal, captura de ecran)",
      "De la prezenta online la automatizarea proceselor interne",
    ],
    beneficiiHeading: "Ce inseamna, concret, digitalizarea afacerii tale",
    beneficiiSubheading:
      "Digitalizarea nu e un concept abstract — e un set de pasi concreti care iti economisesc timp si bani.",
    beneficii: [
      {
        icon: "rocket",
        title: "Eligibilitate pentru finantari",
        text: "Realizam site-uri si magazine online eligibile ca cheltuiala in Start-Up Nation si alte finantari europene, livrate la timp fata de termenul din cererea de finantare.",
      },
      {
        icon: "code",
        title: "Inlocuirea proceselor manuale",
        text: "Transformam Excel-urile si fluxurile pe hartie in aplicatii web simple, pe care le folosesti si le actualizezi singur.",
      },
      {
        icon: "refresh",
        title: "Automatizari care economisesc timp",
        text: "De la rapoarte automate la notificari si integrari intre sisteme, automatizam ce se repeta zilnic in firma ta.",
      },
      {
        icon: "search",
        title: "Prezenta online optimizata",
        text: "Digitalizarea include si un site sau magazin online bine optimizat SEO — fara prezenta online vizibila, restul investitiei pierde din impact.",
      },
    ],
    procesHeading: "Cum se desfasoara un proiect de digitalizare",
    proces: [
      { title: "Discutie & finantare", desc: "Intelegem obiectivele firmei si, daca e cazul, cerintele finantarii (Start-Up Nation, voucher de digitalizare)." },
      { title: "Audit & plan", desc: "Identificam ce procese pot fi digitalizate si prioritizam impactul fiecaruia." },
      { title: "Implementare", desc: "Construim site-ul, aplicatia sau automatizarea, in etape clare." },
      { title: "Documente pentru decontare", desc: "Pregatim factura, procesul-verbal de receptie si capturile de ecran necesare dosarului de finantare." },
      { title: "Suport continuu", desc: "Ramanem alaturi de tine cu mentenanta si module noi, pe masura ce afacerea evolueaza." },
    ],
    deceNoiHeading: "De ce sa alegi Weblex Design pentru digitalizare",
    deceNoiSubheading: "Cunoastem atat partea tehnica, cat si cerintele administrative ale finantarilor cu care lucreaza firmele din Romania.",
    deceNoi: [
      {
        title: "Experienta reala cu Start-Up Nation",
        text: "Am livrat proiecte cu termene stricte legate de cereri de finantare si cunoastem exact documentele necesare pentru decontare.",
      },
      {
        title: "O singura echipa pentru tot proiectul",
        text: "Site, magazin online, aplicatie interna — toate construite pe aceeasi platforma, de aceeasi echipa, fara predari intre furnizori diferiti.",
      },
      {
        title: "Transparenta in costuri si termene",
        text: "Primesti o oferta clara inainte de a incepe, cu termene realiste fata de deadline-ul cererii tale de finantare.",
      },
      {
        title: "Suport dupa implementare",
        text: "Digitalizarea nu se termina la livrare — oferim mentenanta si suport pe masura ce procesele firmei evolueaza.",
      },
    ],
    ctaHeading: "Hai sa discutam despre digitalizarea afacerii tale",
    ctaText: "Spune-ne ce proces vrei sa digitalizezi sau ce finantare vrei sa folosesti — iti raspundem cu un plan concret.",
    ctaButtonLabel: "Cere o consultatie gratuita",
    faqHeading: "Intrebari frecvente despre digitalizare",
    faq: [
      {
        question: "Ce inseamna, in cazul meu, digitalizarea afacerii?",
        answer:
          "Poate insemna un site sau magazin online nou, o aplicatie care inlocuieste un Excel, sau automatizarea unui proces repetitiv. Facem un audit gratuit ca sa iti aratam exact ce are sens pentru afacerea ta.",
      },
      {
        question: "Site-ul sau aplicatia este eligibila pentru Start-Up Nation?",
        answer:
          "Da, realizam site-uri si magazine online eligibile ca cheltuiala in Start-Up Nation si alte finantari europene, cu documentele necesare pentru decontare pregatite de noi.",
      },
      {
        question: "Cat de rapid puteti livra un proiect legat de o cerere de finantare?",
        answer:
          "Livram proiectul inainte de termenul din cererea de finantare — spune-ne data-limita din prima discutie, ca sa planificam corect.",
      },
      {
        question: "Digitalizarea inseamna doar un site, sau si altceva?",
        answer:
          "Poate include si aplicatii interne, automatizari de procese si integrari cu alte sisteme — nu se limiteaza la prezenta online.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // 5. Mentenanta Site Web
  // ------------------------------------------------------------------
  {
    slug: "mentenanta-site-web",
    path: "/mentenanta-site-web",
    navLabel: "Mentenanta site",
    seoTitle: "Mentenanta Site Web si Magazin Online | Weblex Design",
    seoDescription:
      "Mentenanta site web si magazin online: actualizari de securitate, back-up-uri regulate si interventie rapida cand apare o problema. Cere o oferta de mentenanta.",
    breadcrumbName: "Mentenanta site web",
    heroEyebrow: "Mentenanta site web",
    h1: "Mentenanta site web — siguranta si viteza, constant",
    heroSubheading:
      "Un site neactualizat devine, in timp, vulnerabil si poate ajunge sa nu mai functioneze corect. Mentenanta continua inseamna actualizari de securitate, back-up-uri regulate si interventie rapida cand apare o problema.",
    heroBullets: [
      "Actualizari de securitate si back-up-uri regulate",
      "Interventie prioritara daca site-ul pica sau e atacat",
      "Pentru orice platforma — inclusiv site-uri preluate de la alti dezvoltatori",
    ],
    beneficiiHeading: "De ce ai nevoie de mentenanta continua",
    beneficiiSubheading:
      "Mentenanta nu e un cost in plus — e asigurarea ca investitia facuta in site sau magazinul online nu se degradeaza in timp.",
    beneficii: [
      {
        icon: "wrench",
        title: "Actualizari de securitate periodice",
        text: "Platformele si librariile folosite primesc vulnerabilitati noi descoperite constant. Le aplicam actualizarile inainte sa devina o problema.",
      },
      {
        icon: "refresh",
        title: "Back-up-uri regulate",
        text: "Daca ceva merge prost, restauram rapid dintr-o copie de siguranta recenta, in loc sa reconstruim de la zero.",
      },
      {
        icon: "rocket",
        title: "Interventie rapida la probleme",
        text: "Site picat, eroare neasteptata, atac — clientii cu mentenanta activa au prioritate la interventie, nu asteapta la coada.",
      },
      {
        icon: "search",
        title: "Monitorizare viteza si SEO",
        text: "Verificam periodic viteza de incarcare si sanatatea tehnica SEO, ca pozitionarea in Google sa nu scada din neatentie.",
      },
    ],
    procesHeading: "Cum functioneaza contractul de mentenanta",
    proces: [
      { title: "Evaluare initiala", desc: "Verificam starea actuala a site-ului: platforma, versiuni, vulnerabilitati cunoscute." },
      { title: "Plan de mentenanta", desc: "Stabilim frecventa actualizarilor si back-up-urilor, in functie de cat de activ e site-ul." },
      { title: "Monitorizare continua", desc: "Urmarim uptime-ul, viteza si eventualele erori, nu doar reactionam cand ne anunti tu." },
      { title: "Interventie la nevoie", desc: "La orice problema semnalata, intervenim prioritar — fara sa astepti zile intregi." },
      { title: "Raport periodic", desc: "Primesti un rezumat clar al actualizarilor facute si al starii site-ului." },
    ],
    deceNoiHeading: "De ce sa alegi mentenanta cu Weblex Design",
    deceNoiSubheading: "Preluam si site-uri construite de alti dezvoltatori, nu doar propriile noastre proiecte.",
    deceNoi: [
      {
        title: "Preluam orice platforma",
        text: "Facem mentenanta si pentru site-uri WordPress sau alte platforme pe care nu le-am construit noi, nu doar pentru proiectele proprii.",
      },
      {
        title: "Raspuns rapid, nu generic",
        text: "Clientii cu contract activ au prioritate reala la interventie, nu un bilet intr-o coada de suport impersonala.",
      },
      {
        title: "Transparenta despre ce facem",
        text: "Stii exact ce actualizari s-au facut si cand, nu platesti un abonament fara sa vezi rezultatul.",
      },
      {
        title: "Acelasi furnizor, pe termen lung",
        text: "O echipa care cunoaste deja site-ul tau intervine mai rapid si mai corect decat unul care il vede prima data in criza.",
      },
    ],
    ctaHeading: "Hai sa punem site-ul tau pe mentenanta continua",
    ctaText: "Spune-ne ce platforma foloseste site-ul tau actual — iti spunem clar ce plan de mentenanta se potriveste.",
    ctaButtonLabel: "Cere o oferta de mentenanta",
    faqHeading: "Intrebari frecvente despre mentenanta site-ului",
    faq: [
      {
        question: "Ce inseamna, concret, mentenanta unui site?",
        answer:
          "Actualizari periodice de securitate, back-up-uri regulate si interventie rapida atunci cand apare o problema (site picat, eroare, atac).",
      },
      {
        question: "Faceti mentenanta si pentru site-uri pe care nu voi le-ati construit?",
        answer:
          "Da, preluam si site-uri existente, construite de alti dezvoltatori, dupa o evaluare initiala a starii lor tehnice.",
      },
      {
        question: "Ce se intampla daca site-ul meu este atacat sau pica, fara contract de mentenanta?",
        answer:
          "Putem interveni punctual, contra cost, dar fara prioritate si fara un timp de reactie garantat, spre deosebire de clientii cu mentenanta activa.",
      },
      {
        question: "Cat de des faceti back-up la site?",
        answer:
          "Frecventa se stabileste in functie de cat de activ e site-ul (ex. un magazin online cu comenzi zilnice are nevoie de back-up mai des decat un site de prezentare static).",
      },
    ],
  },

  // ------------------------------------------------------------------
  // 6. Redesign & Rebranding Site Web
  // ------------------------------------------------------------------
  {
    slug: "redesign-site-web",
    path: "/redesign-site-web",
    navLabel: "Redesign site",
    seoTitle: "Redesign Site Web Vechi — Design Modern, Viteza Mai Mare | Weblex Design",
    seoDescription:
      "Redesign si rebranding pentru site-ul tau vechi: design modern, viteza mai mare, structura refacuta — pastram continutul si pozitionarea deja acumulata in Google.",
    breadcrumbName: "Redesign & Rebranding",
    heroEyebrow: "Redesign site vechi",
    h1: "Redesign site web vechi, fara sa pierzi ce ai construit deja",
    heroSubheading:
      "Preluam site-ul tau existent si il reconstruim complet — design, structura si viteza —, pastrand identitatea vizuala si continutul valoros deja acumulat, ca sa nu pierzi traficul si pozitionarea obtinute in timp.",
    heroBullets: [
      "Pastram continutul si pozitionarea in Google deja acumulate",
      "Design modern, 100% responsive",
      "Redirect-uri corecte de la URL-urile vechi, fara pierdere de trafic",
    ],
    beneficiiHeading: "Cand are sens un redesign, nu un site nou de la zero",
    beneficiiSubheading:
      "Un site vechi care functioneaza, dar arata si se incarca prost, nu trebuie aruncat — trebuie reconstruit inteligent.",
    beneficii: [
      {
        icon: "refresh",
        title: "Pastram autoritatea SEO acumulata",
        text: "Folosim redirect-uri 301 corecte de la URL-urile vechi catre cele noi, ca Google sa nu piarda pozitionarea deja castigata.",
      },
      {
        icon: "star",
        title: "Design modern, nu doar o fata noua",
        text: "Refacem structura si ierarhia vizuala, nu doar culorile — site-ul devine mai usor de citit si de navigat.",
      },
      {
        icon: "rocket",
        title: "Viteza de incarcare imbunatatita",
        text: "Site-urile vechi acumuleaza cod si plugin-uri inutile in timp. Reconstruim cu tehnologii moderne, mult mai rapide.",
      },
      {
        icon: "globe",
        title: "100% responsive, de la zero",
        text: "Multe site-uri vechi au fost gandite doar pentru desktop. Site-ul nou e construit intai pentru mobil.",
      },
    ],
    procesHeading: "Cum se desfasoara un proiect de redesign",
    proces: [
      { title: "Audit site existent", desc: "Analizam continutul, pozitionarea in Google si problemele tehnice actuale." },
      { title: "Plan de migrare", desc: "Stabilim ce continut se pastreaza si harta de redirect-uri de la URL-urile vechi." },
      { title: "Design & dezvoltare", desc: "Construim noul site, cu design modern si tehnologii actuale." },
      { title: "Migrare & testare", desc: "Mutam continutul, testam redirect-urile si verificam ca nimic nu s-a pierdut." },
      { title: "Lansare & monitorizare", desc: "Lansam si urmarim in Google Search Console ca pozitionarea sa ramana stabila." },
    ],
    deceNoiHeading: "De ce sa alegi Weblex Design pentru redesign",
    deceNoiSubheading: "Nu pornim de la zero fara motiv — pastram ce functioneaza deja si reparam ce nu.",
    deceNoi: [
      {
        title: "Experienta reala cu migrari",
        text: "Am preluat si reconstruit site-uri de pe platforme diferite, cu atentie la pastrarea pozitionarii SEO existente.",
      },
      {
        title: "Redirect-uri facute corect",
        text: "O harta completa de redirect-uri 301 de la structura veche la cea noua, verificata inainte de lansare.",
      },
      {
        title: "Acelasi continut valoros, haina noua",
        text: "Textele si articolele care aduc deja trafic organic nu se pierd — sunt reintegrate in noul design.",
      },
      {
        title: "Mentenanta inclusa dupa lansare",
        text: "Dupa redesign, site-ul poate ramane pe mentenanta continua, ca investitia sa fie protejata pe termen lung.",
      },
    ],
    ctaHeading: "Hai sa dam site-ului tau vechi o haina noua",
    ctaText: "Trimite-ne link-ul site-ului actual — iti spunem concret ce recomandam sa pastram si ce sa schimbam.",
    ctaButtonLabel: "Cere un audit gratuit",
    faqHeading: "Intrebari frecvente despre redesign si rebranding",
    faq: [
      {
        question: "Pierd pozitionarea din Google daca imi refac site-ul?",
        answer:
          "Nu, daca redesign-ul e facut corect — folosim redirect-uri 301 de la URL-urile vechi catre cele noi, exact ca sa pastram autoritatea SEO acumulata.",
      },
      {
        question: "Pot sa pastrez articolele si continutul de pe site-ul vechi?",
        answer:
          "Da, migram continutul valoros (articole, pagini, poze) in noul design, nu il stergem — doar i-l imbracam intr-o structura moderna.",
      },
      {
        question: "Cat costa un redesign fata de un site nou de la zero?",
        answer:
          "Depinde de cat de mult din continutul si structura actuala se pastreaza. Facem un audit gratuit si iti dam un pret exact, comparabil cu pachetele de site de prezentare.",
      },
      {
        question: "Faceti si rebranding (logo, culori), nu doar design de site?",
        answer:
          "Da, putem actualiza si identitatea vizuala (logo, paleta de culori) odata cu site-ul, daca brandul tau are nevoie de o reimprospatare completa.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // 7. Optimizare SEO
  // ------------------------------------------------------------------
  {
    slug: "optimizare-seo",
    path: "/optimizare-seo",
    navLabel: "Optimizare SEO",
    seoTitle: "Optimizare SEO Site Web — Audit si SEO On-Page | Weblex Design",
    seoDescription:
      "Optimizare SEO on-page pentru site-uri si magazine online: structura de titluri, viteza, date structurate, audit SEO complet. Inclusa in fiecare proiect Weblex Design.",
    breadcrumbName: "Optimizare SEO",
    heroEyebrow: "Optimizare SEO",
    h1: "Optimizare SEO — vizibilitate reala in Google, nu promisiuni",
    heroSubheading:
      "Optimizarea SEO on-page (structura de titluri, viteza de incarcare, date structurate) este inclusa inca din prima zi in fiecare site si magazin online livrat de noi — si o putem aplica si pe un site existent, printr-un audit SEO complet.",
    heroBullets: [
      "Audit SEO complet pentru site-ul tau existent",
      "Structura corecta de titluri (H1-H3) si meta-descrieri",
      "Date structurate Schema.org si integrare Google Search Console",
    ],
    beneficiiHeading: "Ce inseamna, concret, optimizarea SEO on-page",
    beneficiiSubheading:
      "SEO nu e magie — e o serie de lucruri tehnice si de continut facute corect, consecvent.",
    beneficii: [
      {
        icon: "search",
        title: "Structura corecta de titluri",
        text: "Un singur H1 pe pagina, ierarhie clara de H2-H3 — Google (si vizitatorii) inteleg instant despre ce e pagina.",
      },
      {
        icon: "rocket",
        title: "Viteza de incarcare optimizata",
        text: "Viteza e un factor direct de pozitionare. Optimizam imaginile, codul si incarcarea paginilor pentru scoruri bune in Core Web Vitals.",
      },
      {
        icon: "code",
        title: "Date structurate Schema.org",
        text: "Adaugam markup structurat (FAQ, organizatie, produse) ca Google sa poata afisa rezultate imbogatite (rich snippets) pentru site-ul tau.",
      },
      {
        icon: "check",
        title: "Integrare Google Search Console si Analytics",
        text: "Configuram corect uneltele gratuite de la Google, ca sa vezi exact ce cuvinte cheie aduc trafic si unde sunt probleme de indexare.",
      },
    ],
    procesHeading: "Cum se desfasoara un audit SEO",
    proces: [
      { title: "Audit tehnic", desc: "Verificam viteza, structura de titluri, canonical tags, sitemap si erori de indexare." },
      { title: "Analiza cuvinte cheie", desc: "Identificam cuvintele cheie relevante pentru afacerea ta si oportunitatile neacoperite." },
      { title: "Plan de optimizare", desc: "Primesti un document clar cu prioritati: ce se repara urgent, ce poate astepta." },
      { title: "Implementare", desc: "Aplicam modificarile tehnice si de continut direct pe site." },
      { title: "Monitorizare rezultate", desc: "Urmarim pozitiile si traficul organic dupa optimizare, cu rapoarte periodice." },
    ],
    deceNoiHeading: "De ce sa alegi Weblex Design pentru SEO",
    deceNoiSubheading: "SEO on-page e inclus in fiecare proiect al nostru — nu e un serviciu pe care il vindem separat ca sa justificam o factura.",
    deceNoi: [
      {
        title: "SEO inclus, nu un add-on scump",
        text: "Fiecare site si magazin online livrat de noi vine cu SEO on-page din prima zi — auditul e pentru site-urile deja existente.",
      },
      {
        title: "Recomandari concrete, nu rapoarte stufoase",
        text: "Primesti un plan clar, prioritizat — nu un document de 40 de pagini pe care nimeni nu il citeste pana la capat.",
      },
      {
        title: "Implementare inclusa, nu doar sfaturi",
        text: "Nu iti dam doar o lista de recomandari — le putem implementa noi direct pe site, daca alegi acest pachet.",
      },
      {
        title: "Transparenta despre ce se poate si ce nu",
        text: "Nu promitem pozitia 1 in Google peste noapte — explicam realist ce rezultate sunt posibile si in ce termen.",
      },
    ],
    ctaHeading: "Hai sa vedem unde pierzi vizibilitate in Google",
    ctaText: "Trimite-ne link-ul site-ului tau — iti facem un audit SEO initial gratuit si iti spunem exact ce ar trebui imbunatatit.",
    ctaButtonLabel: "Cere un audit SEO gratuit",
    faqHeading: "Intrebari frecvente despre optimizarea SEO",
    faq: [
      {
        question: "SEO-ul este inclus in pretul site-ului, sau e un serviciu separat?",
        answer:
          "Optimizarea SEO on-page de baza este inclusa in fiecare site si magazin online livrat de noi. Un audit SEO complet pentru un site deja existent, construit de altcineva, e un serviciu separat.",
      },
      {
        question: "In cat timp apar rezultate dupa optimizarea SEO?",
        answer:
          "Primele semne (indexare corecta, imbunatatiri tehnice masurabile) apar in cateva saptamani. Cresterea reala in pozitii, pentru cuvinte cheie competitive, dureaza de obicei 3-6 luni.",
      },
      {
        question: "Faceti si SEO pentru site-uri care nu sunt construite de voi?",
        answer:
          "Da, facem audit si optimizare SEO si pentru site-uri existente, indiferent pe ce platforma au fost construite.",
      },
      {
        question: "Ce diferenta e intre SEO on-page si promovarea platita (Google Ads)?",
        answer:
          "SEO on-page imbunatateste pozitionarea organica (gratuita) pe termen lung. Google Ads aduce trafic platit, imediat. Le recomandam impreuna, pentru rezultate rapide si durabile deopotriva.",
      },
    ],
  },
];

export function getLandingPageBySlug(slug: string): LandingPage | undefined {
  return landingPages.find((p) => p.slug === slug);
}
