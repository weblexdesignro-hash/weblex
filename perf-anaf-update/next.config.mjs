import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
    localPatterns: [
      { pathname: "/api/media/file/**" },
      // Sigla Weblex Design si alte imagini statice din /public (OG image, logo).
      { pathname: "/logo/**" },
      { pathname: "/og/**" },
    ],
  },
  async headers() {
    return [
      {
        // Imaginile din Payload (portofoliu, testimoniale) sunt servite prin aceasta ruta
        // si, fara header explicit, browserul le recere la fiecare vizita (vezi auditul
        // PageSpeed: "Use efficient cache lifetimes"). Fisierele au nume unic la fiecare
        // upload nou, deci e sigur sa le cache-uim agresiv si pe termen lung.
        source: "/api/media/file/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
  async redirects() {
    return [
      // Pastreaza autoritatea SEO acumulata de vechile URL-uri WordPress.
      { source: "/creare-site-web", destination: "/servicii#site-web", permanent: true },
      { source: "/site-web-de-prezentare", destination: "/servicii#site-web", permanent: true },
      { source: "/magazin-online", destination: "/servicii#magazin-online", permanent: true },
      { source: "/mentenanta", destination: "/servicii#mentenanta", permanent: true },
      { source: "/seo", destination: "/servicii#seo", permanent: true },
      { source: "/promovare", destination: "/servicii#promovare", permanent: true },
      { source: "/rebranding", destination: "/servicii#redesign", permanent: true },
      // "/redesign-site-web" nu mai e redirect — e acum pagina reala dedicata de
      // redesign (src/app/(frontend)/redesign-site-web), cu continut hiper-optimizat SEO.
      { source: "/service-foto", destination: "/servicii#foto", permanent: true },
      { source: "/preturi-site-web", destination: "/servicii#preturi-site-web", permanent: true },
      { source: "/preturi-magazin-online", destination: "/servicii#preturi-magazin-online", permanent: true },
      { source: "/despre-noi", destination: "/despre", permanent: true }
    ];
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
