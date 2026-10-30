import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import WhatsAppButton from "./WhatsAppButton";

export default function Services() {
  const mainPillars = [
    {
      title: "Fisioterapia Especializada",
      subtitle: "Ortopedia, Traumatologia & Pós-Operatório",
      desc: "Avaliação biomecânica precisa e tratamento individualizado para eliminar a causa da dor, recuperar lesões e devolver sua autonomia.",
      href: "/fisioterapia-pelotas",
      msg: "Olá%2C%20preciso%20de%20informações%20sobre%20os%20tratamentos%20de%20fisioterapia.",
      highlights: [
        "Alívio de dores agudas e crônicas",
        "Reabilitação pós-cirúrgica",
        "Atendimento 100% personalizado",
      ],
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
      ),
    },
    {
      title: "Estúdio de Pilates Clínico",
      subtitle: "Postura, Força & Mobilidade",
      desc: "Aulas orientadas por fisioterapeutas em estúdio completo. Fortaleça a musculatura profunda, previna lesões e melhore sua postura.",
      href: "/pilates-pelotas",
      msg: "Olá%2C%20preciso%20de%20informações%20sobre%20as%20aulas%20de%20pilates.",
      highlights: [
        "Aulas adaptadas ao seu nível",
        "Foco em coluna e core",
        "Equipamentos modernos",
      ],
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      ),
    },
  ];

  const servicesList = [
    {
      title: "Tratamento da Coluna",
      desc: "Cuidado especializado para problemas na coluna, incluindo hérnias, nervo ciático e dores crônicas.",
      badge: "Especialidade",
      msg: "Olá%2C%20preciso%20de%20atendimento%20especializado%20para%20tratamento%20da%20coluna.",
    },
    {
      title: "Reabilitação Funcional",
      desc: "Recuperação completa e individualizada após lesões e cirurgias para retomar seus movimentos.",
      badge: "Fisioterapia",
      msg: "Olá%2C%20gostaria%20de%20informações%20sobre%20o%20programa%20de%20reabilitação.",
    },
    {
      title: "Tratamento de Lesões",
      desc: "Atenção especializada para tratar lesões musculares e articulares promovendo rápida recuperação.",
      badge: "Cuidados",
      msg: "Olá%2C%20preciso%20de%20atendimento%20para%20tratamento%20de%20lesão.",
    },
    {
      title: "Pós-Operatório",
      desc: "Apoio no processo de recuperação após cirurgias, garantindo maior mobilidade, cicatrização e conforto.",
      badge: "Recuperação",
      msg: "Olá%2C%20procuro%20fisioterapia%20pós-operatória.",
    },
    {
      title: "Correção Postural",
      desc: "Melhora da postura e reordenamento do eixo corporal para eliminar dores do dia a dia.",
      badge: "Pilates & Fisio",
      msg: "Olá%2C%20tenho%20interesse%20em%20avaliação%20para%20correção%20postural.",
    },
    {
      title: "Prevenção de Lesões",
      desc: "Programas de exercícios guiados para evitar lesões recorrentes e manter seu corpo saudável.",
      badge: "Prevenção",
      msg: "Olá%2C%20gostaria%20de%20orientação%20para%20prevenção%20de%20lesões.",
    },
    {
      title: "Alívio de Dores",
      desc: "Técnicas terapêuticas para alívio rápido e eficaz de dores musculares, articulares e cefaleias.",
      badge: "Bem-estar",
      msg: "Olá%2C%20preciso%20de%20atendimento%20para%20alívio%20de%20dores.",
    },
    {
      title: "Aumento de Flexibilidade",
      desc: "Exercícios que aprimoram a amplitude articular, o alongamento muscular e a mobilidade.",
      badge: "Pilates",
      msg: "Olá%2C%20tenho%20interesse%20em%20aulas%20focadas%20em%20flexibilidade.",
    },
    {
      title: "Condicionamento Físico",
      desc: "Treinamento funcional e Pilates para fortalecimento muscular, resistência e vitalidade.",
      badge: "Fortalecimento",
      msg: "Olá%2C%20gostaria%20de%20informações%20sobre%20condicionamento%20físico.",
    },
    {
      title: "Coordenação Motora",
      desc: "Exercícios de estímulo neuromuscular que aprimoram a precisão e o controle dos movimentos.",
      badge: "Neuromuscular",
      msg: "Olá%2C%20procuro%20atendimento%20para%20coordenação%20motora.",
    },
    {
      title: "Melhora de Equilíbrio",
      desc: "Treinos específicos para estabilização postural, propriocepção e segurança ao caminhar.",
      badge: "Estabilidade",
      msg: "Olá%2C%20gostaria%20de%20agendar%20avaliação%20focada%20em%20equilíbrio.",
    },
    {
      title: "Fortalecimento do Core",
      desc: "Ativação da musculatura profunda abdominal e paravertebral para sustentação e proteção da coluna.",
      badge: "Pilates Clínico",
      msg: "Olá%2C%20gostaria%20de%20informações%20sobre%20Pilates%20para%20fortalecimento%20da%20coluna.",
    },
  ];

  return (
    <section id="servicos" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute top-1/3 -right-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 -left-32 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 border border-emerald-200/80 px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-4 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                Nossas Especialidades em Pelotas
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 mb-4 leading-tight tracking-tight">
                Fisioterapia &amp;{" "}
                <span className="text-emerald-800">Pilates Integrados</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Tratamentos personalizados com embasamento científico para restaurar seu movimento, aliviar dores e renovar sua qualidade de vida.
              </p>
            </div>
          </ScrollReveal>

          {/* 2 Main Pillars Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-20">
            {mainPillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 100} className="h-full">
                <div className="h-full relative rounded-3xl bg-white border border-slate-200/80 p-7 sm:p-8 shadow-sm hover:shadow-2xl hover:border-emerald-600/30 transition-all duration-300 flex flex-col justify-between group overflow-hidden">
                  {/* Top gradient accent bar */}
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-800 via-emerald-600 to-teal-500 opacity-85 group-hover:opacity-100 transition-opacity" />

                  <div>
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-emerald-950 text-emerald-300 flex items-center justify-center shadow-md shadow-emerald-950/10 group-hover:scale-105 transition-transform duration-300">
                        {pillar.icon}
                      </div>
                    </div>

                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
                      {pillar.subtitle}
                    </p>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                      {pillar.desc}
                    </p>

                    <ul className="space-y-2.5 mb-8 border-t border-slate-100 pt-5">
                      {pillar.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                          <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0">
                            ✓
                          </span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                    <WhatsAppButton
                      href={`https://wa.me/5553991669801?text=${pillar.msg}`}
                      aria-label={`Agendar ${pillar.title} pelo WhatsApp`}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-900 text-white font-bold text-sm px-5 py-3 hover:bg-emerald-800 transition-all shadow-sm hover:shadow-md"
                    >
                      <span>Agendar Agora</span>
                      <span>→</span>
                    </WhatsAppButton>
                    <Link
                      href={pillar.href}
                      aria-label={`Saiba mais sobre ${pillar.title} em Pelotas`}
                      className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-200 text-slate-700 hover:text-emerald-900 font-semibold text-sm px-5 py-3 transition-colors"
                    >
                      <span>Saiba mais</span>
                      <span className="sr-only"> sobre {pillar.title} em Pelotas</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Subheader for all 12 treatments */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-slate-200/80 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block mb-1">
                  Cuidado Completo
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Tratamentos e Programas Específicos
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 max-w-md">
                Clique no tratamento desejado para falar diretamente com nossa equipe e agendar sua avaliação.
              </p>
            </div>
          </ScrollReveal>

          {/* 12 Treatments Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {servicesList.map((item, index) => (
              <ScrollReveal key={index} delay={(index % 3) * 80} className="h-full">
                <WhatsAppButton
                  href={`https://wa.me/5553991669801?text=${item.msg}`}
                  aria-label={`Agendar ${item.title} pelo WhatsApp`}
                  className="h-full relative bg-white border border-slate-200/75 rounded-2xl p-6 sm:p-7 shadow-2xs hover:shadow-xl hover:border-emerald-600/40 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between text-left"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full">
                        {item.badge}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-emerald-50 text-slate-400 group-hover:text-emerald-700 flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-emerald-800 transition-colors mb-2.5 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-800 group-hover:text-emerald-600 transition-colors">
                    <span>Solicitar Avaliação via WhatsApp</span>
                    <span className="text-base transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </WhatsAppButton>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
