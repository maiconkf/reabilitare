// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
