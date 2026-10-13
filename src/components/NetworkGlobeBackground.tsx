"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

// Fundal animat pentru Hero: un "glob" format din puncte conectate (fiecare
// punct reprezinta o firma/client conectat/a din toata lumea), cu pulsuri
// care circula pe conexiuni. Desenat 100% in canvas (JS), NU e un fisier
// video — deci nu adauga niciun KB de descarcat la incarcarea paginii,
// spre deosebire de un videoclip de fundal (de obicei 2-8 MB chiar optimizat).
//
// NOU — "warp" legat de scroll: Hero.tsx controleaza un numar 0→1 (warp) prin
// ref-ul imperativ expus mai jos (setWarp), sincronizat cu un ScrollTrigger
// (GSAP) care "fixeaza" sectiunea Hero pe ecran cat timp utilizatorul deruleaza
// primul ecran. Pe masura ce warp creste: globul "accelereaza" spre privitor
// (zoom), punctele si stelele lasa dare (streak-uri) ca intr-un tunel de
// viteza, iar la final tot canvas-ul se stinge lin, lasand loc sectiunii
// urmatoare. Folosim un ref (nu state React) pentru warp, ca sa putem citi
// valoarea in bucla de desen fara sa provocam re-render-uri la 60fps.
//
// Performanta:
// - se opreste din desenat cand tab-ul nu e vizibil (document.hidden)
// - respecta prefers-reduced-motion (opreste rotatia si tunelul la scroll)
// - mai putine puncte pe ecrane mici (mobil)
// - devicePixelRatio limitat la 2x, ca sa nu desenam inutil de mult pe ecrane retina
export type NetworkGlobeHandle = {
  setWarp: (value: number) => void;
};

const NetworkGlobeBackground = forwardRef<NetworkGlobeHandle, object>(
  function NetworkGlobeBackground(_props, ref) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const warpRef = useRef(0);

    useImperativeHandle(
      ref,
      () => ({
        setWarp: (value: number) => {
          warpRef.current = Math.min(Math.max(value, 0), 1);
        },
      }),
      [],
    );

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      let W = 0;
      let H = 0;
      let DPR = 1;
      let rafId = 0;
      let running = true;

      function resize() {
        if (!canvas || !ctx) return;
        DPR = Math.min(window.devicePixelRatio || 1, 2);
        W = canvas.clientWidth;
        H = canvas.clientHeight;
        canvas.width = W * DPR;
        canvas.height = H * DPR;
        ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      }

      const ro = new ResizeObserver(resize);
      ro.observe(canvas);
      resize();

      // ---- Puncte pe sfera (Fibonacci sphere) — fiecare punct = o "firma" ----
      const POINT_COUNT = window.innerWidth < 640 ? 80 : 160;
      type Point = { x: number; y: number; z: number; pulse: number };
      const points: Point[] = [];
      const golden = Math.PI * (3 - Math.sqrt(5));
      for (let i = 0; i < POINT_COUNT; i++) {
        const y = 1 - (i / (POINT_COUNT - 1)) * 2;
        const r = Math.sqrt(1 - y * y);
        const theta = golden * i;
        points.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r, pulse: Math.random() * Math.PI * 2 });
      }

      function dist3(a: Point, b: Point) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dz = a.z - b.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
      }

      type Edge = { a: number; b: number; pulseT: number; active: boolean };
      const edges: Edge[] = [];
      const seen = new Set<string>();
      for (let i = 0; i < points.length; i++) {
        const distances: { j: number; d: number }[] = [];
        for (let j = 0; j < points.length; j++) {
          if (i === j) continue;
          distances.push({ j, d: dist3(points[i], points[j]) });
        }
        distances.sort((a, b) => a.d - b.d);
        const neighborCount = 2 + (i % 2);
        for (let k = 0; k < neighborCount; k++) {
          const j = distances[k].j;
          const key = i < j ? `${i}-${j}` : `${j}-${i}`;
          if (!seen.has(key)) {
            seen.add(key);
            edges.push({ a: i, b: j, pulseT: Math.random(), active: Math.random() < 0.55 });
          }
        }
      }

      let rotY = 0;
      const rotX = -0.15;
      let t = 0;

      function project(p: Point, scale: number) {
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const x = p.x * cosY - p.z * sinY;
        const z = p.x * sinY + p.z * cosY;
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const y2 = p.y * cosX - z * sinX;
        const z2 = p.y * sinX + z * cosX;
        const perspective = 2.6 / (2.6 - z2);
        return { x: x * perspective * scale, y: y2 * perspective * scale, z: z2 };
      }

      const STAR_COUNT = 110;
      const stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random(),
        y: Math.random(),
        r: Math.random() * 1.2 + 0.2,
        a: Math.random() * 0.5 + 0.15,
        tw: Math.random() * Math.PI * 2,
      }));

      // Cat de mult "intra camera in glob" la warp maxim (1) — multiplica
      // scala de proiectie a punctelor, dand senzatia de accelerare spre
      // privitor.
      const ZOOM_MAX = 5.5;
      // De la ce valoare a warp-ului incepe sa se stinga tot canvas-ul, ca
      // sectiunea urmatoare sa preia lin ecranul chiar inainte sa se termine
      // "fixarea" (pin-ul) sectiunii Hero.
      const FADE_START = 0.48;

      function draw() {
        if (!running || !ctx || !canvas) return;
        const warp = prefersReduced ? 0 : warpRef.current;
        ctx.clearRect(0, 0, W, H);

        const cx = W / 2;
        const cy = H * 0.44;
        const baseScale = Math.min(W, H) * 0.46;
        const scale = baseScale * (1 + warp * ZOOM_MAX);

        for (const s of stars) {
          const alpha = s.a * (0.6 + 0.4 * Math.sin(t * 0.8 + s.tw));
          const sx = s.x * W;
          const sy = s.y * H;
          if (warp > 0.01) {
            const dx = sx - cx;
            const dy = sy - cy;
            const len = Math.hypot(dx, dy) || 1;
            const ux = dx / len;
            const uy = dy / len;
            const streakLen = warp * warp * 220;
            const dispLen = warp * len * 0.5;
            const ex = sx + ux * dispLen;
            const ey = sy + uy * dispLen;
            ctx.beginPath();
            ctx.moveTo(ex - ux * streakLen, ey - uy * streakLen);
            ctx.lineTo(ex, ey);
            ctx.strokeStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
            ctx.lineWidth = s.r;
            ctx.stroke();
            continue;
          }
          ctx.beginPath();
          ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
          ctx.arc(sx, sy, s.r, 0, Math.PI * 2);
          ctx.fill();
        }

        const projected = points.map((p) => {
          const pr = project(p, scale);
          return { sx: cx + pr.x, sy: cy + pr.y, z: pr.z };
        });

        // Liniile dintre puncte se estompeaza pe masura ce intram in "tunel" —
        // la warp mare raman doar punctele/stelele cu dare, nu si reteaua.
        const edgeFade = Math.max(0, 1 - warp * 1.3);
        if (edgeFade > 0.01) {
          for (const e of edges) {
            if (!e.active) continue;
            const a = projected[e.a];
            const b = projected[e.b];
            const avgZ = (a.z + b.z) / 2;
            const depthAlpha = (avgZ + 1) / 2;
            const alpha = (0.06 + depthAlpha * 0.22) * edgeFade;
            ctx.strokeStyle = `rgba(143,164,255,${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            ctx.stroke();

            if (!prefersReduced) {
              e.pulseT += 0.0032;
              if (e.pulseT > 1) e.pulseT = 0;
            }
            if (depthAlpha > 0.35) {
              const pt = e.pulseT;
              const px = a.sx + (b.sx - a.sx) * pt;
              const py = a.sy + (b.sy - a.sy) * pt;
              const glow = ctx.createRadialGradient(px, py, 0, px, py, 5);
              glow.addColorStop(0, `rgba(180,244,97,${(0.85 * depthAlpha * edgeFade).toFixed(3)})`);
              glow.addColorStop(1, "rgba(180,244,97,0)");
              ctx.fillStyle = glow;
              ctx.beginPath();
              ctx.arc(px, py, 5, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }

        for (let i = 0; i < projected.length; i++) {
          const p = projected[i];
          const depthAlpha = (p.z + 1) / 2;
          if (depthAlpha < 0.08) continue;
          const pulse = 0.5 + 0.5 * Math.sin(t * 1.4 + points[i].pulse);
          const r = (1.1 + depthAlpha * 1.6) * (0.85 + pulse * 0.25);

          const isHighlight = i % 17 === 0;
          const color = isHighlight ? "180,244,97" : "143,164,255";
          const alpha = 0.35 + depthAlpha * 0.65;

          if (isHighlight && depthAlpha > 0.3) {
            const glow = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, r * 5);
            glow.addColorStop(0, `rgba(${color},${(0.35 * depthAlpha).toFixed(3)})`);
            glow.addColorStop(1, `rgba(${color},0)`);
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(p.sx, p.sy, r * 5, 0, Math.PI * 2);
            ctx.fill();
          }

          if (warp > 0.01) {
            const dx = p.sx - cx;
            const dy = p.sy - cy;
            const len = Math.hypot(dx, dy) || 1;
            const ux = dx / len;
            const uy = dy / len;
            const streakLen = warp * warp * 160 * (0.4 + depthAlpha);
            ctx.beginPath();
            ctx.moveTo(p.sx - ux * streakLen, p.sy - uy * streakLen);
            ctx.lineTo(p.sx, p.sy);
            ctx.strokeStyle = `rgba(${color},${(alpha * 0.9).toFixed(3)})`;
            ctx.lineWidth = Math.max(0.6, r * 0.7);
            ctx.stroke();
          }

          ctx.beginPath();
          ctx.fillStyle = `rgba(${color},${alpha.toFixed(3)})`;
          ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
          ctx.fill();
        }

        // Fulger discret in centru chiar inainte de capatul tunelului — momentul
        // de "clim ax" al tranzitiei, imediat inainte sa se stinga tot canvas-ul.
        if (warp > 0.55) {
          const climax = Math.min((warp - 0.55) / 0.3, 1);
          const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(W, H) * 0.5);
          glow.addColorStop(0, `rgba(180,244,97,${(0.22 * climax).toFixed(3)})`);
          glow.addColorStop(1, "rgba(180,244,97,0)");
          ctx.fillStyle = glow;
          ctx.fillRect(0, 0, W, H);
        }

        // Stingem tot canvas-ul spre finalul tunelului, ca sectiunea urmatoare
        // sa preia ecranul fara o taietura brusca.
        const opacity = warp <= FADE_START ? 1 : Math.max(0, 1 - (warp - FADE_START) / (1 - FADE_START));
        canvas.style.opacity = opacity.toFixed(3);

        t += 0.016;
        if (!prefersReduced) rotY += 0.0016 * (1 + warp * 7);
        rafId = requestAnimationFrame(draw);
      }

      function handleVisibility() {
        running = !document.hidden;
        if (running) {
          rafId = requestAnimationFrame(draw);
        } else {
          cancelAnimationFrame(rafId);
        }
      }
      document.addEventListener("visibilitychange", handleVisibility);

      rafId = requestAnimationFrame(draw);

      return () => {
        running = false;
        cancelAnimationFrame(rafId);
        ro.disconnect();
        document.removeEventListener("visibilitychange", handleVisibility);
      };
    }, []);

    return (
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
    );
  },
);

export default NetworkGlobeBackground;
