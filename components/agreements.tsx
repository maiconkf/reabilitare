import Image from "next/image";

export default function Agreements() {
  return (
    <section id="convenios" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-(--color-emerald-400) mb-6">
          Convênios Atendidos
        </h2>
        <p className="text-lg lg:text-xl text-center text-gray-600 mb-12">
          Atendemos diversos convênios para facilitar o seu tratamento.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div className="flex justify-center items-center">
            <Image
              width={120}
              height={80}
              src="/prevpel.png"
              alt="PrevPel"
              className="h-20 grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              width={120}
              height={80}
              src="/ibcm.png"
              alt="IBCM"
              className="h-20 grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              width={120}
              height={120}
              src="/aspra.png"
              alt="ASPRA"
              className="grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              width={130}
              height={130}
              src="/asstbm.webp"
              alt="ASSTBM"
              className="grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
