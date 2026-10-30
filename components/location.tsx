import ScrollReveal from "./ScrollReveal";
import WhatsAppButton from "./WhatsAppButton";

export default function Location() {
  return (
    <section
      id="localizacao"
      className="py-20 sm:py-24 bg-[#f8faf9] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 border border-emerald-200/80 px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Onde Estamos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Nossa Localização em{" "}
              <span className="text-emerald-800">Pelotas</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Ambiente moderno, climatizado e de fácil acesso na Av. Bento
              Gonçalves para o seu conforto e bem-estar.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white rounded-[32px] border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-900/[0.03]">
            {/* Left Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full mb-3">
                    Clínica Reabilitare
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    Venha nos visitar no Bairro Areal
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* Address item */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-emerald-900 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Endereço
                      </p>
                      <p className="text-slate-900 font-bold text-sm sm:text-base mt-0.5">
                        Av. Bento Gonçalves, 2146
                      </p>
                      <p className="text-slate-600 text-sm">
                        Bairro Areal · Pelotas/RS · CEP 96015-140
                      </p>
                    </div>
                  </div>

                  {/* Hours item */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-emerald-900 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Horário de Atendimento
                      </p>
                      <p className="text-slate-900 font-bold text-sm sm:text-base mt-0.5">
                        Segunda a Sexta: 08h às 20h
                      </p>
                      <p className="text-slate-600 text-sm">
                        Atendimento com hora marcada
                      </p>
                    </div>
                  </div>

                  {/* Contact item */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-emerald-900 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Telefone &amp; WhatsApp
                      </p>
                      <p className="text-slate-900 font-bold text-sm sm:text-base mt-0.5">
                        (53) 99166-9801
                      </p>
                      <p className="text-slate-600 text-sm">
                        Fisioterapeuta Resp.: Dra. Kauane Ramos
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://maps.app.goo.gl/S4y6tkkLfFWxKYir8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-900 hover:bg-emerald-800 text-white font-bold text-sm px-6 py-3.5 transition-all shadow-md hover:shadow-lg"
                >
                  <span>🗺️ Traçar Rota no Maps</span>
                </a>
                <WhatsAppButton
                  href="https://wa.me/5553991669801?text=Olá%2C%20gostaria%20de%20agendar%20uma%20avaliação%20na%20Clínica%20Reabilitare."
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white hover:bg-emerald-50 hover:border-emerald-200 text-slate-800 hover:text-emerald-900 font-bold text-sm px-6 py-3.5 transition-colors"
                  aria-label="Agendar pelo WhatsApp"
                >
                  <span>Falar no WhatsApp</span>
                </WhatsAppButton>
              </div>
            </div>

            {/* Right Map Column */}
            <div className="lg:col-span-7">
              <div className="relative w-full h-80 sm:h-96 lg:h-full min-h-[360px] rounded-2xl overflow-hidden border border-slate-200/80 shadow-inner bg-slate-100">
                <iframe
                  title="Mapa de localização da Clínica Reabilitare em Pelotas"
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_API_KEY}&q=Cl%C3%ADnica+Reabilitare+Fisioterapia+e+Pilates,+Pelotas+-+RS`}
                  className="w-full h-full min-h-[360px] border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
