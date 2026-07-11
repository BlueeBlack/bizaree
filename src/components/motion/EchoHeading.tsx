"use client";

import { useEffect, useRef } from "react";

type EchoHeadingProps = {
  /** Full word, e.g. "ABOUT US". */
  text: string;
  /** Trailing part rendered in the accent color, e.g. "US". */
  accent?: string;
};

/**
 * The word echoed in 7 stacked layers — outline rows fading outward around
 * a solid center — with a subtle horizontal parallax on scroll.
 */
export function EchoHeading({ text, accent }: EchoHeadingProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rows = root.querySelectorAll<HTMLElement>(".echo-row:not(.echo-solid)");
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = root.getBoundingClientRect();
        const progress = 1 - (rect.top + rect.height / 2) / window.innerHeight;
        rows.forEach((row, i) => {
          const dir = i < rows.length / 2 ? -1 : 1;
          row.style.transform = `translateX(${dir * progress * 22}px)`;
        });
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solidLead = accent ? text.slice(0, text.length - accent.length) : text;

  return (
    <div className="echo-heading" ref={rootRef} aria-label={text}>
      <span className="echo-row eo-1" aria-hidden="true">{text}</span>
      <span className="echo-row eo-2" aria-hidden="true">{text}</span>
      <span className="echo-row eo-3" aria-hidden="true">{text}</span>
      <span className="echo-row echo-solid">
        {solidLead}
        {accent ? <em>{accent}</em> : null}
      </span>
      <span className="echo-row eo-3" aria-hidden="true">{text}</span>
      <span className="echo-row eo-2" aria-hidden="true">{text}</span>
      <span className="echo-row eo-1" aria-hidden="true">{text}</span>
    </div>
  );
}
