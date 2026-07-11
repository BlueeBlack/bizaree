import { Marquee } from "@/components/motion/Marquee";
import { About } from "@/components/sections/About";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Products } from "@/components/sections/Products";
import { Testimonials } from "@/components/sections/Testimonials";
import { ENQUIRY_TICKER, QUALITY_TICKER } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />

        <div
          className="ticker-band"
          role="marquee"
          aria-label={QUALITY_TICKER.join(", ")}
        >
          <Marquee items={QUALITY_TICKER} speed={32} />
        </div>

        <About />
        <Products />
        <Process />
        <Testimonials />
        <Blog />

        <div
          className="ticker-band ticker-accent"
          role="marquee"
          aria-label={ENQUIRY_TICKER.join(", ")}
        >
          <Marquee items={ENQUIRY_TICKER} speed={26} />
        </div>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
