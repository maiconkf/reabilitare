import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

export default function Main() {
  return (
    <div className="relative pt-20 lg:pt-24 overflow-hidden">
      {/* Subtle architectural grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient radial glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-1/4 right-1/4 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-end pt-2 lg:pt-4 pb-0">
          {/* Left Column: Copy, CTAs & Compact Trust Indicators */}
          <div className="lg:col-span-7 xl:col-span-7 pb-2 lg:pb-10 xl:pb-12 text-left">
            {/* Top Status & Rating Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-white text-xs font-medium mb-4 backdrop-blur-md shadow-xs opacity-0 animate-fade-up">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Clínica Especializada em Pelotas</span>
              </span>
              <span className="text-white/30">•</span>
              <span className="inline-flex items-center gap-1 text-amber-300 font-semibold">
                <span>★★★★★</span>
                <span className="text-white/90 font-medium">5.0 no Google</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-extrabold text-white mb-3.5 leading-[1.15] tracking-tight opacity-0 animate-fade-up delay-100">
              <strong className="font-extrabold text-white">Fisioterapia</strong>,{" "}
              <strong className="font-extrabold text-white">Pilates</strong> e{" "}
              <strong className="font-extrabold text-emerald-300">Quiropraxia</strong>{" "}
              em Pelotas: Recupere sua liberdade de{" "}
              <em className="not-italic bg-gradient-to-r from-emerald-200 via-teal-200 to-amber-200 bg-clip-text text-transparent">
                movimento!
              </em>
            </h1>

            {/* Subtitle with SEO keywords */}
            <h2 className="text-sm sm:text-base max-w-xl font-normal text-emerald-50/85 mb-6 leading-relaxed opacity-0 animate-fade-up delay-200">
              A Clínica Reabilitare é especialista em{" "}
              <strong className="font-semibold text-white">fisioterapia em Pelotas</strong>,{" "}
              <strong className="font-semibold text-white">pilates em Pelotas</strong> e{" "}
              <strong className="font-semibold text-white">quiropraxia em Pelotas</strong>.
              Tratamentos personalizados para alívio da dor, alinhamento vertebral e
              qualidade de vida.
            </h2>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 w-full opacity-0 animate-fade-up delay-300">
              <WhatsAppButton
                href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20os%20tratamento%20de%20fisioterapia."
                aria-label="Agendar avaliação de Fisioterapia pelo WhatsApp"
                className="group inline-flex items-center justify-center gap-2 rounded-full cursor-pointer text-sm font-bold px-5 py-2.5 sm:py-3 transition-all duration-300 bg-white text-emerald-950 hover:bg-emerald-50 shadow-lg shadow-black/15 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                <span>Agendar Fisioterapia</span>
                <svg
                  className="w-4 h-4 text-emerald-700 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </WhatsAppButton>

              <WhatsAppButton
                href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20as%20aulas%20de%20pilates."
                aria-label="Agendar aula de Pilates pelo WhatsApp"
                className="inline-flex items-center justify-center gap-2 border border-white/25 rounded-full cursor-pointer text-sm font-bold px-5 py-2.5 sm:py-3 transition-all duration-300 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                <span>Agendar Pilates</span>
              </WhatsAppButton>

              <WhatsAppButton
                href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20os%20atendimentos%20de%20quiropraxia."
                aria-label="Agendar atendimento de Quiropraxia pelo WhatsApp"
                className="relative inline-flex items-center justify-center gap-2 border border-emerald-300/35 rounded-full cursor-pointer text-sm font-bold px-5 py-2.5 sm:py-3 transition-all duration-300 bg-emerald-800/50 text-white backdrop-blur-md hover:bg-emerald-700/60 hover:border-emerald-300/60 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                <span>Agendar Quiropraxia</span>
                <span className="bg-amber-400 text-emerald-950 text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs">
                  Novidade
                </span>
              </WhatsAppButton>
            </div>

            {/* Compact Trust Pills */}
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-emerald-100/80 opacity-0 animate-fade-up delay-400">
              <span className="inline-flex items-center gap-1.5">
                <span className="text-emerald-300 font-bold">✓</span>
                <span>Atendimento 100% Individualizado</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="text-emerald-300 font-bold">✓</span>
                <span>CREFITO-5: 375851-F</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="text-emerald-300 font-bold">✓</span>
                <span>Av. Bento Gonçalves, 2146 · Areal</span>
              </span>
            </div>
          </div>

          {/* Right Column: Specialist Portrait — Flush with bottom on both mobile and desktop */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-end items-end self-end -mb-px opacity-0 animate-fade-in delay-300">
            {/* Subtle Halo behind specialist */}
            <div className="pointer-events-none absolute bottom-0 w-60 h-60 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-emerald-400/20 via-teal-300/15 to-transparent blur-md" />

            {/* Floating Credential Badge */}
            <div className="absolute bottom-4 left-2 sm:left-8 lg:left-0 z-20 bg-emerald-950/85 backdrop-blur-xl border border-white/15 rounded-2xl px-3.5 py-2.5 shadow-xl">
              <p className="text-white font-bold text-xs leading-tight">
                Dra. Kauane Ramos
              </p>
              <p className="text-emerald-300 text-[11px] font-medium mt-0.5">
                Fisioterapeuta · CREFITO-5: 375851-F
              </p>
            </div>

            <Image
              src="/kauane-ramos-fisioterapia-pelotas.webp"
              alt="Kauane Ramos - Fisioterapeuta especializada em fisioterapia, pilates e quiropraxia em Pelotas"
              width={810}
              height={1013}
              priority
              className="relative z-10 block w-auto h-auto max-h-[290px] sm:max-h-[340px] lg:max-h-[390px] xl:max-h-[420px] object-contain object-bottom pointer-events-none select-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.3)]"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
