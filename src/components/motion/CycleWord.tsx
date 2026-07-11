"use client";

import { useEffect, useState } from "react";

type CycleWordProps = {
  words: readonly string[];
  intervalMs?: number;
};

/** Cycles through short words with a soft cross-fade. */
export function CycleWord({ words, intervalMs = 2200 }: CycleWordProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 300);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [words, intervalMs]);

  return (
    <span
      className="cycle-word"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease" }}
    >
      {words[index]}
    </span>
  );
}
