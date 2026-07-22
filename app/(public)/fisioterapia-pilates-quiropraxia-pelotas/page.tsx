import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Ratings from "@/components/ratings";
import WhatsAppButton from "@/components/WhatsAppButton";
import InternalHero from "@/components/InternalHero";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";

const Location = dynamic(() => import("@/components/location"));

export const metadata: Metadata = {
  title: "Fisioterapia, Pilates e Quiropraxia em Pelotas | Clínica Especializada",
  description:
    "Procurando fisioterapia, pilates ou quiropraxia em Pelotas? A Clínica Reabilitare oferece tratamentos especializados com profissionais qualificados. Agende sua avaliação!",
  keywords: [
    "fisioterapia pelotas",
    "pilates pelotas",
    "quiropraxia pelotas",
    "quiropraxista pelotas",
    "fisioterapeuta pelotas",
    "clínica de fisioterapia pelotas",
    "pilates clínico pelotas",
    "fisioterapia em pelotas rs",
    "pilates em pelotas rs",
    "quiropraxia em pelotas rs",
  ],
  alternates: {
    canonical: "/fisioterapia-pilates-quiropraxia-pelotas",
  },
  openGraph: {
    title: "Fisioterapia, Pilates e Quiropraxia em Pelotas | Clínica Reabilitare",
    description:
      "Clínica especializada em fisioterapia, pilates e quiropraxia em Pelotas. Tratamentos personalizados para dores, reabilitação e bem-estar. Agende agora!",
    url: "https://www.clinicareabilitare.com/fisioterapia-pilates-quiropraxia-pelotas",
    images: "/cover.png",
  },
  twitter: {
    title: "Fisioterapia, Pilates e Quiropraxia em Pelotas | Clínica Reabilitare",
    description:
      "Clínica especializada em fisioterapia, pilates e quiropraxia em Pelotas. Tratamentos personalizados para dores, reabilitação e bem-estar. Agende agora!",
    images: ["/cover.png"],
  },
};

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
                "@type": "MedicalClinic",
                medicalSpecialty: "Physiotherapy",
                "@id": "https://www.clinicareabilitare.com/#organization",
                name: "Clínica Reabilitare - Fisioterapia, Pilates e Quiropraxia",
                description:
                  "Clínica especializada em fisioterapia, pilates e quiropraxia em Pelotas, RS. Oferecemos tratamentos personalizados para dores, lesões, reabilitação e bem-estar.",
                url: "https://www.clinicareabilitare.com/fisioterapia-pilates-quiropraxia-pelotas",
                logo: "https://www.clinicareabilitare.com/logo-reabilitare.jpg",
                image: "https://www.clinicareabilitare.com/foto-clinica.jpg",
                telephone: "+5553991669801",
                priceRange: "$$",
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
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Serviços de Fisioterapia, Pilates e Quiropraxia",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Fisioterapia em Pelotas",
                        description:
                          "Tratamento de dores, lesões, reabilitação pós-operatória e correção postural",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Pilates em Pelotas",
                        description:
                          "Aulas de pilates para fortalecimento, flexibilidade e consciência corporal",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Quiropraxia em Pelotas",
                        description:
                          "Ajustes articulares e vertebrais para restauração do alinhamento da coluna",
                      },
                    },
                  ],
                },
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
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.clinicareabilitare.com",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Fisioterapia, Pilates e Quiropraxia em Pelotas",
                    item: "https://www.clinicareabilitare.com/fisioterapia-pilates-quiropraxia-pelotas",
                  },
                ],
              },
            ],
          }),
        }}
      />
      <Header />
      
      <InternalHero 
        title={<>Fisioterapia, Pilates e <strong className="text-emerald-300 font-extrabold">Quiropraxia</strong></>}
        subtitle="Sua Clínica Especializada no bairro Areal, Pelotas. Tudo para sua reabilitação em um só lugar."
      />

      <div className="bg-white">
        <main className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            {/* Intro Section */}
            <ScrollReveal>
              <section className="prose prose-lg md:prose-xl prose-emerald max-w-none text-gray-600 leading-relaxed mb-16">
                <p>
                  Está procurando <strong>fisioterapia em Pelotas</strong>, <strong>pilates em Pelotas</strong> ou <strong>quiropraxia em Pelotas</strong>? A <strong>Clínica Reabilitare</strong> é referência em tratamentos especializados na cidade. Cada serviço é realizado de forma dedicada, garantindo atenção total às necessidades de cada paciente.
                </p>
                <p>
                  Localizada no bairro Areal, nossa clínica conta com <strong>profissionais qualificados</strong> e infraestrutura moderna para oferecer o melhor tratamento da região.
                </p>
              </section>
            </ScrollReveal>

            {/* Services Hub */}
            <div className="space-y-12">
              <ScrollReveal delay={100}>
                <section className="bg-emerald-50/30 rounded-3xl p-8 md:p-10 border border-emerald-100 hover:shadow-lg transition-all duration-300">
                  <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
                    Fisioterapia Especializada
                  </h2>
                  <p className="text-gray-600 text-lg mb-8">
                    Nossa fisioterapia oferece tratamentos para dores, lesões e reabilitação funcional. Cada paciente recebe atenção individual e um plano personalizado para recuperação eficaz.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/fisioterapia-pelotas"
                      className="inline-flex items-center justify-center font-bold px-8 py-3 bg-white text-(--color-emerald-800) border border-emerald-200 rounded-full hover:bg-emerald-50 transition-colors shadow-xs"
                    >
                      Saiba Mais
                    </Link>
                    <WhatsAppButton
                      href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20os%20tratamentos%20de%20fisioterapia."
                      className="inline-flex items-center gap-2 border-none rounded-full cursor-pointer text-base md:text-lg font-bold px-8 py-3 bg-(--color-emerald-800) text-white hover:bg-emerald-900 transition-all shadow-md hover:shadow-xl hover:-translate-y-1"
                      aria-label="Agendar avaliação de Fisioterapia pelo WhatsApp"
                    >
                      Agendar Fisioterapia <span className="text-xl">→</span>
                    </WhatsAppButton>
                  </div>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <section className="bg-emerald-50/30 rounded-3xl p-8 md:p-10 border border-emerald-100 hover:shadow-lg transition-all duration-300">
                  <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
                    Estúdio de Pilates
                  </h2>
                  <p className="text-gray-600 text-lg mb-8">
                    O Pilates é focado em melhorar postura, força, flexibilidade e consciência corporal. É indicado para quem busca bem-estar, condicionamento físico e prevenção de lesões.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/pilates-pelotas"
                      className="inline-flex items-center justify-center font-bold px-8 py-3 bg-white text-(--color-emerald-800) border border-emerald-200 rounded-full hover:bg-emerald-50 transition-colors shadow-xs"
                    >
                      Saiba Mais
                    </Link>
                    <WhatsAppButton
                      href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20os%20tratamento%20de%20pilates."
                      className="inline-flex items-center gap-2 border-none rounded-full cursor-pointer text-base md:text-lg font-bold px-8 py-3 bg-(--color-emerald-800) text-white hover:bg-emerald-900 transition-all shadow-md hover:shadow-xl hover:-translate-y-1"
                      aria-label="Agendar aula de Pilates pelo WhatsApp"
                    >
                      Agendar Pilates <span className="text-xl">→</span>
                    </WhatsAppButton>
                  </div>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <section className="bg-emerald-50/30 rounded-3xl p-8 md:p-10 border border-emerald-100 hover:shadow-lg transition-all duration-300">
                  <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
                    Quiropraxia Clínica
                  </h2>
                  <p className="text-gray-600 text-lg mb-8">
                    A Quiropraxia é focada no alinhamento da coluna vertebral e restauração do equilíbrio articular. Auxilia no alívio rápido de dores nas costas, pescoço e articulações, devolvendo mobilidade.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/quiropraxia-pelotas"
                      className="inline-flex items-center justify-center font-bold px-8 py-3 bg-white text-(--color-emerald-800) border border-emerald-200 rounded-full hover:bg-emerald-50 transition-colors shadow-xs"
                    >
                      Saiba Mais
                    </Link>
                    <WhatsAppButton
                      href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20os%20atendimentos%20de%20quiropraxia."
                      className="inline-flex items-center gap-2 border-none rounded-full cursor-pointer text-base md:text-lg font-bold px-8 py-3 bg-(--color-emerald-800) text-white hover:bg-emerald-900 transition-all shadow-md hover:shadow-xl hover:-translate-y-1"
                      aria-label="Agendar atendimento de Quiropraxia pelo WhatsApp"
                    >
                      Agendar Quiropraxia <span className="text-xl">→</span>
                    </WhatsAppButton>
                  </div>
                </section>
              </ScrollReveal>
            </div>
          </div>
          
          <div className="mt-20">
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
