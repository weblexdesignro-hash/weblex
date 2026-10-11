import type { Metadata } from "next";
// Fonturi locale (pachete @fontsource), nu next/font/google — nu mai depindem
// de fonts.googleapis.com la build (asta a picat intermitent și pe server).
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { site } from "@/content/site";
import { getSiteSettings } from "@/lib/payload-data";

// generateMetadata (în loc de `export const metadata` static) ca să putem citi,
// la fiecare request, comutatorul "Permite indexarea" din Setări site — câtă
// vreme site-ul e pe domeniul de test, robots trebuie să rămână "noindex,
// nofollow" fără să fie nevoie de un rebuild ca să schimbăm asta din admin.
export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  return {
    metadataBase: new URL("https://weblexdesign.ro"),
    title: {
      default: settings.seoDefaults.title || `${site.name} — Site-uri web si magazine online`,
      template: `%s — ${site.name}`,
    },
    description:
      settings.seoDefaults.description ||
      "Weblex Design creeaza site-uri web de prezentare si magazine online rapide, moderne si optimizate pentru conversii. Peste 10 ani experienta, 400+ proiecte livrate.",
    openGraph: {
      type: "website",
      locale: "ro_RO",
      siteName: site.name,
    },
    robots: settings.allowIndexing
      ? { index: true, follow: true }
      : { index: false, follow: false, nocache: true },
  };
}

// Date structurate (JSON-LD) — ajută Google să înțeleagă cine e Weblex Design
// (firmă, date de contact, rețele sociale) și ce servicii oferă, independent de
// textul vizibil pe pagină. Nu are legătură cu comutatorul de indexare: e în regulă
// ca schema să existe chiar și cât robots e "noindex" — Google oricum nu va indexa
// nimic cât timp /robots.txt blochează accesul.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.legalName,
  alternateName: site.name,
  url: "https://weblexdesign.ro",
  logo: "https://weblexdesign.ro/favicon.ico",
  telephone: site.phone,
  email: site.email,
  foundingDate: String(site.since),
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressCountry: "RO",
  },
  areaServed: "RO",
  sameAs: [site.social.facebook, site.social.instagram, site.social.twitter],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Creare site web de prezentare" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Creare magazin online" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Optimizare SEO on-page" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mentenanță site și magazin online" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digitalizare firme și aplicații software" } },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Site-uri eligibile Start-Up Nation și fonduri europene" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
