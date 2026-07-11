"use client";

/**
 * Dark/light toggle. Current theme lives as `data-theme` on <html>
 * (set pre-paint by the inline script in layout.tsx); the icon is
 * driven by CSS off that attribute, so no client state is needed.
 */
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("bizaree-theme", next);
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label="Toggle dark / light theme"
    >
      <span className="tt-icon" aria-hidden="true" />
    </button>
  );
}
