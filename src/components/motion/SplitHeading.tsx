"use client";

import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/utils";

type SplitHeadingProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2";
};

/** Heading whose characters stagger up into view (SplitText-style). */
export function SplitHeading({ text, className, as: Tag = "h2" }: SplitHeadingProps) {
  const { ref, inView } = useInView<HTMLHeadingElement>();
  const setRef = (node: HTMLHeadingElement | null) => {
    ref.current = node;
  };
  return (
    <Tag
      ref={setRef}
      className={cn("split", inView && "is-in", className)}
      aria-label={text}
    >
      <span aria-hidden="true">
        {text.split("").map((ch, i) => (
          <span className="char" key={i}>
            <span
              className="char-inner"
              style={{ transitionDelay: `${i * 0.03}s` }}
            >
              {ch === " " ? " " : ch}
            </span>
          </span>
        ))}
      </span>
    </Tag>
  );
}
