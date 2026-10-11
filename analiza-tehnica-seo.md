# Analiza tehnica SEO — weblexdesign.ro

Analiza facuta direct pe codul actual al site-ului (Next.js 16 + Payload CMS), nu pe presupuneri. Fiecare punct de mai jos spune exact ce exista deja si ce ar trebui schimbat.

## 1. Core Web Vitals

**Ce e deja bine:**
- Fonturi auto-gazduite prin `@fontsource` (Inter, Manrope), nu incarcate de pe `fonts.googleapis.com` — elimina o cerere externa care putea incetini LCP si cauza CLS daca Google Fonts raspundea lent.
- Site-ul foloseste Next.js 16 cu Turbopack, randare pe server (RSC) pentru paginile principale — HTML-ul ajunge deja populat cu continut, nu asteapta JavaScript sa il construiasca.
- `next/image` este folosit corect pe blog si pe paginile construite din blocuri (`/pagini/*`), cu optimizare automata de format (WebP/AVIF) si incarcare lazy.

**Ce trebuie corectat:**
- **Hero-ul de pe homepage si imaginile din carduri (`ProjectCard`) NU folosesc `next/image`** — sunt afisate ca `background-image` intr-un `div`. Asta inseamna ca browserul nu primeste un format optimizat (WebP/AVIF), nu are `width`/`height` explicite (risc de CLS daca imaginea se incarca mai tarziu) si nu beneficiaza de lazy-loading automat. Recomandare: inlocuit cu `<Image fill />` din `next/image`, la fel cum e deja facut in `BlockRenderer.tsx`.
- **Framer Motion pe fiecare sectiune** (`RevealOnScroll`, `StaggerGroup`) adauga JavaScript care trebuie incarcat si executat inainte ca sectiunile sa devina vizibile — poate afecta usor INP (Interaction to Next Paint) pe telefoane mai slabe. Nu e o problema critica, dar daca testele PageSpeed Insights arata scor scazut la INP, prima optiune de investigat este reducerea animatiilor pe mobil.
- Recomandare generala: ruleaza periodic [PageSpeed Insights](https://pagespeed.web.dev) pe homepage, pe `/servicii` si pe una din cele 4 pagini noi, dupa ce site-ul e live pe domeniul final — datele „field" (din utilizatori reali) apar abia dupa cateva saptamani de trafic real si sunt mai relevante decat testul de laborator.

## 2. Sitemap.xml

**Ce e deja bine:**
- Exista o ruta dinamica `/sitemap.xml` (`src/app/sitemap.ts`), generata automat, nu un fisier static uitat.
- Sitemap-ul respecta automat comutatorul de indexare din admin — cat timp site-ul e pe domeniul de test, sitemap-ul e gol, ca sa nu trimita Google catre pagini care oricum sunt blocate de `robots.txt`.

**Ce am actualizat in aceasta runda:**
- Am adaugat in sitemap cele 4 pagini noi de servicii dedicate si pagina `/intrebari-frecvente`, cu prioritate 0.9 pentru paginile de servicii (sunt paginile tinta pentru cuvintele cheie principale).

**Ce mai lipseste (de facut separat, dupa ce site-ul e live):**
- Articolele de blog (`/blog/[slug]`) si paginile construite din blocuri (`/pagini/[slug]`) nu sunt inca incluse in sitemap — trebuie adaugate dinamic (interogare in baza de date) in momentul in care incepe sa existe continut real acolo. E pregatit terenul pentru asta (`getPayload` e deja folosit si in alte functii din `payload-data.ts`).
- Portofoliul (`/portofoliu`) ar putea primi si el pagini individuale per proiect in viitor, caz in care ar trebui adaugate si acelea in sitemap.

## 3. Open Graph (OG) si Twitter Cards

**Ce e deja bine:**
- `layout.tsx` seteaza `openGraph: { type, locale, siteName }` global.

**Ce lipseste — impact direct pe cum arata linkul cand e distribuit pe Facebook, WhatsApp, LinkedIn:**
- **Nu exista o imagine OG** (`openGraph.images`). Fara ea, retelele sociale fie nu afiseaza nicio imagine la preview, fie aleg una la intamplare din pagina. Recomandare: o imagine de 1200×630px cu logo-ul si un mesaj scurt (ex. „Site-uri web si magazine online — Weblex Design"), setata global in `layout.tsx` si, optional, cate una dedicata pentru cele 4 pagini noi de servicii.
- **Nu exista tag-uri Twitter Card** (`twitter: { card, title, description, images }`). Usor de adaugat in acelasi `generateMetadata()` din `layout.tsx`.
- Titlurile si descrierile OG mostenesc automat `title`/`description` din metadata fiecarei pagini (asta functioneaza corect), dar fara imagine, preview-ul ramane incomplet.

## 4. Canonical tags

**Problema cea mai importanta gasita in aceasta analiza:** site-ul **nu seteaza deloc tag-uri canonical** (`<link rel="canonical">`) — nici global, nici pe pagini individuale. Am verificat in tot codul (`layout.tsx` si toate paginile din `src/app`) si nu exista niciun `alternates: { canonical }`.

De ce conteaza: fara canonical, daca aceeasi pagina ajunge vreodata accesibila pe doua URL-uri diferite (ex. cu si fara „www", cu parametri de tracking in URL, sau versiunea `?lang=en` fata de cea fara parametru), Google poate trata continutul ca duplicat si poate dilua autoritatea SEO intre cele doua variante in loc sa o concentreze pe una singura.

Recomandare: adauga `alternates: { canonical: <url-ul absolut al paginii> }` in `generateMetadata()` — fie global in `layout.tsx` (canonical = URL-ul curent, folosind `metadataBase` deja setat), fie explicit pe fiecare pagina care are `generateMetadata()` propriu (inclusiv cele 4 pagini noi si pagina de intrebari frecvente — pot fi actualizate rapid cand faceti asta).

## 5. Structura URL-urilor

**Ce e deja bine:**
- URL-uri scurte, in limba romana, fara parametri inutili: `/servicii`, `/portofoliu`, `/despre`, `/contact`.
- Exista deja un sistem de redirect-uri 301 (`next.config.mjs`) care pastreaza autoritatea SEO acumulata de URL-urile vechi WordPress (`/creare-site-web`, `/magazin-online`, `/seo` etc.), redirectionate catre ancorele corespunzatoare din `/servicii`. Asta e o practica corecta, rar vazuta implementata corect la o relansare de site.
- Cele 4 pagini noi de servicii dedicate folosesc exact cuvintele cheie tinta in URL: `/creare-site-web-prezentare`, `/creare-magazin-online`, `/dezvoltare-software-custom`, `/digitalizare-afaceri` — e cea mai buna practica pentru paginile pe care vrei sa le pozitionezi in Google pentru acele cuvinte.

**De avut in vedere:**
- Cand incepeti blogul (planul de 30 de articole), alegeti o structura de URL consistenta si scurta pentru articole — recomandat `/blog/<slug-articol>` (deja asa e implementat), fara categorii lungi in URL (ex. nu `/blog/categorie/subcategorie/articol`).
- Daca in viitor adaugati pagini individuale per proiect in portofoliu, pastrati acelasi pattern: `/portofoliu/<slug-proiect>`.

## 6. Date structurate (Schema.org)

**Ce exista deja:**
- `ProfessionalService` (informatii despre firma) — global, in `layout.tsx`.

**Ce am adaugat in aceasta runda:**
- `FAQPage` pe pagina `/intrebari-frecvente` (toate intrebarile) si pe fiecare din cele 4 pagini noi de servicii (FAQ-ul specific paginii) — Google poate afisa aceste intrebari si raspunsuri direct in rezultatele cautarii, sub forma de „rich snippet", ceea ce creste vizibilitatea si rata de click.
- `BreadcrumbList` pe cele 4 pagini noi de servicii — ajuta Google sa inteleaga ierarhia (Acasa > Servicii > Pagina curenta) si poate afisa acest traseu direct in rezultatul din cautare, in loc de URL-ul brut.

**Recomandare pentru viitor:** cand adaugati pagini individuale de proiecte in portofoliu, luati in calcul si schema `Product` sau `CreativeWork`; pentru articolele de blog, schema `Article` (cu autor, data publicarii, imagine) ajuta la afisarea lor corecta in Google Discover si in cautari.

---

## Cuvinte cheie secundare recomandate (10-15, oportunitate ridicata)

Cuvinte cheie cu volum de cautare mai mic decat cele principale, dar intentie clara de cumparare si concurenta mai redusa — bune tinte pentru articole de blog viitoare sau sectiuni suplimentare pe paginile existente:

1. **creare magazin WooCommerce** — intentie comerciala, concurenta medie; de legat de pagina Creare Magazin Online.
2. **creare magazin Shopify** — cautat de antreprenori care compara platforme; oportunitate pentru un articol comparativ.
3. **dezvoltare aplicatii Laravel** — tehnologie specifica, cautata de firme care stiu deja ce vor; de legat de pagina Software Custom.
4. **dezvoltare aplicatii React** — similar, pentru segmentul tehnic/decidenti IT.
5. **audit SEO site** — intentie comerciala puternica, poate deveni un serviciu/pagina separata in viitor.
6. **pret creare site web** — varianta de cautare axata pe pret, foarte aproape de conversie; de raspuns direct in continutul existent (deja acoperit partial in FAQ).
7. **site de prezentare firma** — varianta locala/business a cuvantului principal.
8. **magazin online cu plata ramburs** — foarte specific, intentie de cumparare ridicata.
9. **voucher digitalizare IMM** — leaga direct de pagina Digitalizare Afaceri si de finantari europene.
10. **creare site web Cluj** — varianta locala, relevanta pentru sediul firmei (Cluj-Napoca).
11. **mentenanta site WordPress** — pentru clientii care vin de pe platforme vechi si cauta suport.
12. **redesign site vechi** — leaga direct de serviciul de redesign si rebranding existent.
13. **aplicatie web personalizata pret** — varianta axata pe pret pentru segmentul software custom.
14. **integrare ERP site** — foarte specific, intentie B2B puternica, concurenta scazuta.
15. **site eligibil Start-Up Nation** — varianta de cautare foarte apropiata de serviciul deja existent, usor de acoperit intr-un articol dedicat.

---

## Rezumat — prioritati

1. **Canonical tags** — cel mai important gap tehnic gasit; usor de adaugat, impact real asupra modului in care Google indexeaza paginile.
2. **Imagine OG + Twitter Card** — impact vizibil imediat pe retelele sociale, efort mic.
3. **`next/image` pe Hero si ProjectCard** — imbunatateste Core Web Vitals (LCP, CLS), mai ales pe mobil.
4. **Extinderea sitemap-ului** cand apare continut in blog si pagini custom.
5. Restul (date structurate, structura URL, redirect-uri) sunt deja implementate corect — nu necesita interventie urgenta.
