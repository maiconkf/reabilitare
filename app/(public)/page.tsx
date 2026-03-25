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
                "@type": "MedicalClinic",
                medicalSpecialty: "Physiotherapy",
                "@id": "https://www.clinicareabilitare.com/#organization",
                name: "Clínica Reabilitare",
                alternateName: "Reabilitare Fisioterapia e Pilates",
                description:
                  "Clínica especializada em fisioterapia em Pelotas e pilates em Pelotas. Tratamentos personalizados para dores, lesões, reabilitação e bem-estar. Agende sua consulta!",
                url: "https://www.clinicareabilitare.com",
                logo: "https://www.clinicareabilitare.com/logo-reabilitare.jpg",
                image: "https://www.clinicareabilitare.com/foto-clinica.jpg",
                telephone: "+55-53-99166-9801",
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
                  name: "Serviços de Fisioterapia e Pilates em Pelotas",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Fisioterapia em Pelotas",
                        description:
                          "Tratamentos de fisioterapia especializada para dores, lesões, reabilitação pós-operatória e correção postural em Pelotas RS",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Pilates em Pelotas",
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
                "@type": "WebSite",
                "@id": "https://www.clinicareabilitare.com/#website",
                url: "https://www.clinicareabilitare.com",
                name: "Clínica Reabilitare - Fisioterapia e Pilates em Pelotas",
                description:
                  "Site oficial da Clínica Reabilitare, especializada em fisioterapia e pilates em Pelotas RS",
                publisher: {
                  "@id": "https://www.clinicareabilitare.com/#organization",
                },
              },
            ],
          }),
        }}
      />
      <div className="bg-(--color-emerald-800) rounded-b-[32px]">
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
