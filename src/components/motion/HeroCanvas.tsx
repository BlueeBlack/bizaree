"use client";

import { useEffect, useRef } from "react";

type Blob = {
  r: number;
  hue: string;
  sx: number;
  sy: number;
  ax: number;
  ay: number;
  spx: number;
  spy: number;
};

const BLOBS: Blob[] = [
  { r: 0.55, hue: "rgba(143, 251, 214, 0.32)", sx: 0.22, sy: 0.3, ax: 0.16, ay: 0.1, spx: 0.00011, spy: 0.00007 },
  { r: 0.45, hue: "rgba(88, 199, 232, 0.20)", sx: 0.75, sy: 0.55, ax: 0.12, ay: 0.14, spx: 0.00008, spy: 0.00012 },
  { r: 0.4, hue: "rgba(15, 167, 126, 0.16)", sx: 0.5, sy: 0.85, ax: 0.18, ay: 0.08, spx: 0.00013, spy: 0.00009 },
];

/**
 * Drifting mint gradient field behind the hero (the spec's shader stand-in).
 * DPR-capped, paused off-screen, skipped entirely under reduced motion.
 */
export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let running = true;
    let rafId = 0;
    let w = 0;
    let h = 0;

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const frame = (t: number) => {
      if (running) {
        ctx.clearRect(0, 0, w, h);
        for (const b of BLOBS) {
          const x = (b.sx + Math.sin(t * b.spx) * b.ax) * w;
          const y = (b.sy + Math.cos(t * b.spy) * b.ay) * h;
          const rad = b.r * Math.max(w, h) * 0.6;
          const g = ctx.createRadialGradient(x, y, 0, x, y, rad);
          g.addColorStop(0, b.hue);
          g.addColorStop(1, "rgba(143, 251, 214, 0)");
          ctx.fillStyle = g;
          ctx.fillRect(0, 0, w, h);
        }
      }
      rafId = requestAnimationFrame(frame);
    };
    rafId = requestAnimationFrame(frame);

    const io = new IntersectionObserver((entries) => {
      running = entries[0].isIntersecting;
    });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      io.disconnect();
    };
  }, []);

  return <canvas className="hero-canvas" ref={canvasRef} aria-hidden="true" />;
}
