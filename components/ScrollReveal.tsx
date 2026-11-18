"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  as: Component = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const [phase, setPhase] = useState<"ssr" | "hidden" | "revealed">("ssr");
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    const isBotOrAutomated =
      navigator.webdriver ||
      /bot|googlebot|crawler|spider|robot|crawling|lighthouse|gtmetrix|pagespeed/i.test(
        navigator.userAgent
      );
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      isBotOrAutomated ||
      prefersReducedMotion ||
      typeof IntersectionObserver === "undefined"
    ) {
      return;
    }

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) {
      return;
    }

    setPhase("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px 40px 0px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  const revealClasses =
    phase === "hidden"
      ? "opacity-0 translate-y-8"
      : phase === "revealed"
        ? "transition-all duration-700 ease-out opacity-100 translate-y-0"
        : "";

  return (
    <Component
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`${revealClasses} ${className}`.trim()}
      style={
        phase === "revealed" && delay > 0
          ? { transitionDelay: `${delay}ms` }
          : undefined
      }
    >
      {children}
    </Component>
  );
}
