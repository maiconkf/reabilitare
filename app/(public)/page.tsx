import Agreements from "@/components/agreements";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import Ratings from "@/components/ratings";
import Services from "@/components/services";
import WaitlistBanner from "@/components/WaitlistBanner";
import FaqAccordion from "@/components/FaqAccordion";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const Location = dynamic(() => import("@/components/location"));

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const homeFaq = [
  {
    question: "Quais serviços a Clínica Reabilitare oferece em Pelotas?",
    answer:
      "Oferecemos atendimentos especializados de Fisioterapia (ortopédica, traumatológica, pós-operatória e alívio de dores), Pilates Clínico personalizado e Quiropraxia (ajustes vertebrais e descompressão articular).",
  },
  {
    question: "A Clínica Reabilitare atende por convênio em Pelotas?",
    answer:
      "Sim! Atendemos pelos convênios PrevPel, IBCM, ASPRA e ASSTBM, além de consultas e planos particulares com condições especiais. Você pode consultar a cobertura do seu plano diretamente pelo nosso WhatsApp.",
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
                "@type": ["MedicalClinic", "LocalBusiness"],
                medicalSpecialty: ["Physiotherapy", "Musculoskeletal"],
                "@id": "https://www.clinicareabilitare.com/#organization",
                name: "Clínica Reabilitare",
                alternateName: "Reabilitare Fisioterapia, Pilates e Quiropraxia em Pelotas",
                description:
                  "Clínica especializada em fisioterapia, pilates e quiropraxia em Pelotas (Bairro Areal). Tratamentos personalizados para dores na coluna, hérnia de disco, lesões, reabilitação pós-operatória, ajuste vertebral e bem-estar.",
                url: "https://www.clinicareabilitare.com",
                logo: "https://www.clinicareabilitare.com/logo-reabilitare.webp",
                image: [
                  "https://www.clinicareabilitare.com/foto-clinica.webp",
                  "https://www.clinicareabilitare.com/kauane-ramos-fisioterapia-pelotas.webp",
                  "https://www.clinicareabilitare.com/cover.png",
                ],
                telephone: "+55-53-99166-9801",
                email: "kauanerfisio@gmail.com",
                priceRange: "$$",
                currenciesAccepted: "BRL",
                paymentAccepted:
                  "PIX, Cartão de Crédito, Cartão de Débito, Dinheiro, Convênios (Prevpel, IBCM, ASPRA, ASSTBM)",
                hasMap: "https://maps.app.goo.gl/S4y6tkkLfFWxKYir8",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Av. Bento Gonçalves, 2146",
                  addressLocality: "Pelotas",
                  addressRegion: "RS",
                  postalCode: "96015-140",
                  addressCountry: "BR",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: -31.7649,
                  longitude: -52.3371,
                },
                areaServed: {
                  "@type": "City",
                  name: "Pelotas",
                  "@id": "https://www.wikidata.org/wiki/Q170851",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5.0",
                  bestRating: "5",
                  worstRating: "1",
                  ratingCount: "48",
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Serviços de Fisioterapia, Pilates e Quiropraxia em Pelotas",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "MedicalTherapy",
                        name: "Fisioterapia Especializada em Pelotas",
                        url: "https://www.clinicareabilitare.com/fisioterapia-pelotas",
                        description:
                          "Tratamentos de fisioterapia ortopédica, traumatológica, reabilitação pós-operatória, alívio de dores e correção postural em Pelotas RS",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Estúdio de Pilates Clínico em Pelotas",
                        url: "https://www.clinicareabilitare.com/pilates-pelotas",
                        description:
                          "Aulas de pilates clínico personalizadas para fortalecimento do core, coluna, flexibilidade e consciência corporal em Pelotas RS",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "MedicalTherapy",
                        name: "Quiropraxia e Ajuste Vertebral em Pelotas",
                        url: "https://www.clinicareabilitare.com/quiropraxia-pelotas",
                        description:
                          "Ajustes articulares e vertebrais para alinhamento da coluna, tratamento de hérnia de disco, nervo ciático e alívio imediato de dores em Pelotas RS",
                      },
                    },
                  ],
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+55-53-99166-9801",
                  contactType: "customer service",
                  areaServed: "BR",
                  availableLanguage: "Portuguese",
                },
                employee: {
                  "@type": "Person",
                  name: "Kauane Ramos",
                  jobTitle: "Fisioterapeuta Responsável",
                  image:
                    "https://www.clinicareabilitare.com/kauane-ramos-fisioterapia-pelotas.webp",
                  hasCredential: {
                    "@type": "EducationalOccupationalCredential",
                    credentialCategory: "CREFITO-5: 375851-F",
                  },
                },
                sameAs: ["https://www.instagram.com/clinicareabilitare.fisio"],
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                    ],
                    opens: "08:00",
                    closes: "20:00",
                  },
                ],
              },
              {
                "@type": "WebSite",
                "@id": "https://www.clinicareabilitare.com/#website",
                url: "https://www.clinicareabilitare.com",
                name: "Clínica Reabilitare - Fisioterapia, Pilates e Quiropraxia em Pelotas",
                inLanguage: "pt-BR",
                description:
                  "Site oficial da Clínica Reabilitare, especializada em fisioterapia, pilates e quiropraxia no Bairro Areal em Pelotas RS",
                publisher: {
                  "@id": "https://www.clinicareabilitare.com/#organization",
                },
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
                Respostas rápidas para as principais dúvidas sobre nossos atendimentos em Pelotas.
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
