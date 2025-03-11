import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clínica Reabilitare - Fisioterapia e Pilates em Pelotas-RS",
  description:
    "Conheça a Clínica Reabilitare em Pelotas-RS, especializada em fisioterapia e pilates. Oferecemos tratamentos personalizados para sua recuperação e bem-estar. Agende sua consulta hoje!",
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
      "Clínica especializada em fisioterapia e pilates, oferecendo tratamentos personalizados para recuperação e bem-estar.",
    images: "https://www.clinicareabilitare.com/cover.png",
    url: "https://www.clinicareabilitare.com",
    type: "website",
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
