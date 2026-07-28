import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

const FORM_URL = "https://forms.gle/FRNEMVt7TrLoQsFT8";

export const metadata: Metadata = {
  title: "Quiropraxia na Clínica Reabilitare — Entre para a Lista de Lançamento",
  description:
    "A Quiropraxia chegou à Clínica Reabilitare em Pelotas! Agende sua avaliação com valor promocional e garanta prioridade no atendimento. Vagas limitadas.",
  alternates: {
    canonical: "/quiropraxia-lancamento",
  },
  openGraph: {
    title: "Quiropraxia chegou à Clínica Reabilitare 🎉",
    description:
      "Agende sua avaliação com valor promocional e entre para a lista de lançamento. Vagas limitadas — garanta a sua com prioridade.",
    url: "https://www.clinicareabilitare.com/quiropraxia-lancamento",
    images: "/cover.png",
    type: "website",
  },
  twitter: {
    title: "Quiropraxia chegou à Clínica Reabilitare 🎉",
    description:
      "Agende sua avaliação com valor promocional e entre para a lista de lançamento. Vagas limitadas.",
    images: ["/cover.png"],
  },
};

const benefits = [
  {
    icon: "🩺",
    title: "1ª Consulta Promocional",
    desc: "Seu primeiro atendimento tem valor promocional especial para quem entra na lista.",
  },
  {
    icon: "📅",
    title: "Prioridade no Agendamento",
    desc: "Quem entra na lista garante os primeiros horários disponíveis.",
  },
  {
    icon: "🤝",
    title: "Atendimento Personalizado",
    desc: "Tratamento individualizado para o seu histórico e objetivos.",
  },
  {
    icon: "🦴",
    title: "Alívio Real de Dores",
    desc: "Ajustes articulares e vertebrais que fazem você sentir a diferença.",
  },
];

const faqs = [
  {
    q: "O que é Quiropraxia?",
    a: "É uma ciência da saúde que cuida do sistema nervoso e musculoesquelético por meio de ajustes manuais na coluna e articulações, aliviando dores e restaurando o movimento natural do corpo.",
  },
  {
    q: "Para quem é indicada?",
    a: "Para quem tem dores na coluna, pescoço, ombros e articulações, problemas posturais, cefaleias tensionais, hérnia de disco, nervo ciático ou simplesmente busca mais bem-estar e qualidade de vida.",
  },
  {
    q: "Dói fazer o ajuste?",
    a: "Na grande maioria dos casos não dói. O estalo que você pode ouvir durante o ajuste é apenas a liberação de gases nas articulações — completamente normal e indolor.",
  },
  {
    q: "Quantas sessões vou precisar?",
    a: "Depende de cada caso. Na primeira consulta definimos juntos o plano de tratamento mais adequado para você.",
  },
];

export default function QuiropraxiaLancamentoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── HEADER SIMPLIFICADO ─────────────────────────── */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-emerald-900/95 py-3 shadow-sm backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/" className="block transition-opacity hover:opacity-90">
            <Image
              src="/reabilitare-logo-white.webp"
              width={120}
              height={43}
              alt="Clínica Reabilitare logotipo"
              priority
            />
          </Link>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="header-cta"
            className="rounded-full bg-white px-5 py-2 text-sm font-bold text-emerald-900 transition-all duration-300 hover:bg-emerald-50 hover:shadow-md hover:scale-[1.03] active:scale-[0.97]"
          >
            Entrar na Lista
          </a>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 pb-24 pt-36 lg:pb-32 lg:pt-44">
        {/* glows */}
        <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-[28rem] w-[28rem] rounded-full bg-teal-300/10 blur-3xl" />
        {/* grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="container relative z-10 mx-auto px-4 text-center">
          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/15 px-5 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
              Pré-lançamento · Vagas Limitadas
            </span>
          </div>

          <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-extrabold leading-tight text-white lg:text-5xl xl:text-6xl">
            Quiropraxia chegando à{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
              Clínica Reabilitare
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-emerald-100/80 lg:text-xl">
            Agende sua avaliação com{" "}
              <strong className="text-white">valor promocional especial</strong>{" "}
            e entre para a lista de lançamento.
            <br className="hidden sm:block" /> Assim você já começa com prioridade.
          </p>

          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta"
            aria-label="Entrar para a lista de lançamento da Quiropraxia"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-9 py-4 text-base font-bold text-emerald-900 shadow-2xl shadow-black/25 transition-all duration-300 hover:scale-[1.05] hover:bg-emerald-50 hover:shadow-emerald-900/30 active:scale-[0.97] lg:text-lg"
          >
            <span>Quero entrar na lista</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-900/10 text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          <p className="mt-5 text-xs text-emerald-200/45">
            Sem compromisso · Você será contactado pela nossa equipe
          </p>
        </div>
      </section>

      {/* ── BENEFÍCIOS ──────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block rounded-full border border-emerald-200 bg-emerald-100/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
                Por que entrar na lista?
              </span>
              <h2 className="text-3xl font-extrabold text-emerald-900 lg:text-4xl">
                O que você garante ao se inscrever
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 100}>
                <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 text-4xl">{b.icon}</div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── O QUE É QUIROPRAXIA ─────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 to-teal-800 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* texto */}
                <div className="p-10 lg:p-14">
                  <span className="mb-4 inline-block rounded-full border border-emerald-400/30 bg-emerald-400/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-300">
                    Sobre a especialidade
                  </span>
                  <h2 className="mb-5 text-2xl font-extrabold leading-snug text-white lg:text-3xl">
                    O que a Quiropraxia pode fazer por você?
                  </h2>
                  <ul className="space-y-3 text-emerald-100/85">
                    {[
                      "Alívio de dores na coluna, pescoço e ombros",
                      "Ajuste vertebral para melhor postura",
                      "Tratamento para hérnia de disco e nervo ciático",
                      "Cefaleias e dores de cabeça tensionais",
                      "Mais mobilidade e qualidade de vida",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                        <span className="mt-0.5 flex-shrink-0 text-emerald-300">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* CTA lateral */}
                <div className="flex flex-col items-center justify-center bg-white/5 p-10 text-center backdrop-blur-sm lg:p-14">
                  <p className="mb-2 text-sm font-medium text-emerald-200">
                    Pronto para começar?
                  </p>
                  <p className="mb-8 text-2xl font-extrabold text-white">
                    Garanta sua vaga na lista de lançamento
                  </p>
                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="mid-cta"
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-emerald-900 shadow-lg transition-all duration-300 hover:scale-[1.04] hover:bg-emerald-50 active:scale-[0.97]"
                  >
                    <span>Inscreva-se agora</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                  <p className="mt-4 text-xs text-emerald-300/60">
                    1ª consulta promocional · Sem compromisso
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PERGUNTAS FREQUENTES ────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block rounded-full border border-emerald-200 bg-emerald-100/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
                Dúvidas
              </span>
              <h2 className="text-3xl font-extrabold text-emerald-900 lg:text-4xl">
                Perguntas frequentes
              </h2>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-2xl space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <details className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-xs open:shadow-md transition-all duration-300">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-gray-900 group-open:text-emerald-800">
                    <span>{faq.q}</span>
                    <span className="flex-shrink-0 text-emerald-700 transition-transform duration-300 group-open:rotate-45 text-xl">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">{faq.a}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ───────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 py-20">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <ScrollReveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-300">
              Não perca a oportunidade
            </p>
            <h2 className="mb-4 text-3xl font-extrabold text-white lg:text-4xl">
              Vagas limitadas para o lançamento
            </h2>
            <p className="mx-auto mb-10 max-w-md text-base text-emerald-100/75">
              Preencha o formulário em menos de 1 minuto e garanta sua vaga com valor promocional no primeiro atendimento.
            </p>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-cta"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-9 py-4 text-base font-bold text-emerald-900 shadow-2xl shadow-black/25 transition-all duration-300 hover:scale-[1.05] hover:bg-emerald-50 active:scale-[0.97]"
            >
              <span>Entrar para a Lista de Lançamento</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FOOTER MÍNIMO ───────────────────────────────── */}
      <footer className="bg-emerald-950 py-8 text-center">
        <div className="container mx-auto px-4">
          <Link href="/" className="mb-4 inline-block opacity-80 hover:opacity-100 transition-opacity">
            <Image
              src="/reabilitare-logo-white.webp"
              width={100}
              height={36}
              alt="Clínica Reabilitare"
            />
          </Link>
          <p className="text-xs text-emerald-200/40">
            © {new Date().getFullYear()} Clínica Reabilitare · Pelotas, RS ·{" "}
            <Link href="/" className="hover:text-emerald-200/70 transition-colors">
              Voltar ao site
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
