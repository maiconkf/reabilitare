import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Ratings from "@/components/ratings";
import WhatsAppButton from "@/components/WhatsAppButton";
import InternalHero from "@/components/InternalHero";
import ScrollReveal from "@/components/ScrollReveal";
import ClinicalReviewerBadge from "@/components/ClinicalReviewerBadge";
import {
  organizationSchema,
  SITE_URL,
  specialistSchema,
  websiteSchema,
} from "@/lib/schema";
import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";

const Location = dynamic(() => import("@/components/location"));

export const metadata: Metadata = {
  title: {
    absolute: "Tratamento de Coluna e Reabilitação em Pelotas | Reabilitare",
  },
  description:
    "Clínica de reabilitação e tratamento da coluna em Pelotas (Bairro Areal). Abordagem integrada com Fisioterapia, Pilates Clínico e Quiropraxia para hérnia de disco, ciático e lesões. Agende!",
  keywords: [
    "tratamento de coluna pelotas",
    "clínica de reabilitação pelotas",
    "dor na coluna pelotas",
    "hérnia de disco pelotas",
    "nervo ciático pelotas",
    "reabilitação ortopédica pelotas",
    "reabilitação pós-operatória pelotas",
    "tratamento de dor pelotas",
  ],
  alternates: {
    canonical: "/fisioterapia-pilates-quiropraxia-pelotas",
  },
  openGraph: {
    title: "Tratamento de Coluna e Reabilitação em Pelotas | Reabilitare",
    description:
      "Abordagem clínica integrada em Pelotas para coluna vertebral, hérnia de disco, lesões e pós-operatório unindo Fisioterapia, Pilates e Quiropraxia.",
    url: `${SITE_URL}/fisioterapia-pilates-quiropraxia-pelotas`,
    type: "website",
    locale: "pt_BR",
    siteName: "Clínica Reabilitare",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Tratamento de Coluna e Reabilitação Integrada em Pelotas - Clínica Reabilitare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tratamento de Coluna e Reabilitação em Pelotas | Reabilitare",
    description:
      "Reabilitação integrada para dores na coluna, hérnia de disco e lesões no Bairro Areal em Pelotas.",
    images: ["/cover.png"],
  },
};

export default function IntegratedRehabPage() {
  const pageUrl = `${SITE_URL}/fisioterapia-pilates-quiropraxia-pelotas`;

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              organizationSchema,
              specialistSchema,
              websiteSchema,
              {
                "@type": "MedicalWebPage",
                "@id": `${pageUrl}#webpage`,
                url: pageUrl,
                name: "Tratamento de Coluna e Reabilitação em Pelotas | Clínica Reabilitare",
                description:
                  "Reabilitação integrada da coluna vertebral e lesões musculoesqueléticas em Pelotas combinando Fisioterapia, Pilates Clínico e Quiropraxia.",
                inLanguage: "pt-BR",
                isPartOf: {
                  "@id": `${SITE_URL}/#website`,
                },
                about: {
                  "@id": `${pageUrl}#service`,
                },
                author: {
                  "@id": `${SITE_URL}/#kauane-ramos`,
                },
                reviewedBy: {
                  "@id": `${SITE_URL}/#kauane-ramos`,
                },
                lastReviewed: "2026-11-17",
              },
              {
                "@type": "MedicalTherapy",
                "@id": `${pageUrl}#service`,
                name: "Tratamento da Coluna e Reabilitação Integrada em Pelotas",
                url: pageUrl,
                description:
                  "Protocolo multidisciplinar para alívio de dor aguda, descompressão vertebral e estabilização muscular duradoura em Pelotas/RS.",
                provider: {
                  "@id": `${SITE_URL}/#organization`,
                },
                areaServed: {
                  "@type": "City",
                  name: "Pelotas",
                  sameAs: "https://www.wikidata.org/wiki/Q170851",
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Início",
                    item: SITE_URL,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Tratamento da Coluna e Reabilitação",
                    item: pageUrl,
                  },
                ],
              },
            ],
          }),
        }}
      />
      <Header />

      <InternalHero
        breadcrumbLabel="Tratamento da Coluna e Reabilitação"
        title={
          <>
            Tratamento da Coluna e{" "}
            <strong className="text-emerald-300 font-extrabold">
              Reabilitação em Pelotas
            </strong>
          </>
        }
        subtitle="Protocolos clínicos integrados no Bairro Areal unindo Fisioterapia, Pilates Clínico e Quiropraxia para resultados definitivos."
      />

      <div className="bg-white">
        <main className="container mx-auto px-4 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto">
            <ClinicalReviewerBadge specialtyLabel="Reabilitação da Coluna e Movimento" />

            {/* Intro Section */}
            <ScrollReveal>
              <section className="prose prose-lg md:prose-xl prose-emerald max-w-none text-gray-600 leading-relaxed mb-16">
                <p>
                  Sofrendo com <strong>dor na coluna</strong>,{" "}
                  <strong>hérnia de disco</strong>,{" "}
                  <strong>nervo ciático inflamado</strong> ou precisando de{" "}
                  <strong>reabilitação ortopédica em Pelotas</strong>? Na{" "}
                  <strong>Clínica Reabilitare</strong>, unimos três pilares
                  clínicos em um único plano terapêutico: tiramos você da crise
                  de dor, corrigimos o alinhamento articular e fortalecemos a
                  musculatura profunda para que a dor não volte.
                </p>
                <p>
                  Localizada na Av. Bento Gonçalves, 2146 (Bairro Areal), nossa
                  clínica oferece avaliação biomecânica individualizada e
                  acompanhamento contínuo em todas as fases da sua recuperação.
                </p>
              </section>
            </ScrollReveal>

            {/* Services Hub */}
            <div className="space-y-10">
              <ScrollReveal delay={80}>
                <section className="bg-emerald-50/30 rounded-3xl p-8 md:p-10 border border-emerald-100 hover:shadow-lg transition-all duration-300">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full inline-block mb-3">
                    Etapa 1 · Controle da Dor e Função
                  </span>
                  <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
                    Fisioterapia Ortopédica e Pós-Operatória
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg mb-8">
                    Terapia manual, liberação miofascial e cinesioterapia
                    individualizada para tratar lesões articulares, tendinites,
                    lombalgias e recuperação pós-cirúrgica com segurança.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/fisioterapia-pelotas"
                      aria-label="Conhecer tratamentos de Fisioterapia Especializada em Pelotas"
                      className="inline-flex items-center justify-center font-bold px-7 py-3 bg-white text-(--color-emerald-800) border border-emerald-200 rounded-full hover:bg-emerald-50 transition-colors shadow-xs"
                    >
                      <span>Conhecer Fisioterapia →</span>
                    </Link>
                    <WhatsAppButton
                      href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20tratamento%20de%20coluna%20e%20fisioterapia."
                      className="inline-flex items-center gap-2 border-none rounded-full cursor-pointer text-base font-bold px-7 py-3 bg-(--color-emerald-800) text-white hover:bg-emerald-900 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
                      aria-label="Agendar avaliação de Fisioterapia pelo WhatsApp"
                    >
                      Agendar Fisioterapia <span>→</span>
                    </WhatsAppButton>
                  </div>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={160}>
                <section className="bg-emerald-50/30 rounded-3xl p-8 md:p-10 border border-emerald-100 hover:shadow-lg transition-all duration-300">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full inline-block mb-3">
                    Etapa 2 · Descompressão e Alinhamento
                  </span>
                  <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
                    Quiropraxia Clínica e Ajuste Vertebral
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg mb-8">
                    Ajustes precisos e indolores para liberar bloqueios nas
                    vértebras, descomprimir raízes nervosas (como o nervo
                    ciático) e devolver mobilidade imediata à coluna.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/quiropraxia-pelotas"
                      aria-label="Conhecer atendimentos de Quiropraxia Clínica em Pelotas"
                      className="inline-flex items-center justify-center font-bold px-7 py-3 bg-white text-(--color-emerald-800) border border-emerald-200 rounded-full hover:bg-emerald-50 transition-colors shadow-xs"
                    >
                      <span>Conhecer Quiropraxia →</span>
                    </Link>
                    <WhatsAppButton
                      href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20os%20atendimentos%20de%20quiropraxia."
                      className="inline-flex items-center gap-2 border-none rounded-full cursor-pointer text-base font-bold px-7 py-3 bg-(--color-emerald-800) text-white hover:bg-emerald-900 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
                      aria-label="Agendar atendimento de Quiropraxia pelo WhatsApp"
                    >
                      Agendar Quiropraxia <span>→</span>
                    </WhatsAppButton>
                  </div>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={240}>
                <section className="bg-emerald-50/30 rounded-3xl p-8 md:p-10 border border-emerald-100 hover:shadow-lg transition-all duration-300">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full inline-block mb-3">
                    Etapa 3 · Estabilização e Prevenção
                  </span>
                  <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
                    Estúdio de Pilates Clínico em Aparelhos
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg mb-8">
                    Fortalecimento do core e reeducação postural em Reformer,
                    Cadillac, Chair e Barrel com orientação fisioterapêutica
                    para sustentar sua coluna sem dor no longo prazo.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/pilates-pelotas"
                      aria-label="Conhecer o Estúdio de Pilates Clínico em Pelotas"
                      className="inline-flex items-center justify-center font-bold px-7 py-3 bg-white text-(--color-emerald-800) border border-emerald-200 rounded-full hover:bg-emerald-50 transition-colors shadow-xs"
                    >
                      <span>Conhecer Pilates →</span>
                    </Link>
                    <WhatsAppButton
                      href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20as%20aulas%20de%20pilates."
                      className="inline-flex items-center gap-2 border-none rounded-full cursor-pointer text-base font-bold px-7 py-3 bg-(--color-emerald-800) text-white hover:bg-emerald-900 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
                      aria-label="Agendar aula de Pilates pelo WhatsApp"
                    >
                      Agendar Pilates <span>→</span>
                    </WhatsAppButton>
                  </div>
                </section>
              </ScrollReveal>
            </div>
          </div>

          <div className="mt-20">
            <Contact />
          </div>
        </main>
      </div>
      <Ratings />
      <Location />
      <Footer />
    </div>
  );
}
