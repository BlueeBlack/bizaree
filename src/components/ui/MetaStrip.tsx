import { Reveal } from "@/components/motion/Reveal";

type MetaStripProps = {
  left: string;
  right: string;
};

/** Dossier-style footer line for a section (e.g. "END OF INDEX: 06 OF 06"). */
export function MetaStrip({ left, right }: MetaStripProps) {
  return (
    <Reveal className="meta-strip">
      <span>{left}</span>
      <span>{right}</span>
    </Reveal>
  );
}
