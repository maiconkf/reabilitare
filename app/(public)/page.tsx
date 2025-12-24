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
            "@type": "Physiotherapy",
            name: "Clínica Reabilitare",
            description:
              "Fisioterapia e pilates personalizados em Pelotas. Tratamentos eficazes para dor, lesões e bem-estar. Agende sua consulta na Reabilitare!",
            url: "https://www.clinicareabilitare.com",
            logo: "https://www.clinicareabilitare.com/logo-reabilitare.jpg",
            image: "https://www.clinicareabilitare.com/foto-clinica.jpg",
            telephone: "+55-53-99166-9801",
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
              telephone: "+55-53-99166-9801",
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
