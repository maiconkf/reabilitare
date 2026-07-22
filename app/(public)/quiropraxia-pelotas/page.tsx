import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Ratings from "@/components/ratings";
import WhatsAppButton from "@/components/WhatsAppButton";
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
      <div className="container mx-auto px-4 pt-25">
        <main className="pt-4 pb-12 md:pb-0">
          <section>
            <h1 className="text-3xl font-extrabold text-(--color-emerald-800) mb-6">
              Quiropraxia em Pelotas: Ajuste Vertebral e Alívio de Dores
            </h1>
            <p className="text-gray-600 mb-4">
              Procurando <strong>quiropraxia em Pelotas</strong>? A{" "}
              <strong>Clínica Reabilitare</strong> oferece atendimento especializado
              em <strong>ajustes vertebrais e articulares</strong> para restaurar o
              alinhamento natural do corpo e aliviar dores na coluna.
            </p>
            <p className="text-gray-600 mb-4">
              Localizada no bairro Areal, nossa clínica de{" "}
              <strong>quiropraxia em Pelotas, RS</strong> combina técnicas modernas e
              seguras para devolver sua mobilidade, aliviar tensões acumuladas e
              proporcionar bem-estar contínuo.
            </p>
          </section>

          <hr className="my-8 border-t border-gray-200" />

          <section>
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Benefícios da Quiropraxia na Clínica Reabilitare
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Alívio rápido de dores nas costas, pescoço e ombros</li>
              <li>Ajustes articulares para alinhamento correto da coluna</li>
              <li>Tratamento complementar para hérnias de disco e ciatalgia</li>
              <li>Redução de tensões musculares e dores de cabeça tensionais</li>
              <li>Melhora da mobilidade, postura e qualidade de vida</li>
            </ul>
            <WhatsAppButton
              href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20quiropraxia."
              className="inline-block border-none rounded-full cursor-pointer text-lg font-bold px-9 py-2.5 bg-(--color-emerald-800) text-white hover:bg-(--color-emerald-800)/90 mb-6"
              aria-label="Agendar atendimento de Quiropraxia pelo WhatsApp"
            >
              Agendar Quiropraxia
            </WhatsAppButton>
          </section>

          <hr className="my-8 border-t border-gray-200" />

          <section>
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Por que Escolher a Clínica Reabilitare em Pelotas?
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Profissionais altamente capacitados e especializados</li>
              <li>Avaliação postural e funcional completa antes do tratamento</li>
              <li>Técnicas seguras, indolores e adaptadas a cada paciente</li>
              <li>Ambiente acolhedor e infraestrutura moderna</li>
              <li>Fácil acesso no bairro Areal em Pelotas</li>
            </ul>
          </section>

          <hr className="my-8 border-t border-gray-200" />

          <section>
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Perguntas Frequentes (FAQ) sobre Quiropraxia
            </h2>
            <article className="mb-4">
              <h3 className="text-lg font-semibold text-(--color-emerald-800) mb-2">
                Quiropraxia dói ou é perigosa?
              </h3>
              <p className="text-gray-600">
                Não! Os ajustes quiropráticos são indolores, precisos e extremamente
                seguros quando realizados por profissionais capacitados após uma
                criteriosa avaliação.
              </p>
            </article>
            <article className="mb-4">
              <h3 className="text-lg font-semibold text-(--color-emerald-800) mb-2">
                Quantas sessões de quiropraxia são necessárias?
              </h3>
              <p className="text-gray-600">
                Muitos pacientes relatam alívio logo no primeiro atendimento. O
                plano ideal é definido de forma individualizada após a avaliação inicial.
              </p>
            </article>
            <article className="mb-4">
              <h3 className="text-lg font-semibold text-(--color-emerald-800) mb-2">
                Quais problemas a quiropraxia trata?
              </h3>
              <p className="text-gray-600">
                A quiropraxia é indicada para dores lombares e cervicais, hérnia de
                disco, nervo ciático, tensões musculares, dores de cabeça tensionais
                e desequilíbrios articulares.
              </p>
            </article>
          </section>

          <hr className="my-8 border-t border-gray-200" />

          <Contact />
        </main>
      </div>
      <Ratings />
      <Location />
      <Footer />
    </div>
  );
}
