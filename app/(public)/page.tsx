import Agreements from "@/components/agreements";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Location from "@/components/location";
import Main from "@/components/main";
import Services from "@/components/services";

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            name: "Clínica Reabilitare",
            description:
              "Clínica especializada em Fisioterapia e Pilates em Pelotas-RS, oferecendo tratamentos personalizados para recuperação e bem-estar.",
            url: "https://www.clinicareabilitare.com",
            logo: "https://www.clinicareabilitare.com/logo-reabilitare.png",
            image: "https://www.clinicareabilitare.com/foto-clinica.jpg",
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
              telephone: "+55-53-99166-9801",
              contactType: "customer service",
              areaServed: "BR",
              availableLanguage: "Portuguese",
            },
            sameAs: ["https://www.instagram.com/clinicareabilitare"],
            openingHours: ["Mo-Fr 08:00-20:00"],
          }),
        }}
      />
      <div className="bg-(--color-emerald-400) rounded-b-[32px]">
        <Header />
        <Main />
      </div>
      <Services />
      <Agreements />
      <Location />
      <Footer />
    </div>
  );
}
