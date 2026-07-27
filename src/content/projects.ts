// IMPORTANT: proiectele reale din portofoliul vechi sunt generate dinamic printr-un
// plugin WordPress ([wp_portfolio]) si nu au putut fi extrase automat in Faza 1 a auditului.
// Structura de mai jos e gata de completat cu proiectele exportate manual din WP-admin
// (Portfolio -> All Projects) - inlocuieste titlul, categoria si imaginea, pastreaza forma.
// In productie, aceasta lista vine din collection-ul "Projects" din Payload CMS.

export type Project = {
  slug: string;
  title: string;
  category: "Site de prezentare" | "Magazin online" | "Redesign";
  summary: string;
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "proiect-1",
    title: "[De completat din portofoliul existent]",
    category: "Site de prezentare",
    summary: "Site de prezentare pentru un business local - inlocuieste cu numele real al clientului si un rezultat masurabil daca exista.",
    image: "/projects/placeholder-1.jpg",
    featured: true,
  },
  {
    slug: "proiect-2",
    title: "[De completat din portofoliul existent]",
    category: "Magazin online",
    summary: "Magazin online cu catalog complet si plata la livrare/card - inlocuieste cu proiectul real.",
    image: "/projects/placeholder-2.jpg",
    featured: true,
  },
  {
    slug: "proiect-3",
    title: "[De completat din portofoliul existent]",
    category: "Redesign",
    summary: "Redesign complet al unui site vechi, cu imbunatatire de viteza si conversii.",
    image: "/projects/placeholder-3.jpg",
    featured: true,
  },
  {
    slug: "proiect-4",
    title: "[De completat din portofoliul existent]",
    category: "Site de prezentare",
    summary: "Site de prezentare pentru un restaurant / pensiune / hotel, categorie mentionata explicit in auditul vechi.",
    image: "/projects/placeholder-4.jpg",
  },
];
