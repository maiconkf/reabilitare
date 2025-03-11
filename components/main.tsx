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
          <div className="md:flex flex-wrap">
            <a
              href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20os%20tratamento%20de%20fisioterapia."
              target="_blank"
              className="mr-3 mb-3 block"
            >
              <button className="border-none rounded-full cursor-pointer text-lg font-bold leading-5 px-9 py-2.5 transition-all duration-400 bg-white text-(--color-emerald-400) hover:bg-white/95">
                Agendar Fisioterapia
              </button>
            </a>
            <a
              href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20os%20tratamento%20de%20pilates."
              target="_blank"
              className="block"
            >
              <button className="border-none rounded-full cursor-pointer text-lg font-bold leading-5 px-9 py-2.5 transition-all duration-400 bg-white/17 text-white hover:bg-white/34">
                Agendar Pilates
              </button>
            </a>
          </div>
        </div>
        <Image
          src="/kauane-ramos-fiseoterapia-pelotas.png"
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
