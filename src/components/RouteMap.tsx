import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, SectionHeader } from "./Reveal";
import { IslandScene } from "./IslandScene";

const stops = [
  { name: "Colombo", note: "Coastal capital", x: 100, y: 360 },
  { name: "Kandy", note: "Sacred heart", x: 220, y: 270 },
  { name: "Ella", note: "Hill country", x: 340, y: 280 },
  { name: "Yala", note: "Wild safari", x: 380, y: 410 },
  { name: "Galle", note: "Colonial coast", x: 200, y: 470 },
];

export function RouteMap() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.4"] });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="route" ref={ref} className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Custom Route Map"
          title={
            <>
              One journey, <em className="text-gradient not-italic">five soulful stops</em>.
            </>
          }
          description="Watch your custom route unfold — Colombo → Kandy → Ella → Yala → Galle."
        />

        <Reveal className="mt-16">
          <div className="relative mx-auto max-w-4xl aspect-[5/6] sm:aspect-[5/4]">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-teal/10 via-cream to-sunset/10 shadow-soft" />

            {/* Floating 3D Sri Lanka island */}

            <svg viewBox="0 0 500 600" className="relative h-full w-full">
              <defs>
                <linearGradient id="route-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="oklch(0.62 0.13 195)" />
                  <stop offset="100%" stopColor="oklch(0.72 0.18 45)" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="6" />
                </filter>
              </defs>

              {/* Stylised Sri Lanka outline */}
              <path
                d="M 220 90 Q 320 110 360 200 Q 410 300 400 400 Q 380 500 290 540 Q 180 560 120 480 Q 70 380 90 280 Q 120 150 220 90 Z"
                fill="oklch(0.62 0.13 195 / 0.08)"
                stroke="oklch(0.62 0.13 195 / 0.3)"
                strokeWidth="1.5"
                strokeDasharray="3 5"
              />

              {/* Animated path */}
              <motion.path
                d={`M ${stops.map((s) => `${s.x} ${s.y}`).join(" L ")}`}
                fill="none"
                stroke="url(#route-grad)"
                strokeWidth="3"
                strokeLinecap="round"
                style={{ pathLength }}
                filter="url(#glow)"
              />
              <motion.path
                d={`M ${stops.map((s) => `${s.x} ${s.y}`).join(" L ")}`}
                fill="none"
                stroke="url(#route-grad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="6 8"
                style={{ pathLength }}
              />

              {/* Stops */}
              {stops.map((s, i) => (
                <motion.g
                  key={s.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.25, type: "spring" }}
                >
                  <circle cx={s.x} cy={s.y} r="14" fill="oklch(0.72 0.18 45)" opacity="0.2" />
                  <circle
                    cx={s.x}
                    cy={s.y}
                    r="7"
                    fill="oklch(0.72 0.18 45)"
                    stroke="white"
                    strokeWidth="2.5"
                  />
                  <text
                    x={s.x + 16}
                    y={s.y - 4}
                    className="font-display"
                    fontSize="18"
                    fontWeight="600"
                    fill="oklch(0.18 0.02 200)"
                  >
                    {s.name}
                  </text>
                  <text x={s.x + 16} y={s.y + 12} fontSize="11" fill="oklch(0.45 0.02 200)">
                    {s.note}
                  </text>
                </motion.g>
              ))}
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
