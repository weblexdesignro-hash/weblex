import Image from "next/image";
import { site } from "@/content/site";

// Sigla Weblex Design (fisier trimis de client) + numele brandului ca text —
// textul ramane in DOM pentru lizibilitate la dimensiuni mici si pentru SEO
// (numele brandului citibil de Google/screen readere), nu doar ca imagine.
export default function Logo({
  className = "",
  markClassName = "h-9 w-auto",
  textClassName = "font-display text-lg font-semibold tracking-tight",
}: {
  className?: string;
  markClassName?: string;
  textClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo/weblex-mark.png"
        alt={`${site.name} — sigla`}
        width={307}
        height={240}
        className={markClassName}
        priority
      />
      <span className={textClassName}>{site.name}</span>
    </span>
  );
}
