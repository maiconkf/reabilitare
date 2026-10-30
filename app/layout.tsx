import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.clinicareabilitare.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  title: {
    default:
      "Clínica Reabilitare | Fisioterapia, Pilates e Quiropraxia em Pelotas - RS",
    template: "%s | Clínica Reabilitare",
  },
  description:
    "Procurando fisioterapia, pilates ou quiropraxia em Pelotas? A Clínica Reabilitare (Bairro Areal) oferece tratamentos especializados para dor na coluna, lesões, pós-operatório e postura. Atendemos particular e convênios (Prevpel, IBCM, ASPRA, ASSTBM). Agende sua avaliação!",
  keywords: [
    "fisioterapia pelotas",
    "pilates pelotas",
    "quiropraxia pelotas",
    "quiropraxista pelotas",
    "ajuste vertebral pelotas",
    "fisioterapeuta pelotas",
    "clínica de fisioterapia pelotas",
    "pilates clínico pelotas",
    "estúdio de pilates pelotas",
    "fisioterapia em pelotas rs",
    "pilates em pelotas rs",
    "quiropraxia em pelotas rs",
    "fisioterapia bairro areal pelotas",
    "tratamento de dor pelotas",
    "tratamento de coluna pelotas",
    "hérnia de disco pelotas",
    "nervo ciático pelotas",
    "fisioterapia pós-operatória pelotas",
    "fisioterapia prevpel pelotas",
    "fisioterapia ibcm pelotas",
    "reabilitação pelotas",
    "clínica reabilitare",
  ],
  authors: [
    {
      name: "Dra. Kauane Ramos - Clínica Reabilitare",
      url: "https://www.clinicareabilitare.com",
    },
  ],
  creator: "Clínica Reabilitare",
  publisher: "Clínica Reabilitare",
  category: "health",
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "https://www.clinicareabilitare.com",
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title:
      "Clínica Reabilitare - Fisioterapia, Pilates e Quiropraxia em Pelotas-RS",
    description:
      "Fisioterapia, pilates e quiropraxia personalizados em Pelotas (Av. Bento Gonçalves, 2146 - Areal). Tratamentos eficazes para dor, lesões, alinhamento vertebral e bem-estar. Agende sua consulta!",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Clínica Reabilitare - Fisioterapia, Pilates e Quiropraxia em Pelotas RS",
      },
    ],
    url: "https://www.clinicareabilitare.com",
    type: "website",
    locale: "pt_BR",
    siteName: "Clínica Reabilitare",
  },
  twitter: {
    card: "summary_large_image",
    site: "@clinicareabilitare",
    title:
      "Clínica Reabilitare - Fisioterapia, Pilates e Quiropraxia em Pelotas-RS",
    description:
      "Especialistas em Fisioterapia, Pilates Clínico e Quiropraxia em Pelotas-RS. Agende sua avaliação na Clínica Reabilitare!",
    images: ["/cover.png"],
  },
  other: {
    "geo.region": "BR-RS",
    "geo.placename": "Pelotas",
    "geo.position": "-31.7649;-52.3371",
    ICBM: "-31.7649, -52.3371",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EK22XJKVWF"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EK22XJKVWF');
            gtag('config', 'AW-17543322333');
          `}
        </Script>
      </head>
      <body
        className={`${plusJakartaSans.variable} ${plusJakartaSans.className} antialiased selection:bg-emerald-600 selection:text-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
