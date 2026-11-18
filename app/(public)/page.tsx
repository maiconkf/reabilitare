import Agreements from "@/components/agreements";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import Services from "@/components/services";
import WaitlistBanner from "@/components/WaitlistBanner";
import FaqAccordion from "@/components/FaqAccordion";
import ScrollReveal from "@/components/ScrollReveal";
import {
  organizationSchema,
  SITE_URL,
  specialistSchema,
  websiteSchema,
} from "@/lib/schema";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const Ratings = dynamic(() => import("@/components/ratings"));
const Location = dynamic(() => import("@/components/location"));

export const metadata: Metadata = {
  title: {
    absolute: "Fisioterapia, Pilates e Quiropraxia em Pelotas | Reabilitare",
  },
  description:
    "Clínica Reabilitare em Pelotas (Areal): Especialistas em Fisioterapia, Pilates Clínico e Quiropraxia. Atendimento individualizado para dores na coluna, lesões e postura. Agende!",
  alternates: {
    canonical: "/",
  },
};

const homeFaq = [
  {
    question: "Quais serviços a Clínica Reabilitare oferece em Pelotas?",
    answer:
      "Oferecemos atendimentos especializados de Fisioterapia (ortopédica, traumatológica, pós-operatória e alívio de dores), Pilates Clínico personalizado em aparelhos e Quiropraxia (ajustes vertebrais e descompressão articular).",
  },
  {
    question: "A Clínica Reabilitare atende por convênio em Pelotas?",
    answer:
      "Sim! Atendemos pelos convênios PrevPel, IBCM, ASPRA, ASSTBM e Cabergs, além de consultas e planos particulares com condições especiais. Você pode consultar a cobertura do seu plano diretamente pelo nosso WhatsApp.",
  },
  {
    question:
      "Preciso de pedido ou encaminhamento médico para iniciar Fisioterapia, Pilates ou Quiropraxia?",
    answer:
      "Não é obrigatório encaminhamento prévio. Nossos profissionais realizam uma avaliação clínica e biomecânica completa no primeiro atendimento para traçar o melhor plano para o seu caso.",
  },
  {
    question:
      "Onde fica a Clínica Reabilitare em Pelotas e qual o horário de funcionamento?",
    answer:
      "Estamos localizados na Av. Bento Gonçalves, 2146, no bairro Areal em Pelotas/RS, em ambiente moderno, climatizado e com estacionamento facilitado. Funcionamos de segunda a sexta-feira, das 08h às 20h, com horário agendado.",
  },
  {
    question: "Como funciona a consulta de Quiropraxia e quem pode fazer?",
    answer:
      "A consulta inclui anamnese detalhada, testes ortopédicos e palpatórios da coluna e articulações, seguidos de ajustes específicos e indolores para restaurar o alinhamento, aliviar dores e melhorar a mobilidade.",
  },
  {
    question: "Como agendar uma avaliação na clínica?",
    answer:
      "O agendamento é simples e rápido: basta entrar em contato pelo WhatsApp (53) 99166-9801 ou clicar em qualquer botão de agendamento em nosso site para escolher o melhor dia e horário.",
  },
];

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                ...organizationSchema,
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Serviços de Fisioterapia, Pilates e Quiropraxia em Pelotas",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "MedicalTherapy",
                        "@id": `${SITE_URL}/fisioterapia-pelotas#service`,
                        name: "Fisioterapia Especializada em Pelotas",
                        url: `${SITE_URL}/fisioterapia-pelotas`,
                        description:
                          "Tratamentos de fisioterapia ortopédica, traumatológica, reabilitação pós-operatória, alívio de dores e correção postural em Pelotas RS",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        "@id": `${SITE_URL}/pilates-pelotas#service`,
                        name: "Estúdio de Pilates Clínico em Pelotas",
                        url: `${SITE_URL}/pilates-pelotas`,
                        description:
                          "Aulas de pilates clínico em aparelhos orientadas por fisioterapeutas para coluna, core, flexibilidade e postura em Pelotas RS",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "MedicalTherapy",
                        "@id": `${SITE_URL}/quiropraxia-pelotas#service`,
                        name: "Quiropraxia e Ajuste Vertebral em Pelotas",
                        url: `${SITE_URL}/quiropraxia-pelotas`,
                        description:
                          "Ajustes articulares e vertebrais para alinhamento da coluna, tratamento de hérnia de disco, nervo ciático e alívio imediato de dores em Pelotas RS",
                      },
                    },
                  ],
                },
              },
              specialistSchema,
              websiteSchema,
              {
                "@type": "MedicalWebPage",
                "@id": `${SITE_URL}/#webpage`,
                url: SITE_URL,
                name: "Fisioterapia, Pilates e Quiropraxia em Pelotas | Clínica Reabilitare",
                description:
                  "Clínica Reabilitare em Pelotas (Areal): Especialistas em Fisioterapia, Pilates Clínico e Quiropraxia. Atendimento individualizado para dores na coluna, lesões e postura.",
                inLanguage: "pt-BR",
                isPartOf: {
                  "@id": `${SITE_URL}/#website`,
                },
                about: {
                  "@id": `${SITE_URL}/#organization`,
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
                "@type": "FAQPage",
                mainEntity: homeFaq.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />
      <div className="z-10 relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 rounded-b-[36px] sm:rounded-b-[48px] overflow-hidden shadow-2xl shadow-emerald-950/15">
        <Header />
        <Main />
      </div>
      <WaitlistBanner />
      <Services />
      <Agreements />
      <Ratings />
      <section id="duvidas" className="py-20 sm:py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 border border-emerald-200/80 px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                Tire Suas Dúvidas
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Perguntas Frequentes
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                Respostas rápidas para as principais dúvidas sobre nossos
                atendimentos em Pelotas.
              </p>
            </div>
          </ScrollReveal>
          <FaqAccordion items={homeFaq} />
        </div>
      </section>
      <Location />
      <Footer />
    </div>
  );
}
