import ScrollReveal from "./ScrollReveal";
import Link from "next/link";

const FORM_URL = "https://forms.gle/FRNEMVt7TrLoQsFT8";

export default function WaitlistBanner() {
  return (
    <section
      id="lista-de-espera"
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 p-8 sm:p-10 lg:p-14 shadow-2xl shadow-emerald-950/15 border border-emerald-800/60">
            {/* Ambient glows */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-amber-400/15 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-teal-300/15 blur-3xl" />

            {/* Subtle grid pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/35 bg-amber-400/15 px-4 py-1.5 backdrop-blur-sm">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
                  <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300">
                    Nova Especialidade · Condição Especial
                  </span>
                </div>

                <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white tracking-tight">
                  Quiropraxia chegando à{" "}
                  <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
                    Clínica Reabilitare
                  </span>
                </h2>

                <p className="mb-6 max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed text-emerald-100/85">
                  Agende sua avaliação e entre para a{" "}
                  <strong className="text-white font-semibold">
                    lista prioritária de lançamento.
                  </strong>{" "}
                  Vagas limitadas para atendimento de ajuste vertebral e alívio imediato de tensões.
                </p>

                {/* Quick benefits */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
                  {[
                    "1ª consulta com valor promocional",
                    "Prioridade no agendamento",
                    "Avaliação postural completa",
                  ].map((benefit) => (
                    <span
                      key={benefit}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.07] px-3.5 py-1.5 text-xs sm:text-sm font-medium text-emerald-50 backdrop-blur-sm"
                    >
                      <svg
                        className="w-3.5 h-3.5 text-amber-300 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right CTA Box */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
                <div className="w-full max-w-md rounded-2xl bg-white/[0.07] border border-white/15 p-6 sm:p-7 backdrop-blur-md text-center">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-1">
                    Inscrição Rápida
                  </p>
                  <p className="text-white font-bold text-lg mb-5">
                    Garanta seu horário com prioridade
                  </p>
                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="waitlist-cta"
                    aria-label="Entrar para a lista de lançamento da Quiropraxia na Clínica Reabilitare"
                    className="group flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm sm:text-base font-extrabold text-emerald-950 shadow-xl shadow-black/20 transition-all duration-300 hover:scale-[1.02] hover:bg-emerald-50 active:scale-[0.98]"
                  >
                    <span>Entrar na Lista de Lançamento</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-900/10 text-emerald-900 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                  <div className="mt-4 flex items-center justify-center gap-3 text-xs text-emerald-200/70">
                    <span>Sem compromisso</span>
                    <span>•</span>
                    <Link
                      href="/quiropraxia-pelotas"
                      className="underline decoration-emerald-400/50 hover:text-white transition-colors"
                    >
                      Conhecer a Quiropraxia
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
