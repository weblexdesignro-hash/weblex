import type { MetadataRoute } from "next";
import { getSiteSettings } from "@/lib/payload-data";

// Rută dinamică /sitemap.xml. Dacă indexarea e dezactivată (domeniul de test),
// întoarcem un sitemap gol — nu are sens să trimitem Google către pagini pe
// care robots.txt le blochează deja, dar păstrăm ruta validă.
export const dynamic = "force-dynamic";

const baseUrl = "https://weblexdesign.ro";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const settings = await getSiteSettings();
  if (!settings.allowIndexing) return [];

  const staticRoutes = ["", "/despre", "/servicii", "/portofoliu", "/contact"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  return staticRoutes;
}
