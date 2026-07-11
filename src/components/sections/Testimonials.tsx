import { Reveal } from "@/components/motion/Reveal";
import { TESTIMONIALS } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <Reveal as="h2" className="section-heading">
        WORD ON THE <em>STREET</em>
      </Reveal>
      <div className="quote-grid">
        {TESTIMONIALS.map((t) => (
          <Reveal as="figure" className="quote-card" key={t.num}>
            <span className="quote-num">{t.num}</span>
            <blockquote>“{t.quote}”</blockquote>
            <figcaption>
              {t.name} — {t.role}
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
