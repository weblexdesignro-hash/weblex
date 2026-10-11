# Weblex Design — site + panou de administrare (Payload CMS)

Site Next.js 16 + Tailwind + Framer Motion/GSAP/Lenis, cu panou de administrare complet
(Payload CMS) pentru texte, imagini, portofoliu, servicii, pachete de preț, testimoniale,
mesaje de contact și contracte cu semnătură electronică.

Codul a fost scris **și testat efectiv** (build, bază de date, formular de contact, flux
complet de contract semnat) într-un mediu cu PostgreSQL local — nu doar scris teoretic.

## Instalare locală

```bash
npm install
cp .env.example .env   # completează DATABASE_URI și PAYLOAD_SECRET
npx payload migrate    # creează tabelele în baza de date
npm run seed           # populează Servicii + pachete de preț cu conținutul real din audit
npm run seed:portfolio # înlocuiește proiectele placeholder cu portofoliul real (vezi mai jos)
npm run dev
```

Deschide `http://localhost:3000` pentru site și `http://localhost:3000/admin` pentru panoul
de administrare — la prima accesare a `/admin`, Payload te lasă să creezi primul cont
(email + parolă), acela devine contul tău de administrator.

## Panoul de administrare — ce poți face

La `/admin`, organizat pe secțiuni în meniul din stânga:

- **Conținut → Services** — cele 7 servicii, cu titlu, descriere, icon și **pachetele de
  preț** (nume, preț, preț vechi, listă de beneficii, „cel mai popular”). Aceleași pachete
  apar automat și ca opțiuni de bifat în formularul de contact de pe site.
- **Portofoliu → Projects** — adaugi/editezi proiecte: titlu, categorie, imagine copertă
  (upload direct), galerie, link către site-ul live al clientului, „featured” (apare și pe
  Home). Portofoliul este populat cu 15 proiecte reale livrate de echipă (vezi secțiunea
  „Portofoliu real” mai jos) — fiecare card din `/portofoliu` leagă direct către site-ul
  live al clientului. Imaginile de copertă nu sunt încărcate automat (ar fi trebuit copiate
  fără drepturi clare) — se adaugă din admin, câte un screenshot propriu per proiect, la
  `Portofoliu → Projects → [proiect] → Cover Image`; până atunci cardul arată corect, cu un
  fundal gradient în loc de poză.
- **Conținut → Testimonials** — testimoniale clienți, cu bifa „published” pentru cele care
  chiar apar pe site.
- **Blog → Blog Posts** — articole, cu editor de text vizual (nu cod).
- **Mesaje → Contact Messages** — toate mesajele primite prin formular, inclusiv pachetul
  ales de client; status nou/citit/rezolvat.
- **Mesaje → Contracts** — modulul de contracte cu semnătură electronică (vezi mai jos).
- **Pagini → Pages** — pagini noi, construite din blocuri (vezi „Page builder” mai jos).
- **Media** — biblioteca de imagini (logo, poze portofoliu etc.), cu upload prin drag & drop.

Orice imagine/text/preț modificat aici apare live pe site, fără redeploy — paginile Home,
Servicii, Portofoliu și Contact citesc direct din baza de date la fiecare cerere.

## Page builder — pagini noi, construite din blocuri

`Pagini → Pages` din admin îți permite să creezi pagini complet noi, fără cod:

1. Apeși „Create New”, dai un titlu și un slug (partea din URL — ex. `despre-echipa`).
2. La „Layout”, apeși „Add Block” și alegi un tip de secțiune: **Hero** (titlu mare +
   imagine + buton), **Text**, **Text + Imagine**, **Grilă de beneficii**, **Call-to-action**
   sau **Galerie foto**.
3. Adaugi oricâte blocuri vrei, în orice ordine — le tragi de mânerul din stânga fiecărui
   bloc ca să le rearanjezi (drag & drop).
4. Salvezi — pagina apare automat la `https://site-ul-tau.ro/pagini/<slug-ul-tau>`.

Paginile astea (plus articolele de Blog) sunt **bilingve** — vezi secțiunea „Limbi” de mai jos.

## Limbi (Română / Engleză)

Site-ul are localizare activată în CMS pentru: Servicii, Portofoliu, Testimoniale, Blog și
Paginile noi (page builder). În admin, când editezi un document dintr-una din aceste secțiuni,
sus vezi un selector de limbă (RO/EN) — completezi conținutul separat pentru fiecare limbă.

Pe site, paginile noi (`/pagini/...`) și articolele de blog (`/blog/...`) au un buton RO/EN
în colțul din dreapta sus, care comută limba afișată.

**Notă:** paginile principale deja existente (Home, Despre, Servicii, Portofoliu) rămân
momentan doar în română pe partea de afișare a site-ului, chiar dacă poți introduce și
traducerea în admin (datele sunt deja pregătite) — extinderea completă la nivel de tot
site-ul (inclusiv un `/en` pentru fiecare pagină) e un pas următor natural, ca să nu riscăm
stabilitatea site-ului live într-o singură rundă de modificări.

## Generare de conținut cu AI

La câmpurile de text, SEO și imagini din `Services`, `Projects`, `BlogPosts` și `Pages` apare
un buton **„✨ Generează cu AI”** (respectiv **„✨ Generează imagine cu AI”** la imagini).
Apeși butonul, AI-ul propune un text/o imagine pe baza titlului paginii/produsului respectiv,
iar tu poți edita rezultatul înainte să salvezi.

Necesită o cheie `OPENAI_API_KEY` în variabilele de mediu (cont pe platform.openai.com, cu
credit adăugat — generarea de text și mai ales de imagini costă bani, dar sume mici per
generare). Fără cheie configurată, butonul arată un mesaj clar de eroare — restul site-ului
și panoul de admin funcționează normal.

## Contracte cu semnătură electronică — cum funcționează

1. În admin, `Contracts` → creezi un contract nou: titlu proiect, nume + email client,
   textul integral al contractului (editor vizual, ca în Word).
2. Schimbi statusul din „Ciornă” în „Trimis spre semnare” → se generează automat un link
   unic și se trimite pe emailul clientului (prin Resend, dacă ai configurat
   `RESEND_API_KEY` — altfel linkul apare doar în log-ul serverului, util pentru testare).
3. Clientul deschide linkul (`/contract/token-unic`), citește contractul și semnează cu
   mouse-ul sau cu degetul, direct în pagină.
4. La trimitere, statusul devine automat „Semnat”, se salvează semnătura (imagine + nume
   tastat + oră + adresă IP) — vizibil în admin, la acel contract — și primești o
   confirmare pe email (tu și clientul).

Un contract deja semnat nu mai poate fi semnat a doua oară (verificat și blocat automat).

## Selecția de pachete în formularul de contact

Formularul de pe `/contact` afișează automat toate pachetele de preț definite în `Services`
(din admin) ca opțiuni de bifat — clientul poate alege un pachet înainte de a trimite
cererea, iar alegerea apare direct în mesajul din admin.

## Variabile de mediu (.env)

Vezi `.env.example` pentru lista completă. Cele esențiale:

- `DATABASE_URI` — conexiunea la baza de date PostgreSQL.
- `PAYLOAD_SECRET` — un șir lung și aleator (ex. `openssl rand -base64 32`).
- `RESEND_API_KEY` — opțional, pentru trimitere reală de emailuri (cont gratuit pe
  resend.com). Fără el, site-ul funcționează normal, doar emailurile nu se trimit efectiv.
- `OPENAI_API_KEY` — opțional, pentru butoanele „Generează cu AI” din admin (cont pe
  platform.openai.com). Fără ea, butoanele arată un mesaj clar de eroare.
- `NEXT_PUBLIC_SERVER_URL` — domeniul public, folosit în linkurile din emailuri.

## Deploy pe xCloud (actualizare față de configurarea anterioară)

Site-ul avea inițial „No Database” în xCloud. Acum, cu Payload CMS, ai nevoie de o bază
PostgreSQL:

1. În xCloud, la pasul de Database Management, alege **„Create Database In Server”**
   (cel mai simplu — baza de date stă pe același server) sau conectează una externă
   (Neon, Railway — ambele au plan gratuit) cu **„Add Your Existing Database”**.
2. Adaugă în Environment (.env) din xCloud: `DATABASE_URI`, `PAYLOAD_SECRET`, opțional
   `RESEND_API_KEY`, `EMAIL_FROM`, `ADMIN_NOTIFICATION_EMAIL`, opțional `OPENAI_API_KEY`, și
   `NEXT_PUBLIC_SERVER_URL=https://holy-glade.1wp.site` (sau domeniul final).
3. În scriptul de build, adaugă și migrarea bazei de date **înainte** de `next build`:
   ```
   $XCLOUD_NPM install --no-audit --no-fund
   $XCLOUD_NPM run payload migrate
   $XCLOUD_NPM run build
   ```
4. După primul deploy reușit, rulează o singură dată, din terminalul serverului (Open
   Terminal), populatea inițială de conținut:
   ```
   cd /var/www/holy-glade.1wp.site
   npm run seed
   ```
5. Accesează `https://holy-glade.1wp.site/admin` și creează primul cont de administrator.

## Portofoliu real (15 proiecte livrate de echipă)

`src/content/projects.ts` conține portofoliul real al agenției — 15 site-uri livrate
clienților, cu titlu, categorie, descriere și link către site-ul live al fiecăruia
(XWELD, Alerta Licitații, Stayo, Shim Residence, LogoBrain, Vine Platforma Recovery,
Crafter Mobilă, Vladimirus, V-SmartCard, Arizona True Construction, Hăinuțe Drăgălașe,
MAV Boutique Villa, Tradalma, Full Moving, Reparații TCT). Pe `/portofoliu`, fiecare card
leagă direct către site-ul live, într-un tab nou.

Pentru a popula (sau a actualiza) collection-ul „Projects" din CMS cu această listă, rulează
o singură dată, pe server, din folderul proiectului:

```
npm run seed:portfolio
```

**Atenție:** scriptul șterge toate proiectele existente din CMS înainte să le recreeze din
`src/content/projects.ts` — dacă ai adăugat deja manual proiecte reale din admin care nu
sunt în această listă, adaugă-le și pe ele în `src/content/projects.ts` înainte să rulezi
scriptul, altfel se pierd. Nu necesită o migrare nouă (structura collection-ului nu se
schimbă, doar conținutul).

Imaginile de copertă sunt deja incluse — scriptul încarcă automat în collection-ul „Media”
o captură a site-ului live pentru fiecare proiect (din `src/seed/portfolio-images/<slug>.jpg`)
și o setează drept Cover Image. Poți oricând înlocui o imagine sau edita titlul, descrierea,
categoria ori linkul fiecărui proiect direct din admin, fără să mai rulezi scriptul.

## Comutator indexare Google (SEO) — „on/off” cât site-ul e pe domeniu de test

Cât timp site-ul e accesibil pe domeniul temporar (`holy-glade.1wp.site`) și nu pe
`weblexdesign.ro`, nu vrem ca Google să îl indexeze — ar crea conținut duplicat și ar
„consuma” din autoritatea SEO a domeniului final. Pentru asta există un comutator în admin:

**Setări → Site Settings → „Permite indexarea în Google (robots: index, follow)”**

- **Dezactivat (implicit)** — site-ul trimite la toți crawlerii `noindex, nofollow`
  (vezi `/robots.txt`, care devine `Disallow: /` pentru toată lumea) și `/sitemap.xml`
  e gol. Asta e starea sigură, implicită, exact cât site-ul e pe domeniul de test.
- **Activat** — site-ul trimite `index, follow`, `/robots.txt` permite crawlerii (cu
  excepția `/admin` și `/api`), iar `/sitemap.xml` listează paginile publice.

Schimbarea are efect **imediat**, fără rebuild — paginile relevante sunt deja randate
dinamic (`force-dynamic`), la fel ca `/robots.txt` și `/sitemap.xml`.

**Important:** activează acest comutator abia după ce site-ul e live pe `weblexdesign.ro`
(domeniul final), nu înainte.

Acest câmp e nou în collection-ul `site-settings` și necesită o migrare nouă în baza de
date de producție (vezi secțiunea de mai sus „Deploy pe xCloud” — rulează
`npx payload migrate` pe server după `git pull`, înainte de rebuild).

## Ce s-a schimbat față de prototipul inițial

- **Next.js 14 → 16** și **React 18 → 19** — cerute de versiunea curentă de Payload CMS.
- **Fonturi**: de la `next/font/google` (care a picat intermitent la build, inclusiv pe
  server) la pachete locale `@fontsource` — nicio dependență de rețea la build.
- **Sursa de conținut**: de la fișiere statice (`src/content/*.ts`) la Payload CMS —
  fișierele statice rămân doar ca fallback de siguranță dacă baza de date nu răspunde.

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS · Framer Motion · GSAP · Lenis ·
Payload CMS 3 · PostgreSQL · Resend (email)
