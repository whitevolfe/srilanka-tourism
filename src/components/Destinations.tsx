import { Reveal, SectionHeader } from "./Reveal";
import destSigiriya from "@/assets/tour-cultural.jpg";
import destElla from "@/assets/dest-ella.jpg";
import destMirissa from "@/assets/dest-mirissa.jpg";
import destYala from "@/assets/tour-wildlife.jpg";
import destGalle from "@/assets/dest-galle.jpg";
import destKandy from "@/assets/dest-kandy.jpg";

const dests = [
  { name: "Sigiriya", tag: "Ancient Wonder", img: destSigiriya, span: "md:col-span-2 md:row-span-2" },
  { name: "Ella", tag: "Hill Country", img: destElla, span: "" },
  { name: "Mirissa", tag: "Coastal Bliss", img: destMirissa, span: "" },
  { name: "Yala", tag: "Wildlife Safari", img: destYala, span: "md:col-span-2" },
  { name: "Galle", tag: "Colonial Charm", img: destGalle, span: "" },
  { name: "Kandy", tag: "Sacred Heart", img: destKandy, span: "" },
];

export function Destinations() {
  return (
    <section id="destinations" className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Destinations"
          title={<>Eight wonders. <em className="text-gradient not-italic">One island</em>.</>}
          description="From UNESCO treasures to untouched lagoons — every stop chosen for its soul."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {dests.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.06} className={d.span}>
              <a className="group relative block h-full w-full overflow-hidden rounded-2xl shadow-soft" href="#">
                <img src={d.img} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-cream">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-cream/70">{d.tag}</div>
                  <div className="font-display text-2xl md:text-3xl">{d.name}</div>
                  <div className="mt-2 h-px w-0 bg-sunset transition-all duration-700 group-hover:w-16" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
