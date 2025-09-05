"use client";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";

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
    }, 2000);

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
          <h2 className="text-3xl font-extrabold text-center text-white mb-6">
            Avaliações dos Clientes
          </h2>
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
