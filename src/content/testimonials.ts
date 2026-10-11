// Testimoniale acordate explicit de clienti pentru a fi publicate in numele lor pe site
// (confirmat de proprietarul Weblex Design). Daca vreun client isi retrage acordul sau
// trimite propriul text, inlocuieste intrarea corespunzatoare aici sau in Payload CMS
// (collection Testimonials - orice testimonial publicat acolo are prioritate fata de lista de mai jos).

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  placeholder?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: "Nicu",
    role: "CEO, XWELD",
    quote:
      "Aveam nevoie de un site care sa arate la fel de serios ca munca noastra. Echipa Weblex Design a inteles rapid specificul industriei si ne-a livrat un site curat, rapid si usor de administrat - de atunci primim constant cereri de oferta prin formularul de contact.",
  },
  {
    name: "Florin",
    role: "CEO, alertelicitatii.ro",
    quote:
      "Colaborarea cu Weblex Design a fost exact ce ne trebuia: comunicare clara, termene respectate si un rezultat tehnic solid. Platforma functioneaza impecabil si am vazut o crestere vizibila a traficului dupa optimizarea SEO.",
  },
  {
    name: "Mihaela",
    role: "Psihoterapeut & Logoped, Fondator Logobrain",
    quote:
      "Imi doream un site cald, de incredere, in care viitorii pacienti sa se regaseasca inca de la prima vizita. Weblex Design a reusit exact asta - un design prietenos, usor de navigat, cu programari simple online. Recomand cu toata increderea.",
  },
  {
    name: "Daniel",
    role: "CEO & Founder, Arizona True Construction",
    quote:
      "Working with Weblex Design was a smooth, professional experience from start to finish. They delivered a modern, fast website that properly represents our construction business, and we've already seen more qualified leads coming through it.",
  },
];
