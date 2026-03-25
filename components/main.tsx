import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

export default function Main() {
  return (
    <div className="container mx-auto px-4 pt-20">
      <main className="md:flex justify-between items-center pt-4 pb-12 md:pb-0">
        <div className="max-w-xl">
          <h1 className="text-3xl text-white mb-4 lg:text-5xl">
            <strong>Fisioterapia</strong> e <strong>Pilates</strong> em Pelotas:
            Recupere sua liberdade de <em>movimento</em>!
          </h1>
          <h2 className="text-md lg:text-lg max-w-lg font-medium text-white mb-6 md:mb-8 leading-relaxed">
            A Clínica Reabilitare é especialista em{" "}
            <strong>fisioterapia em Pelotas</strong> e{" "}
            <strong>pilates em Pelotas</strong>. Tratamentos personalizados para
            alívio da dor, fortalecimento e qualidade de vida.
          </h2>
          <div className="flex flex-wrap justify-between w-100% max-w-[484px]">
            <WhatsAppButton
              href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20os%20tratamento%20de%20fisioterapia."
              aria-label="Agendar avaliação de Fisioterapia pelo WhatsApp"
              className="sm:mr-3 mb-3 lg:mb-0 block border-none rounded-full cursor-pointer text-lg font-bold text-center px-9 py-2.5 transition-all duration-400 bg-white text-(--color-emerald-800) hover:bg-white/95"
            >
              Agendar Fisioterapia
            </WhatsAppButton>

            <WhatsAppButton
              href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20as%20aulas%20de%20pilates."
              aria-label="Agendar aula de Pilates pelo WhatsApp"
              className="mb-3 lg:mb-0 block border-none rounded-full cursor-pointer text-lg font-bold text-center px-9 py-2.5 transition-all duration-400 bg-white/17 text-white hover:bg-white/34"
            >
              Agendar Pilates
            </WhatsAppButton>
          </div>
        </div>
        <Image
          src="/kauane-ramos-fisioterapia-pelotas.webp"
          alt="Kauane Ramos - Fisioterapeuta especializada em fisioterapia e pilates em Pelotas"
          width={405}
          height={506}
          priority
          className="hidden md:block"
        />
      </main>
    </div>
  );
}
