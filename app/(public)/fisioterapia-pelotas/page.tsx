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
  title: "Fisioterapia em Pelotas | Melhor Clínica de Fisioterapia",
  description:
    "Fisioterapia em Pelotas com fisioterapeutas especializados. Tratamentos para dores, lesões, reabilitação pós-operatória e correção postural. Agende sua avaliação!",
  keywords: [
    "fisioterapia pelotas",
    "fisioterapeuta pelotas",
    "clínica de fisioterapia pelotas",
    "fisioterapia em pelotas rs",
    "tratamento de dor pelotas",
    "reabilitação pelotas",
    "fisioterapia ortopédica pelotas",
  ],
  alternates: {
    canonical: "/fisioterapia-pelotas",
  },
  openGraph: {
    title: "Fisioterapia em Pelotas | Clínica Reabilitare - Especialistas",
    description:
      "Procurando fisioterapia em Pelotas? A Clínica Reabilitare oferece tratamentos personalizados para dores, lesões e reabilitação. Agende agora!",
    url: "https://www.clinicareabilitare.com/fisioterapia-pelotas",
    images: "/cover.png",
  },
  twitter: {
    title: "Fisioterapia em Pelotas | Clínica Reabilitare - Especialistas",
    description:
      "Procurando fisioterapia em Pelotas? A Clínica Reabilitare oferece tratamentos personalizados para dores, lesões e reabilitação. Agende agora!",
    images: ["/cover.png"],
  },
};

export default function FisioterapiaPage() {
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
                name: "Clínica Reabilitare",
                description:
                  "Fisioterapia especializada em Pelotas com tratamentos para dores, lesões, reabilitação pós-operatória e correção postural.",
                url: "https://www.clinicareabilitare.com/fisioterapia-pelotas",
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
                    name: "Preciso de encaminhamento médico para fisioterapia?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Não é obrigatório, mas pode ser útil dependendo do caso. Nossos fisioterapeutas avaliam cada situação individualmente.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Quantas sessões são necessárias?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "O número de sessões varia conforme a condição de cada paciente. Após a avaliação, definimos um plano personalizado.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "O plano de saúde cobre as sessões?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Trabalhamos com diversas modalidades de atendimento. Entre em contato para verificar a cobertura do seu plano.",
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
        title={<>Fisioterapia em <strong className="text-emerald-300 font-extrabold">Pelotas</strong></>}
        subtitle="A Melhor Clínica de Reabilitação para dores, lesões, recuperação pós-operatória e correção postural."
      />

      <div className="bg-white">
        <main className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            {/* Intro Section */}
            <ScrollReveal>
              <section className="prose prose-lg md:prose-xl prose-emerald max-w-none text-gray-600 leading-relaxed mb-16">
                <p>
                  Procurando <strong>fisioterapia em Pelotas</strong>? A <strong>Clínica Reabilitare</strong> é referência em tratamentos fisioterapêuticos na cidade. Nossa equipe de <strong>fisioterapeutas altamente qualificados</strong> oferece tratamentos personalizados para dores, lesões, reabilitação pós-operatória e correção postural.
                </p>
                <p>
                  Localizada no bairro Areal, nossa clínica de <strong>fisioterapia em Pelotas, RS</strong> atende pacientes com atenção individual e um plano de cuidado adaptado às necessidades específicas de cada um.
                </p>
              </section>
            </ScrollReveal>

            {/* Benefits Section */}
            <section className="mb-16">
              <ScrollReveal>
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-extrabold text-(--color-emerald-800) mb-4">
                    Benefícios da Fisioterapia na Reabilitare
                  </h2>
                  <p className="text-gray-600 text-lg">Resultados que transformam a sua qualidade de vida.</p>
                </div>
              </ScrollReveal>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                {[
                  "Tratamento de lesões musculares, articulares e ligamentares",
                  "Recuperação pós-operatória com suporte especializado",
                  "Correção postural e prevenção de dores crônicas",
                  "Alívio de dores agudas e crônicas de forma eficaz",
                  "Plano de cuidado individualizado e acompanhamento contínuo"
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
                    href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20fisioterapia."
                    className="inline-flex items-center gap-2 border-none rounded-full cursor-pointer text-lg font-bold px-9 py-3.5 bg-(--color-emerald-800) text-white hover:bg-emerald-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    aria-label="Agendar avaliação de Fisioterapia pelo WhatsApp"
                  >
                    Agendar Fisioterapia
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
                    Por que Escolher Nossa Clínica em Pelotas?
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Atendimento Personalizado", desc: "Foco total na sua recuperação com acompanhamento individualizado." },
                  { title: "Profissionais Qualificados", desc: "Equipe experiente e em constante atualização científica." },
                  { title: "Infraestrutura Moderna", desc: "Ambiente acolhedor e equipamentos de ponta para sua reabilitação." },
                  { title: "Foco na Causa", desc: "Tratamos a origem da dor e não apenas os sintomas superficiais." },
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
                    Perguntas Frequentes sobre Fisioterapia
                  </h2>
                </div>
              </ScrollReveal>
              <FaqAccordion 
                items={[
                  {
                    question: "Preciso de encaminhamento médico para fisioterapia?",
                    answer: "Não é obrigatório, mas pode ser útil dependendo do caso. Nossos fisioterapeutas avaliam cada situação individualmente em sua primeira consulta."
                  },
                  {
                    question: "Quantas sessões são necessárias?",
                    answer: "O número de sessões varia conforme a condição de cada paciente. Após a avaliação inicial e o diagnóstico fisioterapêutico, definimos um plano personalizado."
                  },
                  {
                    question: "O plano de saúde cobre as sessões?",
                    answer: "Trabalhamos com diversas modalidades de atendimento e convênios parceiros. Entre em contato com nossa equipe para verificar a cobertura exata do seu plano."
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
