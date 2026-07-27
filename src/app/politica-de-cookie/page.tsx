import type { Metadata } from "next";

export const metadata: Metadata = { title: "Politica de cookie" };

export default function CookiePolicyPage() {
  return (
    <section className="container-px mx-auto max-w-3xl py-40">
      <h1 className="font-display text-3xl font-semibold">Politica de cookie</h1>
      <p className="mt-6 text-mist">
        Continutul complet al politicii de cookie de pe site-ul vechi trebuie preluat 1:1
        aici (pagina /politica-de-cookie de pe weblexdesign.ro), impreuna cu banner-ul de
        consimtamant ANPC/ODR/SAL existent.
      </p>
    </section>
  );
}
