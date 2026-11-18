import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Ratings from "@/components/ratings";
import WhatsAppButton from "@/components/WhatsAppButton";
import InternalHero from "@/components/InternalHero";
import FaqAccordion from "@/components/FaqAccordion";
import ScrollReveal from "@/components/ScrollReveal";
import ClinicalReviewerBadge from "@/components/ClinicalReviewerBadge";
import {
  organizationSchema,
  SITE_URL,
  specialistSchema,
  websiteSchema,
} from "@/lib/schema";
import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";

const Location = dynamic(() => import("@/components/location"));

export const metadata: Metadata = {
  title: {
    absolute: "Fisioterapia em Pelotas | Fisioterapeuta - Clínica Reabilitare",
  },
  description:
    "Procurando fisioterapia ou fisioterapeuta em Pelotas? A Clínica Reabilitare (Areal) oferece atendimento individualizado para dores na coluna, hérnia de disco, pós-operatório e lesões. Aceitamos convênios. Agende já!",
  keywords: [
    "fisioterapia pelotas",
    "fisioterapeuta pelotas",
    "fisioterapeuta em pelotas",
    "fisioterapia em pelotas",
    "clínica de fisioterapia pelotas",
    "fisioterapia postural pelotas",
    "fisioterapia para coluna pelotas",
    "fisioterapia hérnia de disco pelotas",
    "fisioterapia nervo ciático pelotas",
    "fisioterapia pós-operatória pelotas",
    "fisioterapia ortopédica pelotas",
    "fisioterapia bairro areal pelotas",
    "dra kauane ramos fisioterapeuta pelotas",
    "fisioterapia prevpel pelotas",
    "fisioterapia ibcm pelotas",
    "fisioterapia cabergs pelotas",
  ],
  alternates: {
    canonical: "/fisioterapia-pelotas",
  },
  openGraph: {
    title: "Fisioterapia em Pelotas | Fisioterapeuta - Clínica Reabilitare",
    description:
      "Procurando fisioterapia ou fisioterapeuta em Pelotas? Atendimento individualizado para dores na coluna, lesões e pós-operatório na Av. Bento Gonçalves, 2146. Agende agora!",
    url: `${SITE_URL}/fisioterapia-pelotas`,
    type: "website",
    locale: "pt_BR",
    siteName: "Clínica Reabilitare",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Fisioterapia Especializada em Pelotas - Clínica Reabilitare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fisioterapia em Pelotas | Fisioterapeuta - Clínica Reabilitare",
    description:
      "Procurando fisioterapia em Pelotas? Atendimentos especializados para coluna, reabilitação e lesões com a Dra. Kauane Ramos. Agende agora!",
    images: ["/cover.png"],
  },
};

const fisioterapiaFaq = [
  {
    question:
      "Preciso de encaminhamento ou pedido médico para iniciar a fisioterapia em Pelotas?",
    answer:
      "Não é obrigatório. O fisioterapeuta é um profissional de primeiro contato habilitado para avaliar, diagnosticar disfunções cinético-funcionais e prescrever o tratamento adequado. Se você já tiver exames de imagem (raio-X, ressonância magnética) ou laudo médico, traga-os na sua primeira consulta para complementar a avaliação.",
  },
  {
    question:
      "Quais convênios são atendidos para Fisioterapia na Clínica Reabilitare?",
    answer:
      "Atendemos pacientes pelos convênios PrevPel, IBCM, ASPRA, ASSTBM e Cabergs, além de planos e consultas particulares com condições facilitadas. Entre em contato pelo WhatsApp (53) 99166-9801 para verificar as coberturas específicas do seu plano.",
  },
  {
    question:
      "Como funciona a primeira consulta e avaliação com a fisioterapeuta?",
    answer:
      "A consulta inicial é 100% individualizada e inclui anamnese aprofundada, testes ortopédicos, análise postural e palpatória da coluna e das articulações. Identificamos a causa raiz da sua dor ou limitação e montamos um plano de tratamento personalizado para devolver sua qualidade de vida no menor tempo possível.",
  },
  {
    question:
      "Qual o tempo de duração da sessão e quantas sessões são recomendadas?",
    answer:
      "Cada sessão de fisioterapia dura aproximadamente 50 a 60 minutos de atenção contínua e exclusiva do profissional. A frequência e a quantidade total de sessões variam conforme a gravidade da lesão, o tempo de dor e a resposta biológica de cada paciente, sendo reavaliadas a cada etapa.",
  },
  {
    question:
      "A fisioterapia trata dor crônica na coluna, nervo ciático e hérnia de disco?",
    answer:
      "Sim! Essa é uma das principais especialidades da Clínica Reabilitare em Pelotas. Utilizamos técnicas de terapia manual, descompressão articular, liberação miofascial e exercícios terapêuticos específicos que aliviam a compressão dos nervos, restauram a mobilidade e fortalecem a musculatura profunda estabilizadora.",
  },
];

export default function FisioterapiaPage() {
  const pageUrl = `${SITE_URL}/fisioterapia-pelotas`;

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              organizationSchema,
              specialistSchema,
              websiteSchema,
              {
                "@type": "MedicalWebPage",
                "@id": `${pageUrl}#webpage`,
                url: pageUrl,
                name: "Fisioterapia em Pelotas | Fisioterapeuta - Clínica Reabilitare",
                description:
                  "Fisioterapia especializada em Pelotas com atendimento individualizado para dores na coluna, hérnia de disco, nervo ciático, reabilitação pós-operatória e lesões ortopédicas.",
                inLanguage: "pt-BR",
                isPartOf: {
                  "@id": `${SITE_URL}/#website`,
                },
                about: {
                  "@id": `${pageUrl}#service`,
                },
                author: {
                  "@id": `${SITE_URL}/#kauane-ramos`,
                },
                reviewedBy: {
                  "@id": `${SITE_URL}/#kauane-ramos`,
                },
                lastReviewed: "2026-11-17",
              },
              {
                "@type": "MedicalTherapy",
                "@id": `${pageUrl}#service`,
                name: "Fisioterapia Especializada em Pelotas",
                url: pageUrl,
                description:
                  "Atendimento individualizado de fisioterapia ortopédica, traumatológica, terapia manual e reabilitação pós-operatória em Pelotas/RS.",
                provider: {
                  "@id": `${SITE_URL}/#organization`,
                },
                areaServed: {
                  "@type": "City",
                  name: "Pelotas",
                  sameAs: "https://www.wikidata.org/wiki/Q170851",
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Serviços de Fisioterapia em Pelotas",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "MedicalTherapy",
                        name: "Fisioterapia para Dor na Coluna e Hérnia de Disco",
                        description:
                          "Tratamento biomecânico e terapia manual para descompressão discal e alívio de dor ciática e lombar.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "MedicalTherapy",
                        name: "Reabilitação Pós-Operatória Ortopédica",
                        description:
                          "Protocolos fisioterapêuticos para recuperação segura após artroscopia, prótese e cirurgias ortopédicas.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "MedicalTherapy",
                        name: "Fisioterapia Ortopédica e Traumatológica",
                        description:
                          "Tratamento de tendinites, bursites, entorses e lesões musculares e articulares.",
                      },
                    },
                  ],
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Início",
                    item: SITE_URL,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Fisioterapia em Pelotas",
                    item: pageUrl,
                  },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: fisioterapiaFaq.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />
      <Header />

      <InternalHero
        breadcrumbLabel="Fisioterapia em Pelotas"
        title={
          <>
            Fisioterapia em{" "}
            <strong className="text-emerald-300 font-extrabold">Pelotas</strong>
          </>
        }
        subtitle="Atendimento individualizado com fisioterapeuta especialista para dores na coluna, lesões e pós-operatório."
      />

      <div className="bg-white">
        <main className="container mx-auto px-4 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto">
            <ClinicalReviewerBadge specialtyLabel="Fisioterapia e Reabilitação Funcional" />

            {/* Intro Section */}
            <ScrollReveal>
              <section className="prose prose-lg md:prose-xl prose-emerald max-w-none text-gray-600 leading-relaxed mb-16">
                <p>
                  Procurando <strong>fisioterapia em Pelotas</strong> ou
                  atendimento especializado com <strong>fisioterapeuta</strong>{" "}
                  de confiança? A <strong>Clínica Reabilitare</strong> é
                  referência no tratamento humanizado e individualizado de dores
                  agudas e crônicas, recuperação funcional e reabilitação
                  ortopédica em Pelotas/RS.
                </p>
                <p>
                  Localizada no bairro Areal (Av. Bento Gonçalves, 2146), a
                  clínica é liderada pela{" "}
                  <strong>Dra. Kauane Ramos (CREFITO-5: 375851-F)</strong>,
                  oferecendo atendimento exclusivo de um paciente por horário.
                  Isso assegura que cada sessão seja focada exatamente na causa
                  da sua dor, sem tratamentos genéricos ou repetições sem
                  acompanhamento próximo.
                </p>
              </section>
            </ScrollReveal>

            {/* Specialties Grid */}
            <section className="mb-16">
              <ScrollReveal>
                <div className="text-center mb-10">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 px-3.5 py-1.5 rounded-full inline-block mb-3">
                    Áreas de Atuação
                  </span>
                  <h2 className="text-3xl font-extrabold text-(--color-emerald-800) mb-4">
                    O que Tratamos na Fisioterapia em Pelotas
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                    Diagnóstico cinético-funcional preciso e técnicas baseadas
                    em evidências científicas para alívio duradouro.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                {[
                  {
                    title: "Coluna Vertebral & Hérnia de Disco",
                    desc: "Alívio eficaz para dor lombar (lombalgia), cervicalgia, ciático inflamado, protusões discais e rigidez postural.",
                  },
                  {
                    title: "Reabilitação Pós-Operatória",
                    desc: "Recuperação segura e gradual de amplitude de movimento após artroscopia, reconstrução ligamentar, prótese e cirurgias ortopédicas.",
                  },
                  {
                    title: "Lesões Musculares & Articulares",
                    desc: "Tratamento para tendinites, bursites, epicondilites, entorses de tornozelo, lesões de menisco e distensões musculares.",
                  },
                  {
                    title: "Terapia Manual & Liberação Miofascial",
                    desc: "Manobras manuais para desativar pontos-gatilho (trigger points), reduzir nós de tensão muscular e devolver a mobilidade tecidual.",
                  },
                  {
                    title: "Correção Postural & Dores do Trabalho",
                    desc: "Adequação biomecânica para quem passa muitas horas sentado ou em pé, prevenindo dores crônicas nos ombros e pescoço.",
                  },
                  {
                    title: "Convênios e Particular Facilitado",
                    desc: "Atendimento pelos convênios PrevPel, IBCM, ASPRA, ASSTBM e Cabergs, além de planos particulares acessíveis.",
                  },
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 80}>
                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-6 h-full hover:bg-emerald-50 hover:shadow-md transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                          ✓
                        </span>
                        <h3 className="font-bold text-lg text-emerald-950">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed pl-7">
                        {item.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={200}>
                <div className="text-center">
                  <WhatsAppButton
                    href="https://wa.me/5553991669801?text=Olá%2C%20gostaria%20de%20agendar%20uma%20avaliação%20de%20fisioterapia%20em%20Pelotas."
                    className="inline-flex items-center gap-2 border-none rounded-full cursor-pointer text-lg font-bold px-9 py-3.5 bg-(--color-emerald-800) text-white hover:bg-emerald-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    aria-label="Agendar avaliação de Fisioterapia em Pelotas pelo WhatsApp"
                  >
                    Agendar Avaliação de Fisioterapia
                    <span className="text-xl">→</span>
                  </WhatsAppButton>
                </div>
              </ScrollReveal>
            </section>

            {/* Why Choose Us */}
            <section className="mb-20 bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
              <ScrollReveal>
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-extrabold text-(--color-emerald-800) mb-4">
                    Por que Escolher a Clínica Reabilitare em Pelotas?
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Atendimento 100% Individualizado",
                    desc: "Sua sessão é exclusiva. O fisioterapeuta acompanha cada exercício e manobra do início ao fim, garantindo máxima eficácia.",
                  },
                  {
                    title: "Profissional Responsável e Especializada",
                    desc: "Atendimento conduzido pela Dra. Kauane Ramos (CREFITO-5: 375851-F), com constante atualização científica e clínica.",
                  },
                  {
                    title: "Localização com Estacionamento",
                    desc: "Facilidade de acesso no Bairro Areal (Av. Bento Gonçalves, 2146), com ambiente climatizado, seguro e acolhedor.",
                  },
                  {
                    title: "Tratamento da Raiz da Dor",
                    desc: "Não tratamos apenas os sintomas momentâneos; corrigimos o desequilíbrio muscular e articular causador da queixa.",
                  },
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 100}>
                    <div className="bg-white rounded-2xl p-6 shadow-xs border border-gray-100 h-full">
                      <h3 className="font-bold text-lg text-(--color-emerald-800) mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <ScrollReveal>
                <div className="text-center mb-6">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 px-3.5 py-1.5 rounded-full inline-block mb-3">
                    Tire Suas Dúvidas
                  </span>
                  <h2 className="text-3xl font-extrabold text-(--color-emerald-800)">
                    Perguntas Frequentes sobre Fisioterapia em Pelotas
                  </h2>
                </div>
              </ScrollReveal>
              <FaqAccordion items={fisioterapiaFaq} />
            </section>

            {/* Cross-link Section */}
            <section className="mb-12 rounded-2xl bg-emerald-50/60 border border-emerald-100 p-6 sm:p-8 text-center">
              <h2 className="text-xl font-extrabold text-emerald-950 mb-2">
                Conheça Também Nossas Outras Especialidades em Pelotas
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mb-5">
                Integramos a fisioterapia com o nosso{" "}
                <Link
                  href="/pilates-pelotas"
                  className="text-emerald-800 font-bold underline hover:text-emerald-950 transition-colors"
                >
                  Estúdio de Pilates em Pelotas
                </Link>{" "}
                e atendimentos de{" "}
                <Link
                  href="/quiropraxia-pelotas"
                  className="text-emerald-800 font-bold underline hover:text-emerald-950 transition-colors"
                >
                  Quiropraxia em Pelotas
                </Link>{" "}
                para um cuidado completo e duradouro.
              </p>
            </section>
          </div>

          <div className="mt-16">
            <Contact />
          </div>
        </main>
      </div>
      <Ratings />
      <Location />
      <Footer />
    </div>
  );
}
