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
  title: "Pilates em Pelotas | Melhor Estúdio de Pilates",
  description:
    "Pilates em Pelotas com profissionais qualificados. Aulas personalizadas para melhorar postura, força, flexibilidade e bem-estar. Agende sua aula experimental!",
  keywords: [
    "pilates pelotas",
    "pilates em pelotas",
    "aulas de pilates pelotas",
    "pilates clínico pelotas",
    "estúdio de pilates pelotas",
    "pilates em pelotas rs",
    "pilates para coluna pelotas",
  ],
  alternates: {
    canonical: "/pilates-pelotas",
  },
  openGraph: {
    title: "Pilates em Pelotas | Clínica Reabilitare - Aulas Personalizadas",
    description:
      "Procurando pilates em Pelotas? A Clínica Reabilitare oferece aulas personalizadas com profissionais qualificados. Agende sua aula experimental!",
    url: "https://www.clinicareabilitare.com/pilates-pelotas",
    images: "/cover.png",
  },
  twitter: {
    title: "Pilates em Pelotas | Clínica Reabilitare - Aulas Personalizadas",
    description:
      "Procurando pilates em Pelotas? A Clínica Reabilitare oferece aulas personalizadas com profissionais qualificados. Agende sua aula experimental!",
    images: ["/cover.png"],
  },
};

export default function PilatesPage() {
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
                name: "Clínica Reabilitare - Pilates",
                description:
                  "Pilates em Pelotas com profissionais qualificados. Melhore postura, força, flexibilidade e bem-estar.",
                url: "https://www.clinicareabilitare.com/pilates-pelotas",
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
                    name: "Pilates é indicado para quem tem dor na coluna?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sim! O Pilates clínico orientado por profissional é excelente para fortalecer os músculos profundos e reduzir dores na coluna.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Preciso ter experiência em exercícios?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Não. Todas as aulas são adaptadas ao nível do aluno, do iniciante ao avançado.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Qual frequência é ideal?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "O ideal varia de acordo com os objetivos do aluno. Recomendamos avaliação inicial para definir a frequência ideal.",
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
        title={<>Pilates em <strong className="text-emerald-300 font-extrabold">Pelotas</strong></>}
        subtitle="O Melhor Estúdio de Pilates para sua postura, força, flexibilidade e bem-estar."
      />
      
      <div className="bg-white">
        <main className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Intro Section */}
            <ScrollReveal>
              <section className="prose prose-lg md:prose-xl prose-emerald max-w-none text-gray-600 leading-relaxed mb-16">
                <p>
                  Procurando <strong>pilates em Pelotas</strong>? A <strong>Clínica Reabilitare</strong> oferece as melhores <strong>aulas de pilates em Pelotas, RS</strong>. O Pilates é uma atividade física que fortalece o corpo, melhora postura, equilíbrio e flexibilidade.
                </p>
                <p>
                  Nosso <strong>estúdio de pilates em Pelotas</strong> é indicado para quem busca bem-estar, prevenção de lesões, condicionamento físico e alívio de dores na coluna. Contamos com profissionais especializados e equipamentos modernos.
                </p>
              </section>
            </ScrollReveal>

            {/* Benefits Section */}
            <section className="mb-16">
              <ScrollReveal>
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-extrabold text-(--color-emerald-800) mb-4">
                    Benefícios do Pilates na Reabilitare
                  </h2>
                  <p className="text-gray-600 text-lg">Seu corpo mais forte, flexível e sem dores.</p>
                </div>
              </ScrollReveal>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                {[
                  "Melhora postura e alinhamento corporal",
                  "Aumento de força, flexibilidade e mobilidade",
                  "Fortalecimento do core e prevenção de dores lombares",
                  "Maior equilíbrio, coordenação e consciência corporal",
                  "Ambiente acolhedor e equipamentos modernos"
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
                    href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20pilates."
                    className="inline-flex items-center gap-2 border-none rounded-full cursor-pointer text-lg font-bold px-9 py-3.5 bg-(--color-emerald-800) text-white hover:bg-emerald-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    aria-label="Agendar aula de Pilates pelo WhatsApp"
                  >
                    Agendar Pilates
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
                  { title: "Profissionais Qualificados", desc: "Equipe de fisioterapeutas experientes em Pilates Clínico." },
                  { title: "Atendimento Individualizado", desc: "Aulas focadas nas suas necessidades específicas de saúde e condicionamento." },
                  { title: "Equipamentos Modernos", desc: "Estúdio completo e ambiente acolhedor para o seu bem-estar." },
                  { title: "Foco em Resultados", desc: "Resultados reais para correção postural, aumento de força e bem-estar." },
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
                    Perguntas Frequentes sobre Pilates
                  </h2>
                </div>
              </ScrollReveal>
              <FaqAccordion 
                items={[
                  {
                    question: "Pilates é indicado para quem tem dor na coluna?",
                    answer: "Sim! O Pilates clínico orientado por profissional é excelente para fortalecer os músculos profundos e reduzir dores na coluna."
                  },
                  {
                    question: "Preciso ter experiência em exercícios?",
                    answer: "Não. Todas as aulas são adaptadas ao nível do aluno, do iniciante ao avançado."
                  },
                  {
                    question: "Qual frequência é ideal?",
                    answer: "O ideal varia de acordo com os objetivos do aluno. Recomendamos avaliação inicial para definir a frequência ideal de aulas por semana."
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
