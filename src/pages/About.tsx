import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Reveal, SectionHeader } from "@/components/Reveal";

const stats = [
  { v: "11+", l: "Years of journeys" },
  { v: "4,200", l: "Happy travelers" },
  { v: "42", l: "Countries served" },
  { v: "98%", l: "Would recommend" },
];

export default function About() {
  useEffect(() => {
    document.title = "About — Ceylon Voyage | Bespoke Sri Lanka Travel";
  }, []);

  return (
    <main className="relative">
      <SmoothScroll />
      <Navbar />

      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal/10 via-transparent to-transparent" />
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-foreground/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-sunset" /> Our Story
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-medium tracking-tight leading-[1.05]">
              Born of the island, <br />
              <em className="text-gradient not-italic">crafted for the world.</em>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              Ceylon Voyage was founded in 2014 by a small group of locals who believed Sri Lanka deserved
              storytellers — not just tour operators. Every itinerary is a love letter to the island we call home.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div className="rounded-3xl bg-card p-8 text-center shadow-soft">
                <div className="font-display text-4xl md:text-5xl text-gradient">{s.v}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 bg-muted/40">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {[
            { t: "Mission", d: "To craft journeys that reveal the soul of Sri Lanka — one tea hill, one temple, one tide at a time." },
            { t: "Vision", d: "A travel experience so personal it feels less like a tour and more like coming home." },
          ].map((b) => (
            <Reveal key={b.t}>
              <div className="rounded-3xl bg-card p-10 shadow-soft h-full">
                <div className="text-xs uppercase tracking-[0.25em] text-sunset font-semibold">{b.t}</div>
                <p className="mt-4 font-display text-2xl leading-snug">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <SectionHeader eyebrow="Brand Kit" title={<>Discover our <em className="text-gradient not-italic">visual language</em>.</>} />
        <div className="text-center mt-8">
          <Link to="/brand" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold hover:bg-gradient-sunset hover:text-cream transition-all">
            View Brand Kit
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
