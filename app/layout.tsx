import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quiropraxia.clinicareabilitare.com"),
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
      "Quiropraxia em Pelotas — Lista de Lançamento | Clínica Reabilitare",
    template: "%s | Clínica Reabilitare",
  },
  description:
    "A Quiropraxia chegou à Clínica Reabilitare em Pelotas (Bairro Areal)! Agende sua avaliação com valor promocional e garanta prioridade no atendimento de ajuste vertebral e alívio de dores.",
  keywords: [
    "quiropraxia pelotas",
    "quiropraxista pelotas",
    "ajuste vertebral pelotas",
    "quiropraxia em pelotas rs",
    "tratamento de coluna pelotas",
    "alinhamento vertebral pelotas",
    "dor na coluna pelotas",
    "hérnia de disco pelotas",
    "nervo ciático pelotas",
    "clínica reabilitare pelotas",
  ],
  alternates: {
    canonical: "https://quiropraxia.clinicareabilitare.com",
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
    title: "Quiropraxia chegou à Clínica Reabilitare em Pelotas 🎉",
    description:
      "Agende sua avaliação com valor promocional e entre para a lista de lançamento. Vagas limitadas — garanta a sua com prioridade.",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Quiropraxia na Clínica Reabilitare em Pelotas RS",
      },
    ],
    url: "https://quiropraxia.clinicareabilitare.com",
    type: "website",
    locale: "pt_BR",
    siteName: "Clínica Reabilitare",
  },
  twitter: {
    card: "summary_large_image",
    site: "@clinicareabilitare",
    title: "Quiropraxia chegou à Clínica Reabilitare em Pelotas 🎉",
    description:
      "Agende sua avaliação com valor promocional e entre para a lista de lançamento em Pelotas-RS.",
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
      <body className={`${openSans.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
