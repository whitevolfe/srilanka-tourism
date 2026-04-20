import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Reveal } from "@/components/Reveal";

const colors = [
  { name: "Ink", v: "var(--ink)", hex: "Deep midnight" },
  { name: "Teal", v: "var(--teal)", hex: "Ocean wave" },
  { name: "Teal Deep", v: "var(--teal-deep)", hex: "Indian sea" },
  { name: "Sunset", v: "var(--sunset)", hex: "Equator dusk" },
  { name: "Sunset Glow", v: "var(--sunset-glow)", hex: "Spice market" },
  { name: "Cream", v: "var(--cream)", hex: "Coconut shell" },
];

function LogoMark({ variant = "default" }: { variant?: "default" | "mono" | "outline" }) {
  return (
    <div className={`flex items-center gap-2 ${variant === "mono" ? "text-foreground" : ""}`}>
      <div className={`relative h-10 w-10 rounded-full ${variant === "outline" ? "border-2 border-foreground" : variant === "mono" ? "bg-foreground" : "bg-gradient-sunset shadow-glow"}`}>
        {variant !== "outline" && (
          <>
            <div className={`absolute inset-1.5 rounded-full ${variant === "mono" ? "bg-cream" : "bg-cream/90"}`} />
            <div className={`absolute inset-3 rounded-full ${variant === "mono" ? "bg-foreground" : "bg-gradient-sunset"}`} />
          </>
        )}
      </div>
      <span className="font-display text-xl font-semibold">
        Ceylon<span className={variant === "default" ? "text-gradient" : ""}>Voyage</span>
      </span>
    </div>
  );
}

export default function Brand() {
  useEffect(() => {
    document.title = "Brand Kit — Ceylon Voyage Design System";
  }, []);

  return (
    <main className="relative">
      <SmoothScroll />
      <Navbar />

      <section className="pt-40 pb-16 px-6 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-foreground/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-sunset" /> Brand Kit
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-medium leading-[1.05]">
            Our visual <em className="text-gradient not-italic">identity</em>.
          </h1>
        </Reveal>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl mb-6">Logo Variations</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { v: "default" as const, bg: "bg-card" },
              { v: "mono" as const, bg: "bg-cream" },
              { v: "outline" as const, bg: "bg-foreground text-cream" },
            ].map(({ v, bg }) => (
              <Reveal key={v}>
                <div className={`group rounded-3xl ${bg} aspect-[4/3] flex items-center justify-center shadow-soft transition-transform hover:-translate-y-2`}>
                  <div className={v === "outline" ? "text-cream" : ""}>
                    <LogoMark variant={v} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-muted/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl mb-6">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {colors.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.05}>
                <div className="rounded-2xl overflow-hidden shadow-soft bg-card">
                  <div className="aspect-square" style={{ backgroundColor: c.v }} />
                  <div className="p-4">
                    <div className="font-display text-base">{c.name}</div>
                    <div className="text-xs text-muted-foreground">{c.hex}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl mb-6">Typography</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Reveal>
              <div className="rounded-3xl bg-card p-10 shadow-soft">
                <div className="text-xs uppercase tracking-[0.2em] text-sunset font-semibold">Display · Fraunces</div>
                <div className="mt-4 font-display text-6xl leading-none">Aa</div>
                <div className="mt-4 font-display text-2xl">Explore the island.</div>
                <div className="mt-2 text-sm text-muted-foreground">Used for headlines and editorial moments. Optical sizing on.</div>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-3xl bg-card p-10 shadow-soft">
                <div className="text-xs uppercase tracking-[0.2em] text-sunset font-semibold">Body · Inter</div>
                <div className="mt-4 font-sans text-6xl leading-none">Aa</div>
                <div className="mt-4 text-base leading-relaxed">From mist-wrapped tea hills to sun-soaked southern shores — handcrafted journeys through the pearl of the Indian Ocean.</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
