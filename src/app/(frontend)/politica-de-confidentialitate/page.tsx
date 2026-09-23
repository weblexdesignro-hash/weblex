import type { Metadata } from "next";

export const metadata: Metadata = { title: "Politica de confidentialitate" };

export default function PrivacyPage() {
  return (
    <section className="container-px mx-auto max-w-3xl py-40">
      <h1 className="font-display text-3xl font-semibold">Politica de confidentialitate</h1>
      <p className="mt-6 text-mist">
        Continutul complet al politicii de confidentialitate de pe site-ul vechi trebuie
        preluat 1:1 aici (pagina /politica-de-confidentialitate de pe weblexdesign.ro) —
        este continut legal obligatoriu si nu trebuie rescris fara consultanta juridica.
      </p>
    </section>
  );
}
