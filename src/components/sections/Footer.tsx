import { SOCIALS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-mark" aria-hidden="true">
        BIZAREE
      </div>
      <div className="footer-row">
        <div className="footer-socials">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label.toUpperCase()}
            </a>
          ))}
        </div>
        <div className="footer-meta">
          <span>© 2024 BIZAREE WATER</span>
          <span>DESIGNED BY ADCENTS.CO</span>
          <span>LAST REVISED 2026 · 07</span>
        </div>
      </div>
    </footer>
  );
}
