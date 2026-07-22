import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Agreements() {
  return (
    <section id="convenios" className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-(--color-emerald-800) bg-emerald-100/80 px-3.5 py-1 rounded-full inline-block mb-3">
              Facilidades & Parcerias
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-(--color-emerald-800) mb-4">
              Convênios Atendidos
            </h2>
            <p className="text-base lg:text-lg text-gray-600">
              Atendemos diversos convênios para facilitar o seu tratamento.
            </p>
          </div>
        </ScrollReveal>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 items-center">
          <ScrollReveal delay={0}>
            <li className="flex justify-center items-center bg-gray-50 border border-gray-100 rounded-2xl p-6 h-36 hover:bg-white hover:border-emerald-500/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Image
                width={128}
                height={78}
                src="/prevpel.webp"
                alt="PrevPel"
                className="max-h-20 w-auto object-contain transition-all duration-300"
                style={{ width: "auto" }}
                loading="lazy"
              />
            </li>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <li className="flex justify-center items-center bg-gray-50 border border-gray-100 rounded-2xl p-6 h-36 hover:bg-white hover:border-emerald-500/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Image
                width={128}
                height={78}
                src="/ibcm.webp"
                alt="IBCM"
                className="max-h-20 w-auto object-contain transition-all duration-300"
                style={{ width: "auto" }}
                loading="lazy"
              />
            </li>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <li className="flex justify-center items-center bg-gray-50 border border-gray-100 rounded-2xl p-6 h-36 hover:bg-white hover:border-emerald-500/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Image
                width={120}
                height={120}
                src="/aspra.webp"
                alt="ASPRA"
                className="max-h-20 w-auto object-contain transition-all duration-300"
                loading="lazy"
              />
            </li>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <li className="flex justify-center items-center bg-gray-50 border border-gray-100 rounded-2xl p-6 h-36 hover:bg-white hover:border-emerald-500/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Image
                width={130}
                height={130}
                src="/asstbm.webp"
                alt="ASSTBM"
                className="max-h-20 w-auto object-contain transition-all duration-300"
                loading="lazy"
              />
            </li>
          </ScrollReveal>
        </ul>
      </div>
    </section>
  );
}
