import Agreements from "@/components/agreements";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import Ratings from "@/components/ratings";
import Services from "@/components/services";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const Location = dynamic(() => import("@/components/location"));

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
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
                "@type": ["MedicalClinic", "LocalBusiness"],
                medicalSpecialty: ["Physiotherapy", "Musculoskeletal"],
                "@id": "https://www.clinicareabilitare.com/#organization",
                name: "Clínica Reabilitare",
                alternateName: "Reabilitare Fisioterapia e Pilates em Pelotas",
                description:
                  "Clínica especializada em fisioterapia em Pelotas e pilates em Pelotas (Bairro Areal). Tratamentos personalizados para dores na coluna, lesões, reabilitação pós-operatória e bem-estar. Agende sua consulta!",
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
                  name: "Serviços de Fisioterapia e Pilates em Pelotas",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "MedicalTherapy",
                        name: "Fisioterapia em Pelotas",
                        url: "https://www.clinicareabilitare.com/fisioterapia-pelotas",
                        description:
                          "Tratamentos de fisioterapia especializada para dores, lesões, reabilitação pós-operatória e correção postural em Pelotas RS",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Pilates em Pelotas",
                        url: "https://www.clinicareabilitare.com/pilates-pelotas",
                        description:
                          "Aulas de pilates clínico para fortalecimento, flexibilidade e consciência corporal em Pelotas RS",
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
                name: "Clínica Reabilitare - Fisioterapia e Pilates em Pelotas",
                inLanguage: "pt-BR",
                description:
                  "Site oficial da Clínica Reabilitare, especializada em fisioterapia e pilates no Bairro Areal em Pelotas RS",
                publisher: {
                  "@id": "https://www.clinicareabilitare.com/#organization",
                },
              },
            ],
          }),
        }}
      />
      <div className="z-10 relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 rounded-b-[36px] sm:rounded-b-[48px] overflow-hidden shadow-2xl shadow-emerald-950/15">
        <Header />
        <Main />
      </div>
      <Services />
      <Agreements />
      <Ratings />
      <Location />
      <Footer />
    </div>
  );
}
