import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

export default function Main() {
  return (
    <div className="container mx-auto px-4 pt-20">
      <main className="relative md:flex justify-between items-end pt-4 pb-12 lg:pb-16 xl:pb-20">
        {/* Glows de fundo ambiente */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-full md:max-w-none lg:max-w-[650px] xl:max-w-[720px]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/12 border border-white/20 text-white text-xs md:text-sm font-medium mb-4 backdrop-blur-xs shadow-xs opacity-0 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
            <span>Atendimento Especializado em Pelotas</span>
          </div>

          <h1 className="text-3xl text-white mb-4 lg:text-5xl leading-tight opacity-0 animate-fade-up delay-100">
            <strong>Fisioterapia</strong>, <strong>Pilates</strong> e{" "}
            <strong>Quiropraxia</strong> em Pelotas: Recupere sua liberdade de{" "}
            <em>movimento</em>!
          </h1>
          <h2 className="text-md max-w-2xl lg:max-w-xl font-medium text-white/90 mb-6 md:mb-8 leading-relaxed opacity-0 animate-fade-up delay-200">
            A Clínica Reabilitare é especialista em{" "}
            <strong>fisioterapia em Pelotas</strong>,{" "}
            <strong>pilates em Pelotas</strong> e{" "}
            <strong>quiropraxia em Pelotas</strong>. Tratamentos personalizados para
            alívio da dor, alinhamento vertebral e qualidade de vida.
          </h2>
          <div className="flex flex-col min-[700px]:flex-row flex-wrap gap-2.5 lg:gap-3 w-full max-w-md min-[700px]:max-w-none mx-auto min-[700px]:mx-0 opacity-0 animate-fade-up delay-300">
            <WhatsAppButton
              href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20os%20tratamento%20de%20fisioterapia."
              aria-label="Agendar avaliação de Fisioterapia pelo WhatsApp"
              className="w-full min-[700px]:w-auto block border-none rounded-full cursor-pointer text-base min-[700px]:text-sm xl:text-base font-bold text-center px-6 min-[700px]:px-4.5 xl:px-7 py-2.5 min-[700px]:py-2 xl:py-2.5 transition-all duration-300 bg-white text-(--color-emerald-800) hover:bg-white/95 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              Agendar Fisioterapia
            </WhatsAppButton>

            <WhatsAppButton
              href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20as%20aulas%20de%20pilates."
              aria-label="Agendar aula de Pilates pelo WhatsApp"
              className="w-full min-[700px]:w-auto block border border-white/30 rounded-full cursor-pointer text-base min-[700px]:text-sm xl:text-base font-bold text-center px-6 min-[700px]:px-4.5 xl:px-7 py-2.5 min-[700px]:py-2 xl:py-2.5 transition-all duration-300 bg-white/17 text-white hover:bg-white/30 hover:border-white/50 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              Agendar Pilates
            </WhatsAppButton>

            <WhatsAppButton
              href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20os%20atendimentos%20de%20quiropraxia."
              aria-label="Agendar atendimento de Quiropraxia pelo WhatsApp"
              className="relative w-full min-[700px]:w-auto flex md:block justify-center items-center gap-2 border border-white/30 rounded-full cursor-pointer text-base min-[700px]:text-sm xl:text-base font-bold text-center px-6 min-[700px]:px-4.5 xl:px-7 py-2.5 min-[700px]:py-2 xl:py-2.5 transition-all duration-300 bg-white/17 text-white hover:bg-white/30 hover:border-white/50 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              Agendar Quiropraxia
              <span className="md:absolute md:-top-2.5 md:left-4 bg-amber-500/90 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs backdrop-blur-sm">
                <span className="md:hidden">Novo</span>
                <span className="hidden md:inline">Novidade</span>
              </span>
            </WhatsAppButton>
          </div>
        </div>
        <Image
          src="/kauane-ramos-fisioterapia-pelotas.webp"
          alt="Kauane Ramos - Fisioterapeuta especializada em fisioterapia, pilates e quiropraxia em Pelotas"
          width={810}
          height={1013}
          priority
          className="hidden lg:block absolute bottom-0 right-0 z-0 w-auto h-auto lg:max-w-[390px] xl:max-w-[425px] pointer-events-none opacity-0 animate-fade-in delay-400"
        />
      </main>
    </div>
  );
}
