import { Reveal } from "@/components/motion/Reveal";
import { MetaStrip } from "@/components/ui/MetaStrip";
import { BLOG_POSTS } from "@/lib/site";

export function Blog() {
  return (
    <section className="blog section" id="blog">
      <Reveal as="h2" className="section-heading">
        FROM THE <em>JOURNAL</em>
      </Reveal>
      <ul className="blog-list">
        {BLOG_POSTS.map((post) => (
          <Reveal as="li" key={post.num}>
            <a href="#blog" className="blog-row">
              <span className="blog-num">{post.num}</span>
              <h3>{post.title}</h3>
              <span className="blog-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
      <MetaStrip
        left="JOURNAL: 03 ENTRIES ON FILE"
        right="MORE HYDRATION NOTES COMING SOON"
      />
    </section>
  );
}
