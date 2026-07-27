import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { site } from "@/content/site";

const display = Manrope({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700", "800"] });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://weblexdesign.ro"),
  title: {
    default: `${site.name} — Site-uri web si magazine online`,
    template: `%s — ${site.name}`,
  },
  description:
    "Weblex Design creeaza site-uri web de prezentare si magazine online rapide, moderne si optimizate pentru conversii. Peste 10 ani experienta, 400+ proiecte livrate.",
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: site.name,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${display.variable} ${body.variable}`}>
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
