import { Reveal } from "./Reveal";

export function CtaBanner() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground text-cream p-10 md:p-20 grain shadow-card">
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gradient-sunset blur-3xl opacity-50" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-teal blur-3xl opacity-40" />
            <div className="relative max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-cream/80">
                <span className="h-1 w-1 rounded-full bg-sunset" /> Limited 2025 Departures
              </div>
              <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05] font-medium">
                Begin your <em className="text-gradient not-italic">Ceylon story</em>.
              </h2>
              <p className="mt-5 text-cream/75 text-lg max-w-lg">
                Let's craft a journey that fits you perfectly. A short conversation
                is all it takes.
              </p>
              <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 rounded-full bg-cream/10 border border-cream/20 px-5 py-3.5 text-sm text-cream placeholder:text-cream/50 focus:outline-none focus:border-sunset transition-colors"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-sunset px-7 py-3.5 text-sm font-semibold text-cream shadow-glow transition-transform hover:scale-105"
                >
                  Plan My Trip
                </button>
              </form>
              <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-cream/60">
                <span>✓ Free consultation</span>
                <span>✓ Bespoke itineraries</span>
                <span>✓ 24/7 support</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
