import { Reveal, SectionHeader } from "./Reveal";

const acts = [
  { icon: "🐘", name: "Wildlife Safari", desc: "Track leopards in Yala and elephants in Udawalawe." },
  { icon: "🏄", name: "Surf & Sail", desc: "Catch the perfect wave from Arugam Bay to Weligama." },
  { icon: "🏔️", name: "Trekking", desc: "Hike Adam's Peak before sunrise. Conquer Ella Rock." },
  { icon: "🍃", name: "Tea Plantations", desc: "Walk the misty estates of Nuwara Eliya." },
  { icon: "🐳", name: "Whale Watching", desc: "Spot blue whales off the southern Mirissa coast." },
  { icon: "🛕", name: "Cultural Heritage", desc: "Explore 2,000-year-old temples and ruined cities." },
  { icon: "🌊", name: "Beach Hopping", desc: "From Bentota to Pasikuda — golden coves all year." },
  { icon: "🍛", name: "Culinary Tours", desc: "Spice gardens, cooking classes, street food trails." },
];

export function Activities() {
  return (
    <section id="activities" className="relative py-24 md:py-32 px-6 bg-foreground text-cream overflow-hidden">
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-sunset/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-teal/30 blur-3xl" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Activities"
          title={<>Adventures for <em className="text-gradient not-italic">every soul</em>.</>}
          description="Whether you crave stillness or a rush — we've designed it."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {acts.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.05}>
              <div className="group relative h-full rounded-2xl glass-dark p-6 transition-all hover:-translate-y-2 hover:bg-cream/10">
                <div className="text-4xl">{a.icon}</div>
                <h3 className="mt-4 font-display text-xl">{a.name}</h3>
                <p className="mt-2 text-sm text-cream/65 leading-relaxed">{a.desc}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-sunset opacity-0 transition-opacity group-hover:opacity-100">
                  Explore <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
