"use client";

import { useState, type FormEvent } from "react";
import {
  buildEnquiryMessage,
  ENQUIRY_OPTIONS,
  mailtoUrl,
  whatsappUrl,
} from "@/lib/site";
import { useEnquiryStore } from "@/stores/enquiry";

/**
 * Sentence-style enquiry form. No backend: submission composes the message
 * and hands off to WhatsApp or the user's email app.
 */
export function EnquiryForm() {
  const product = useEnquiryStore((s) => s.product);
  const setProduct = useEnquiryStore((s) => s.setProduct);
  const note = useEnquiryStore((s) => s.note);
  const setNote = useEnquiryStore((s) => s.setNote);

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [qty, setQty] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitter = (e.nativeEvent as SubmitEvent).submitter;
    const channel = submitter?.getAttribute("data-channel") ?? "whatsapp";

    const message = buildEnquiryMessage({
      name: name.trim(),
      city: city.trim(),
      product,
      qty: qty.trim(),
      phone: phone.trim(),
    });

    if (channel === "whatsapp") {
      window.open(whatsappUrl(message), "_blank", "noopener");
      setNote("Opening WhatsApp with your enquiry…");
    } else {
      window.location.href = mailtoUrl(`Product Enquiry — ${product}`, message);
      setNote("Opening your email app with the enquiry…");
    }
  };

  return (
    <form className="enquiry-form" onSubmit={onSubmit}>
      <p className="sentence">
        My name is{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="your name"
          autoComplete="name"
          required
        />{" "}
        and I’m based in{" "}
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="your city / area"
          autoComplete="address-level2"
          required
        />
        . I’d like to enquire about the{" "}
        <select
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          aria-label="Product"
          required
        >
          {ENQUIRY_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>{" "}
        — roughly{" "}
        <input
          type="text"
          className="qty"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          placeholder="quantity / cases"
          inputMode="numeric"
        />{" "}
        units. You can reach me at{" "}
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="your phone number"
          autoComplete="tel"
        />
        .
      </p>
      <div className="form-actions">
        <button type="submit" className="btn btn-solid" data-channel="whatsapp">
          SEND VIA WHATSAPP ↗
        </button>
        <button type="submit" className="btn btn-outline" data-channel="email">
          SEND VIA EMAIL ↗
        </button>
      </div>
      <p className="form-note" role="status" aria-live="polite">
        {note}
      </p>
    </form>
  );
}
