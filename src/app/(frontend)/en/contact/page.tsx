import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import RevealOnScroll from "@/components/RevealOnScroll";
import { site, ogImage } from "@/content/site";
import { getPageTexts, getPricingTiers } from "@/lib/payload-data";
import { ui } from "@/content/i18n";

const titleEn = "Contact — Get a quote for your website";
const descriptionEn =
  "Get a tailored quote for your presentation website, online store or software application. We respond within one business day.";

export const metadata: Metadata = {
  title: titleEn,
  description: descriptionEn,
  alternates: { canonical: "/en/contact", languages: { "ro-RO": "/contact", "en-US": "/en/contact" } },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    url: "/en/contact",
    title: titleEn,
    description: descriptionEn,
    images: [{ ...ogImage, alt: titleEn }],
  },
  twitter: {
    card: "summary_large_image",
    title: titleEn,
    description: descriptionEn,
    images: [ogImage.url],
  },
};

export const dynamic = "force-dynamic";

export default async function ContactPageEn() {
  const t = ui.en;
  const texts = await getPageTexts("en");
  // Pachetele din formular vin din aceeasi sursa (Payload) ca pagina /en/servicii
  // si homepage-ul englez — un singur loc de editat (admin -> Continut -> Services
  // -> pachete), actualizat peste tot unde apar pachetele, in ambele limbi.
  const { website: websiteTiers, shop: shopTiers } = await getPricingTiers("en");

  return (
    <section className="container-px mx-auto max-w-6xl py-40">
      <div className="grid gap-16 lg:grid-cols-2">
        <RevealOnScroll>
          <p className="text-sm font-medium text-brand">{t.contactEyebrow}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">{texts.contact.heading}</h1>
          <p className="mt-4 text-mist">{texts.contact.subheading}</p>

          <div className="mt-10 space-y-4 text-sm">
            <p>
              <span className="text-mist">{t.contactPhoneLabel}</span>
              <a href={site.phoneHref} className="font-medium hover:text-brand">
                {site.phone}
              </a>
            </p>
            <p>
              <span className="text-mist">{t.contactEmailLabel}</span>
              <a href={`mailto:${site.email}`} className="font-medium hover:text-brand">
                {site.email}
              </a>
            </p>
            <p>
              <span className="text-mist">{t.contactLocationLabel}</span>
              <span className="font-medium">{site.city}</span>
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-card">
            <ContactForm websiteTiers={websiteTiers} shopTiers={shopTiers} locale="en" />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
