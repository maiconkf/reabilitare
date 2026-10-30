import type { ReactNode } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

interface InternalHeroProps {
  title: ReactNode;
  subtitle: ReactNode;
}

export default function InternalHero({ title, subtitle }: InternalHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden rounded-b-[32px] sm:rounded-b-[40px] shadow-xl shadow-emerald-950/15">
      {/* Subtle architectural grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-emerald-200 text-xs font-medium mb-4 backdrop-blur-md">
              <Link href="/" className="hover:text-white transition-colors">
                Início
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-white font-semibold">Especialidades em Pelotas</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
              {title}
            </h1>
            <div className="text-sm sm:text-lg text-emerald-50/85 max-w-2xl mx-auto leading-relaxed font-normal">
              {subtitle}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

