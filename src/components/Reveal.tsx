import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <div className="inline-flex items-center gap-2 rounded-full bg-foreground/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        <span className="h-1 w-1 rounded-full bg-sunset" /> {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05]">
        {title}
      </h2>
      {description && <p className="mt-4 text-base md:text-lg text-muted-foreground">{description}</p>}
    </Reveal>
  );
}
