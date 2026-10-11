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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
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
