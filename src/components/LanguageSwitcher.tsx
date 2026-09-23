import Link from "next/link";
import type { Locale } from "@/lib/payload-data";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  return (
    <div className="container-px mx-auto flex max-w-5xl justify-end gap-2 pt-28 text-sm">
      <Link
        href="?lang=ro"
        className={`rounded-full px-3 py-1 ${locale === "ro" ? "bg-ink text-white" : "text-ink/60 hover:text-ink"}`}
      >
        RO
      </Link>
      <Link
        href="?lang=en"
        className={`rounded-full px-3 py-1 ${locale === "en" ? "bg-ink text-white" : "text-ink/60 hover:text-ink"}`}
      >
        EN
      </Link>
    </div>
  );
}
