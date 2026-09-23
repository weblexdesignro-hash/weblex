import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import RevealOnScroll from "@/components/RevealOnScroll";
import { site } from "@/content/site";
import { getPricingTiers, getPageTexts } from "@/lib/payload-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Cere o oferta personalizata pentru site-ul sau magazinul tau online.",
};

export default async function ContactPage() {
  const [{ all: packages }, texts] = await Promise.all([getPricingTiers(), getPageTexts()]);

  return (
    <section className="container-px mx-auto max-w-6xl py-40">
      <div className="grid gap-16 lg:grid-cols-2">
        <RevealOnScroll>
          <p className="text-sm font-medium text-brand">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">{texts.contact.heading}</h1>
          <p className="mt-4 text-mist">{texts.contact.subheading}</p>

          <div className="mt-10 space-y-4 text-sm">
            <p>
              <span className="text-mist">Telefon: </span>
              <a href={site.phoneHref} className="font-medium hover:text-brand">
                {site.phone}
              </a>
            </p>
            <p>
              <span className="text-mist">Email: </span>
              <a href={`mailto:${site.email}`} className="font-medium hover:text-brand">
                {site.email}
              </a>
            </p>
            <p>
              <span className="text-mist">Locatie: </span>
              <span className="font-medium">{site.city}</span>
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-card">
            <ContactForm packages={packages} />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
