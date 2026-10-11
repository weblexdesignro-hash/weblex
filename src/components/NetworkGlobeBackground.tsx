"use client";

import { useEffect, useRef } from "react";

// Fundal animat pentru Hero: un "glob" format din puncte conectate (fiecare
// punct reprezinta o firma/client conectat/a din toata lumea), cu pulsuri
// care circula pe conexiuni. Desenat 100% in canvas (JS), NU e un fisier
// video — deci nu adauga niciun KB de descarcat la incarcarea paginii,
// spre deosebire de un videoclip de fundal (de obicei 2-8 MB chiar optimizat).
//
// Performanta:
// - se opreste din desenat cand tab-ul nu e vizibil (document.hidden)
// - respecta prefers-reduced-motion (opreste rotatia globului)
// - mai putine puncte pe ecrane mici (mobil)
// - devicePixelRatio limitat la 2x, ca sa nu desenam inutil de mult pe ecrane retina
export default function NetworkGlobeBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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

    function draw() {
      if (!running || !ctx) return;
      ctx.clearRect(0, 0, W, H);

      for (const s of stars) {
        const alpha = s.a * (0.6 + 0.4 * Math.sin(t * 0.8 + s.tw));
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
        ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      const cx = W / 2;
      const cy = H * 0.44;
      const baseScale = Math.min(W, H) * 0.46;

      const projected = points.map((p) => {
        const pr = project(p, baseScale);
        return { sx: cx + pr.x, sy: cy + pr.y, z: pr.z };
      });

      for (const e of edges) {
        if (!e.active) continue;
        const a = projected[e.a];
        const b = projected[e.b];
        const avgZ = (a.z + b.z) / 2;
        const depthAlpha = (avgZ + 1) / 2;
        const alpha = 0.06 + depthAlpha * 0.22;
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
          glow.addColorStop(0, `rgba(180,244,97,${(0.85 * depthAlpha).toFixed(3)})`);
          glow.addColorStop(1, "rgba(180,244,97,0)");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(px, py, 5, 0, Math.PI * 2);
          ctx.fill();
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

        ctx.beginPath();
        ctx.fillStyle = `rgba(${color},${alpha.toFixed(3)})`;
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
        ctx.fill();
      }

      t += 0.016;
      if (!prefersReduced) rotY += 0.0016;
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
}
