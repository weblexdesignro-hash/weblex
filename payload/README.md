# Plan de integrare Payload CMS

Acest folder contine schema de referinta (collections) pentru panoul de administrare,
asa cum e descrisa in documentul de strategie. Fisierele de aici NU sunt inca integrate
intr-o instanta Payload functionala — sunt planul tehnic pentru urmatoarea etapa a
proiectului, cand se conecteaza panoul de admin la site-ul Next.js de fata.

## Pasi de integrare (etapa urmatoare)

1. `npm install payload @payloadcms/next @payloadcms/db-postgres @payloadcms/richtext-lexical`
2. Copiaza fisierele din `payload/collections/*.ts` in `src/collections/` din proiectul Next.js.
3. Creeaza `src/payload.config.ts` care importa toate collection-urile de mai jos.
4. Adauga ruta `src/app/(payload)/admin/[[...segments]]/page.tsx` conform ghidului oficial
   Payload 3 pentru integrare in Next.js App Router (panoul admin devine disponibil la `/admin`).
5. Configureaza o baza de date PostgreSQL (recomandat: Railway, Neon sau un VPS propriu).
6. Inlocuieste `src/content/*.ts` (folosit acum ca sursa temporara de continut) cu apeluri
   catre Payload Local API / REST API, pastrand exact aceleasi tipuri de date.
7. Conecteaza endpoint-ul `/api/contact` din site la collection-ul `contact-messages`.

## Collections incluse aici

- `Pages` — pentru continut flexibil per pagina (hero, blocuri)
- `Services` — cele 7 servicii + pachete de pret (repeater)
- `Projects` — portofoliu (imagini, categorie, featured)
- `Testimonials` — testimoniale clienti
- `BlogPosts` — articole (optional, pentru Blog/Resurse)
- `ContactMessages` — mesaje primite din formular (read-only pentru client)
- `SiteSettings` — global: SEO implicit, date de contact, social, logo
