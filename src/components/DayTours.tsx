import { Reveal, SectionHeader } from "./Reveal";
import dayColombo from "@/assets/day-colombo.jpg";
import dayKandy from "@/assets/day-kandy.jpg";
import dayGalle from "@/assets/day-galle.jpg";
import daySigiriya from "@/assets/day-sigiriya.jpg";
import dayMirissa from "@/assets/day-mirissa.jpg";
import dayElla from "@/assets/day-ella.jpg";

const days = [
  { city: "Colombo", title: "Heritage & Markets Walking Tour", time: "6 hrs", price: "$95", img: dayColombo },
  { city: "Kandy", title: "Temple of the Tooth & Cultural Show", time: "8 hrs", price: "$120", img: dayKandy },
  { city: "Galle", title: "Dutch Fort & Sunset Sail", time: "7 hrs", price: "$140", img: dayGalle },
  { city: "Sigiriya", title: "Lion Rock Sunrise Climb", time: "5 hrs", price: "$110", img: daySigiriya },
  { city: "Mirissa", title: "Blue Whale Watching Cruise", time: "5 hrs", price: "$85", img: dayMirissa },
  { city: "Ella", title: "Nine Arches & Little Adam's Peak", time: "6 hrs", price: "$75", img: dayElla },
];

export function DayTours() {
  return (
    <section id="day" className="relative py-24 md:py-32 px-6 bg-muted/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Day Tours"
          title={<>One day. <em className="text-gradient not-italic">A lifetime</em> of stories.</>}
          description="Quick escapes for the time-pressed traveler — book in seconds."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {days.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.05}>
              <div className="group flex gap-4 rounded-2xl bg-card p-3 shadow-soft hover:shadow-card transition-all hover:-translate-y-1">
                <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-xl">
                  <img src={d.img} alt={d.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="flex flex-col justify-between py-1 pr-2 flex-1 min-w-0">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-sunset font-semibold">{d.city}</div>
                    <h3 className="mt-1 font-display text-lg leading-tight truncate">{d.title}</h3>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{d.time}</span>
                    <button className="rounded-full bg-foreground text-background px-3 py-1 text-xs font-semibold transition-colors group-hover:bg-gradient-sunset group-hover:text-cream">
                      Book {d.price}
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
