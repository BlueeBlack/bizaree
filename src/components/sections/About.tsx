import { EchoHeading } from "@/components/motion/EchoHeading";
import { Reveal } from "@/components/motion/Reveal";
import { HIGHLIGHTS, PILLARS } from "@/lib/site";

export function About() {
  return (
    <section className="about section" id="about">
      <EchoHeading text="ABOUT US" accent="US" />

      <div className="about-body">
        <Reveal as="p" className="about-lede">
          Where <strong>strict quality control</strong> guarantees each bottle of
          water is delightful. Our cutting-edge technology maximises output, and
          various consumer demands are catered to — up to big{" "}
          <strong>20L jars</strong>. With a round-the-clock operating time, we
          can meet any requirement.
        </Reveal>

        <ul className="about-highlights">
          {HIGHLIGHTS.map((h) => (
            <Reveal as="li" key={h.num}>
              <span className="hl-num">{h.num}</span>
              <div>
                <h3>{h.title}</h3>
                <p>{h.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className="pillars">
          {PILLARS.map((p) => (
            <span className="pillar" key={p}>
              {p}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
