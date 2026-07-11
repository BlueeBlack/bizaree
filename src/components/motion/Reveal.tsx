"use client";

import type { ReactNode } from "react";
import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "p" | "li" | "figure" | "span" | "h2";
};

/** Fades + slides its content in the first time it scrolls into view. */
export function Reveal({ children, className, as: Tag = "div" }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();
  const setRef = (node: HTMLElement | null) => {
    ref.current = node;
  };
  return (
    <Tag ref={setRef} className={cn("reveal", inView && "is-in", className)}>
      {children}
    </Tag>
  );
}
