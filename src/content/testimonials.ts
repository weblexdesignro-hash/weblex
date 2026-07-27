// Site-ul vechi nu are testimoniale publicate. Recomandare din audit: colecteaza
// minim 3-5 testimoniale reale de la clienti multumiti inainte de lansare.
// Pana atunci, aceste intrari sunt marcate explicit ca "placeholder" si NU trebuie
// publicate ca atare - inlocuieste-le cu citate reale in Payload CMS (collection Testimonials).

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  placeholder?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: "[Nume client]",
    role: "[Companie / rol]",
    quote:
      "[Testimonial de colectat - de exemplu, ce problema a rezolvat colaborarea cu Weblex Design si ce rezultat concret a obtinut.]",
    placeholder: true,
  },
  {
    name: "[Nume client]",
    role: "[Companie / rol]",
    quote: "[Testimonial de colectat.]",
    placeholder: true,
  },
  {
    name: "[Nume client]",
    role: "[Companie / rol]",
    quote: "[Testimonial de colectat.]",
    placeholder: true,
  },
];
