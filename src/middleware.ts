import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Singurul rol al acestui middleware: citim calea cerută (ex. "/en/servicii") și
// trecem mai departe, printr-un header intern, ce limbă corespunde paginii —
// Server Components (ex. layout.tsx) nu pot citi direct calea curentă, doar
// Client Components o pot (usePathname). Nu redirectăm, nu rescriem nimic — doar
// adnotăm cererea, ca <html lang="..."> din layout să fie corect pe fiecare pagină.
export function middleware(request: NextRequest) {
  const isEn = request.nextUrl.pathname === "/en" || request.nextUrl.pathname.startsWith("/en/");
  // Important: headerul trebuie pus pe cererea care intră mai departe în Next
  // (request.headers), nu pe răspuns — altfel headers() din Server Components
  // nu-l vede.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", isEn ? "en" : "ro");
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next|api|admin).*)"],
};
