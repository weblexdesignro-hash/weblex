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

// Varianta in engleza a intrebarilor frecvente de mai sus — folosita pe
// /en/intrebari-frecvente. Structura (id-uri de categorie, numar de intrebari)
// e identica cu faqCategories, doar textul e tradus.
export const faqCategoriesEn: FaqCategory[] = [
  {
    id: "cost",
    label: "Cost and pricing",
    items: [
      {
        question: "How much does a presentation website cost?",
        answer:
          "A presentation website starts at €249 for a single page (the Business Basic package) and goes up depending on the number of pages and features, up to €749 for complex projects with 1-50 pages (the Business Pro package). The final price depends on the content, number of pages and the integrations you need (online booking, chat, map, photo gallery). We give you an exact quote after a short discussion about your business, with no hidden costs.",
      },
      {
        question: "How much does an online store (e-commerce) cost?",
        answer:
          "Our online store packages start at €799 for an import of 1-50 products and go up to €1,599 for catalogs of up to 1,000 products. All packages include your own admin panel with no external monthly management fees, automatic shipping calculation, cash-on-delivery and card payment, and a promotions and coupons system.",
      },
      {
        question: "How much does a custom software application or a digitalization project cost?",
        answer:
          "Digitalization projects and custom software applications are quoted individually, since they depend on the specific processes you want to automate (admin panels, integrations with other systems, internal workflows). We do a free audit of your requirements and send you a quote with clear pricing and timelines, with no obligation.",
      },
      {
        question: "Do I pay once, or are there monthly costs?",
        answer:
          "The project price (website, online store or application) is paid once, on delivery. Recurring costs are separate and optional: the domain (yearly), hosting (yearly) and ongoing maintenance (if you choose it), which you can manage yourself or leave to us.",
      },
      {
        question: "Are there any hidden costs or extra fees?",
        answer:
          "No. The quote you receive before the project starts includes everything you need to launch: design, development, basic on-page SEO, an SSL certificate and GDPR compliance. Any additional feature (e.g. integration with an external ERP, multi-language support, custom modules) is discussed and agreed upfront, never added as a surprise on the final invoice.",
      },
    ],
  },
  {
    id: "durata",
    label: "Delivery time",
    items: [
      {
        question: "How long does it take to deliver a presentation website?",
        answer:
          "A presentation website with 1-5 pages is delivered, on average, in 2-3 weeks after we receive your content (text, photos, logo). Larger projects, with 20-50 pages, can take 4-6 weeks. The exact timeline is included in the quote, before work begins.",
      },
      {
        question: "How long does it take to deliver an online store?",
        answer:
          "An online store with an import of 1-50 products is usually delivered in 3-4 weeks. For larger catalogs (500-1,000 products) or additional integrations (invoicing, couriers, ERP), the timeline can extend to 6-8 weeks, depending on complexity.",
      },
      {
        question: "Can you deliver a website faster, ahead of a deadline (e.g. Start-Up Nation)?",
        answer:
          "Yes. For projects with a deadline tied to a funding program (Start-Up Nation, European funds, the digitalization voucher), we deliver the website before the date stated in the funding application and prepare the documents needed for reimbursement directly (invoice, acceptance report, a screenshot of the working website). Let us know the deadline from your application in the first discussion, so we can plan accordingly.",
      },
      {
        question: "What determines the actual duration of a project?",
        answer:
          "The biggest factor is how quickly we receive your content (text, photos, logo, domain access). A project where we get all the material in the first week moves much faster than one where content arrives in stages.",
      },
    ],
  },
  {
    id: "ce-este-inclus",
    label: "What's included",
    items: [
      {
        question: "What's included in a presentation website package?",
        answer:
          "Every presentation website includes a custom responsive design (not a generic template), a contact form and location map, help setting up your domain and hosting, a custom email address, an SSL certificate, GDPR compliance and a cookie banner, on-page SEO and speed optimization, plus integration with Google Business Profile, Analytics and Search Console.",
      },
      {
        question: "What's included in an online store package?",
        answer:
          "An online store we deliver comes with its own admin panel (no external monthly fees), unlimited products, checkout, automatic shipping calculation by zone, cash-on-delivery and card payment, a promotions and coupons system, newsletter and sales reports, on top of on-page SEO and the Google integrations.",
      },
      {
        question: "Does the website include SEO optimization?",
        answer:
          "Yes. On-page SEO optimization (correct H1-H3 heading structure, loading speed, Schema.org structured data, meta descriptions, Google Search Console and Analytics integration) is included in every project we deliver, not a separate service with an extra cost.",
      },
      {
        question: "Do you provide the content (text, photos), or do I need to supply it?",
        answer:
          "Generally, the core content (text, photos of your products/services) is provided by you, since you know your business best. We guide you with a clear brief on what's needed for each page, and we can write or polish specific copy on request. For online stores, we also offer professional product photography as a separate service.",
      },
      {
        question: "Is the website responsive (does it look good on mobile)?",
        answer:
          "Yes, 100%. Every page is designed mobile-first, since almost half of a site's traffic comes from mobile, and only then adapted for tablet and desktop.",
      },
    ],
  },
  {
    id: "mentenanta-securitate",
    label: "Maintenance and security",
    items: [
      {
        question: "What does maintenance mean and why do I need it?",
        answer:
          "Maintenance means periodic security updates, regular backups and fast fixes whenever an issue comes up (site down, an error, an attack). Over time, a site that isn't kept up to date becomes vulnerable and can stop working correctly. We recommend ongoing maintenance, especially for online stores, where a problem directly means lost sales.",
      },
      {
        question: "What happens if my website is attacked or goes down?",
        answer:
          "Clients with an active maintenance contract get priority response in these situations and a restore from backup. Without maintenance, we can still step in on a one-off basis, at an extra cost, but response time is no longer guaranteed.",
      },
      {
        question: "Does the website have an SSL certificate and is it GDPR compliant?",
        answer:
          "Yes, the SSL certificate (the padlock in the browser, https://) and basic GDPR compliance (privacy policy, cookie banner) are included by default in every project, not optional extras.",
      },
      {
        question: "Can I manage the website myself after it's delivered?",
        answer:
          "Yes. The websites and online stores we deliver come with their own admin panel, from which you can edit text, photos, products and prices with no technical knowledge needed. We walk you through how to use it at handover.",
      },
    ],
  },
  {
    id: "tehnologii-proces",
    label: "Technology and process",
    items: [
      {
        question: "What technologies do you use for development?",
        answer:
          "We use modern technology (Next.js, React, PostgreSQL databases), which ensures fast loading times and long-term scalability, for both websites and online stores as well as custom software applications and digitalization projects.",
      },
      {
        question: "What are the steps of a project with you?",
        answer:
          "The process has 5 stages: (1) discussion and brief, where we understand your business and goals; (2) design and concept, when we propose the visual direction; (3) development, when we actually build the website or application; (4) testing and launch, checking speed, SEO and responsiveness on every device; (5) ongoing maintenance, after launch.",
      },
      {
        question: "Do you work with companies outside Romania?",
        answer:
          "Yes, we work with clients worldwide, entirely online (video call, email, phone) — there's no need for an in-person meeting to start or finish a project.",
      },
      {
        question: "Can you take over and rebuild an older website?",
        answer:
          "Yes. We take over existing websites and rebuild them completely — design, structure and speed — while keeping the visual identity and the valuable content already built up (articles, Google rankings), so you don't lose the traffic you've already earned.",
      },
      {
        question: "Is the website eligible for Start-Up Nation or other European funds?",
        answer:
          "Yes, we build presentation websites and online stores that are eligible as an expense under Start-Up Nation and other European funding programs (including the digitalization voucher). We deliver the project on time against your funding application deadline and prepare the documents needed for reimbursement: invoice, acceptance report and a screenshot of the working website.",
      },
    ],
  },
];
