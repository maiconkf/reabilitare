"use client";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import ScrollReveal from "./ScrollReveal";

const Ratings = () => {
  const [loadWidget, setLoadWidget] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoadWidget(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const el = document.querySelector(
        'a[href*="elfsight.com/google-reviews-widget"]'
      );
      if (el) {
        (el as HTMLElement).remove();
        clearInterval(interval);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 py-20 sm:py-24">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {loadWidget && (
          <Script
            src="https://elfsightcdn.com/platform.js"
            async
            strategy="afterInteractive"
          />
        )}
        <div className="max-w-7xl mx-auto" ref={ref}>
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 text-white text-xs sm:text-sm font-semibold mb-4 shadow-sm">
                <span className="text-amber-300 tracking-widest">★★★★★</span>
                <span>5.0 de Avaliação Média no Google</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-center text-white tracking-tight mb-3">
                Histórias Reais de{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent">
                  Recuperação
                </span>
              </h2>
              <p className="text-emerald-100/80 text-sm sm:text-base">
                Confira a experiência de quem já transformou sua qualidade de vida na Clínica Reabilitare em Pelotas.
              </p>
            </div>
          </ScrollReveal>
          <div className="min-h-[220px] rounded-3xl bg-white/[0.03] border border-white/10 p-4 sm:p-6 backdrop-blur-xs">
            <div
              className="elfsight-app-3437bd51-49a4-4264-9c5d-12fcdd682f13"
              data-elfsight-app-lazy
              suppressHydrationWarning
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ratings;
