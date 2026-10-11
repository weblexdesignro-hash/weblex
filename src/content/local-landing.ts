// Genereaza continutul unic (intro, sectiune "De ce in [oras]", FAQ local) pentru
// paginile locale de SEO: /creare-site-web-prezentare/[oras], /creare-magazin-online/[oras],
// /dezvoltare-software-custom/[oras], /digitalizare-afaceri/[oras].
//
// Restul continutului fiecarei pagini (Beneficii, Proces de lucru, De ce noi) e preluat din
// pagina de serviciu "parinte" (src/content/landing-pages.ts) — sunt fapte reale despre cum
// lucram, valabile indiferent de oras, deci nu are sens sa le reinventam de 6 ori. Partea de
// mai jos e cea care face fiecare pagina locala cu adevarat diferita de celelalte: intro-ul,
// argumentele specifice orasului si cel putin o intrebare FAQ locala.
import type { City } from "./cities";
import type { FaqItem } from "./faq";

export type LocalServiceSlug = "creare-site-web-prezentare" | "creare-magazin-online" | "dezvoltare-software-custom" | "digitalizare-afaceri";

export type LocalPageContent = {
  seoTitle: string;
  seoDescription: string;
  h1: string;
  eyebrow: string;
  introParagraphs: string[];
  localWhyHeading: string;
  localWhyPoints: { title: string; text: string }[];
  localFaq: FaqItem[];
};

function buildSiteWebContent(city: City): LocalPageContent {
  return {
    seoTitle: `Creare Site Web de Prezentare in ${city.name}`,
    seoDescription: `Creare site web de prezentare in ${city.name}: design responsive, SEO on-page inclus, livrare in 2-3 saptamani. Peste 10 ani experienta, 400+ proiecte livrate. Cere o oferta.`,
    h1: `Creare site web de prezentare in ${city.name}`,
    eyebrow: `Creare site web • ${city.name}`,
    introParagraphs: [
      `Daca cauti creare site web de prezentare in ${city.name}, lucrezi cu o echipa care intelege piata locala: ${city.profile}`,
      `Construim site-ul tau de prezentare 100% responsive, cu design personalizat pentru brandul tau si optimizare SEO on-page inclusa din prima zi — nu un sablon generic, ci un proiect gandit pentru afacerea ta din ${city.name}. Lucram integral online (apel video, email, telefon), deci distanta pana la biroul nostru nu e o problema — livram acelasi standard de proiect indiferent daca esti in ${city.name} sau in alt oras.`,
    ],
    localWhyHeading: `De ce creare site web in ${city.name}, cu noi`,
    localWhyPoints: [
      {
        title: `Intelegem piata din ${city.name}`,
        text: `${city.name} inseamna ${city.highlights[0]} — construim site-ul tinand cont de acest context, nu doar de un brief generic.`,
      },
      {
        title: "Lucram 100% online, fara deplasari",
        text: `Tot procesul (brief, design, aprobari, livrare) se desfasoara online — nu conteaza daca biroul tau e in centrul ${city.name}-ului sau la periferie.`,
      },
      {
        title: "SEO local inclus",
        text: `Optimizam site-ul si pentru cautari locale (ex. "[serviciul tau] ${city.name}"), nu doar pentru cuvinte cheie generice la nivel national.`,
      },
    ],
    localFaq: [
      {
        question: `Lucrati doar cu firme din ${city.name}, sau si din afara orasului?`,
        answer: `Lucram cu clienti din toata tara, integral online — ${city.name} este una dintre pietele unde avem cerere constanta, dar procesul e identic indiferent de oras.`,
      },
      {
        question: `Site-ul va aparea in Google cand cineva cauta din ${city.name}?`,
        answer: `Optimizarea SEO on-page inclusa in proiect acopera si semnalele locale (adresa, zona deservita, cuvinte cheie locale), ceea ce ajuta la vizibilitate in cautarile facute din ${city.name} si imprejurimi — pozitionarea finala depinde insa si de concurenta locala din domeniul tau.`,
      },
    ],
  };
}

function buildMagazinOnlineContent(city: City): LocalPageContent {
  return {
    seoTitle: `Creare Magazin Online in ${city.name}`,
    seoDescription: `Creare magazin online (e-commerce) in ${city.name}: panou de administrare propriu, produse nelimitate, plata ramburs si card. Preturi de la 799 EUR. Cere o oferta.`,
    h1: `Creare magazin online in ${city.name}`,
    eyebrow: `Creare magazin online • ${city.name}`,
    introParagraphs: [
      `Vrei sa vinzi online din ${city.name}? ${city.profile}`,
      `Realizam magazine online la cheie, cu panou de administrare propriu, produse nelimitate si tot ce ai nevoie pentru a transforma vizitatorii in clienti — indiferent daca produsele tale sunt livrate doar in ${city.name} si zona ${city.county}, sau in toata tara.`,
    ],
    localWhyHeading: `De ce creare magazin online in ${city.name}, cu noi`,
    localWhyPoints: [
      {
        title: `Intelegem specificul pietei din ${city.name}`,
        text: `${city.highlights[1]} — configuram magazinul (livrare, plata, promotii) tinand cont de acest context.`,
      },
      {
        title: "Calcul de livrare pe zone, configurat corect",
        text: `Setam corect zonele si costurile de livrare, fie ca vinzi doar in ${city.name}, fie ca livrezi national.`,
      },
      {
        title: "SEO local pentru pagini de produs si categorii",
        text: `Optimizam si pentru cautari locale ("[produsul tau] ${city.name}"), pe langa optimizarea generala SEO on-page.`,
      },
    ],
    localFaq: [
      {
        question: `Pot sa ofer livrare doar in ${city.name}, nu in toata tara?`,
        answer: `Da, configuram calculul de livrare exact dupa nevoile tale — doar in ${city.name} si imprejurimi, pe zone, sau national, in functie de modelul tau de afaceri.`,
      },
      {
        question: `Cat conteaza concurenta locala din ${city.name} pentru magazinul meu online?`,
        answer: `Un magazin online concureaza de obicei la nivel national, nu doar local, dar optimizarea SEO locala ajuta suplimentar daca ai si clienti care cauta specific in ${city.name} (ex. pentru ridicare personala sau livrare rapida).`,
      },
    ],
  };
}

function buildSoftwareCustomContent(city: City): LocalPageContent {
  return {
    seoTitle: `Dezvoltare Software Custom si Aplicatii Web in ${city.name}`,
    seoDescription: `Dezvoltare software la comanda si aplicatii web personalizate pentru firme din ${city.name}: panouri de administrare, integrari, automatizari. Audit gratuit, oferta clara.`,
    h1: `Dezvoltare software custom si aplicatii web in ${city.name}`,
    eyebrow: `Software la comanda • ${city.name}`,
    introParagraphs: [
      `Pentru firme din ${city.name} care vor sa inlocuiasca Excel-urile si procesele manuale cu un sistem propriu: ${city.profile}`,
      `Construim panouri de administrare, integrari cu alte sisteme si automatizari pentru procesele firmei tale, indiferent de domeniu — dezvoltarea se face integral online, deci lucram la fel de eficient cu firme din ${city.name} ca si cu cele din alte orase.`,
    ],
    localWhyHeading: `De ce software custom in ${city.name}, cu noi`,
    localWhyPoints: [
      {
        title: `Context economic relevant`,
        text: `${city.highlights[2] || city.highlights[0]} — un argument in plus pentru digitalizarea reala a proceselor, nu doar o prezenta online.`,
      },
      {
        title: "Audit gratuit, fara deplasare",
        text: `Primul pas (auditul proceselor tale) se face printr-o discutie video — nu trebuie sa fim fizic la biroul tau din ${city.name} pentru a intelege ce ai nevoie.`,
      },
      {
        title: "Integrare cu sisteme deja folosite local",
        text: `Conectam aplicatia noua cu ERP-ul, facturarea sau CRM-ul deja folosit in firma ta, oriunde ar fi gazduite acestea.`,
      },
    ],
    localFaq: [
      {
        question: `Trebuie sa fiti fizic in ${city.name} pentru acest proiect?`,
        answer: `Nu, intregul proces (audit, specificatie, dezvoltare, testare, predare) se desfasoara online. Lucram cu firme din ${city.name} la fel ca si cu firme din restul tarii.`,
      },
      {
        question: `Cat conteaza marimea pietei din ${city.name} pentru acest tip de proiect?`,
        answer: `Nu foarte mult — un sistem de digitalizare interna (panou de administrare, automatizare) e construit dupa procesul specific al firmei tale, nu dupa marimea pietei locale.`,
      },
    ],
  };
}

function buildDigitalizareContent(city: City): LocalPageContent {
  return {
    seoTitle: `Digitalizare Afaceri si Automatizari in ${city.name}`,
    seoDescription: `Digitalizare pentru firme din ${city.name}: site-uri si aplicatii eligibile Start-Up Nation/fonduri europene, automatizari de procese. Audit gratuit, oferta clara.`,
    h1: `Digitalizare afaceri in ${city.name}`,
    eyebrow: `Digitalizare afaceri • ${city.name}`,
    introParagraphs: [
      `Ajutam firmele din ${city.name} sa treaca de la procese pe hartie si Excel-uri la solutii digitale complete. ${city.profile}`,
      `De la site-uri si magazine online eligibile pentru finantari europene, pana la automatizarea proceselor interne — construim un plan de digitalizare potrivit pentru specificul pietei din ${city.name}, nu o solutie generica.`,
    ],
    localWhyHeading: `De ce digitalizare in ${city.name}, cu noi`,
    localWhyPoints: [
      {
        title: `Adaptat la contextul local`,
        text: `${city.highlights[0]} — un factor real in prioritizarea digitalizarii pentru firme din ${city.name}.`,
      },
      {
        title: "Experienta cu finantari europene",
        text: `Cunoastem cerintele Start-Up Nation si ale voucherului de digitalizare, indiferent de judetul in care firma ta e inregistrata, inclusiv ${city.county}.`,
      },
      {
        title: "Plan clar, nu doar o lista de recomandari",
        text: `Primesti un plan concret de digitalizare, prioritizat dupa impact, potrivit pentru o firma din ${city.name}.`,
      },
    ],
    localFaq: [
      {
        question: `Firma mea din ${city.name} e eligibila pentru Start-Up Nation sau alte fonduri?`,
        answer: `Eligibilitatea depinde de programul de finantare si de criteriile acestuia, nu de orasul in care e inregistrata firma. Iti putem spune concret, dupa o discutie scurta despre situatia ta.`,
      },
      {
        question: `Cat de repede puteti incepe un proiect de digitalizare pentru o firma din ${city.name}?`,
        answer: `De obicei incepem in cateva zile de la prima discutie — intregul proces (audit, plan, implementare) se desfasoara online, deci nu depindem de deplasari pana in ${city.name}.`,
      },
    ],
  };
}

const builders: Record<LocalServiceSlug, (city: City) => LocalPageContent> = {
  "creare-site-web-prezentare": buildSiteWebContent,
  "creare-magazin-online": buildMagazinOnlineContent,
  "dezvoltare-software-custom": buildSoftwareCustomContent,
  "digitalizare-afaceri": buildDigitalizareContent,
};

export function buildLocalPageContent(service: LocalServiceSlug, city: City): LocalPageContent {
  return builders[service](city);
}
