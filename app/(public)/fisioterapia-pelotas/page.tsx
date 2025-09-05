import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Location from "@/components/location";
import Ratings from "@/components/ratings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fisioterapia em Pelotas",
  description:
    "Fisioterapia especializada em Pelotas. Tratamentos para dores, lesões, reabilitação pós-operatória e correção postural.",
  alternates: {
    canonical: "/fisioterapia-pelotas",
  },
  openGraph: {
    title: "Fisioterapia em Pelotas | Clínica Reabilitare",
    description:
      "Equipe de fisioterapeutas qualificados oferecendo reabilitação, alívio de dores e tratamentos personalizados em Pelotas.",
    url: "https://www.clinicareabilitare.com/fisioterapia-pelotas",
    images: "/cover.png",
  },
  twitter: {
    title: "Fisioterapia em Pelotas | Clínica Reabilitare",
    description:
      "Equipe de fisioterapeutas qualificados oferecendo reabilitação, alívio de dores e tratamentos personalizados em Pelotas.",
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
                "@type": "Physiotherapy",
                name: "Clínica Reabilitare",
                description:
                  "Fisioterapia especializada em Pelotas com tratamentos para dores, lesões, reabilitação pós-operatória e correção postural.",
                url: "https://www.clinicareabilitare.com/fisioterapia-pelotas",
                logo: "https://www.clinicareabilitare.com/logo-reabilitare.jpg",
                image: "https://www.clinicareabilitare.com/foto-clinica.jpg",
                telephone: "+5553991669801",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Rua Dr. Vítor Russomano, 142",
                  addressLocality: "Pelotas",
                  addressRegion: "RS",
                  postalCode: "96077-620",
                  addressCountry: "BR",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+5553991669801",
                  contactType: "customer service",
                  areaServed: "BR",
                  availableLanguage: "Portuguese",
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
      <div className="container mx-auto px-4 pt-25">
        <main className="pt-4 pb-12 md:pb-0">
          <section>
            <h1 className="text-3xl font-extrabold text-(--color-emerald-800) mb-6">
              Fisioterapia em Pelotas: Reabilitação e Cuidado Especializado
            </h1>
            <p className="text-gray-600 mb-4">
              Nossa equipe de fisioterapeutas altamente qualificados oferece
              tratamentos personalizados para dores, lesões, reabilitação
              pós-operatória e correção postural. Cada paciente recebe atenção
              individual e um plano de cuidado adaptado às suas necessidades.
            </p>
          </section>

          <hr className="my-8 border-t border-gray-200" />

          <section>
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Benefícios da Fisioterapia na Clínica Reabilitare
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Tratamento de lesões musculares, articulares e ligamentares
              </li>
              <li>Recuperação pós-operatória com suporte especializado</li>
              <li>Correção postural e prevenção de dores crônicas</li>
              <li>Alívio de dores agudas e crônicas de forma eficaz</li>
              <li>
                Plano de cuidado individualizado e acompanhamento contínuo
              </li>
            </ul>
            <a
              href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20fisioterapia."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-none rounded-full cursor-pointer text-lg font-bold px-9 py-2.5 bg-(--color-emerald-800) text-white hover:bg-(--color-emerald-800)/90 mb-6"
            >
              Agendar Fisioterapia
            </a>
          </section>

          <hr className="my-8 border-t border-gray-200" />

          <section>
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Por que Escolher a Clínica Reabilitare em Pelotas?
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Atendimento personalizado e individualizado</li>
              <li>Profissionais altamente qualificados e experientes</li>
              <li>Infraestrutura moderna e ambiente acolhedor</li>
              <li>Foco na causa da dor, não apenas nos sintomas</li>
              <li>Localização de fácil acesso no bairro Areal</li>
            </ul>
          </section>

          <hr className="my-8 border-t border-gray-200" />

          <section>
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Perguntas Frequentes (FAQ) sobre Fisioterapia
            </h2>
            <article className="mb-4">
              <h3 className="text-lg font-semibold text-(--color-emerald-800) mb-2">
                Preciso de encaminhamento médico para fisioterapia?
              </h3>
              <p className="text-gray-600">
                Não é obrigatório, mas pode ser útil dependendo do caso. Nossos
                fisioterapeutas avaliam cada situação individualmente.
              </p>
            </article>
            <article className="mb-4">
              <h3 className="text-lg font-semibold text-(--color-emerald-800) mb-2">
                Quantas sessões são necessárias?
              </h3>
              <p className="text-gray-600">
                O número de sessões varia conforme a condição de cada paciente.
                Após a avaliação, definimos um plano personalizado.
              </p>
            </article>
            <article className="mb-4">
              <h3 className="text-lg font-semibold text-(--color-emerald-800) mb-2">
                O plano de saúde cobre as sessões?
              </h3>
              <p className="text-gray-600">
                Trabalhamos com diversas modalidades de atendimento. Entre em
                contato para verificar a cobertura do seu plano.
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
