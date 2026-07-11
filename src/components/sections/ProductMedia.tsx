import Image from "next/image";
import type { CSSProperties } from "react";
import type { Product } from "@/lib/site";

/**
 * Product image slot. Renders the real photo when `product.image` is set
 * (drop files in /public/products and set the path in lib/site.ts);
 * until then, a designed placeholder: dashed frame, bottle/jar glyph in
 * the product accent, volume label.
 */
export function ProductMedia({ product }: { product: Product }) {
  if (product.image) {
    return (
      <span className="product-media has-image">
        <Image
          src={product.image}
          alt={`${product.name} — Bizaree packaged drinking water`}
          fill
          sizes="(max-width: 640px) 96px, 148px"
        />
      </span>
    );
  }

  return (
    <span
      className="product-media"
      style={{ "--accent-dot": product.accent } as CSSProperties}
      aria-hidden="true"
    >
      {product.kind === "bottle" ? (
        <svg viewBox="0 0 48 100" className="pm-glyph">
          <rect className="pg-cap" x="16" y="2" width="16" height="10" rx="2.5" />
          <path
            className="pg-body"
            d="M18 12h12v7c7 4 9 9 9 16v50a9 9 0 0 1-9 9H18a9 9 0 0 1-9-9V35c0-7 2-12 9-16z"
          />
          <rect className="pg-band" x="13" y="46" width="22" height="18" rx="3" />
        </svg>
      ) : (
        <svg viewBox="0 0 64 100" className="pm-glyph pm-glyph-jar">
          <rect className="pg-cap" x="24" y="2" width="16" height="9" rx="2.5" />
          <path
            className="pg-body"
            d="M26 11h12v6c10 3 14 9 14 18v48a10 10 0 0 1-10 10H22a10 10 0 0 1-10-10V35c0-9 4-15 14-18z"
          />
          <rect className="pg-band" x="18" y="44" width="28" height="20" rx="3" />
        </svg>
      )}
      <span className="pm-volume">{product.volume}</span>
    </span>
  );
}
