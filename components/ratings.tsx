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
    <section className="bg-(--color-emerald-800)">
      <div className="container mx-auto px-4 py-16">
        {loadWidget && (
          <Script
            src="https://elfsightcdn.com/platform.js"
            async
            strategy="afterInteractive"
          />
        )}
        <div className="max-w-7xl mx-auto" ref={ref}>
          <ScrollReveal>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xs px-4 py-1.5 rounded-full border border-white/20 text-white text-xs md:text-sm font-semibold mb-3">
                <span className="text-amber-300">★★★★★</span>
                <span>5.0 de Avaliação Média no Google</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-white">
                O que Nossos Pacientes Dizem
              </h2>
            </div>
          </ScrollReveal>
          {loadWidget ? (
            <div
              className="elfsight-app-3437bd51-49a4-4264-9c5d-12fcdd682f13"
              data-elfsight-app-lazy
            />
          ) : (
            <p className="text-center text-gray-300">
              Carregando avaliações...
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Ratings;
