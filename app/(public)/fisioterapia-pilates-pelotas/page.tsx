import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Ratings from "@/components/ratings";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";

const Location = dynamic(() => import("@/components/location"));

export const metadata: Metadata = {
  title: "Fisioterapia e Pilates em Pelotas | Clínica Especializada",
  description:
    "Procurando fisioterapia em Pelotas ou pilates em Pelotas? A Clínica Reabilitare oferece tratamentos especializados com profissionais qualificados. Agende sua avaliação!",
  keywords: [
    "fisioterapia pelotas",
    "pilates pelotas",
    "fisioterapeuta pelotas",
    "clínica de fisioterapia pelotas",
    "pilates clínico pelotas",
    "fisioterapia em pelotas rs",
    "pilates em pelotas rs",
  ],
  alternates: {
    canonical: "/fisioterapia-pilates-pelotas",
  },
  openGraph: {
    title: "Fisioterapia e Pilates em Pelotas | Clínica Reabilitare",
    description:
      "Clínica especializada em fisioterapia e pilates em Pelotas. Tratamentos personalizados para dores, reabilitação e bem-estar. Agende agora!",
    url: "https://www.clinicareabilitare.com/fisioterapia-pilates-pelotas",
    images: "/cover.png",
  },
  twitter: {
    title: "Fisioterapia e Pilates em Pelotas | Clínica Reabilitare",
    description:
      "Clínica especializada em fisioterapia e pilates em Pelotas. Tratamentos personalizados para dores, reabilitação e bem-estar. Agende agora!",
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
                "@type": "MedicalBusiness",
                "@id": "https://www.clinicareabilitare.com/#organization",
                name: "Clínica Reabilitare - Fisioterapia e Pilates",
                description:
                  "Clínica especializada em fisioterapia e pilates em Pelotas, RS. Oferecemos tratamentos personalizados para dores, lesões, reabilitação e bem-estar.",
                url: "https://www.clinicareabilitare.com/fisioterapia-pilates-pelotas",
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
                  name: "Serviços de Fisioterapia e Pilates",
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
                    name: "Fisioterapia e Pilates em Pelotas",
                    item:
                      "https://www.clinicareabilitare.com/fisioterapia-pilates-pelotas",
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
              Fisioterapia e Pilates em Pelotas: Clínica Especializada
            </h1>
            <p className="text-gray-600 mb-4">
              Está procurando <strong>fisioterapia em Pelotas</strong> ou{" "}
              <strong>pilates em Pelotas</strong>? A{" "}
              <strong>Clínica Reabilitare</strong> é referência em tratamentos
              especializados na cidade. Cada serviço é realizado de forma
              separada e dedicada, garantindo atenção total às necessidades de
              cada paciente.
            </p>
            <p className="text-gray-600 mb-4">
              Localizada no bairro Areal, nossa clínica conta com{" "}
              <strong>fisioterapeutas qualificados</strong> e infraestrutura
              moderna para oferecer o melhor tratamento de fisioterapia e
              pilates em Pelotas, RS.
            </p>
          </section>

          <hr className="my-8 border-t border-gray-200" />

          <section>
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Fisioterapia em Pelotas
            </h2>
            <p className="text-gray-600 mb-4">
              Nossa fisioterapia oferece tratamentos para dores, lesões e
              reabilitação funcional. Cada paciente recebe atenção individual e
              um plano personalizado para recuperação eficaz.
            </p>
            <div className="flex gap-4 mb-6">
              <Link
                href="/fisioterapia-pelotas"
                className="inline-block border-none rounded-full cursor-pointer text-lg font-bold px-6 py-2.5 bg-gray-200 text-gray-800 hover:bg-gray-300"
              >
                Saiba Mais
              </Link>
              <WhatsAppButton
                href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20os%20tratamentos%20de%20fisioterapia."
                className="inline-block border-none rounded-full cursor-pointer text-lg font-bold px-9 py-2.5 bg-(--color-emerald-800) text-white hover:bg-(--color-emerald-800)/90"
                aria-label="Agendar avaliação de Fisioterapia pelo WhatsApp"
              >
                Agendar Fisioterapia
              </WhatsAppButton>
            </div>
          </section>

          <hr className="my-8 border-t border-gray-200" />

          <section>
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Pilates em Pelotas
            </h2>
            <p className="text-gray-600 mb-4">
              O Pilates é focado em melhorar postura, força, flexibilidade e
              consciência corporal. É indicado para quem busca bem-estar,
              condicionamento físico e prevenção de lesões.
            </p>
            <div className="flex gap-4 mb-6">
              <a
                href="/pilates-pelotas"
                className="inline-block border-none rounded-full cursor-pointer text-lg font-bold px-6 py-2.5 bg-gray-200 text-gray-800 hover:bg-gray-300"
              >
                Saiba Mais
              </a>
              <WhatsAppButton
                href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20os%20tratamento%20de%20pilates."
                className="inline-block border-none rounded-full cursor-pointer text-lg font-bold px-9 py-2.5 bg-(--color-emerald-800) text-white hover:bg-(--color-emerald-800)/90"
                aria-label="Agendar aula de Pilates pelo WhatsApp"
              >
                Agendar Pilates
              </WhatsAppButton>
            </div>
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
