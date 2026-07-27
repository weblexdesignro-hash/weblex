import Link from "next/link";
import { nav, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-cream">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-lg font-semibold">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm text-mist">
            Site-uri web si magazine online create de o echipa cu peste {site.experienceYears} ani
            de experienta si {site.projectsDelivered}+ proiecte livrate.
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
          <p className="text-sm font-semibold text-ink">Navigare</p>
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
          <p className="text-sm font-semibold text-ink">Contact</p>
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
