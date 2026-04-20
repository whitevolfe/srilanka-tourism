import { Reveal, SectionHeader } from "./Reveal";
import { TiltCard } from "./TiltCard";
import tourCultural from "@/assets/tour-cultural.jpg";
import tourTea from "@/assets/tour-tea.jpg";
import tourCoast from "@/assets/tour-coast.jpg";
import tourWildlife from "@/assets/tour-wildlife.jpg";

const tours = [
  {
    title: "Cultural Triangle Odyssey",
    duration: "7 Days",
    price: "$1,890",
    img: tourCultural,
    highlights: ["Sigiriya", "Polonnaruwa", "Dambulla Caves"],
  },
  {
    title: "Hill Country Tea Trail",
    duration: "5 Days",
    price: "$1,420",
    img: tourTea,
    highlights: ["Nuwara Eliya", "Ella Rock", "Train to Kandy"],
  },
  {
    title: "Southern Coast Escape",
    duration: "6 Days",
    price: "$1,650",
    img: tourCoast,
    highlights: ["Galle Fort", "Mirissa Whales", "Unawatuna"],
  },
  {
    title: "Wildlife Grand Tour",
    duration: "10 Days",
    price: "$2,890",
    img: tourWildlife,
    highlights: ["Yala Leopards", "Udawalawe", "Wilpattu"],
  },
];

export function RoundTours() {
  return (
    <section id="tours" className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Round Tours"
          title={<>Curated journeys across <em className="text-gradient not-italic">the island</em>.</>}
          description="Multi-day expeditions designed by locals who know every hidden cove, mountain pass and temple courtyard."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tours.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <TiltCard>
                <article className="group relative overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-card transition-shadow">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={t.img}
                      alt={t.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.6s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                    <div className="absolute top-4 left-4 inline-flex rounded-full glass-dark px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cream">
                      {t.duration}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
                      <h3 className="font-display text-2xl leading-tight">{t.title}</h3>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {t.highlights.map((h) => (
                          <span key={h} className="rounded-full bg-cream/15 backdrop-blur px-2.5 py-0.5 text-[10px] uppercase tracking-wider">{h}</span>
                        ))}
                      </div>
                      <div className="mt-4 flex items-end justify-between">
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.2em] text-cream/60">From</div>
                          <div className="font-display text-2xl">{t.price}</div>
                        </div>
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-sunset text-cream transition-transform group-hover:rotate-45">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8"/></svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
