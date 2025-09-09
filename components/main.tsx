import Image from "next/image";

export default function Main() {
  return (
    <div className="container mx-auto px-4 pt-20">
      <main className="md:flex justify-between items-center pt-4 pb-12 md:pb-0">
        <div className="max-w-xl">
          <h1 className="text-3xl text-white mb-4 lg:text-5xl">
            Recupere sua liberdade de <em>movimento</em> e{" "}
            <strong>viva sem dor</strong>!
          </h1>
          <h2 className="text-md lg:text-lg max-w-lg font-medium text-white mb-6 md:mb-8 leading-relaxed">
            Tratamentos personalizados de <strong>Fisioterapia</strong> e{" "}
            <strong>Pilates</strong> para alívio da dor, fortalecimento e
            qualidade de vida.
          </h2>
          <div className="flex flex-wrap justify-between w-100% max-w-[484px]">
            <a
              href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20os%20tratamento%20de%20fisioterapia."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar avaliação de Fisioterapia pelo WhatsApp"
              className="sm:mr-3 mb-3 lg:mb-0 block border-none rounded-full cursor-pointer text-lg font-bold text-center px-9 py-2.5 transition-all duration-400 bg-white text-(--color-emerald-800) hover:bg-white/95"
            >
              Agendar Fisioterapia
            </a>

            <a
              href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20as%20aulas%20de%20pilates."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar aula de Pilates pelo WhatsApp"
              className="mb-3 lg:mb-0 block border-none rounded-full cursor-pointer text-lg font-bold text-center px-9 py-2.5 transition-all duration-400 bg-white/17 text-white hover:bg-white/34"
            >
              Agendar Pilates
            </a>
          </div>
        </div>
        <Image
          src="/kauane-ramos-fiseoterapia-pelotas.webp"
          alt="Foto da profissional Kauane Ramos"
          width={405}
          height={506}
          priority
          className="hidden md:block"
        />
      </main>
    </div>
  );
}
