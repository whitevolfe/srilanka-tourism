import { Reveal, SectionHeader } from "./Reveal";

const reviews = [
  { name: "Amélie Rousseau", from: "Paris, France", text: "Every detail anticipated, every horizon breathtaking. The most thoughtful trip we've ever taken.", rating: 5 },
  { name: "Hiroshi Tanaka", from: "Tokyo, Japan", text: "From the tea hills of Ella to the leopards of Yala — pure poetry. Our guide felt like family.", rating: 5 },
  { name: "Sarah & James M.", from: "London, UK", text: "We've travelled the world. Ceylon Voyage delivered an experience that genuinely moved us.", rating: 5 },
];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-muted/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Travelers' Stories"
          title={<>Loved by guests <em className="text-gradient not-italic">in 42 countries</em>.</>}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <figure className="relative h-full rounded-3xl bg-card p-7 shadow-soft">
                <div className="absolute -top-4 left-7 text-6xl font-display text-sunset/30 leading-none">"</div>
                <div className="flex gap-0.5 text-sunset">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <svg key={j} className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <blockquote className="mt-4 font-display text-lg leading-relaxed text-foreground/90">
                  {r.text}
                </blockquote>
                <figcaption className="mt-6 pt-4 border-t border-border">
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.from}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
