// Intrebari frecvente afisate pe pagina /intrebari-frecvente, grupate pe categorii.
// Continutul e folosit si pentru datele structurate Schema.org FAQPage (vezi pagina).

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: string;
  label: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: "cost",
    label: "Cost si preturi",
    items: [
      {
        question: "Cat costa crearea unui site de prezentare?",
        answer:
          "Un site de prezentare incepe de la 249 EUR pentru o pagina (pachetul Business Basic) si creste in functie de numarul de pagini si functionalitati, pana la 749 EUR pentru proiecte complexe, cu 1-50 de pagini (pachetul Business Pro). Pretul final depinde de continut, numarul de pagini si integrarile necesare (programari online, chat, harta, galerie foto). Iti facem o oferta exacta dupa un scurt discutie despre afacerea ta, fara costuri ascunse.",
      },
      {
        question: "Cat costa un magazin online (e-commerce)?",
        answer:
          "Pachetele noastre de magazin online pornesc de la 799 EUR pentru import de 1-50 de produse si ajung la 1.599 EUR pentru cataloage de pana la 1.000 de produse. Toate pachetele includ panou de administrare propriu, fara costuri lunare externe de management, calcul automat de livrare, plata ramburs si cu cardul si sistem de promotii si cupoane.",
      },
      {
        question: "Cat costa o aplicatie software la comanda sau un proiect de digitalizare?",
        answer:
          "Proiectele de digitalizare si aplicatiile software personalizate sunt oferte individuale, pentru ca depind de procesele specifice pe care vrei sa le automatizezi (panouri de administrare, integrari cu alte sisteme, fluxuri interne). Facem un audit gratuit al cerintelor si iti trimitem o oferta cu preturi si termene clare, fara obligatii.",
      },
      {
        question: "Platesc o singura data sau exista costuri lunare?",
        answer:
          "Pretul proiectului (site, magazin online sau aplicatie) se plateste o singura data, la livrare. Costurile recurente sunt separate si optionale: domeniul (anual), hostingul (anual) si mentenanta continua (daca o alegi), pe care le poti gestiona si singur sau le poti incredinta noua.",
      },
      {
        question: "Exista costuri ascunse sau taxe suplimentare?",
        answer:
          "Nu. Oferta pe care o primesti inainte de a incepe proiectul include tot ce ai nevoie pentru lansare: design, dezvoltare, SEO on-page de baza, certificat SSL si conformitate GDPR. Orice functionalitate aditionala (ex. integrare cu un ERP extern, multi-limba, module custom) este discutata si confirmata inainte, nu adaugata surprinzator in factura finala.",
      },
    ],
  },
  {
    id: "durata",
    label: "Durata de livrare",
    items: [
      {
        question: "In cat timp este livrat un site de prezentare?",
        answer:
          "Un site de prezentare de 1-5 pagini este livrat, in medie, in 2-3 saptamani de la primirea continutului (texte, poze, logo). Proiectele mai mari, cu 20-50 de pagini, pot dura 4-6 saptamani. Termenul exact iti este comunicat in oferta, inainte de a incepe lucrul.",
      },
      {
        question: "In cat timp este livrat un magazin online?",
        answer:
          "Un magazin online cu import de 1-50 de produse este livrat, de regula, in 3-4 saptamani. Pentru cataloage mai mari (500-1.000 de produse) sau integrari suplimentare (facturare, curieri, ERP), termenul poate creste la 6-8 saptamani, in functie de complexitate.",
      },
      {
        question: "Puteti livra un site mai rapid, inainte de un termen limita (ex. Start-Up Nation)?",
        answer:
          "Da. Pentru proiectele cu termen-limita legat de o finantare (Start-Up Nation, fonduri europene, voucherul de digitalizare), livram site-ul inainte de data din cererea de finantare si pregatim direct documentele necesare pentru decontare (factura, proces-verbal de receptie, captura de ecran a site-ului functional). Spune-ne termenul din cerere inca din prima discutie, ca sa planificam corect.",
      },
      {
        question: "De ce depinde durata reala a unui proiect?",
        answer:
          "Cel mai mare factor este viteza cu care primim continutul de la tine (texte, poze, logo, acces la domeniu). Un proiect pentru care primim tot materialul din prima saptamana merge mult mai rapid decat unul in care continutul ajunge in etape.",
      },
    ],
  },
  {
    id: "ce-este-inclus",
    label: "Ce este inclus",
    items: [
      {
        question: "Ce este inclus intr-un pachet de site de prezentare?",
        answer:
          "Fiecare site de prezentare include design responsive personalizat (nu un sablon generic), formular de contact si harta de locatie, asistenta la configurarea domeniului si hostingului, email personalizat, certificat SSL, conformitate GDPR si banner de cookie-uri, optimizare SEO on-page si viteza, plus integrare cu Google Business Profile, Analytics si Search Console.",
      },
      {
        question: "Ce este inclus intr-un pachet de magazin online?",
        answer:
          "Un magazin online livrat de noi vine cu panou de administrare propriu (fara costuri lunare externe), produse nelimitate, checkout, calcul automat de livrare pe zone, plata ramburs si cu cardul, sistem de promotii si cupoane, newsletter si rapoarte de vanzari, pe langa SEO on-page si integrarile Google.",
      },
      {
        question: "Site-ul include si optimizare SEO?",
        answer:
          "Da. Optimizarea SEO on-page (structura corecta de titluri H1-H3, viteza de incarcare, date structurate Schema.org, meta-descrieri, integrare Google Search Console si Analytics) este inclusa in fiecare proiect de la noi, nu este un serviciu separat cu cost aditional.",
      },
      {
        question: "Primesc si continutul (texte, poze), sau trebuie sa il ofer eu?",
        answer:
          "In general, continutul de baza (texte, poze cu produsele/serviciile tale) este oferit de tine, pentru ca tu cunosti cel mai bine afacerea. Te ghidam cu un brief clar despre ce avem nevoie pentru fiecare pagina si putem scrie sau optimiza texte punctuale, la cerere. Pentru magazine online, oferim si servicii foto profesionale de produs, ca serviciu separat.",
      },
      {
        question: "Site-ul este responsive (se vede bine pe telefon)?",
        answer:
          "Da, 100%. Fiecare pagina este gandita intai pentru telefon (mobile-first), pentru ca aproape jumatate din traficul unui site vine de pe mobil, si abia apoi adaptata pentru tableta si desktop.",
      },
    ],
  },
  {
    id: "mentenanta-securitate",
    label: "Mentenanta si securitate",
    items: [
      {
        question: "Ce inseamna mentenanta si de ce am nevoie de ea?",
        answer:
          "Mentenanta inseamna actualizari periodice de securitate, back-up-uri regulate si interventii rapide atunci cand apare o problema (site picat, eroare, atac). Un site neactualizat devine, in timp, vulnerabil si poate ajunge sa nu mai functioneze corect. Recomandam mentenanta continua, mai ales pentru magazinele online, unde o problema inseamna direct vanzari pierdute.",
      },
      {
        question: "Ce se intampla daca site-ul meu este atacat sau pica?",
        answer:
          "Clientii care au un contract de mentenanta activ beneficiaza de interventie prioritara in astfel de situatii si de restaurare din back-up. Fara mentenanta, putem interveni punctual, contra cost, dar timpul de reactie nu mai este garantat.",
      },
      {
        question: "Site-ul are certificat SSL si este conform GDPR?",
        answer:
          "Da, certificatul SSL (lacatul din browser, https://) si conformitatea GDPR de baza (politica de confidentialitate, banner de cookie-uri) sunt incluse din oficiu in fiecare proiect, nu sunt opționale.",
      },
      {
        question: "Pot sa imi administrez eu singur site-ul dupa livrare?",
        answer:
          "Da. Site-urile si magazinele online livrate de noi vin cu panou de administrare propriu, din care poti edita texte, poze, produse si preturi fara cunostinte tehnice. Te instruim la predare cum sa il folosesti.",
      },
    ],
  },
  {
    id: "tehnologii-proces",
    label: "Tehnologii si proces de lucru",
    items: [
      {
        question: "Ce tehnologii folositi pentru dezvoltare?",
        answer:
          "Folosim tehnologii moderne (Next.js, React, baze de date PostgreSQL), care asigura timpi de incarcare rapizi si scalabilitate pe termen lung, atat pentru site-uri si magazine online, cat si pentru aplicatiile software personalizate si proiectele de digitalizare.",
      },
      {
        question: "Cum se desfasoara, pas cu pas, un proiect cu voi?",
        answer:
          "Procesul are 5 etape: (1) discutie si brief, in care intelegem afacerea si obiectivele tale; (2) design si concept, cand propunem directia vizuala; (3) dezvoltare, cand construim efectiv site-ul sau aplicatia; (4) testare si lansare, cu verificare de viteza, SEO si responsive pe toate device-urile; (5) mentenanta continua, dupa lansare.",
      },
      {
        question: "Lucrati si cu firme din afara Clujului?",
        answer:
          "Da, lucram cu clienti din toata tara, integral online (apel video, email, telefon) — nu este necesara o intalnire fata in fata pentru a demara sau finaliza un proiect.",
      },
      {
        question: "Puteti prelua si reconstrui un site mai vechi?",
        answer:
          "Da. Preluam site-uri existente si le reconstruim complet — design, structura si viteza —, pastrand identitatea vizuala si continutul valoros deja acumulat (articole, pozitionare in Google), ca sa nu pierzi traficul deja obtinut.",
      },
      {
        question: "Site-ul este eligibil pentru Start-Up Nation sau alte fonduri europene?",
        answer:
          "Da, realizam site-uri de prezentare si magazine online eligibile ca cheltuiala in cadrul Start-Up Nation si al altor finantari europene (inclusiv voucherul de digitalizare). Livram proiectul la timp fata de termenul din cererea de finantare si pregatim documentele necesare pentru decontare: factura, proces-verbal de receptie si captura de ecran a site-ului functional.",
      },
    ],
  },
];
