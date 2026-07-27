/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
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
      { source: "/redesign-site-web", destination: "/servicii#redesign", permanent: true },
      { source: "/service-foto", destination: "/servicii#foto", permanent: true },
      { source: "/preturi-site-web", destination: "/servicii#preturi-site-web", permanent: true },
      { source: "/preturi-magazin-online", destination: "/servicii#preturi-magazin-online", permanent: true },
      { source: "/despre-noi", destination: "/despre", permanent: true },
      { source: "/portofoliu", destination: "/portofoliu", permanent: true },
      { source: "/contact", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
