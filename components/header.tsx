"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#servicos", label: "Especialidades" },
    { href: "/fisioterapia-pelotas", label: "Fisioterapia" },
    { href: "/pilates-pelotas", label: "Pilates" },
    { href: "/#convenios", label: "Convênios" },
    { href: "/#localizacao", label: "Localização" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2.5 bg-emerald-950/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-emerald-950/15"
          : "py-4 bg-transparent border-b border-white/5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <Image
              src="/reabilitare-logo-white.webp"
              width={136}
              height={48}
              alt="Reabilitare logotipo"
              priority
              className="h-10 w-auto sm:h-11"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1 bg-white/[0.07] border border-white/10 rounded-full px-2 py-1 backdrop-blur-md"
            aria-label="Navegação principal"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3.5 py-1.5 rounded-full text-white/90 hover:text-white hover:bg-white/10 font-medium text-sm transition-all duration-200 flex items-center gap-1.5"
              >
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* Right CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <WhatsAppButton
              href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20os%20tratamentos%20de%20fisioterapia%20e%20pilates."
              className="group inline-flex items-center gap-2 rounded-full cursor-pointer text-sm font-bold leading-5 px-5 py-2.5 transition-all duration-300 bg-white text-emerald-950 hover:bg-emerald-50 shadow-md shadow-black/10 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              aria-label="Agendar atendimento pelo WhatsApp"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>Agendar Consulta</span>
              <svg
                className="w-4 h-4 text-emerald-700 transition-transform duration-300 group-hover:translate-x-0.5 hidden sm:block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </WhatsAppButton>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-full text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-colors focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 px-4 rounded-2xl bg-emerald-950/95 backdrop-blur-xl border border-white/15 shadow-2xl animate-fade-in">
            <nav className="flex flex-col space-y-1" aria-label="Menu Mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl text-white/90 hover:text-white hover:bg-white/10 font-medium text-sm transition-colors"
                >
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
