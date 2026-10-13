"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Inregistram pluginul o singura data, la nivel de modul — gsap ignora in
// siguranta apelurile repetate, iar asta inseamna ca orice alta componenta
// (ex. Hero.tsx, pentru animatia "tunel" la scroll) poate folosi ScrollTrigger
// direct, fara sa se mai inregistreze ea insasi.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Cu "prefers-reduced-motion" lasam scroll-ul nativ al browserului (fara
    // easing/inertie) — Lenis ramane oprit complet, nu doar "mai lent"; orice
    // animatie legata de scroll (ex. tunelul din Hero) e oricum dezactivata
    // separat pentru acesti utilizatori.
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    // ScrollTrigger trebuie anuntat de fiecare "tick" al lui Lenis, altfel
    // calculele lui de pozitie (pin/scrub, folosite de animatia Hero) raman
    // desincronizate fata de scroll-ul usor-intarziat (cu inertie) al lui
    // Lenis.
    lenis.on("scroll", ScrollTrigger.update);

    // Un singur ceas global (cel al GSAP) conduce atat Lenis cat si orice
    // animatie GSAP — evita doua bucle requestAnimationFrame separate care
    // pot aluneca una fata de alta.
    function update(time: number) {
      lenis.raf(time * 1000);
    }
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
