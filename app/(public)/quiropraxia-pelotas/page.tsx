import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Ratings from "@/components/ratings";
import WhatsAppButton from "@/components/WhatsAppButton";
import InternalHero from "@/components/InternalHero";
import FaqAccordion from "@/components/FaqAccordion";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const Location = dynamic(() => import("@/components/location"));

export const metadata: Metadata = {
  title: "Quiropraxia em Pelotas | Ajuste Vertebral e Alívio de Dores",
  description:
    "Quiropraxia em Pelotas com profissionais qualificados. Tratamentos para dores na coluna, hérnia de disco, nervo ciático e postura. Agende sua consulta!",
  keywords: [
    "quiropraxia pelotas",
    "quiropraxista pelotas",
    "ajuste vertebral pelotas",
    "tratamento de coluna pelotas",
    "alinhamento vertebral pelotas",
    "quiropraxia em pelotas rs",
    "dor na coluna pelotas",
  ],
  alternates: {
    canonical: "/quiropraxia-pelotas",
  },
  openGraph: {
    title: "Quiropraxia em Pelotas | Clínica Reabilitare - Ajuste Vertebral",
    description:
      "Procurando quiropraxia em Pelotas? A Clínica Reabilitare oferece atendimentos especializados para alinhamento da coluna e alívio de dores. Agende agora!",
    url: "https://www.clinicareabilitare.com/quiropraxia-pelotas",
    images: "/cover.png",
  },
  twitter: {
    title: "Quiropraxia em Pelotas | Clínica Reabilitare - Ajuste Vertebral",
    description:
      "Procurando quiropraxia em Pelotas? A Clínica Reabilitare oferece atendimentos especializados para alinhamento da coluna e alívio de dores. Agende agora!",
    images: ["/cover.png"],
  },
};

export default function QuiropraxiaPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalClinic",
                medicalSpecialty: "Physiotherapy",
                name: "Clínica Reabilitare - Quiropraxia",
                description:
                  "Quiropraxia em Pelotas com profissionais qualificados. Tratamento de dores na coluna, ajustes articulares e alinhamento vertebral.",
                url: "https://www.clinicareabilitare.com/quiropraxia-pelotas",
                logo: "https://www.clinicareabilitare.com/logo-reabilitare.jpg",
                image: "https://www.clinicareabilitare.com/foto-clinica.jpg",
                telephone: "+5553991669801",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Av. Bento Gonçalves, 2146",
                  addressLocality: "Pelotas",
                  addressRegion: "RS",
                  postalCode: "96015-140",
                  addressCountry: "BR",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+5553991669801",
                  contactType: "customer service",
                  areaServed: "BR",
                  availableLanguage: "Portuguese",
                },
                employee: {
                  "@type": "Person",
                  name: "Kauane Ramos",
                  jobTitle: "Fisioterapeuta",
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
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Quiropraxia dói ou é perigosa?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Não! Os ajustes quiropráticos são indolores, precisos e extremamente seguros quando realizados por profissionais capacitados após uma criteriosa avaliação.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Quantas sessões de quiropraxia são necessárias?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Muitos pacientes relatam alívio logo no primeiro atendimento. O plano ideal é definido de forma individualizada após a avaliação inicial.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Quais problemas a quiropraxia trata?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "A quiropraxia é indicada para dores lombares e cervicais, hérnia de disco, nervo ciático, tensões musculares, dores de cabeça tensionais e desequilíbrios articulares.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
      <Header />
      
      <InternalHero 
        title={<>Quiropraxia em <strong className="text-emerald-300 font-extrabold">Pelotas</strong></>}
        subtitle="Ajustes Vertebrais e Articulares para restauração do alinhamento corporal e alívio imediato de dores."
      />
      
      <div className="bg-white">
        <main className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Intro Section */}
            <ScrollReveal>
              <section className="prose prose-lg md:prose-xl prose-emerald max-w-none text-gray-600 leading-relaxed mb-16">
                <p>
                  Procurando <strong>quiropraxia em Pelotas</strong>? A <strong>Clínica Reabilitare</strong> oferece atendimento especializado em <strong>ajustes vertebrais e articulares</strong> para restaurar o alinhamento natural do corpo e aliviar dores na coluna.
                </p>
                <p>
                  Localizada no bairro Areal, nossa clínica de <strong>quiropraxia em Pelotas, RS</strong> combina técnicas modernas e seguras para devolver sua mobilidade, aliviar tensões acumuladas e proporcionar bem-estar contínuo.
                </p>
              </section>
            </ScrollReveal>

            {/* Benefits Section */}
            <section className="mb-16">
              <ScrollReveal>
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-extrabold text-(--color-emerald-800) mb-4">
                    Benefícios da Quiropraxia
                  </h2>
                  <p className="text-gray-600 text-lg">Alívio imediato e saúde para sua coluna vertebral.</p>
                </div>
              </ScrollReveal>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                {[
                  "Alívio rápido de dores nas costas, pescoço e ombros",
                  "Ajustes articulares para alinhamento correto da coluna",
                  "Tratamento complementar para hérnias de disco e ciatalgia",
                  "Redução de tensões musculares e dores de cabeça tensionais",
                  "Melhora da mobilidade, postura e qualidade de vida"
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 100}>
                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-5 flex items-start gap-3 h-full hover:bg-emerald-50 hover:shadow-md transition-all">
                      <span className="text-emerald-500 mt-0.5">
                        <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              
              <ScrollReveal delay={200}>
                <div className="text-center">
                  <WhatsAppButton
                    href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20quiropraxia."
                    className="inline-flex items-center gap-2 border-none rounded-full cursor-pointer text-lg font-bold px-9 py-3.5 bg-(--color-emerald-800) text-white hover:bg-emerald-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    aria-label="Agendar atendimento de Quiropraxia pelo WhatsApp"
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
                    Por que Escolher a Clínica Reabilitare?
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Profissionais Especializados", desc: "Equipe com alta capacitação em técnicas de ajustes articulares." },
                  { title: "Avaliação Completa", desc: "Realizamos uma avaliação funcional detalhada antes de qualquer ajuste." },
                  { title: "Técnicas Seguras", desc: "Ajustes indolores e adaptados para cada idade e condição física." },
                  { title: "Infraestrutura Moderna", desc: "Clínica completa e equipada no bairro Areal para seu conforto." },
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 100}>
                    <div className="bg-white rounded-2xl p-6 shadow-xs border border-gray-100 h-full">
                      <h3 className="font-bold text-lg text-(--color-emerald-800) mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <ScrollReveal>
                <div className="text-center mb-4">
                  <h2 className="text-3xl font-extrabold text-(--color-emerald-800)">
                    Perguntas Frequentes sobre Quiropraxia
                  </h2>
                </div>
              </ScrollReveal>
              <FaqAccordion 
                items={[
                  {
                    question: "Quiropraxia dói ou é perigosa?",
                    answer: "Não! Os ajustes quiropráticos são indolores, precisos e extremamente seguros quando realizados por profissionais capacitados após uma criteriosa avaliação inicial."
                  },
                  {
                    question: "Quantas sessões de quiropraxia são necessárias?",
                    answer: "Muitos pacientes relatam alívio imediato logo no primeiro atendimento. O plano ideal a longo prazo é definido de forma individualizada de acordo com o seu caso."
                  },
                  {
                    question: "Quais problemas a quiropraxia trata?",
                    answer: "É extremamente indicada para dores lombares e cervicais, hérnia de disco, nervo ciático, tensões musculares agudas, dores de cabeça tensionais e desequilíbrios articulares."
                  }
                ]} 
              />
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
