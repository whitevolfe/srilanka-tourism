import { Link } from "react-router-dom";
import { Reveal, SectionHeader } from "./Reveal";
import blogCoast from "@/assets/blog-coast.jpg";
import blogTrain from "@/assets/blog-train.jpg";
import blogLeopard from "@/assets/blog-leopard.jpg";

const posts = [
  { title: "The Secret Beaches of Sri Lanka's East Coast", cat: "Coast", date: "Mar 2025", img: blogCoast, excerpt: "Beyond the well-trodden south, a string of empty bays awaits between April and September." },
  { title: "Riding the Train from Kandy to Ella", cat: "Journey", date: "Feb 2025", img: blogTrain, excerpt: "Often called the world's most beautiful train ride — and it absolutely earns the title." },
  { title: "A Field Guide to Yala's Leopards", cat: "Wildlife", date: "Jan 2025", img: blogLeopard, excerpt: "Yala has the highest density of leopards on Earth. Here's how to find them." },
];

export function BlogPreview() {
  return (
    <section id="blog" className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            align="left"
            eyebrow="Stories"
            title={<>Field notes from <em className="text-gradient not-italic">the island</em>.</>}
          />
          <Link to="/blog" className="text-sm font-semibold text-foreground hover:text-sunset transition-colors inline-flex items-center gap-2">
            All articles <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
                </div>
                <div className="mt-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  <span className="text-sunset font-semibold">{p.cat}</span>
                  <span>•</span>
                  <span>{p.date}</span>
                </div>
                <h3 className="mt-2 font-display text-2xl leading-tight transition-colors group-hover:text-sunset">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
