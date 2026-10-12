"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { landingPages } from "@/content/landing-pages";
import { getNav, ui, localeFromPathname } from "@/content/i18n";
import Logo from "./Logo";

// Nu mai primeste `locale` ca prop din layout.tsx — il calculam din pathname
// (vezi comentariul de la localeFromPathname() din @/content/i18n) ca footer-ul
// sa se actualizeze corect si la navigare client-side intre "/" si "/en".
export default function Footer() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const nav = getNav(locale);
  const t = ui[locale];
  return (
    <footer className="border-t border-black/5 bg-cream">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-16 md:grid-cols-5">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-3 max-w-sm text-sm text-mist">
            {t.footerTagline(site.experienceYears, site.projectsDelivered)}
          </p>
          <div className="mt-6 flex gap-4 text-sm text-mist">
            <a href={site.social.facebook} target="_blank" rel="noreferrer" className="hover:text-brand">
              Facebook
            </a>
            <a href={site.social.instagram} target="_blank" rel="noreferrer" className="hover:text-brand">
              Instagram
            </a>
            <a href={site.social.twitter} target="_blank" rel="noreferrer" className="hover:text-brand">
              Twitter
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">{t.footerNavHeading}</p>
          <ul className="mt-4 space-y-2 text-sm text-mist">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">{t.footerServicesHeading}</p>
          <ul className="mt-4 space-y-2 text-sm text-mist">
            {landingPages.map((p) => (
              <li key={p.path}>
                <Link href={p.path} className="hover:text-brand">
                  {p.navLabel}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/solutii-pe-domenii" className="hover:text-brand">
                {t.footerSolutionsLabel}
              </Link>
            </li>
            <li>
              <Link href="/intrebari-frecvente" className="hover:text-brand">
                {t.footerFaqLabel}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">{t.footerContactHeading}</p>
          <ul className="mt-4 space-y-2 text-sm text-mist">
            <li>
              <a href={site.phoneHref} className="hover:text-brand">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-brand">
                {site.email}
              </a>
            </li>
            <li>{site.city}</li>
          </ul>
        </div>
      </div>

      <div className="container-px mx-auto flex max-w-7xl flex-col gap-3 border-t border-black/5 py-6 text-xs text-mist md:flex-row md:items-center md:justify-between">
        <p>
          &copy; {new Date().getFullYear().toString()} {site.legalName} — CUI {site.cui}, {site.regCom}
        </p>
        <div className="flex gap-4">
          {site.legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
