import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { label: "Tours", href: "#tours" },
  { label: "Destinations", href: "#destinations" },
  { label: "Activities", href: "#activities" },
  { label: "Journey", href: "#route" },
  { label: "Stories", href: "#blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = links.map((l) => document.querySelector(l.href));
      const y = window.scrollY + 120;
      let current = "";
      sections.forEach((s, i) => {
        if (s instanceof HTMLElement && s.offsetTop <= y) current = links[i].href;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 rounded-full bg-gradient-sunset shadow-glow">
              <div className="absolute inset-1 rounded-full bg-cream/90" />
              <div className="absolute inset-2.5 rounded-full bg-gradient-sunset" />
            </div>
            <span className="font-display text-lg font-semibold tracking-tight">
              Ceylon<span className="text-gradient">Voyage</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  active === l.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {active === l.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-sunset opacity-15"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/about"
              className="hidden md:inline-flex text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3"
            >
              About
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium transition-all hover:bg-gradient-sunset hover:text-cream hover:shadow-glow"
            >
              Plan Trip
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full glass"
              aria-label="Menu"
            >
              <span className="block w-4 space-y-1">
                <span className={`block h-0.5 bg-foreground transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
                <span className={`block h-0.5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-foreground transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass rounded-3xl p-3 flex flex-col"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-foreground/5"
              >
                {l.label}
              </a>
            ))}
            <Link to="/about" className="px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-foreground/5">About</Link>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
