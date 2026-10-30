import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
  return (
    <>
      <footer className="bg-emerald-950 text-white pt-16 pb-10 border-t border-emerald-900/80 relative overflow-hidden">
        {/* Ambient subtle glow */}
        <div className="pointer-events-none absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
              {/* Brand Column */}
              <div className="lg:col-span-5 space-y-4">
                <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
                  <Image
                    src="/reabilitare-logo-white.webp"
                    width={140}
                    height={50}
                    alt="Clínica Reabilitare"
                    loading="lazy"
                    className="h-11 w-auto"
                  />
                </Link>
                <p className="text-sm text-emerald-100/75 max-w-sm leading-relaxed">
                  Clínica especializada em Fisioterapia, Pilates Clínico e Quiropraxia em Pelotas/RS. Tratamentos personalizados para restaurar seu movimento e bem-estar.
                </p>
                <div className="inline-flex items-center gap-2 rounded-xl bg-white/[0.06] border border-white/10 px-3.5 py-2 text-xs text-emerald-200 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Resp. Técnica: Dra. Kauane Ramos — CREFITO-5: 375851-F</span>
                </div>
              </div>

              {/* Specialties Links */}
              <div className="lg:col-span-3 space-y-3">
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-emerald-300">
                  Especialidades
                </h3>
                <ul className="space-y-2.5 text-sm text-emerald-100/80">
                  <li>
                    <Link href="/fisioterapia-pelotas" className="hover:text-white transition-colors">
                      Fisioterapia em Pelotas
                    </Link>
                  </li>
                  <li>
                    <Link href="/pilates-pelotas" className="hover:text-white transition-colors">
                      Estúdio de Pilates em Pelotas
                    </Link>
                  </li>
                  <li>
                    <Link href="/quiropraxia-pelotas" className="hover:text-white transition-colors inline-flex items-center gap-2">
                      <span>Quiropraxia em Pelotas</span>
                      <span className="bg-amber-400 text-emerald-950 text-[10px] font-extrabold uppercase px-1.5 py-0.2 rounded-full">
                        Novo
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/fisioterapia-pilates-quiropraxia-pelotas" className="hover:text-white transition-colors">
                      Tratamentos Integrados
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact & Social */}
              <div className="lg:col-span-4 space-y-4">
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-emerald-300">
                  Atendimento &amp; Redes Sociais
                </h3>
                <p className="text-sm text-emerald-100/80 leading-relaxed">
                  📍 Av. Bento Gonçalves, 2146 — Bairro Areal, Pelotas/RS
                  <br />
                  🕒 Seg a Sex: 08h às 20h · 📞 (53) 99166-9801
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href="https://www.instagram.com/clinicareabilitare.fisio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
                    aria-label="Instagram da Clínica Reabilitare"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.5 2C4.46 2 2 4.46 2 7.5v9C2 19.54 4.46 22 7.5 22h9c3.04 0 5.5-2.46 5.5-5.5v-9C22 4.46 19.54 2 16.5 2h-9zm0 2h9c2 0 3.5 1.5 3.5 3.5v9c0 2-1.5 3.5-3.5 3.5h-9C5.5 20 4 18.5 4 16.5v-9C4 5.5 5.5 4 7.5 4zm4.5 3a5.5 5.5 0 100 11 5.5 5.5 0 100-11zm0 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm4.75-.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                    </svg>
                    <span>@clinicareabilitare.fisio</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Legal Bar */}
            <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-emerald-200/60">
              <p>
                &copy; {new Date().getFullYear()} Clínica Reabilitare. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-6">
                <Link href="/termos-de-uso" className="hover:text-white transition-colors">
                  Termos de Uso
                </Link>
                <Link href="/politica-de-privacidade" className="hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppButton
        href="https://wa.me/5553991669801?text=Olá%2C%20vim%20pelo%20site%20da%20Clínica%20Reabilitare%20e%20gostaria%20de%20agendar%20um%20atendimento."
        aria-label="Falar com a Clínica Reabilitare pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 group flex items-center gap-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm pl-4 pr-5 py-3.5 shadow-2xl shadow-emerald-950/30 border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
        <span className="hidden sm:inline">Agendar pelo WhatsApp</span>
        <span className="sm:hidden">Agendar</span>
      </WhatsAppButton>
    </>
  );
}
