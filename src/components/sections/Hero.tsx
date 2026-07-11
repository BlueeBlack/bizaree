import { CycleWord } from "@/components/motion/CycleWord";
import { HeroBottle } from "@/components/motion/HeroBottle";
import { HeroCanvas } from "@/components/motion/HeroCanvas";
import { Reveal } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { EnquireSticker } from "@/components/ui/EnquireSticker";
import { HERO_CYCLE_WORDS } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero" id="home">
      <HeroCanvas />
      <HeroBottle />
      <div className="hero-inner">
        <Reveal as="p" className="hero-eyebrow">
          <CycleWord words={HERO_CYCLE_WORDS} />
          PACKAGED DRINKING WATER — WEST BENGAL
        </Reveal>
        <SplitHeading as="h1" text="BIZAREE" className="wordmark" />
        <div className="hero-below">
          <Reveal as="p" className="hero-tag">
            West Bengal’s first and most premier <strong>fully automated</strong>{" "}
            water packaging plant. We provide the best packaged drinking water —
            filtered for the highest possible quality and flavour.
          </Reveal>
          <Reveal className="hero-meta">
            <span>EST · 25+ YEARS EXPERIENCE</span>
            <span>PLANT · 24/7 OPERATIONS</span>
            <span>RANGE · 250ML — 20L</span>
          </Reveal>
        </div>
      </div>
      <EnquireSticker />
      <p className="hero-scroll-hint" aria-hidden="true">
        SCROLL ↓
      </p>
    </section>
  );
}
