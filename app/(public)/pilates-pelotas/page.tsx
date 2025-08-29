import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Location from "@/components/location";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pilates em Pelotas",
  description:
    "Pilates em Pelotas com profissionais qualificados. Melhore postura, força, flexibilidade e bem-estar.",
  alternates: {
    canonical: "/pilates-pelotas",
  },
  openGraph: {
    title: "Pilates em Pelotas | Clínica Reabilitare",
    description:
      "Aulas de Pilates em Pelotas para fortalecimento, flexibilidade, equilíbrio e consciência corporal.",
    url: "https://www.clinicareabilitare.com/pilates-pelotas",
    images: "/cover.png",
  },
  twitter: {
    title: "Pilates em Pelotas | Clínica Reabilitare",
    description:
      "Aulas de Pilates em Pelotas para fortalecimento, flexibilidade, equilíbrio e consciência corporal.",
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
                "@type": "ExerciseGym",
                name: "Clínica Reabilitare - Pilates",
                description:
                  "Pilates em Pelotas com profissionais qualificados. Melhore postura, força, flexibilidade e bem-estar.",
                url: "https://www.clinicareabilitare.com/pilates-pelotas",
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
      <div className="container mx-auto px-4 pt-25">
        <main className="pt-4 pb-12 md:pb-0">
          <section>
            <h1 className="text-3xl font-extrabold text-(--color-emerald-800) mb-6">
              Pilates em Pelotas: Força, Flexibilidade e Consciência Corporal
            </h1>
            <p className="text-gray-600 mb-4">
              O Pilates é uma atividade física que fortalece o corpo, melhora
              postura, equilíbrio e flexibilidade. Indicado para quem busca
              bem-estar, prevenção de lesões e condicionamento físico.
            </p>
          </section>

          <hr className="my-8 border-t border-gray-200" />

          <section>
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Benefícios do Pilates na Clínica Reabilitare
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Melhora postura e alinhamento corporal</li>
              <li>Aumento de força, flexibilidade e mobilidade</li>
              <li>Fortalecimento do core e prevenção de dores lombares</li>
              <li>Maior equilíbrio, coordenação e consciência corporal</li>
              <li>Ambiente acolhedor e equipamentos modernos</li>
            </ul>
            <a
              href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20pilates."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-none rounded-full cursor-pointer text-lg font-bold px-9 py-2.5 bg-(--color-emerald-800) text-white hover:bg-(--color-emerald-800)/90 mb-6"
            >
              Agendar Pilates
            </a>
          </section>

          <hr className="my-8 border-t border-gray-200" />

          <section>
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Por que Escolher a Clínica Reabilitare em Pelotas?
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Profissionais qualificados e experientes</li>
              <li>Atendimento individualizado e personalizado</li>
              <li>Equipamentos modernos e ambiente acolhedor</li>
              <li>Foco em resultados para postura, força e bem-estar</li>
              <li>Localização de fácil acesso no bairro Areal</li>
            </ul>
          </section>

          <hr className="my-8 border-t border-gray-200" />

          <section>
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Perguntas Frequentes (FAQ) sobre Pilates
            </h2>
            <article className="mb-4">
              <h3 className="text-lg font-semibold text-(--color-emerald-800) mb-2">
                Pilates é indicado para quem tem dor na coluna?
              </h3>
              <p className="text-gray-600">
                Sim! O Pilates clínico orientado por profissional é excelente
                para fortalecer os músculos profundos e reduzir dores na coluna.
              </p>
            </article>
            <article className="mb-4">
              <h3 className="text-lg font-semibold text-(--color-emerald-800) mb-2">
                Preciso ter experiência em exercícios?
              </h3>
              <p className="text-gray-600">
                Não. Todas as aulas são adaptadas ao nível do aluno, do
                iniciante ao avançado.
              </p>
            </article>
            <article className="mb-4">
              <h3 className="text-lg font-semibold text-(--color-emerald-800) mb-2">
                Qual frequência é ideal?
              </h3>
              <p className="text-gray-600">
                O ideal varia de acordo com os objetivos do aluno. Recomendamos
                avaliação inicial para definir a frequência ideal.
              </p>
            </article>
          </section>

          <hr className="my-8 border-t border-gray-200" />

          <Contact />
        </main>
      </div>
      <Location />
      <Footer />
    </div>
  );
}
