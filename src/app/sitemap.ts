import type { MetadataRoute } from "next";
import { getSiteSettings, getSitemapEntries } from "@/lib/payload-data";
import { landingPages } from "@/content/landing-pages";
import { nichePages } from "@/content/niche-pages";
import { cities } from "@/content/cities";
import type { LocalServiceSlug } from "@/content/local-landing";

// Doar aceste 4 servicii au si pagini locale pe oras (/<serviciu>/<oras>) —
// vezi src/content/local-landing.ts.
const LOCAL_SERVICE_SLUGS: LocalServiceSlug[] = [
  "creare-site-web-prezentare",
  "creare-magazin-online",
  "dezvoltare-software-custom",
  "digitalizare-afaceri",
];

// Rută dinamică /sitemap.xml. Dacă indexarea e dezactivată (domeniul de test),
// întoarcem un sitemap gol — nu are sens să trimitem Google către pagini pe
// care robots.txt le blochează deja, dar păstrăm ruta validă.
export const dynamic = "force-dynamic";

const baseUrl = "https://weblexdesign.ro";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const settings = await getSiteSettings();
  if (!settings.allowIndexing) return [];

  const staticRoutes = [
    "",
    "/despre",
    "/servicii",
    "/portofoliu",
    "/contact",
    "/intrebari-frecvente",
    "/solutii-pe-domenii",
  ].map(
    (path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  // Cele 4 pagini de servicii dedicate (creare site web, magazin online,
  // software custom, digitalizare) — prioritate ridicata, sunt paginile tinta
  // pentru cuvintele cheie principale.
  const landingRoutes = landingPages.map((p) => ({
    url: `${baseUrl}${p.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Cele 9 pagini pe nisa/industrie (hotel, pensiune, service auto, restaurant,
  // cabinet avocatura, industrie, energie, instalatii, fotovoltaice).
  const nicheRoutes = nichePages.map((p) => ({
    url: `${baseUrl}${p.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Articole de blog si pagini custom (/pagini/<slug>) — adaugate automat in
  // sitemap pe masura ce apar in CMS, fara sa mai fie nevoie de interventie
  // manuala aici.
  const { blogPosts, pages } = await getSitemapEntries();

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const customPageRoutes = pages.map((page) => ({
    url: `${baseUrl}/pagini/${page.slug}`,
    lastModified: page.updatedAt ? new Date(page.updatedAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  // Paginile locale pe oras (6 orase x 4 servicii = 24 pagini in aceasta runda).
  const localRoutes = LOCAL_SERVICE_SLUGS.flatMap((serviceSlug) =>
    cities.map((city) => ({
      url: `${baseUrl}/${serviceSlug}/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  );

  if (blogPosts.length > 0) {
    staticRoutes.push({
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    });
  }

  return [...staticRoutes, ...landingRoutes, ...nicheRoutes, ...localRoutes, ...blogRoutes, ...customPageRoutes];
}
