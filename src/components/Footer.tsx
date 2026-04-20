import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 px-6 py-14">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 rounded-full bg-gradient-sunset shadow-glow">
              <div className="absolute inset-1 rounded-full bg-cream/90" />
              <div className="absolute inset-2.5 rounded-full bg-gradient-sunset" />
            </div>
            <span className="font-display text-lg font-semibold">Ceylon<span className="text-gradient">Voyage</span></span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">Bespoke Sri Lanka journeys, crafted by locals for the world's most curious travelers.</p>
          <div className="mt-5 flex gap-2">
            {["instagram", "facebook", "twitter", "youtube"].map((s) => (
              <a key={s} href="#" aria-label={s} className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-foreground/5 hover:bg-gradient-sunset hover:text-cream transition-all">
                <span className="text-xs uppercase font-semibold">{s[0]}</span>
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Explore</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href="#tours" className="hover:text-sunset transition-colors">Round Tours</a></li>
            <li><a href="#day" className="hover:text-sunset transition-colors">Day Tours</a></li>
            <li><a href="#destinations" className="hover:text-sunset transition-colors">Destinations</a></li>
            <li><a href="#activities" className="hover:text-sunset transition-colors">Activities</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Company</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/about" className="hover:text-sunset transition-colors">About</Link></li>
            <li><Link to="/brand" className="hover:text-sunset transition-colors">Brand Kit</Link></li>
            <li><Link to="/blog" className="hover:text-sunset transition-colors">Stories</Link></li>
            <li><a href="#contact" className="hover:text-sunset transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Visit</div>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>14 Galle Face Terrace</li>
            <li>Colombo 03, Sri Lanka</li>
            <li className="text-foreground">+94 11 555 0142</li>
            <li>hello@ceylonvoyage.lk</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-border max-w-7xl mx-auto flex flex-wrap justify-between gap-3 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Ceylon Voyage. All rights reserved.</span>
        <span>Crafted with care in the pearl of the Indian Ocean.</span>
      </div>
    </footer>
  );
}
