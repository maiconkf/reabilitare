import Footer from "@/components/footer";
import Header from "@/components/header";
import InternalHero from "@/components/InternalHero";
import Location from "@/components/location";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  alternates: {
    canonical: "/termos-de-uso",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsOfUse() {
  return (
    <div>
      <Header />
      <InternalHero
        title={<>Termos de <strong className="text-emerald-300 font-extrabold">Uso</strong></>}
        subtitle="Informações sobre a utilização dos nossos canais digitais e lembretes de agendamento."
      />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <main className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-sm space-y-8">
          <section>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
              Última atualização: 21/07/2025
            </p>
            <p className="text-slate-600 leading-relaxed">
              Ao utilizar nossos serviços de lembrete de consultas e aulas via
              WhatsApp, você concorda com os termos descritos abaixo. Leia
              atentamente antes de continuar utilizando o serviço.
            </p>
          </section>

          <hr className="border-t border-slate-100" role="presentation" />

          <section>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
              Uso do serviço
            </h2>
            <p className="text-slate-600 mb-2 leading-relaxed">
              O serviço de lembretes por WhatsApp tem como objetivo facilitar a
              comunicação entre a Clínica Reabilitare e seus pacientes,
              informando datas e horários de consultas e aulas agendadas.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Este serviço é gratuito e opcional, podendo ser cancelado a
              qualquer momento mediante solicitação.
            </p>
          </section>

          <hr className="border-t border-slate-100" role="presentation" />

          <section>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
              Responsabilidades do usuário
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Ao aceitar receber mensagens via WhatsApp, o usuário declara que o
              número informado pertence a ele e que autoriza o recebimento de
              lembretes e comunicações relacionadas aos atendimentos da Clínica
              Reabilitare.
            </p>
          </section>

          <hr className="border-t border-slate-100" role="presentation" />

          <section>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
              Limitações
            </h2>
            <p className="text-slate-600 leading-relaxed">
              A Clínica Reabilitare não se responsabiliza por falhas no
              recebimento das mensagens causadas por problemas no WhatsApp, na
              rede do usuário ou por informações de contato incorretas.
            </p>
          </section>

          <hr className="border-t border-slate-100" role="presentation" />

          <section>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
              Alterações nos termos
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Estes Termos de Uso podem ser atualizados a qualquer momento.
              Recomendamos que o usuário revise este conteúdo periodicamente
              para estar ciente de possíveis mudanças.
            </p>
          </section>

          <hr className="border-t border-slate-100" role="presentation" />

          <section>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
              Contato
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Para dúvidas ou solicitações relacionadas a este serviço, entre em
              contato conosco:
            </p>
            <ul className="text-slate-600 mt-3 space-y-1.5">
              <li>📧 kauanerfisio@gmail.com</li>
              <li>📞 (53) 99166-9801</li>
              <li>📍 Av. Bento Gonçalves, 2146 - Pelotas, RS</li>
            </ul>
          </section>
        </main>
      </div>
      <Location />
      <Footer />
    </div>
  );
}
