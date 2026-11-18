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
    absolute: "Quiropraxia em Pelotas | Quiropraxista e Ajuste Vertebral",
  },
  description:
    "Quiropraxia em Pelotas na Clínica Reabilitare (Areal). Ajustes vertebrais e articulares seguros para dor na coluna, hérnia de disco, nervo ciático e torcicolo. Alívio rápido. Agende!",
  keywords: [
    "quiropraxia pelotas",
    "quiropraxista pelotas",
    "quiropraxista em pelotas",
    "quiropraxia em pelotas",
    "ajuste vertebral pelotas",
    "tratamento de coluna pelotas",
    "alinhamento da coluna pelotas",
    "nervo ciático quiropraxia pelotas",
    "hérnia de disco quiropraxia pelotas",
    "quiropraxia bairro areal pelotas",
  ],
  alternates: {
    canonical: "/quiropraxia-pelotas",
  },
  openGraph: {
    title: "Quiropraxia em Pelotas | Quiropraxista e Ajuste Vertebral",
    description:
      "Procurando quiropraxia em Pelotas? A Clínica Reabilitare oferece atendimentos especializados para alinhamento da coluna e alívio de dores. Agende agora!",
    url: `${SITE_URL}/quiropraxia-pelotas`,
    type: "website",
    locale: "pt_BR",
    siteName: "Clínica Reabilitare",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Quiropraxia e Ajuste Vertebral em Pelotas - Clínica Reabilitare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiropraxia em Pelotas | Quiropraxista e Ajuste Vertebral",
    description:
      "Ajustes vertebrais precisos e indolores para alívio imediato de dores na coluna no Bairro Areal em Pelotas.",
    images: ["/cover.png"],
  },
};

const quiropraxiaFaq = [
  {
    question:
      "O que é Quiropraxia e como ela ajuda nas dores da coluna em Pelotas?",
    answer:
      "A Quiropraxia é uma área da saúde focada no diagnóstico, tratamento e prevenção de desordens neuro-músculo-esqueléticas, com ênfase na coluna vertebral. Por meio de ajustes rápidos e precisos, removemos interferências articulares (subluxações) que comprimem raízes nervosas, devolvendo a mobilidade natural e eliminando a dor.",
  },
  {
    question: "Os ajustes vertebrais da quiropraxia doem ou são perigosos?",
    answer:
      "Não doem e são extremamente seguros quando realizados por profissionais qualificados após uma criteriosa avaliação biomecânica. O famoso estalo audível durante o ajuste é apenas a liberação de gás da cavidade articular (cavitação), resultando em alívio imediato da pressão e sensação de leveza.",
  },
  {
    question:
      "A quiropraxia é indicada para quem tem hérnia de disco ou nervo ciático?",
    answer:
      "Sim! É uma das indicações mais frequentes na Clínica Reabilitare em Pelotas. Os ajustes descomprimem os forames intervertebrais por onde passam as raízes do nervo ciático, aliviando a queimação, dormência e irradiação para glúteos e pernas.",
  },
  {
    question:
      "Quantas sessões de quiropraxia são necessárias para sentir melhora?",
    answer:
      "A grande maioria dos pacientes relata alívio significativo de dor e relaxamento muscular logo após o primeiro atendimento. A continuidade do plano é planejada conforme a cronicidade da lesão e os objetivos de alinhamento postural a longo prazo.",
  },
  {
    question:
      "Como agendar uma consulta de quiropraxia na Clínica Reabilitare em Pelotas?",
    answer:
      "O agendamento é rápido e direto via WhatsApp no número (53) 99166-9801. Nossa clínica fica na Av. Bento Gonçalves, 2146, no bairro Areal em Pelotas/RS, com estacionamento facilitado e atendimento com hora marcada.",
  },
];

export default function QuiropraxiaPage() {
  const pageUrl = `${SITE_URL}/quiropraxia-pelotas`;

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
                name: "Quiropraxia em Pelotas | Quiropraxista e Ajuste Vertebral",
                description:
                  "Quiropraxia em Pelotas com profissionais qualificados. Tratamento de dores na coluna, ajustes articulares indolores e alinhamento vertebral seguro.",
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
                name: "Quiropraxia e Ajuste Vertebral em Pelotas",
                url: pageUrl,
                description:
                  "Atendimentos de quiropraxia clínica para ajuste vertebral, descompressão articular, tratamento de hérnia de disco e nervo ciático em Pelotas/RS.",
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
                  name: "Atendimentos de Quiropraxia em Pelotas",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "MedicalTherapy",
                        name: "Ajuste Vertebral e Articular",
                        description:
                          "Manobras biomecânicas de alta velocidade e baixa amplitude para restauração do eixo da coluna.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "MedicalTherapy",
                        name: "Tratamento de Dor Lombar e Ciático",
                        description:
                          "Descompressão articular para alívio imediato de pinçamento radicular.",
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
                    name: "Quiropraxia em Pelotas",
                    item: pageUrl,
                  },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: quiropraxiaFaq.map((faq) => ({
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
        breadcrumbLabel="Quiropraxia em Pelotas"
        title={
          <>
            Quiropraxia em{" "}
            <strong className="text-emerald-300 font-extrabold">Pelotas</strong>
          </>
        }
        subtitle="Ajustes Vertebrais e Articulares para alinhamento postural, descompressão e alívio imediato de dores."
      />

      <div className="bg-white">
        <main className="container mx-auto px-4 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto">
            <ClinicalReviewerBadge specialtyLabel="Quiropraxia Clínica e Ajuste Vertebral" />

            {/* Intro Section */}
            <ScrollReveal>
              <section className="prose prose-lg md:prose-xl prose-emerald max-w-none text-gray-600 leading-relaxed mb-16">
                <p>
                  Procurando <strong>quiropraxia em Pelotas</strong> ou
                  atendimento com <strong>quiropraxista</strong> especializado?
                  A <strong>Clínica Reabilitare</strong> oferece protocolos
                  seguros e avançados de{" "}
                  <strong>ajustes vertebrais e articulares</strong> para
                  restaurar o alinhamento da coluna e eliminar a causa de dores
                  agudas e crônicas.
                </p>
                <p>
                  Localizada no Bairro Areal (Av. Bento Gonçalves, 2146), nossa
                  clínica oferece um espaço acolhedor e climatizado. Antes de
                  qualquer ajuste, realizamos uma rigorosa avaliação postural e
                  testes ortopédicos, garantindo intervenções precisas, seguras
                  e confortáveis.
                </p>
              </section>
            </ScrollReveal>

            {/* Benefits Section */}
            <section className="mb-16">
              <ScrollReveal>
                <div className="text-center mb-10">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 px-3.5 py-1.5 rounded-full inline-block mb-3">
                    Principais Indicações
                  </span>
                  <h2 className="text-3xl font-extrabold text-(--color-emerald-800) mb-4">
                    Benefícios da Quiropraxia na Reabilitare
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                    Alívio rápido de pressões mecânicas para sua coluna
                    funcionar com máxima liberdade.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                {[
                  {
                    title: "Dores na Coluna Lombar e Cervical",
                    desc: "Alívio imediato de travamentos, rigidez no pescoço (torcicolo) e dores agudas na região lombar.",
                  },
                  {
                    title: "Descompressão do Nervo Ciático",
                    desc: "Redução da pressão sobre as raízes nervosas, cessando a irradiação de dor e formigamento para pernas e pés.",
                  },
                  {
                    title: "Cefaleia Tensional e Enxaqueca",
                    desc: "Diminuição das tensões musculares suboccipitais que disparam dores de cabeça e cansaço visual diário.",
                  },
                  {
                    title: "Alinhamento Postural Global",
                    desc: "Correção de assimetrias na pelve e nos ombros, distribuindo o peso corporal de forma equilibrada.",
                  },
                  {
                    title: "Recuperação de Mobilidade Articular",
                    desc: "Restauração do arco de movimento em vértebras bloqueadas, aumentando sua sensação de leveza.",
                  },
                  {
                    title: "Melhora da Qualidade do Sono",
                    desc: "Com o alívio das tensões acumuladas na coluna, seu corpo relaxa profundamente durante o descanso.",
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
                    href="https://wa.me/5553991669801?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta%20de%20Quiropraxia%20em%20Pelotas."
                    className="inline-flex items-center gap-2 border-none rounded-full cursor-pointer text-lg font-bold px-9 py-3.5 bg-(--color-emerald-800) text-white hover:bg-emerald-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    aria-label="Agendar atendimento de Quiropraxia em Pelotas pelo WhatsApp"
                  >
                    Agendar Quiropraxia
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
                    Por que Escolher a Reabilitare para Quiropraxia?
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Avaliação Biomecânica Rigorosa",
                    desc: "Analisamos exames de imagem e a postura do paciente antes de realizar qualquer manipulação articular.",
                  },
                  {
                    title: "Ajustes Confortáveis e Seguros",
                    desc: "Manobras de alta precisão que respeitam a biomecânica e o limite de conforto de cada paciente.",
                  },
                  {
                    title: "Integração Multidisciplinar",
                    desc: "Possibilidade de combinar a quiropraxia com Fisioterapia e Pilates para manter a coluna estável a longo prazo.",
                  },
                  {
                    title: "Ambiente Confortável no Areal",
                    desc: "Fácil estacionamento, atendimento pontual e instalações modernas na Av. Bento Gonçalves, 2146.",
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
                    Dúvidas Frequentes
                  </span>
                  <h2 className="text-3xl font-extrabold text-(--color-emerald-800)">
                    Perguntas Frequentes sobre Quiropraxia em Pelotas
                  </h2>
                </div>
              </ScrollReveal>
              <FaqAccordion items={quiropraxiaFaq} />
            </section>

            {/* Cross-link Section */}
            <section className="mb-12 rounded-2xl bg-emerald-50/60 border border-emerald-100 p-6 sm:p-8 text-center">
              <h2 className="text-xl font-extrabold text-emerald-950 mb-2">
                Conheça Também Nossas Outras Especialidades em Pelotas
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mb-5">
                Potencialize a saúde da sua coluna integrando o ajuste com{" "}
                <Link
                  href="/fisioterapia-pelotas"
                  className="text-emerald-800 font-bold underline hover:text-emerald-950 transition-colors"
                >
                  Fisioterapia em Pelotas
                </Link>{" "}
                e{" "}
                <Link
                  href="/pilates-pelotas"
                  className="text-emerald-800 font-bold underline hover:text-emerald-950 transition-colors"
                >
                  Estúdio de Pilates em Pelotas
                </Link>{" "}
                para resultados estáveis e duradouros.
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
