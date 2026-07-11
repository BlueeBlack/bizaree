import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Reveal } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { CONTACT } from "@/lib/site";

export function Contact() {
  return (
    <section className="contact section" id="contact">
      <SplitHeading text="enquire." className="display-heading" />
      <Reveal as="p" className="contact-intro">
        No web checkout, no fuss — tell us what you need and we’ll take it from
        there on WhatsApp, email, or a call.
      </Reveal>

      <Reveal>
        <EnquiryForm />
      </Reveal>

      <Reveal className="contact-info">
        <div className="ci-cell">
          <span className="ci-label">PHONE</span>
          <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phoneDisplay}</a>
        </div>
        <div className="ci-cell">
          <span className="ci-label">EMAIL</span>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </div>
        <div className="ci-cell">
          <span className="ci-label">ADDRESS</span>
          <p>{CONTACT.address}</p>
        </div>
        <div className="ci-cell">
          <span className="ci-label">HOURS</span>
          <p>
            {CONTACT.hours}
            <br />
            <em>{CONTACT.plantHours}</em>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
