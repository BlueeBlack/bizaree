import { Reveal } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { ProductMedia } from "@/components/sections/ProductMedia";
import { ProductRow } from "@/components/sections/ProductRow";
import { MetaStrip } from "@/components/ui/MetaStrip";
import { PRODUCTS } from "@/lib/site";

export function Products() {
  return (
    <section className="products section" id="products">
      <div className="products-head">
        <SplitHeading text="products." className="display-heading" />
        <Reveal as="p" className="products-intro">
          An index of our full range — bottled and shipped, from pocket-size to
          party-size. Hover any row to lock its accent and pause its ticker.
          Click to enquire about that pack.
        </Reveal>
      </div>

      <div className="pill-list">
        {PRODUCTS.map((product) => (
          <Reveal key={product.id} className="product-entry">
            <ProductMedia product={product} />
            <div className="product-info">
              <ProductRow product={product} />
              <p className="pill-desc">{product.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <MetaStrip
        left={`END OF INDEX: ${PRODUCTS.length.toString().padStart(2, "0")} OF ${PRODUCTS.length
          .toString()
          .padStart(2, "0")} PRODUCTS`}
        right="NO MOQ LISTED — ENQUIRE FOR BULK"
      />
    </section>
  );
}
