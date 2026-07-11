import { Reveal } from "@/components/motion/Reveal";
import { PROCESS_STEPS } from "@/lib/site";

export function Process() {
  return (
    <section className="process section" id="process">
      <Reveal as="h2" className="section-heading">
        HOW WE <em>WORK</em>
      </Reveal>
      <ol className="process-list">
        {PROCESS_STEPS.map((step) => (
          <Reveal as="li" key={step.num}>
            <span className="step-num">{step.num}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
