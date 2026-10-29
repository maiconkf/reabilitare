import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import WhatsAppButton from "./WhatsAppButton";

const partners = [
  { name: "PrevPel", src: "/prevpel.webp", width: 128, height: 78 },
  { name: "IBCM", src: "/ibcm.webp", width: 128, height: 78 },
  { name: "ASPRA", src: "/aspra.webp", width: 120, height: 120 },
  { name: "ASSTBM", src: "/asstbm.webp", width: 130, height: 130 },
];

export default function Agreements() {
  return (
    <section
      id="convenios"
      className="bg-white py-20 sm:py-24 border-y border-slate-200/70 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 border border-emerald-200/80 px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Facilidades &amp; Parcerias
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Convênios <span className="text-emerald-800">Atendidos</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Trabalhamos com atendimentos particulares e convênios parceiros em Pelotas para facilitar o seu acesso a um tratamento de excelência.
            </p>
          </div>
        </ScrollReveal>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-7 items-stretch">
          {partners.map((partner, idx) => (
            <ScrollReveal key={partner.name} delay={idx * 100}>
              <li className="group flex flex-col justify-center items-center bg-slate-50/80 border border-slate-200/80 rounded-3xl p-6 sm:p-8 h-44 hover:bg-white hover:border-emerald-500/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex-1 flex items-center justify-center">
                  <Image
                    width={partner.width}
                    height={partner.height}
                    src={partner.src}
                    alt={partner.name}
                    className="max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    style={{ width: "auto" }}
                    loading="lazy"
                  />
                </div>
                <span className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-emerald-800 transition-colors">
                  {partner.name}
                </span>
              </li>
            </ScrollReveal>
          ))}
        </ul>

        <ScrollReveal delay={200}>
          <div className="mt-12 rounded-2xl bg-emerald-50/70 border border-emerald-200/70 p-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="font-bold text-slate-900 text-base">
                Dúvidas sobre cobertura ou planos particulares?
              </p>
              <p className="text-sm text-slate-600 mt-0.5">
                Nossa equipe verifica as condições do seu convênio ou pacotes de sessões rapidamente pelo WhatsApp.
              </p>
            </div>
            <WhatsAppButton
              href="https://wa.me/5553991669801?text=Olá%2C%20gostaria%20de%20saber%20sobre%20atendimento%20por%20convênio%20ou%20particular."
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-emerald-900 hover:bg-emerald-800 text-white font-bold text-sm px-6 py-3 transition-all shadow-sm hover:shadow-md"
              aria-label="Consultar convênios pelo WhatsApp"
            >
              <span>Consultar Condições</span>
              <span>→</span>
            </WhatsAppButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
