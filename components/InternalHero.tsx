import type { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

interface InternalHeroProps {
  title: ReactNode;
  subtitle: ReactNode;
}

export default function InternalHero({ title, subtitle }: InternalHeroProps) {
  return (
    <section className="relative bg-(--color-emerald-800) pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden rounded-b-3xl shadow-xl">
      {/* Background glow effects para manter a estética premium */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-sm">
              {title}
            </h1>
            <div className="text-base md:text-xl text-white/90 leading-relaxed font-medium">
              {subtitle}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
