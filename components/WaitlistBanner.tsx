import ScrollReveal from "./ScrollReveal";

const FORM_URL = "https://forms.gle/FRNEMVt7TrLoQsFT8";

export default function WaitlistBanner() {
  return (
    <section
      id="lista-de-espera"
      className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 pb-16 pt-24 lg:pb-20 lg:pt-28 -mt-8"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-teal-300/10 blur-3xl" />

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge pulsante */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/15 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
                Pré-lançamento · Em breve
              </span>
            </div>

            {/* Headline */}
            <h2 className="mb-4 text-3xl font-extrabold leading-tight text-white lg:text-4xl xl:text-5xl">
              Quiropraxia chegando à{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                Clínica Reabilitare
              </span>
            </h2>

            {/* Subtítulo */}
            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-emerald-100/80 lg:text-lg">
              Agende sua avaliação e entre para a{" "}
              <strong className="text-white">lista de lançamento.</strong>{" "}
              Vagas limitadas — garanta a sua com prioridade.
            </p>

            {/* Benefícios rápidos */}
            <div className="mb-10 flex flex-wrap justify-center gap-3">
              {[
                "✦  1ª consulta com valor promocional",
                "✦  Prioridade no agendamento",
                "✦  Atendimento personalizado",
              ].map((benefit) => (
                <span
                  key={benefit}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-emerald-100/90 backdrop-blur-sm"
                >
                  {benefit}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="waitlist-cta"
              aria-label="Entrar para a lista de lançamento da Quiropraxia na Clínica Reabilitare"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-emerald-900 shadow-xl shadow-black/20 transition-all duration-300 hover:scale-[1.04] hover:bg-emerald-50 hover:shadow-2xl active:scale-[0.98]"
            >
              <span>Entrar para a Lista de Lançamento</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-800/10 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <p className="mt-5 text-xs text-emerald-200/50">
              Sem compromisso · Você será contactado pela nossa equipe
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
