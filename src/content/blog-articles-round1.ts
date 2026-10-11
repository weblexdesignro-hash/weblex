// Runda 1 din planul editorial (vezi blog-plan.ts) — 6 articole complete, gata de
// publicat. Continutul e structurat pe blocuri simple (h2/p/ul) pentru ca scriptul
// de seed (src/seed/seed-blog.ts) sa le poata transforma automat in formatul
// Lexical cerut de Payload, fara sa fie nevoie sa scriem JSON Lexical de mana.

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  publishedAt: string; // ISO
  blocks: ContentBlock[];
};

export const blogArticlesRound1: BlogArticle[] = [
  {
    slug: "cat-costa-un-site-de-prezentare-2026",
    title: "Cât costă un site de prezentare în 2026 — ghid complet de preț",
    excerpt:
      "Preturile pentru un site de prezentare variaza de la cateva sute la mii de euro. Iti explicam de ce, ca sa stii exact pentru ce platesti.",
    seoTitle: "Cât costă un site de prezentare în 2026 — ghid de preț",
    seoDescription:
      "Afla cat costa un site de prezentare in 2026, ce influenteaza pretul si cum alegi pachetul potrivit pentru afacerea ta.",
    publishedAt: "2026-07-20",
    blocks: [
      { type: "p", text: "Una dintre primele intrebari pe care le primim de la antreprenori este simpla: \"Cat costa un site web?\" Raspunsul corect e \"depinde\", dar e un \"depinde\" cu reguli clare, nu o scuza. In acest ghid iti explicam exact de ce variaza preturile si cum sa alegi varianta potrivita pentru afacerea ta, fara sa platesti nici prea mult, nici prea putin pentru ce ai nevoie." },
      { type: "h2", text: "De ce nu exista un pret fix pentru \"un site web\"" },
      { type: "p", text: "Un site de o pagina pentru un cabinet individual nu are nimic in comun, ca volum de munca, cu un site de 40 de pagini pentru o firma cu mai multe linii de servicii. Pretul unui site reflecta, in esenta, trei lucruri: numarul de pagini si functionalitati, complexitatea design-ului si cat de mult continut (texte, poze, traduceri) trebuie pregatit sau scris de la zero." },
      { type: "h2", text: "Pachete orientative, ca sa ai un reper" },
      { type: "p", text: "Ca sa iti faci o idee realista, iata cum arata, in linii mari, segmentarea pietei pentru site-uri de prezentare in Romania:" },
      { type: "ul", items: [
        "Site one page (o singura pagina, pentru afaceri mici sau profesii liberale) — varianta cea mai accesibila, buna pentru a avea o prezenta online rapida.",
        "Site standard (1-20 de pagini) — potrivit pentru majoritatea IMM-urilor: pagini de servicii, portofoliu, despre noi, contact.",
        "Site complex (1-50 de pagini sau mai mult) — pentru afaceri cu multe servicii, prezenta in mai multe orase sau continut extins (blog, resurse, studii de caz).",
        "Proiect custom — cand ai nevoie de functionalitati speciale: formulare complexe, integrari cu alte sisteme, zone de membri.",
      ] },
      { type: "h2", text: "Ce influenteaza cel mai mult pretul final" },
      { type: "p", text: "Dincolo de numarul de pagini, cateva lucruri cantaresc greu in oferta finala: design-ul custom (fata de un template adaptat), optimizarea SEO inclusa de la lansare, numarul de limbi in care apare site-ul, si functionalitatile speciale precum formulare de programare online, integrari cu plata sau sisteme de rezervare." },
      { type: "p", text: "Un sfat practic: cere intotdeauna o oferta detaliata pe pagini si functionalitati, nu doar un numar final. Asa poti compara corect doua oferte diferite si poti intelege exact pentru ce platesti." },
      { type: "h2", text: "Pretul site-ului vs. costul de a nu avea unul" },
      { type: "p", text: "Merita privit si din partea cealalta: cat costa sa nu ai un site profesional? Clientii care te cauta pe Google si gasesc un concurent in loc de tine, sau care ajung pe un site vechi si neresponsive si pleaca imediat — sunt oportunitati pierdute, in fiecare luna. Un site bine facut nu e o cheltuiala, e o investitie care se recupereaza prin clienti noi." },
      { type: "h2", text: "Cum te ajutam noi" },
      { type: "p", text: "La Weblex Design iti oferim o oferta clara, pe pachete transparente (Business Basic, Standard, Pro sau Custom), fara costuri ascunse. Spune-ne ce ai nevoie si iti raspundem cu o oferta personalizata in maximum o zi lucratoare." },
    ],
  },
  {
    slug: "magazin-online-sau-pagina-facebook",
    title: "Magazin online sau pagină de Facebook? De ce afacerea ta are nevoie de propriul site",
    excerpt:
      "Vanzarea prin pagina de Facebook pare simpla la inceput, dar iti limiteaza cresterea. Iata de ce un magazin online propriu schimba jocul.",
    seoTitle: "Magazin online vs pagina de Facebook — ce alegi?",
    seoDescription:
      "Compara vanzarea printr-o pagina de Facebook cu un magazin online propriu si afla de ce iti limiteaza cresterea afacerii.",
    publishedAt: "2026-07-22",
    blocks: [
      { type: "p", text: "Multi antreprenori incep sa vanda online direct pe o pagina de Facebook sau Instagram — e rapid, gratuit si familiar. Functioneaza bine la inceput, dar pe masura ce afacerea creste, limitarile devin din ce in ce mai costisitoare. Iata ce pierzi, de fapt, cand vinzi doar prin retele sociale." },
      { type: "h2", text: "Nu detii nimic din ce construiesti" },
      { type: "p", text: "O pagina de Facebook poate fi restrictionata, suspendata sau pur si simplu poate pierde din vizibilitate organica peste noapte, din motive care nu tin de tine. Tot ce ai construit — urmaritori, postari, conversatii cu clientii — ramane pe o platforma pe care n-o controlezi. Un magazin online propriu e al tau: domeniul, datele clientilor, istoricul comenzilor." },
      { type: "h2", text: "Clientii nu te gasesc pe Google" },
      { type: "p", text: "Cand cineva cauta \"cumpara [produsul tau] online\", Google nu indexeaza postari individuale de Facebook la fel cum indexeaza paginile unui magazin online structurat. Asta inseamna ca ratezi tot traficul organic — clienti care te-ar fi gasit gratuit, prin cautare, fara sa dai bani pe reclame." },
      { type: "h2", text: "Procesul de comanda e greoi pentru client" },
      { type: "p", text: "\"Scrie-mi in privat pentru comanda\" functioneaza pentru cativa clienti, dar pierde pe drum pe toti cei care vor sa cumpere rapid, fara sa astepte un raspuns. Un magazin online ofera cos de cumparaturi, plata online sau ramburs, si confirmare instantanee — exact ce asteapta un cumparator obisnuit cu Amazon sau eMAG." },
      { type: "h2", text: "Ce castigi cu un magazin online propriu" },
      { type: "ul", items: [
        "Control total asupra designului, preturilor si experientei de cumparare.",
        "Vizibilitate in Google prin SEO, nu doar prin reclame platite.",
        "Date despre clienti si comenzi pe care le poti folosi pentru remarketing si fidelizare.",
        "Credibilitate — un magazin online profesional inspira mai multa incredere decat o pagina de social media.",
        "Scalabilitate — poti adauga produse, categorii si functionalitati noi pe masura ce cresti.",
      ] },
      { type: "h2", text: "Nu trebuie sa renunti la social media" },
      { type: "p", text: "Ideal, cele doua functioneaza impreuna: folosesti Facebook si Instagram pentru a aduce trafic si a construi comunitate, iar magazinul online propriu e locul unde se intampla, de fapt, vanzarea — in siguranta, cu control total si cu posibilitate de crestere pe termen lung." },
      { type: "p", text: "Daca vinzi deja prin social media si simti ca ai atins un plafon, hai sa discutam despre un magazin online potrivit pentru volumul tau de produse — de la Shop Basic (pana la 50 de produse) pana la variante Custom pentru cataloage mari." },
    ],
  },
  {
    slug: "cum-alegi-firma-pentru-creare-site-web",
    title: "Cum alegi firma potrivită pentru crearea unui site web: 7 întrebări de pus înainte să semnezi",
    excerpt:
      "Nu toate agentiile ofera acelasi lucru pentru acelasi pret. Iata ce sa intrebi inainte de a semna un contract pentru site-ul tau.",
    seoTitle: "Cum alegi firma de creare site web — 7 intrebari esentiale",
    seoDescription:
      "Ghid practic cu 7 intrebari de pus unei agentii de web design inainte sa semnezi contractul pentru site-ul afacerii tale.",
    publishedAt: "2026-07-24",
    blocks: [
      { type: "p", text: "Alegerea firmei care iti construieste site-ul e o decizie care iti afecteaza afacerea ani de zile, nu doar in perioada proiectului. Un site prost facut te costa de doua ori: o data cand il platesti, si a doua oara cand trebuie refacut. Iata sapte intrebari care te ajuta sa separi o oferta buna de una doar ieftina." },
      { type: "h2", text: "1. Pot vedea portofoliul vostru si site-uri live, nu doar mockup-uri?" },
      { type: "p", text: "Orice agentie serioasa are site-uri reale, publicate, pe care le poti vizita si testa chiar tu — pe mobil si pe desktop. Cere linkuri concrete, nu doar capturi de ecran frumos aranjate intr-o prezentare." },
      { type: "h2", text: "2. Site-ul va fi optimizat SEO de la lansare sau e un serviciu separat?" },
      { type: "p", text: "Un site frumos care nu apare in Google nu iti aduce clienti. Intreaba explicit daca optimizarea de baza (titluri, descrieri, viteza, structura) e inclusa in pret sau se factureaza separat — si cere sa fie clar specificat in oferta." },
      { type: "h2", text: "3. Cine detine codul sursa si contul de hosting dupa livrare?" },
      { type: "p", text: "Site-ul tau trebuie sa fie al tau, nu \"inchiriat\" de la agentie. Clarifica de la inceput ca, dupa finalizarea platii, primesti acces complet — nu esti dependent de aceeasi firma pentru totdeauna doar pentru ca ei detin accesele." },
      { type: "h2", text: "4. Ce se intampla daca site-ul are o problema dupa lansare?" },
      { type: "p", text: "Intreaba explicit cat timp de garantie exista pentru remedierea bug-urilor si daca exista un abonament de mentenanta pentru actualizari, backup-uri si securitate pe termen lung." },
      { type: "h2", text: "5. Cat timp dureaza, realist, livrarea?" },
      { type: "p", text: "Fii suspicios la promisiuni de tipul \"gata in 3 zile\" pentru un proiect complex. Un termen realist, comunicat clar, e un semn bun; un termen nerealist, de obicei inseamna compromisuri pe calitate." },
      { type: "h2", text: "6. Cine scrie continutul site-ului?" },
      { type: "p", text: "Unele agentii asteapta ca tu sa le trimiti toate textele gata scrise; altele te ajuta sa le structureze sau chiar le scriu pentru tine. Clarifica de la inceput cine face ce, ca sa nu intarzie proiectul din cauza unei neintelegeri." },
      { type: "h2", text: "7. Pot vorbi cu un client anterior?" },
      { type: "p", text: "O agentie increzatoare in munca ei nu are nicio problema sa te puna in legatura cu un client existent sau sa iti arate testimoniale reale, verificabile." },
      { type: "p", text: "La Weblex Design raspundem direct la toate aceste intrebari in oferta initiala — fara presiune, fara costuri ascunse. Daca esti in cautarea unei agentii pentru proiectul tau, hai sa vorbim." },
    ],
  },
  {
    slug: "seo-local-afaceri-mici-ghid",
    title: "SEO local pentru afaceri mici: ghid practic pas cu pas",
    excerpt:
      "Nu ai nevoie de buget mare pentru a aparea in cautarile locale din Google. Iata pasii concreti pentru o afacere mica sau medie.",
    seoTitle: "SEO local pentru afaceri mici — ghid pas cu pas",
    seoDescription:
      "Ghid practic de SEO local: Google Business Profile, cuvinte cheie locale, recenzii si continut care aduce clienti din orasul tau.",
    publishedAt: "2026-07-27",
    blocks: [
      { type: "p", text: "Cand cineva cauta \"[serviciul tau] + [orasul tau]\" in Google, vrei sa apari printre primele rezultate — nu la pagina a doua, unde practic nu te vede nimeni. SEO local nu e magie, e o serie de pasi concreti, repetabili, pe care orice afacere mica ii poate aplica." },
      { type: "h2", text: "1. Completeaza si optimizeaza Google Business Profile" },
      { type: "p", text: "E, probabil, cel mai important pas si cel mai des ignorat. Un profil complet — program, adresa, poze reale, categorie corecta de business — iti creste sansele de a aparea in harta Google (\"Local Pack\") pentru cautari din zona ta." },
      { type: "h2", text: "2. Foloseste cuvinte cheie locale, natural, pe site" },
      { type: "p", text: "Nu ajunge sa ai numele orasului o singura data, pe pagina de contact. Include-l natural in titluri, in descrierile serviciilor si, daca activezi in mai multe orase, creeaza pagini dedicate pentru fiecare, cu continut relevant si diferit de la o pagina la alta." },
      { type: "h2", text: "3. Strange recenzii reale, constant" },
      { type: "p", text: "Recenziile sunt unul dintre cei mai puternici factori de incredere, atat pentru Google, cat si pentru clienti. Cere-le clientilor multumiti, la finalul colaborarii, sa lase o recenzie — un proces simplu, repetat constant, aduce rezultate vizibile in cateva luni." },
      { type: "h2", text: "4. Asigura-te ca site-ul e rapid si functioneaza bine pe mobil" },
      { type: "p", text: "Majoritatea cautarilor locale se fac de pe telefon, adesea \"pe fuga\". Un site lent sau greu de navigat pe mobil pierde clienti inainte sa apuce sa citeasca despre serviciile tale." },
      { type: "h2", text: "5. Construieste mentiuni si linkuri locale" },
      { type: "p", text: "Inregistrarea in directoare locale relevante, colaborarile cu alte afaceri din zona sau mentionarea in presa locala — toate acestea trimit Google semnale ca esti o afacere reala, relevanta pentru acea zona geografica." },
      { type: "h2", text: "6. Masoara si ajusteaza" },
      { type: "p", text: "SEO local nu e un proiect \"facut o data si gata\" — e un proces continuu. Urmareste in Google Search Console ce cautari iti aduc trafic si ajusteaza continutul in functie de ce functioneaza, nu de presupuneri." },
      { type: "p", text: "Daca vrei un audit gratuit al pozitiei actuale in Google si un plan concret de SEO local pentru afacerea ta, scrie-ne prin formularul de contact — alege optiunea \"SEO on-page\" si spune-ne linkul site-ului actual." },
    ],
  },
  {
    slug: "cand-am-nevoie-de-crm",
    title: "De ce are nevoie afacerea ta de un CRM (și când e momentul să investești)",
    excerpt:
      "Daca gestionezi clientii prin Excel, WhatsApp si memorie, probabil ai nevoie de un CRM. Iata semnele si beneficiile reale.",
    seoTitle: "Cand ai nevoie de CRM pentru afacerea ta",
    seoDescription:
      "Afla semnele ca afacerea ta are nevoie de un CRM si cum te ajuta un sistem custom sa organizezi clientii si vanzarile.",
    publishedAt: "2026-07-29",
    blocks: [
      { type: "p", text: "Multe afaceri mici gestioneaza relatia cu clientii printr-un amestec de Excel, notite, WhatsApp si memorie. Functioneaza... pana cand nu mai functioneaza. Iata cum iti dai seama ca a venit momentul pentru un CRM si ce beneficii concrete iti aduce." },
      { type: "h2", text: "Semne ca procesele actuale te incetinesc" },
      { type: "ul", items: [
        "Pierzi urma unor cereri de oferta sau uiti sa revii catre un client interesat.",
        "Mai multi oameni din echipa lucreaza pe fisiere Excel diferite, care nu se sincronizeaza intre ei.",
        "Nu stii, la o privire rapida, cati clienti potentiali ai in discutie in acest moment si in ce etapa se afla fiecare.",
        "Informatiile despre un client (istoric, discutii, preferinte) sunt imprastiate intre emailuri, WhatsApp si notite pe hartie.",
      ] },
      { type: "p", text: "Daca te regasesti in cel putin doua dintre aceste situatii, un CRM nu mai e un \"nice to have\" — e o unealta care iti economiseste timp si bani in fiecare saptamana." },
      { type: "h2", text: "Ce face, de fapt, un CRM" },
      { type: "p", text: "Un CRM (Customer Relationship Management) centralizeaza toate informatiile despre clienti si potentiali clienti intr-un singur loc: contacte, istoric de discutii, etapa in care se afla fiecare (lead nou, in discutie, ofertat, castigat/pierdut) si sarcini de urmarire automate." },
      { type: "h2", text: "CRM generic vs. CRM custom" },
      { type: "p", text: "Exista solutii generice, gata facute, care functioneaza bine pentru procese standard. Pentru afaceri cu un flux de vanzare specific — de exemplu, cu etape particulare, integrari cu alte sisteme interne sau rapoarte speciale — un CRM construit pe masura (custom) evita compromisurile si se adapteaza exact pe modul tau de lucru, nu invers." },
      { type: "h2", text: "Beneficii concrete dupa implementare" },
      { type: "ul", items: [
        "Nicio cerere de oferta nu mai \"se pierde\" in inbox sau in notite.",
        "Echipa de vanzari are vizibilitate clara asupra tuturor oportunitatilor, in orice moment.",
        "Rapoarte simple despre cate oferte trimiti, cate se transforma in clienti si cat timp dureaza procesul.",
        "Onboarding mai usor pentru angajati noi — toata istoria clientului e documentata, nu doar in capul unei singure persoane.",
      ] },
      { type: "p", text: "Daca simti ca afacerea ta a crescut dincolo de ce mai poate gestiona un Excel, hai sa discutam despre o solutie CRM potrivita pentru procesul tau — de la implementari simple, pana la aplicatii custom complexe." },
    ],
  },
  {
    slug: "mentenanta-site-web-ce-inseamna",
    title: "Mentenanță site web: ce include și de ce contează pentru securitate și SEO",
    excerpt:
      "Un site neintretinut devine, in timp, lent, vulnerabil si invizibil in Google. Iata ce presupune, de fapt, mentenanta unui site.",
    seoTitle: "Mentenanta site web — ce include si de ce ai nevoie",
    seoDescription:
      "Afla ce presupune mentenanta unui site web, de ce conteaza pentru securitate si SEO si ce se intampla cand e ignorata.",
    publishedAt: "2026-08-01",
    blocks: [
      { type: "p", text: "\"Site-ul e gata, lansat, am bifat task-ul.\" E o greseala comuna sa privesti un site ca pe un proiect care se termina odata cu lansarea. In realitate, un site neintretinut se degradeaza lent — tehnic si in pozitiile din Google — chiar daca vizual pare neschimbat." },
      { type: "h2", text: "Ce se intampla, concret, cu un site neintretinut" },
      { type: "ul", items: [
        "Pachetele software si platformele pe care ruleaza site-ul raman cu versiuni vechi, cu vulnerabilitati de securitate cunoscute public.",
        "Certificatul SSL poate expira, iar browserele incep sa afiseze avertismente care sperie vizitatorii.",
        "Linkurile stricate (catre pagini sterse sau mutate) se acumuleaza, afectand experienta utilizatorilor si increderea Google in site.",
        "Viteza scade in timp, pe masura ce continutul creste fara optimizari periodice.",
      ] },
      { type: "h2", text: "Ce include, de fapt, un abonament de mentenanta" },
      { type: "p", text: "La o firma serioasa, mentenanta nu inseamna doar \"stam cu ochii pe el\" — e un set de activitati concrete, de obicei lunare: actualizari de securitate, backup-uri regulate, monitorizare a disponibilitatii (uptime), verificarea vitezei de incarcare si remedierea rapida a oricarei probleme tehnice aparute." },
      { type: "h2", text: "Legatura dintre mentenanta si SEO" },
      { type: "p", text: "Google acorda scor mai bun site-urilor rapide, sigure (HTTPS) si fara erori tehnice. Un site care nu mai e intretinut incepe sa piarda, treptat, pozitii in cautari — nu pentru ca ar avea mai putin continut relevant, ci pentru ca factorii tehnici din spate se deterioreaza." },
      { type: "h2", text: "Cand are sens sa platesti pentru mentenanta" },
      { type: "p", text: "Daca site-ul tau genereaza venituri sau cereri de oferta — practic orice site de afaceri — un abonament lunar de mentenanta costa semnificativ mai putin decat riscul unui site compromis de securitate sau al unei caderi bruste de trafic din cauza unor probleme tehnice nerezolvate la timp." },
      { type: "p", text: "Oferim abonamente de mentenanta adaptate dimensiunii site-ului tau — de la monitorizare de baza, pana la optimizari continue de viteza si SEO. Scrie-ne prin formularul de contact, alegand optiunea \"Mentenanta\", si iti trimitem o oferta personalizata." },
    ],
  },
];
