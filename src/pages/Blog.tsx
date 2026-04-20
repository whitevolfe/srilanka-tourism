import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Reveal } from "@/components/Reveal";

const posts = [
  { title: "The Secret Beaches of Sri Lanka's East Coast", cat: "Coast", date: "Mar 2025", img: "https://images.unsplash.com/photo-1571983823232-07c098a345fe?w=1100&q=80&auto=format&fit=crop", excerpt: "Beyond the well-trodden south, a string of empty bays awaits between April and September." },
  { title: "Riding the Train from Kandy to Ella", cat: "Journey", date: "Feb 2025", img: "https://images.unsplash.com/photo-1586183189334-1198f8c41a96?w=1100&q=80&auto=format&fit=crop", excerpt: "Often called the world's most beautiful train ride — and it absolutely earns the title." },
  { title: "A Field Guide to Yala's Leopards", cat: "Wildlife", date: "Jan 2025", img: "https://images.unsplash.com/photo-1591375372226-1eed5460a48b?w=1100&q=80&auto=format&fit=crop", excerpt: "Yala has the highest density of leopards on Earth. Here's how to find them." },
  { title: "Sigiriya at Sunrise: The Climb of a Lifetime", cat: "Heritage", date: "Jan 2025", img: "https://images.unsplash.com/photo-1546708973-b3a59a3a02f3?w=1100&q=80&auto=format&fit=crop", excerpt: "Beat the heat, the crowds, and the noise. The summit at dawn is pure magic." },
  { title: "The Spice Routes: A Culinary Journey", cat: "Food", date: "Dec 2024", img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=1100&q=80&auto=format&fit=crop", excerpt: "Cinnamon, cardamom, curry leaves — the flavors that built an empire." },
  { title: "Galle Fort: A Walking Guide", cat: "Heritage", date: "Dec 2024", img: "https://images.unsplash.com/photo-1558005530-a7958896ec60?w=1100&q=80&auto=format&fit=crop", excerpt: "Three hours through 400 years of Dutch, Portuguese, and British history." },
];

export default function Blog() {
  useEffect(() => {
    document.title = "Stories — Ceylon Voyage Field Notes from Sri Lanka";
  }, []);

  return (
    <main className="relative">
      <SmoothScroll />
      <Navbar />

      <section className="pt-40 pb-16 px-6 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-foreground/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-sunset" /> Stories
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-medium leading-[1.05]">
            Field notes from <em className="text-gradient not-italic">the island</em>.
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-muted-foreground">Travel essays, practical guides and dispatches from our local team.</p>
        </Reveal>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <article className="group cursor-pointer">
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
      </section>

      <Footer />
    </main>
  );
}
