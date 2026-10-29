import ScrollReveal from "./ScrollReveal";
import WhatsAppButton from "./WhatsAppButton";

const Contact = () => {
  return (
    <section id="contato" className="mb-4 md:mb-12">
      <ScrollReveal>
        <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 rounded-[32px] overflow-hidden shadow-2xl shadow-emerald-950/15 border border-emerald-800/50 relative">
          {/* Decorative glows */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 px-6 py-12 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-emerald-200 text-xs font-bold uppercase tracking-widest mb-4">
                Atendimento Humanizado
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                Pronto para dar o primeiro passo?
              </h2>
              <p className="text-emerald-100/85 text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Saiba mais sobre nossos serviços de fisioterapia, pilates e quiropraxia em Pelotas. Nossa equipe está pronta para cuidar da sua recuperação.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto lg:mx-0">
                <div className="bg-white/[0.08] rounded-2xl p-4 border border-white/12 backdrop-blur-md">
                  <span className="block text-emerald-300 text-xs font-bold uppercase tracking-wider mb-1">
                    Telefone / WhatsApp
                  </span>
                  <a
                    href="tel:+5553991669801"
                    className="text-white text-lg font-extrabold hover:text-emerald-200 transition-colors"
                  >
                    (53) 99166-9801
                  </a>
                </div>
                <div className="bg-white/[0.08] rounded-2xl p-4 border border-white/12 backdrop-blur-md">
                  <span className="block text-emerald-300 text-xs font-bold uppercase tracking-wider mb-1">
                    Endereço em Pelotas
                  </span>
                  <a
                    href="https://maps.google.com/?q=Av.+Bento+Gonçalves,+2146+-+Areal,+Pelotas+-+RS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm font-semibold leading-snug hover:text-emerald-200 transition-colors block"
                  >
                    Av. Bento Gonçalves, 2146
                    <br />
                    <span className="text-emerald-100/75 font-normal">Bairro Areal, Pelotas - RS</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex flex-col items-center">
              <WhatsAppButton
                href="https://wa.me/5553991669801?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avaliação."
                className="inline-flex items-center gap-3 bg-white text-emerald-950 font-extrabold text-base sm:text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-[1.03] hover:bg-emerald-50 transition-all duration-300 w-full sm:w-auto justify-center"
                aria-label="Fale conosco pelo WhatsApp"
              >
                <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                <span>Falar no WhatsApp</span>
              </WhatsAppButton>
              <span className="mt-3 text-xs text-emerald-200/70">
                Resposta rápida em horário comercial
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Contact;
