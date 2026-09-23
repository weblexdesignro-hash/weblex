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
  (upload direct), galerie, „featured” (apare și pe Home).
- **Conținut → Testimonials** — testimoniale clienți, cu bifa „published” pentru cele care
  chiar apar pe site.
- **Blog → Blog Posts** — articole, cu editor de text vizual (nu cod).
- **Mesaje → Contact Messages** — toate mesajele primite prin formular, inclusiv pachetul
  ales de client; status nou/citit/rezolvat.
- **Mesaje → Contracts** — modulul de contracte cu semnătură electronică (vezi mai jos).
- **Media** — biblioteca de imagini (logo, poze portofoliu etc.), cu upload prin drag & drop.

Orice imagine/text/preț modificat aici apare live pe site, fără redeploy — paginile Home,
Servicii, Portofoliu și Contact citesc direct din baza de date la fiecare cerere.

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
- `NEXT_PUBLIC_SERVER_URL` — domeniul public, folosit în linkurile din emailuri.

## Deploy pe xCloud (actualizare față de configurarea anterioară)

Site-ul avea inițial „No Database” în xCloud. Acum, cu Payload CMS, ai nevoie de o bază
PostgreSQL:

1. În xCloud, la pasul de Database Management, alege **„Create Database In Server”**
   (cel mai simplu — baza de date stă pe același server) sau conectează una externă
   (Neon, Railway — ambele au plan gratuit) cu **„Add Your Existing Database”**.
2. Adaugă în Environment (.env) din xCloud: `DATABASE_URI`, `PAYLOAD_SECRET`, opțional
   `RESEND_API_KEY`, `EMAIL_FROM`, `ADMIN_NOTIFICATION_EMAIL`, și
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

## Ce s-a schimbat față de prototipul inițial

- **Next.js 14 → 16** și **React 18 → 19** — cerute de versiunea curentă de Payload CMS.
- **Fonturi**: de la `next/font/google` (care a picat intermitent la build, inclusiv pe
  server) la pachete locale `@fontsource` — nicio dependență de rețea la build.
- **Sursa de conținut**: de la fișiere statice (`src/content/*.ts`) la Payload CMS —
  fișierele statice rămân doar ca fallback de siguranță dacă baza de date nu răspunde.

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS · Framer Motion · GSAP · Lenis ·
Payload CMS 3 · PostgreSQL · Resend (email)
