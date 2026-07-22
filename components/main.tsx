import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

export default function Main() {
  return (
    <div className="container mx-auto px-4 pt-20">
      <main className="relative md:flex justify-between items-end pt-4 pb-12 lg:pb-16 xl:pb-20 overflow-hidden">
        <div className="relative z-10 w-full max-w-full md:max-w-none lg:max-w-[650px] xl:max-w-[720px]">
          <h1 className="text-3xl text-white mb-4 lg:text-5xl">
            <strong>Fisioterapia</strong>, <strong>Pilates</strong> e{" "}
            <strong>Quiropraxia</strong> em Pelotas: Recupere sua liberdade de{" "}
            <em>movimento</em>!
          </h1>
          <h2 className="text-md max-w-2xl lg:max-w-xl font-medium text-white mb-6 md:mb-8 leading-relaxed">
            A Clínica Reabilitare é especialista em{" "}
            <strong>fisioterapia em Pelotas</strong>,{" "}
            <strong>pilates em Pelotas</strong> e{" "}
            <strong>quiropraxia em Pelotas</strong>. Tratamentos personalizados para
            alívio da dor, alinhamento vertebral e qualidade de vida.
          </h2>
          <div className="flex flex-col min-[700px]:flex-row flex-wrap gap-2.5 lg:gap-3 w-full max-w-md min-[700px]:max-w-none mx-auto min-[700px]:mx-0">
            <WhatsAppButton
              href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20os%20tratamento%20de%20fisioterapia."
              aria-label="Agendar avaliação de Fisioterapia pelo WhatsApp"
              className="w-full min-[700px]:w-auto block border-none rounded-full cursor-pointer text-base min-[700px]:text-sm xl:text-base font-bold text-center px-6 min-[700px]:px-4.5 xl:px-7 py-2.5 min-[700px]:py-2 xl:py-2.5 transition-all duration-400 bg-white text-(--color-emerald-800) hover:bg-white/95 whitespace-nowrap"
            >
              Agendar Fisioterapia
            </WhatsAppButton>

            <WhatsAppButton
              href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20as%20aulas%20de%20pilates."
              aria-label="Agendar aula de Pilates pelo WhatsApp"
              className="w-full min-[700px]:w-auto block border-none rounded-full cursor-pointer text-base min-[700px]:text-sm xl:text-base font-bold text-center px-6 min-[700px]:px-4.5 xl:px-7 py-2.5 min-[700px]:py-2 xl:py-2.5 transition-all duration-400 bg-white/17 text-white hover:bg-white/34 whitespace-nowrap"
            >
              Agendar Pilates
            </WhatsAppButton>

            <WhatsAppButton
              href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20os%20atendimentos%20de%20quiropraxia."
              aria-label="Agendar atendimento de Quiropraxia pelo WhatsApp"
              className="w-full min-[700px]:w-auto block border-none rounded-full cursor-pointer text-base min-[700px]:text-sm xl:text-base font-bold text-center px-6 min-[700px]:px-4.5 xl:px-7 py-2.5 min-[700px]:py-2 xl:py-2.5 transition-all duration-400 bg-white/17 text-white hover:bg-white/34 whitespace-nowrap"
            >
              Agendar Quiropraxia
            </WhatsAppButton>
          </div>
        </div>
        <Image
          src="/kauane-ramos-fisioterapia-pelotas.webp"
          alt="Kauane Ramos - Fisioterapeuta especializada em fisioterapia, pilates e quiropraxia em Pelotas"
          width={810}
          height={1013}
          priority
          className="hidden lg:block absolute bottom-0 right-0 z-0 w-auto h-auto lg:max-w-[340px] xl:max-w-[370px] pointer-events-none"
        />
      </main>
    </div>
  );
}
