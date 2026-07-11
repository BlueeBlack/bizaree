"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Diagonal Bizaree bottle behind the hero text. The wrapper carries the
 * mouse parallax; the image carries the fixed tilt + idle float (CSS),
 * so the transforms never fight. Decorative — hidden from AT.
 */
export function HeroBottle() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        el.style.transform = `translate(${x * -14}px, ${y * -10}px)`;
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="hero-bottle" ref={ref} aria-hidden="true">
      <Image
        src="/products/bgremoved.png"
        alt=""
        width={408}
        height={612}
        priority
      />
    </div>
  );
}
