export const SITE_URL = "https://www.clinicareabilitare.com";

export const specialistSchema = {
  "@type": "Person",
  "@id": `${SITE_URL}/#kauane-ramos`,
  name: "Dra. Kauane Ramos",
  jobTitle: "Fisioterapeuta e Responsável Técnica",
  url: SITE_URL,
  image: `${SITE_URL}/kauane-ramos-fisioterapia-pelotas.webp`,
  worksFor: {
    "@id": `${SITE_URL}/#organization`,
  },
  knowsAbout: [
    "Fisioterapia Ortopédica e Traumatológica",
    "Pilates Clínico em Aparelhos",
    "Quiropraxia e Ajuste Vertebral",
    "Reabilitação Pós-Operatória",
    "Tratamento de Coluna Vertebral e Hérnia de Disco",
    "Terapia Manual e Liberação Miofascial",
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Registro Profissional CREFITO-5",
    name: "CREFITO-5: 375851-F",
    recognizedBy: {
      "@type": "Organization",
      name: "Conselho Regional de Fisioterapia e Terapia Ocupacional da 5ª Região (CREFITO-5)",
      url: "https://www.crefito5.org.br",
    },
  },
};

export const organizationSchema = {
  "@type": ["MedicalClinic", "Physiotherapy", "LocalBusiness"],
  medicalSpecialty: ["Physiotherapy", "Musculoskeletal"],
  "@id": `${SITE_URL}/#organization`,
  name: "Clínica Reabilitare",
  alternateName:
    "Clínica Reabilitare - Fisioterapia, Pilates e Quiropraxia em Pelotas",
  description:
    "Clínica especializada em fisioterapia, pilates clínico em aparelhos e quiropraxia em Pelotas (Bairro Areal). Tratamentos individualizados para dores na coluna, hérnia de disco, nervo ciático, lesões e pós-operatório.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-reabilitare.webp`,
  image: [
    `${SITE_URL}/kauane-ramos-fisioterapia-pelotas.webp`,
    `${SITE_URL}/cover.png`,
  ],
  telephone: "+55-53-99166-9801",
  email: "kauanerfisio@gmail.com",
  priceRange: "$$",
  currenciesAccepted: "BRL",
  paymentAccepted:
    "PIX, Cartão de Crédito, Cartão de Débito, Dinheiro, Convênios (Prevpel, IBCM, ASPRA, ASSTBM, Cabergs)",
  hasMap: "https://maps.app.goo.gl/S4y6tkkLfFWxKYir8",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Bento Gonçalves, 2146 - Areal",
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
  areaServed: [
    {
      "@type": "City",
      name: "Pelotas",
      sameAs: "https://www.wikidata.org/wiki/Q170851",
    },
    { "@type": "Place", name: "Areal, Pelotas - RS" },
    { "@type": "Place", name: "Centro, Pelotas - RS" },
    { "@type": "Place", name: "Laranjal, Pelotas - RS" },
    { "@type": "Place", name: "Três Vendas, Pelotas - RS" },
    { "@type": "Place", name: "Fragata, Pelotas - RS" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "48",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-53-99166-9801",
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: "Portuguese",
  },
  founder: {
    "@id": `${SITE_URL}/#kauane-ramos`,
  },
  employee: {
    "@id": `${SITE_URL}/#kauane-ramos`,
  },
  sameAs: ["https://www.instagram.com/clinicareabilitare.fisio"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Clínica Reabilitare",
  inLanguage: "pt-BR",
  description:
    "Site oficial da Clínica Reabilitare, especializada em fisioterapia, pilates clínico e quiropraxia no Bairro Areal em Pelotas/RS.",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
};
