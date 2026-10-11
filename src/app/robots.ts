import type { MetadataRoute } from "next";
import { getSiteSettings } from "@/lib/payload-data";

// Rută dinamică /robots.txt — citește același comutator "Permite indexarea"
// din Setări site (admin) ca și layout-ul. Cât timp e dezactivat (implicit,
// cât site-ul e pe domeniul de test), blocăm toți crawlerii complet, ca să nu
// existe nicio cale prin care Google să indexeze paginile înainte de lansare.
export const dynamic = "force-dynamic";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const settings = await getSiteSettings();

  if (!settings.allowIndexing) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api"],
    },
    sitemap: "https://weblexdesign.ro/sitemap.xml",
  };
}
