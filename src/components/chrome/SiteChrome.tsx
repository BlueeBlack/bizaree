"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, SOCIALS } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Fixed MENU / BZ. chrome plus the full-screen overlay menu. */
export function SiteChrome() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="chrome">
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="overlayMenu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="menu-glyph" aria-hidden="true">
            {open ? "✕" : "☰"}
          </span>
          {open ? "CLOSE" : "MENU"}
        </button>
        <a className="monogram" href="#home" aria-label="Bizaree Water — home">
          B<span>Z.</span>
        </a>
      </header>

      <nav
        id="overlayMenu"
        className={cn("overlay-menu", open && "open")}
        aria-hidden={!open}
      >
        <div className="overlay-inner">
          <p className="overlay-eyebrow">INDEX — BIZAREE WATER</p>
          <ul className="overlay-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                  <span className="ol-num">{link.num}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="overlay-foot">
            <div className="overlay-socials">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={open ? 0 : -1}
                >
                  {s.label}
                </a>
              ))}
            </div>
            <p className="overlay-location">
              Balivara, West Bengal ✦ Plant running 24/7
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}
