import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.clinicareabilitare.com"),
  title: {
    default: "Clínica Reabilitare - Fisioterapia e Pilates em Pelotas-RS",
    template: "%s | Clínica Reabilitare",
  },
  description:
    "Fisioterapia e pilates personalizados em Pelotas. Tratamentos eficazes para dor, lesões e bem-estar. Agende sua consulta na Reabilitare!",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Clínica Reabilitare - Fisioterapia e Pilates em Pelotas-RS",
    description:
      "Fisioterapia e pilates personalizados em Pelotas. Tratamentos eficazes para dor, lesões e bem-estar. Agende sua consulta na Reabilitare!",
    images: "/cover.png",
    url: "https://www.clinicareabilitare.com",
    type: "website",
    siteName: "Clínica Reabilitare",
  },
  twitter: {
    card: "summary_large_image",
    site: "@clinicareabilitare",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${openSans.className} antialiased`}>{children}</body>
    </html>
  );
}
