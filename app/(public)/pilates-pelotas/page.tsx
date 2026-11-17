import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Ratings from "@/components/ratings";
import WhatsAppButton from "@/components/WhatsAppButton";
import InternalHero from "@/components/InternalHero";
import FaqAccordion from "@/components/FaqAccordion";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";

const Location = dynamic(() => import("@/components/location"));

export const metadata: Metadata = {
  title: {
    absolute: "Pilates em Pelotas | Estúdio de Pilates Clínico - Reabilitare",
  },
  description:
    "Procurando pilates em Pelotas? Conheça o estúdio de Pilates Clínico da Clínica Reabilitare (Areal). Aulas completas em aparelhos guiadas por fisioterapeutas para coluna, postura e força. Agende!",
  keywords: [
    "pilates pelotas",
    "pilates em pelotas",
    "estúdio de pilates pelotas",
    "aulas de pilates pelotas",
    "pilates clínico pelotas",
    "pilates aparelhos pelotas",
    "pilates reformer pelotas",
    "pilates cadillac pelotas",
    "pilates para coluna pelotas",
    "pilates para hérnia de disco pelotas",
    "pilates para dor lombar pelotas",
    "pilates terceira idade pelotas",
    "pilates gestantes pelotas",
    "pilates fisioterapia pelotas",
    "pilates bairro areal pelotas",
  ],
  alternates: {
    canonical: "/pilates-pelotas",
  },
  openGraph: {
    title: "Pilates em Pelotas | Estúdio de Pilates Clínico - Reabilitare",
    description:
      "Procurando pilates em Pelotas? Conheça o estúdio de Pilates Clínico da Clínica Reabilitare (Areal). Aulas em aparelhos guiadas por fisioterapeutas. Agende sua aula!",
    url: "https://www.clinicareabilitare.com/pilates-pelotas",
    type: "website",
    locale: "pt_BR",
    siteName: "Clínica Reabilitare",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Estúdio de Pilates Clínico em Pelotas - Clínica Reabilitare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates em Pelotas | Estúdio de Pilates Clínico - Reabilitare",
    description:
      "Aulas de Pilates com fisioterapeutas em estúdio completo no Bairro Areal em Pelotas. Fortalecimento, coluna e postura.",
    images: ["/cover.png"],
  },
};

const pilatesFaq = [
  {
    question:
      "Quem tem hérnia de disco, dor na coluna ou no ciático pode fazer Pilates?",
    answer:
      "Sim, é altamente recomendado! O Pilates Clínico ministrado por fisioterapeutas é uma das abordagens mais eficazes para descomprimir os discos intervertebrais, fortalecer a musculatura profunda estabilizadora (core) e eliminar a sobrecarga na coluna lombar e cervical.",
  },
  {
    question:
      "Qual a diferença entre Pilates Clínico com Fisioterapeuta e Pilates comum?",
    answer:
      "No Pilates Clínico da Reabilitare, as aulas são conduzidas por profissionais de Fisioterapia que conhecem a biomecânica corporal, anatomia e patologias. Cada exercício é adaptado às suas limitações e objetivos, prevenindo lesões e tratando as causas da dor com total segurança.",
  },
  {
    question: "As aulas de Pilates são em aparelhos ou no solo?",
    answer:
      "Nosso estúdio em Pelotas conta com a linha completa de aparelhos tradicionais do Método Pilates — Reformer, Cadillac, Wunda Chair e Ladder Barrel —, além de acessórios para exercícios de solo (Mat Pilates). A combinação de molas e resistências permite desde exercícios suaves de reabilitação até desafios avançados de força.",
  },
  {
    question:
      "Quantas vezes por semana devo fazer Pilates em Pelotas para ver resultados?",
    answer:
      "A frequência mais comum e eficaz é de 2 a 3 vezes por semana. Já nas primeiras semanas é possível notar alívio expressivo de dores, melhora na postura diária, aumento da flexibilidade e maior sensação de disposição e bem-estar corporal.",
  },
  {
    question:
      "Como agendar uma avaliação no estúdio de Pilates da Clínica Reabilitare?",
    answer:
      "É muito fácil! Basta entrar em contato com nossa recepção pelo WhatsApp (53) 99166-9801. Agendamos uma avaliação inicial para conhecer suas queixas, necessidades e histórico de saúde, definindo a turma e o plano de aulas ideal para você.",
  },
];

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
                "@type": ["MedicalClinic", "LocalBusiness"],
                medicalSpecialty: "Physiotherapy",
                "@id": "https://www.clinicareabilitare.com/#organization",
                name: "Clínica Reabilitare - Estúdio de Pilates em Pelotas",
                alternateName: "Pilates em Pelotas - Reabilitare",
                description:
                  "Estúdio completo de Pilates Clínico e em Aparelhos em Pelotas (Bairro Areal). Aulas orientadas por fisioterapeutas para dores na coluna, postura, força e mobilidade.",
                url: "https://www.clinicareabilitare.com/pilates-pelotas",
                logo: "https://www.clinicareabilitare.com/logo-reabilitare.webp",
                image: [
                  "https://www.clinicareabilitare.com/kauane-ramos-fisioterapia-pelotas.webp",
                  "https://www.clinicareabilitare.com/cover.png",
                ],
                telephone: "+55-53-99166-9801",
                priceRange: "$$",
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
                  latitude: -31.7650111,
                  longitude: -52.3255797,
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
                  ratingCount: "48",
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
                  jobTitle: "Fisioterapeuta",
                  hasCredential: {
                    "@type": "EducationalOccupationalCredential",
                    credentialCategory: "CREFITO-5: 375851-F",
                  },
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Aulas e Programas de Pilates em Pelotas",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Pilates Clínico em Aparelhos",
                        description:
                          "Aulas orientadas por fisioterapeutas com Reformer, Cadillac, Chair e Barrel com foco terapêutico.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Pilates para Dores na Coluna e Hérnia de Disco",
                        description:
                          "Exercícios seguros e progressivos para descompressão discal e fortalecimento estabilizador do core.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Pilates para Terceira Idade e Mobilidade",
                        description:
                          "Preservação da mobilidade articular, força funcional, equilíbrio e autonomia corporal para o dia a dia.",
                      },
                    },
                  ],
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
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Início",
                    item: "https://www.clinicareabilitare.com",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Pilates em Pelotas",
                    item: "https://www.clinicareabilitare.com/pilates-pelotas",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: pilatesFaq.map((faq) => ({
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
        title={
          <>
            Pilates em{" "}
            <strong className="text-emerald-300 font-extrabold">Pelotas</strong>
          </>
        }
        subtitle="Estúdio completo de Pilates Clínico em Aparelhos com foco na sua coluna, força, flexibilidade e postura."
      />

      <div className="bg-white">
        <main className="container mx-auto px-4 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto">
            {/* Intro Section */}
            <ScrollReveal>
              <section className="prose prose-lg md:prose-xl prose-emerald max-w-none text-gray-600 leading-relaxed mb-16">
                <p>
                  Procurando as melhores aulas de{" "}
                  <strong>pilates em Pelotas</strong>? O{" "}
                  <strong>estúdio de Pilates da Clínica Reabilitare</strong>{" "}
                  oferece uma experiência diferenciada de{" "}
                  <strong>Pilates Clínico em Aparelhos</strong>, no coração do
                  Bairro Areal (Av. Bento Gonçalves, 2146).
                </p>
                <p>
                  Diferente de academias convencionais com turmas cheias, nossas
                  aulas são conduzidas diretamente por{" "}
                  <strong>fisioterapeutas especialistas</strong> com turmas
                  reduzidas. Essa atenção próxima garante que cada exercício
                  seja ajustado às particularidades do seu corpo, garantindo
                  resultados rápidos no alívio de dores na coluna,
                  fortalecimento do core, reeducação postural e ganho de
                  flexibilidade.
                </p>
              </section>
            </ScrollReveal>

            {/* Equipment and Method Section */}
            <section className="mb-16">
              <ScrollReveal>
                <div className="text-center mb-10">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 px-3.5 py-1.5 rounded-full inline-block mb-3">
                    Equipamentos e Estrutura
                  </span>
                  <h2 className="text-3xl font-extrabold text-(--color-emerald-800) mb-4">
                    Pilates Completo em Aparelhos em Pelotas
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                    Contamos com a linha clássica completa do Método Pilates em
                    ambiente climatizado e preparado para seu conforto.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                {[
                  {
                    title: "Reformer",
                    desc: "O aparelho central do Pilates com carrinho deslizante e molas reguláveis. Permite alinhar a coluna, fortalecer membros superiores e inferiores e desenvolver força profunda sem impacto articular.",
                  },
                  {
                    title: "Cadillac (Trapézio)",
                    desc: "Estrutura versátil com barras e molas aéreas. Ideal para descompressão da coluna, reabilitação física, alongamento global e fortalecimento postural.",
                  },
                  {
                    title: "Wunda Chair (Cadeira)",
                    desc: "Focado em equilíbrio dinâmico, estabilidade pélvica e força de membros inferiores e core. Essencial para treinar movimentos funcionais do cotidiano.",
                  },
                  {
                    title: "Ladder Barrel",
                    desc: "Equipamento curvo para exercícios de extensão e flexão da coluna vertebral, melhora acentuada da postura e alongamento profundo das cadeias musculares.",
                  },
                  {
                    title: "Pilates para Dores na Coluna & Ciático",
                    desc: "Protocolos clínicos seguros para descompressão discal, correção de escoliose, hiperlordose e alívio de lombalgia crônica.",
                  },
                  {
                    title: "Pilates para Idosos & Longevidade",
                    desc: "Aulas adaptadas para ganho de equilíbrio, segurança na marcha, aumento da densidade óssea e manutenção da autonomia.",
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
                    href="https://wa.me/5553991669801?text=Olá%2C%20gostaria%20de%20agendar%20uma%20aula%20de%20Pilates%20em%20Pelotas."
                    className="inline-flex items-center gap-2 border-none rounded-full cursor-pointer text-lg font-bold px-9 py-3.5 bg-(--color-emerald-800) text-white hover:bg-emerald-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    aria-label="Agendar aula de Pilates em Pelotas pelo WhatsApp"
                  >
                    Agendar Aula de Pilates
                    <span className="text-xl">→</span>
                  </WhatsAppButton>
                </div>
              </ScrollReveal>
            </section>

            {/* Why Pilates at Reabilitare */}
            <section className="mb-20 bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
              <ScrollReveal>
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-extrabold text-(--color-emerald-800) mb-4">
                    Por que Fazer Pilates no Estúdio Reabilitare?
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Orientação 100% por Fisioterapeutas",
                    desc: "Diferente de academias, você é acompanhado por profissionais de saúde habilitados a tratar suas limitações com segurança biológica.",
                  },
                  {
                    title: "Turmas Estritamente Reduzidas",
                    desc: "Máxima atenção em cada movimento. O instrutor corrige sua respiração, alinhamento e ativação muscular a todo momento.",
                  },
                  {
                    title: "Estúdio Completo no Bairro Areal",
                    desc: "Fácil acesso pela Av. Bento Gonçalves, 2146, com estacionamento facilitado e ambiente climatizado e agradável.",
                  },
                  {
                    title: "Pilates Adaptado a Qualquer Idade",
                    desc: "Desde iniciantes sem experiência prévia com exercícios até pessoas em recuperação ortopédica ou atletas.",
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
                    Perguntas Frequentes sobre Pilates em Pelotas
                  </h2>
                </div>
              </ScrollReveal>
              <FaqAccordion items={pilatesFaq} />
            </section>

            {/* Cross-link Section */}
            <section className="mb-12 rounded-2xl bg-emerald-50/60 border border-emerald-100 p-6 sm:p-8 text-center">
              <h2 className="text-xl font-extrabold text-emerald-950 mb-2">
                Conheça Também Nossos Tratamentos de Fisioterapia em Pelotas
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mb-5">
                Você pode associar o Pilates com nossos tratamentos de{" "}
                <Link
                  href="/fisioterapia-pelotas"
                  className="text-emerald-800 font-bold underline hover:text-emerald-950 transition-colors"
                >
                  Fisioterapia em Pelotas
                </Link>{" "}
                para um resultado corporal completo, reabilitação e alívio
                duradouro de dores.
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
