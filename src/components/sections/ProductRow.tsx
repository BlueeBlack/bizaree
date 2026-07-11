"use client";

import type { CSSProperties } from "react";
import { Marquee } from "@/components/motion/Marquee";
import type { Product } from "@/lib/site";
import { useEnquiryStore } from "@/stores/enquiry";

type ProductRowProps = {
  product: Product;
};

/**
 * Works-index style stadium pill: numbered badge, infinite name ticker,
 * meta label + accent dot. Clicking preselects the product in the
 * enquiry form and jumps to it.
 */
export function ProductRow({ product }: ProductRowProps) {
  const setProduct = useEnquiryStore((s) => s.setProduct);

  return (
    <a
      className="pill-row"
      href="#contact"
      style={{ "--accent-dot": product.accent } as CSSProperties}
      onClick={() => setProduct(product.name)}
    >
      <span className="pill-num">{product.num}</span>
      <span className="pill-ticker">
        <Marquee items={[product.ticker]} speed={18} />
      </span>
      <span className="sr-only">{product.name}</span>
      <span className="pill-meta">
        {product.meta} <i className="dot" aria-hidden="true" />
      </span>
    </a>
  );
}
