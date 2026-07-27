# Weblex Design — prototip redesign (Next.js + Tailwind)

Prototip funcțional pentru noul site Weblex Design, construit cu conținutul real
extras din auditul site-ului vechi (weblexdesign.ro), în stil premium inspirat de
Clay.global (nu o copie — vezi `Weblex_Design_Audit_Strategie.docx` pentru direcția
vizuală completă).

## Instalare locală

Acest cod a fost scris într-un mediu fără acces la registrul npm, deci **nu a fost
încă instalat/rulat/testat automat aici**. Rulează local:

```bash
npm install
npm run dev
```

Apoi deschide `http://localhost:3000`.

## Ce conține

- `src/app` — paginile: Home, Servicii, Portofoliu, Despre noi, Contact (Next.js App Router)
- `src/components` — componente reutilizabile (Navbar, Hero, ServiceCard, PricingCard,
  ProjectCard, TestimonialCarousel, ProcessTimeline, CTASection, ContactForm, animații)
- `src/content` — conținutul real extras din audit (servicii, prețuri, date de contact),
  folosit ca sursă temporară de date până se conectează CMS-ul
- `src/app/api/contact/route.ts` — endpoint pentru formularul de contact (de conectat la
  Payload CMS + email, vezi TODO din fișier)
- `payload/` — schema de referință pentru panoul de administrare (Payload CMS), gata de
  integrat în etapa următoare — vezi `payload/README.md`
- `next.config.mjs` — include redirect-uri 301 de la vechile URL-uri WordPress către noile
  pagini, pentru a păstra poziționarea SEO acumulată

## De completat înainte de lansare

1. **Imagini portofoliu** — proiectele reale (nume + poze) trebuie exportate manual din
   WP-admin-ul vechi (Portfolio → All Projects) și introduse în `src/content/projects.ts`
   (marcate momentan cu `[De completat din portofoliul existent]`).
2. **Testimoniale reale** — colectează minim 3-5 testimoniale de la clienți mulțumiți,
   înlocuiește intrările placeholder din `src/content/testimonials.ts`.
3. **Politica de confidențialitate / cookie** — conținutul legal complet de pe site-ul
   vechi trebuie copiat 1:1 în `src/app/politica-de-confidentialitate` și
   `src/app/politica-de-cookie`.
4. **Logo** — vectorizează/curăță logo-ul existent și adaugă-l în `public/`.
5. **Integrare Payload CMS** — urmează pașii din `payload/README.md`.
6. **Font-uri** — momentan se folosesc Inter + Manrope via `next/font/google`; înlocuiește
   cu fonturi premium plătite dacă brandul o cere (ex. General Sans, Geist).

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · GSAP · Lenis
(smooth scroll) · Payload CMS (plan de integrare, vezi `payload/`)
