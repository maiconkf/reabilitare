import ScrollReveal from "./ScrollReveal";
import WhatsAppButton from "./WhatsAppButton";

export default function Services() {
  const servicesList = [
    {
      title: "Quiropraxia & Ajuste Vertebral",
      desc: "Ajustes articulares e vertebrais para restauração do alinhamento corporal e alívio imediato de tensões.",
      badge: "Quiropraxia",
      isNew: true,
      msg: "Olá%2C%20gostaria%20de%20agendar%20uma%20consulta%20de%20Quiropraxia%20e%20Ajuste%20Vertebral.",
    },
    {
      title: "Tratamento da Coluna",
      desc: "Cuidado especializado para problemas na coluna, incluindo hérnias, nervo ciático e dores crônicas.",
      badge: "Especialidade",
      msg: "Olá%2C%20preciso%20de%20atendimento%20especializado%20para%20tratamento%20da%20coluna.",
    },
    {
      title: "Reabilitação",
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
      title: "Pós Operatório",
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
      title: "Melhora de Coordenação Motora",
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
  ];

  return (
    <section id="servicos" className="bg-gray-50 py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-(--color-emerald-800) bg-emerald-100/90 border border-emerald-200 px-4 py-1.5 rounded-full inline-block mb-3 shadow-2xs">
                Nossas Especialidades em Pelotas
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-(--color-emerald-800) mb-4 leading-tight">
                Fisioterapia, Pilates &amp; Quiropraxia Integradas
              </h2>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                Tratamentos personalizados com embasamento científico para restaurar seu alinhamento, aliviar dores e renovar sua qualidade de vida.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesList.map((item, index) => (
              <ScrollReveal key={index} delay={(index % 3) * 100} className="h-full">
                <WhatsAppButton
                  href={`https://wa.me/5553991669801?text=${item.msg}`}
                  aria-label={`Agendar ${item.title} pelo WhatsApp`}
                  className="h-full relative bg-white border border-gray-100 rounded-2xl p-7 shadow-xs hover:shadow-2xl hover:border-emerald-500/40 hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between text-left before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-emerald-600 before:to-teal-400 before:rounded-t-2xl before:opacity-0 hover:before:opacity-100 before:transition-opacity"
                >
                  <div>
                    <div className="flex items-center justify-start mb-5 gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md">
                        {item.badge}
                      </span>
                      {item.isNew && (
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-amber-500 px-2 py-0.5 rounded-full shadow-xs animate-pulse">
                          Novidade
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-(--color-emerald-800) transition-colors mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100/80 flex items-center justify-between text-xs font-bold text-(--color-emerald-800) group-hover:text-emerald-600 transition-colors">
                    <span>Agendar Atendimento</span>
                    <span className="text-base transform group-hover:translate-x-1.5 transition-transform">→</span>
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
