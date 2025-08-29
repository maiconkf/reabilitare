import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Location from "@/components/location";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fisioterapia e Pilates em Pelotas",
  description:
    "Clínica Reabilitare oferece Fisioterapia e Pilates em Pelotas. Serviços especializados e separados para cuidado do corpo, bem-estar e reabilitação.",
  alternates: {
    canonical: "/fisioterapia-pilates-pelotas",
  },
  openGraph: {
    title: "Fisioterapia e Pilates em Pelotas | Clínica Reabilitare",
    description:
      "Serviços separados de Fisioterapia e Pilates em Pelotas, realizados por profissionais qualificados para cuidar do seu corpo e bem-estar.",
    url: "https://www.clinicareabilitare.com/fisioterapia-pilates-pelotas",
    images: "/cover.png",
  },
  twitter: {
    title: "Fisioterapia e Pilates em Pelotas | Clínica Reabilitare",
    description:
      "Serviços separados de Fisioterapia e Pilates em Pelotas, realizados por profissionais qualificados para cuidar do seu corpo e bem-estar.",
    images: ["/cover.png"],
  },
};

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 pt-25">
        <main className="pt-4 pb-12 md:pb-0">
          <section>
            <h1 className="text-3xl font-extrabold text-(--color-emerald-800) mb-6">
              Fisioterapia e Pilates em Pelotas
            </h1>
            <p className="text-gray-600 mb-4">
              A <strong>Clínica Reabilitare</strong> oferece serviços
              especializados de <strong>Fisioterapia</strong> e{" "}
              <strong>Pilates</strong> em Pelotas. Cada serviço é realizado de
              forma separada e dedicada, garantindo atenção total às
              necessidades de cada paciente.
            </p>
            <p className="text-gray-600 mb-4">
              Com profissionais qualificados e infraestrutura moderna, nosso
              objetivo é promover saúde, bem-estar e qualidade de vida para
              todos os nossos pacientes.
            </p>
          </section>

          <hr className="my-8 border-t border-gray-200" />

          <section>
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Fisioterapia em Pelotas
            </h2>
            <p className="text-gray-600 mb-4">
              Nossa fisioterapia oferece tratamentos para dores, lesões e
              reabilitação funcional. Cada paciente recebe atenção individual e
              um plano personalizado para recuperação eficaz.
            </p>
            <div className="flex gap-4 mb-6">
              <Link
                href="/fisioterapia-pelotas"
                className="inline-block border-none rounded-full cursor-pointer text-lg font-bold px-6 py-2.5 bg-gray-200 text-gray-800 hover:bg-gray-300"
              >
                Saiba Mais
              </Link>
              <a
                href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20os%20tratamento%20de%20fisioterapia."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-none rounded-full cursor-pointer text-lg font-bold px-9 py-2.5 bg-(--color-emerald-800) text-white hover:bg-(--color-emerald-800)/90"
              >
                Agendar Fisioterapia
              </a>
            </div>
          </section>

          <hr className="my-8 border-t border-gray-200" />

          <section>
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Pilates em Pelotas
            </h2>
            <p className="text-gray-600 mb-4">
              O Pilates é focado em melhorar postura, força, flexibilidade e
              consciência corporal. É indicado para quem busca bem-estar,
              condicionamento físico e prevenção de lesões.
            </p>
            <div className="flex gap-4 mb-6">
              <a
                href="/pilates-pelotas"
                className="inline-block border-none rounded-full cursor-pointer text-lg font-bold px-6 py-2.5 bg-gray-200 text-gray-800 hover:bg-gray-300"
              >
                Saiba Mais
              </a>
              <a
                href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20os%20tratamento%20de%20pilates."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-none rounded-full cursor-pointer text-lg font-bold px-9 py-2.5 bg-(--color-emerald-800) text-white hover:bg-(--color-emerald-800)/90"
              >
                Agendar Pilates
              </a>
            </div>
          </section>

          <hr className="my-8 border-t border-gray-200" />

          <Contact />
        </main>
      </div>
      <Location />
      <Footer />
    </div>
  );
}
