import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-srilanka.jpg";
import heroVideo from "@/assets/hero-sigiriya.mp4";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden grain">
      {/* Background image */}
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <video
          src={heroVideo}
          poster={heroImg}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-deep/40 via-transparent to-sunset/20" />
      </motion.div>

      {/* Copy */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col justify-center max-w-7xl mx-auto px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-2 self-start rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-cream/90"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-sunset animate-pulse" />
          Bespoke Sri Lanka Journeys · Est. 2014
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1 }}
          className="mt-6 max-w-3xl font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-cream font-medium"
        >
          Explore <em className="text-gradient not-italic">Sri Lanka</em>
          <br /> like never before.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-6 max-w-xl text-base sm:text-lg text-cream/80"
        >
          From mist-wrapped tea hills to sun-soaked southern shores — handcrafted journeys through
          the pearl of the Indian Ocean.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#tours"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-sunset px-7 py-3.5 text-sm font-semibold text-cream shadow-glow transition-transform hover:scale-105"
          >
            View Tours
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full glass-dark px-7 py-3.5 text-sm font-semibold text-cream hover:bg-cream/15 transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/70">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="relative h-10 w-5 rounded-full border border-cream/40">
          <span className="absolute left-1/2 top-1.5 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-cream animate-scroll-hint" />
        </div>
      </div>
    </section>
  );
}
