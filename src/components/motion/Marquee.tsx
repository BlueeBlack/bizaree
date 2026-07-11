import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: readonly string[];
  /** Seconds per half-loop. */
  speed?: number;
  /** How many times the item set repeats per half; defaults based on item count. */
  repeats?: number;
  className?: string;
};

/**
 * Infinite ticker: two identical halves translate -50% on a CSS loop,
 * with alternating ✦/◇ separators. Server-renderable — no JS shipped.
 * Pause-on-hover is handled in CSS.
 */
export function Marquee({ items, speed = 30, repeats, className }: MarqueeProps) {
  const reps = repeats ?? (items.length === 1 ? 10 : 3);

  const half = (keyPrefix: string) => {
    const out = [];
    let sepIndex = 0;
    for (let r = 0; r < reps; r++) {
      for (const item of items) {
        const sep = sepIndex++ % 2 === 0 ? "✦" : "◇";
        out.push(
          <span className="marquee-item" key={`${keyPrefix}-${r}-${item}`}>
            {item}
            <span className="marquee-sep" aria-hidden="true">
              {sep}
            </span>
          </span>
        );
      }
    }
    return out;
  };

  return (
    <div className={cn("marquee", className)}>
      <span
        className="marquee-track"
        aria-hidden="true"
        style={{ "--marquee-dur": `${speed}s` } as CSSProperties}
      >
        {half("a")}
        {half("b")}
      </span>
    </div>
  );
}
