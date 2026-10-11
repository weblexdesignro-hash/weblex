// Runda 2 din planul editorial (vezi blog-plan.ts) — 6 articole complete pe nise
// verticale (hotel/pensiune, restaurant, service auto, cabinet avocatura, industrie,
// fotovoltaice/instalatii), gata de publicat.

import type { BlogArticle } from "./blog-articles-round1";

export const blogArticlesRound2: BlogArticle[] = [
  {
    slug: "site-web-pensiune-rezervari-online",
    title: "Site web pentru pensiuni și hoteluri: ce funcții chiar aduc rezervări",
    excerpt:
      "Un site frumos nu e de ajuns pentru o pensiune. Iata ce functionalitati transforma vizitatorii in rezervari confirmate.",
    seoTitle: "Site web pensiune cu rezervari online — ce functii conteaza",
    seoDescription:
      "Afla ce functionalitati trebuie sa aiba site-ul unei pensiuni sau hotel ca sa transforme vizitatorii in rezervari.",
    publishedAt: "2026-08-05",
    blocks: [
      { type: "p", text: "Pentru o pensiune sau un hotel mic, site-ul nu e doar o carte de vizita — e, de multe ori, principalul canal de rezervari directe, fara comision catre platformele de booking. Diferenta dintre un site care doar arata bine si unul care chiar aduce rezervari sta in cateva functionalitati esentiale." },
      { type: "h2", text: "Calendar de disponibilitate, in timp real" },
      { type: "p", text: "Vizitatorul trebuie sa vada imediat ce date sunt libere, fara sa trimita un mesaj si sa astepte raspuns. Un calendar actualizat automat elimina frustrarea si creste sansele ca cineva sa finalizeze rezervarea pe loc, nu sa plece sa caute altundeva." },
      { type: "h2", text: "Rezervare directa, fara comision" },
      { type: "p", text: "Platformele de tip Booking.com sau Airbnb iau un comision semnificativ din fiecare rezervare. Un sistem de rezervare integrat in propriul site (asemanator cu ce am construit pentru clienti precum Stayo sau MAV Boutique Villa) iti permite sa pastrezi acel comision — sau sa oferi un pret mai bun direct clientilor care te gasesc singuri." },
      { type: "h2", text: "Poze reale, de calitate" },
      { type: "p", text: "Oamenii rezerva cu ochii. Poze profesionale ale camerelor, spatiilor comune si zonei din jur fac diferenta intre \"pare de incredere\" si \"mai bine caut altceva\". Investitia intr-o sesiune foto profesionista se recupereaza rapid prin rezervari." },
      { type: "h2", text: "Plata online sau avans, in siguranta" },
      { type: "p", text: "Posibilitatea de a plati un avans sau toata suma online, cu card, reduce semnificativ rata anularilor si a rezervarilor \"fantoma\". Clientii care platesc ceva in avans sunt mult mai probabil sa se prezinte." },
      { type: "h2", text: "Integrare cu recenzii" },
      { type: "p", text: "Afisarea recenziilor reale (de pe Google sau direct pe site) langa butonul de rezervare creste increderea exact in momentul deciziei — nu trebuie sa plece pe alt site sa le caute." },
      { type: "p", text: "Daca administrezi o pensiune sau un hotel mic si vrei un sistem de rezervare propriu, care sa reduca dependenta de platformele cu comisioane mari, scrie-ne prin formularul de contact — alege \"Site web de prezentare\" si spune-ne in detalii ce ai nevoie." },
    ],
  },
  {
    slug: "meniu-digital-comenzi-online-restaurant",
    title: "Meniu digital și comenzi online pentru restaurante: ghid 2026",
    excerpt:
      "Un meniu QR si comenzi online proprii iti reduc costurile fata de aplicatiile de livrare si iti pastreaza datele clientilor.",
    seoTitle: "Meniu digital si comenzi online restaurant — ghid",
    seoDescription:
      "Afla cum functioneaza meniul digital cu QR code si comenzile online proprii pentru restaurante, fara comisioane mari.",
    publishedAt: "2026-08-07",
    blocks: [
      { type: "p", text: "Platformele de livrare precum Glovo sau Bolt Food sunt utile pentru vizibilitate, dar comisioanele lor (adesea 25-30% din valoarea comenzii) erodeaza serios marja unui restaurant. Un meniu digital si un sistem de comenzi propriu ofera o alternativa sau un complement mult mai profitabil." },
      { type: "h2", text: "Meniul digital cu cod QR" },
      { type: "p", text: "In loc de meniuri tiparite (greu de actualizat, costisitoare de reeditat la fiecare schimbare de pret), un cod QR pe masa deschide un meniu digital, mereu actualizat, cu poze, alergeni si descrieri clare. Clientii il pot naviga de pe propriul telefon, fara sa astepte un chelner." },
      { type: "h2", text: "Comenzi online directe, fara comision la intermediar" },
      { type: "p", text: "Un sistem de comenzi online propriu, integrat in site-ul restaurantului, le permite clientilor sa comande direct — pentru livrare sau ridicare personala — fara ca restaurantul sa piarda un sfert din incasari catre o platforma terta." },
      { type: "h2", text: "Cat costa, real, comparativ" },
      { type: "p", text: "Daca un restaurant genereaza, sa spunem, 10.000 lei pe luna din comenzi prin platforme de livrare, comisionul de 25-30% inseamna 2.500-3.000 lei pierduti lunar. Un sistem propriu are un cost fix, mult mai mic, si orice crestere a volumului de comenzi iti ramane tie, nu platformei." },
      { type: "h2", text: "Nu trebuie sa renunti complet la platformele de livrare" },
      { type: "p", text: "Cea mai buna strategie, de obicei, e hibrida: ramai prezent pe platformele mari pentru vizibilitate si clienti noi, dar incurajezi activ clientii existenti (prin meniul de pe masa, prin social media) sa comande direct, prin propriul canal, unde marja e mai buna." },
      { type: "h2", text: "Date despre clienti, pe care le pastrezi" },
      { type: "p", text: "Cand cineva comanda printr-o platforma terta, datele acelui client (telefon, preferinte, frecventa comenzilor) raman la platforma, nu la tine. Un sistem propriu iti permite sa construiesti o baza de clienti fideli, carora le poti trimite oferte direct." },
      { type: "p", text: "Daca vrei un meniu digital si un sistem de comenzi online pentru restaurantul tau, scrie-ne prin formularul de contact — avem deja experienta cu proiecte similare in zona HoReCa." },
    ],
  },
  {
    slug: "site-web-service-auto",
    title: "Site web pentru service auto: cum atragi clienți din căutările Google",
    excerpt:
      "Majoritatea clientilor de service auto cauta pe Google inainte sa sune. Iata ce trebuie sa aiba site-ul tau ca sa te aleaga pe tine.",
    seoTitle: "Site web service auto — cum atragi clienti din Google",
    seoDescription:
      "Ghid pentru site-ul unui service auto: programari online, lista de servicii cu preturi, SEO local, recenzii.",
    publishedAt: "2026-08-10",
    blocks: [
      { type: "p", text: "Cand cuiva i se strica masina sau are nevoie de o revizie, primul reflex, din ce in ce mai des, e sa caute pe Google \"service auto + numele orasului\", nu sa intrebe un prieten. Daca site-ul tau nu apare acolo, sau apare dar nu convinge, pierzi clientul in favoarea unui concurent mai vizibil online." },
      { type: "h2", text: "Programari online, fara telefon" },
      { type: "p", text: "Multi clienti prefera sa programeze o interventie direct de pe telefon, seara sau in weekend, fara sa astepte orele de program pentru a suna. Un formular simplu de programare, cu alegerea tipului de interventie si a datei dorite, elimina aceasta frictiune." },
      { type: "h2", text: "Lista de servicii, cu preturi orientative" },
      { type: "p", text: "Transparenta creste increderea. O pagina clara cu serviciile oferite (revizii, schimb ulei, diagnoza, reparatii) si preturi orientative (chiar daca finale dupa diagnoza) ajuta clientul sa decida mai usor sa te sune pe tine, nu pe concurent." },
      { type: "h2", text: "SEO local — \"service auto + orasul tau\"" },
      { type: "p", text: "Optimizarea site-ului pentru cautari locale (Google Business Profile complet, cuvinte cheie care includ orasul, pagina de contact cu adresa si harta) e esentiala pentru a aparea in rezultatele locale, unde se dau majoritatea deciziilor." },
      { type: "h2", text: "Recenzii vizibile" },
      { type: "p", text: "Increderea conteaza enorm cand lasi masina in grija cuiva. Recenziile de pe Google, afisate si pe site, sunt unul dintre cei mai puternici factori de decizie pentru un client nou, care nu te cunoaste inca." },
      { type: "h2", text: "Informatii clare de contact si program" },
      { type: "p", text: "Pare evident, dar multe site-uri de service-uri auto ingroapa numarul de telefon sau programul de functionare. Acestea trebuie sa fie vizibile imediat, pe prima pagina, fara cautare." },
      { type: "p", text: "Daca vrei un site pentru service-ul tau auto, optimizat pentru cautari locale si cu programari online, scrie-ne prin formularul de contact." },
    ],
  },
  {
    slug: "site-web-cabinet-avocatura",
    title: "Site de prezentare pentru cabinete de avocatură: încredere, claritate, conversii",
    excerpt:
      "Pentru un cabinet de avocatura, site-ul e adesea primul contact cu un client aflat intr-o situatie stresanta. Iata ce conteaza.",
    seoTitle: "Site web cabinet avocatura — incredere si conversii",
    seoDescription:
      "Ghid pentru site-ul unui cabinet de avocatura: arii de practica, formular de contact discret, elemente de incredere.",
    publishedAt: "2026-08-12",
    blocks: [
      { type: "p", text: "Cineva care cauta un avocat o face, de obicei, intr-un moment dificil — un conflict, o problema legala, o decizie importanta. Site-ul unui cabinet de avocatura trebuie sa raspunda nu doar la intrebarea \"ce servicii oferiti\", ci si la nevoia de incredere si claritate a unui client aflat sub presiune." },
      { type: "h2", text: "Pagini clare pe arii de practica" },
      { type: "p", text: "In loc de o singura pagina generica \"Servicii\", o structura cu pagini dedicate pe fiecare arie de practica (drept civil, dreptul muncii, drept comercial etc.) ajuta atat vizitatorul sa gaseasca rapid ce cauta, cat si SEO-ul — fiecare pagina poate fi optimizata pentru cautari specifice." },
      { type: "h2", text: "Prezentarea avocatilor, nu doar a cabinetului" },
      { type: "p", text: "Oamenii au incredere in oameni, nu doar in branduri. O pagina \"Despre noi\" cu fotografii profesionale, experienta si specializarea fiecarui avocat creste considerabil increderea fata de un site impersonal, fara chipuri reale." },
      { type: "h2", text: "Formular de contact discret si simplu" },
      { type: "p", text: "Multi clienti potentiali ezita sa sune direct, mai ales pentru subiecte sensibile. Un formular de contact simplu, cu un mesaj clar despre confidentialitate, le ofera o cale mai putin intimidanta de a lua primul contact." },
      { type: "h2", text: "Continut util, nu doar promotional" },
      { type: "p", text: "Articole scurte care explica, pe intelesul tuturor, pasii unei proceduri comune (de exemplu, \"cum se desfasoara un divorț amiabil\") construiesc incredere si aduc trafic organic din partea oamenilor care cauta raspunsuri, inainte sa caute un avocat anume." },
      { type: "h2", text: "Viteza si discretie" },
      { type: "p", text: "Un site lent sau greoi transmite, subtil, lipsa de profesionalism — exact opusul a ceea ce vrea sa transmita un cabinet de avocatura. Viteza de incarcare si un design curat, serios, conteaza mai mult decat in multe alte domenii." },
      { type: "p", text: "Daca reprezinti un cabinet de avocatura si vrei un site care sa transmita incredere inca din prima secunda, scrie-ne prin formularul de contact." },
    ],
  },
  {
    slug: "digitalizare-firma-industriala",
    title: "Digitalizare pentru firme din industrie și producție: de unde începi",
    excerpt:
      "Multe firme industriale romanesti inca nu au o prezenta online potrivita cu calitatea muncii lor. Iata de unde se incepe digitalizarea.",
    seoTitle: "Digitalizare firma industriala — de unde incepi",
    seoDescription:
      "Ghid practic pentru digitalizarea unei firme din industrie: site B2B, catalog de produse, cereri de oferta online.",
    publishedAt: "2026-08-14",
    blocks: [
      { type: "p", text: "In industrie si productie, multe firme solide, cu decenii de experienta si clienti fideli, au o prezenta online minimala — un site vechi, neresponsive, sau deloc. In acelasi timp, achizitorii din B2B cauta tot mai des furnizori online, inainte sa ridice telefonul. Digitalizarea nu mai e optionala, e o chestiune de a ramane vizibil." },
      { type: "h2", text: "Pasul 1: un site de prezentare B2B solid" },
      { type: "p", text: "Un site clar, cu certificari, capacitati de productie, portofoliu de proiecte si clienti (acolo unde se poate mentiona), e primul pas. Scopul nu e sa vinda direct, ci sa convinga un achizitor sau un inginer ca firma e serioasa si merita un apel." },
      { type: "h2", text: "Pasul 2: catalog de produse sau servicii, structurat" },
      { type: "p", text: "Pentru firmele cu o gama variata de produse sau servicii, un catalog online, usor de navigat si cautat, economiseste timp atat clientului, cat si echipei de vanzari — nu mai trebuie trimise PDF-uri grele la fiecare cerere." },
      { type: "h2", text: "Pasul 3: formulare de cerere de oferta, structurate" },
      { type: "p", text: "In loc de un simplu \"scrieti-ne\", un formular care cere detalii relevante (cantitate, specificatii tehnice, termen dorit) ajuta echipa de vanzari sa raspunda mai rapid si mai precis, scurtand ciclul de vanzare." },
      { type: "h2", text: "Pasul 4: integrare cu sisteme interne (atunci cand are sens)" },
      { type: "p", text: "Pentru firme mai mature, digitalizarea poate merge mai departe — integrarea site-ului sau a unui portal de client cu sistemele interne (ERP, stocuri, productie), pentru a oferi clientilor vizibilitate asupra comenzilor, fara interventie manuala." },
      { type: "h2", text: "De unde incepi, concret" },
      { type: "p", text: "Nu trebuie sa faci totul deodata. Cel mai bun punct de plecare e un site de prezentare solid, cu un formular bun de cerere de oferta — restul se poate adauga treptat, pe masura ce afacerea creste digital." },
      { type: "p", text: "Daca firma ta din industrie sau productie are nevoie de un prim pas serios in digitalizare, scrie-ne prin formularul de contact — alege \"Digitalizare afaceri\" sau \"Aplicație web Custom\", in functie de ce ai nevoie." },
    ],
  },
  {
    slug: "site-web-firma-fotovoltaice",
    title: "Site web pentru firme de instalații și energie regenerabilă (panouri fotovoltaice)",
    excerpt:
      "Piata de panouri fotovoltaice e in crestere, dar si competitia online. Iata ce trebuie sa aiba site-ul firmei tale ca sa castige clienti.",
    seoTitle: "Site web firma fotovoltaice si instalatii — ghid",
    seoDescription:
      "Ghid pentru site-ul unei firme de panouri fotovoltaice sau instalatii: calculator economii, portofoliu, SEO local.",
    publishedAt: "2026-08-17",
    blocks: [
      { type: "p", text: "Interesul pentru panourile fotovoltaice si solutiile de energie regenerabila a crescut constant in Romania, iar odata cu el si numarul firmelor care ofera aceste servicii. Intr-o piata tot mai aglomerata, un site bun face diferenta intre a fi gasit primul sau a ramane invizibil in spatele concurentei." },
      { type: "h2", text: "Calculator orientativ de economii" },
      { type: "p", text: "Un instrument simplu, unde vizitatorul introduce consumul lunar aproximativ si primeste o estimare a economiilor posibile cu panouri fotovoltaice, transforma un vizitator curios intr-un lead calificat — mult mai eficient decat un simplu text descriptiv." },
      { type: "h2", text: "Portofoliu de proiecte, cu poze reale" },
      { type: "p", text: "Instalarea de panouri solare e o investitie serioasa pentru un client. Poze reale ale proiectelor finalizate (acoperisuri rezidentiale, hale industriale) construiesc increderea necesara pentru a lua decizia." },
      { type: "h2", text: "Formular de cerere de oferta, cu detalii relevante" },
      { type: "p", text: "Un formular care cere tipul de acoperis, suprafata disponibila si consumul estimat ajuta echipa de vanzari sa pregateasca o oferta mai precisa din prima discutie, fara ture suplimentare de intrebari." },
      { type: "h2", text: "SEO local — \"panouri fotovoltaice + orasul tau\"" },
      { type: "p", text: "Majoritatea clientilor cauta o firma din zona lor, pentru instalare si service ulterior mai usor. Optimizarea pentru cautari locale (Google Business Profile, pagini pe orase, daca activezi in mai multe zone) e esentiala pentru vizibilitate." },
      { type: "h2", text: "Informatii clare despre garantii si mentenanta" },
      { type: "p", text: "Pentru o investitie pe termen lung precum un sistem fotovoltaic, clientii vor sa stie clar ce garantii primesc si ce presupune mentenanta ulterioara. O pagina dedicata acestor informatii elimina incertitudinea care poate bloca o decizie de cumparare." },
      { type: "p", text: "Daca firma ta activeaza in domeniul instalatiilor sau al energiei regenerabile si vrei un site care sa genereze cereri de oferta calificate, scrie-ne prin formularul de contact." },
    ],
  },
];
