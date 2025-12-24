import Footer from "@/components/footer";
import Header from "@/components/header";
import Location from "@/components/location";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsOfUse() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 pt-25">
        <main className="pt-4 pb-12 md:pb-0">
          <section>
            <h1 className="text-3xl font-extrabold text-(--color-emerald-800) mb-1">
              Termos de Uso – Clínica Reabilitare
            </h1>
            <p className="text-gray-600 mb-2">Última atualização: 21/07/2025</p>
            <p className="text-gray-600 mb-2">
              Ao utilizar nossos serviços de lembrete de consultas e aulas via
              WhatsApp, você concorda com os termos descritos abaixo. Leia
              atentamente antes de continuar utilizando o serviço.
            </p>
          </section>

          <hr className="my-8 border-t border-gray-200" role="presentation" />

          <section>
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Uso do serviço
            </h2>
            <p className="text-gray-600 mb-2">
              O serviço de lembretes por WhatsApp tem como objetivo facilitar a
              comunicação entre a Clínica Reabilitare e seus pacientes,
              informando datas e horários de consultas e aulas agendadas.
            </p>
            <p className="text-gray-600">
              Este serviço é gratuito e opcional, podendo ser cancelado a
              qualquer momento mediante solicitação.
            </p>
          </section>

          <hr className="my-8 border-t border-gray-200" role="presentation" />

          <section>
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Responsabilidades do usuário
            </h2>
            <p className="text-gray-600">
              Ao aceitar receber mensagens via WhatsApp, o usuário declara que o
              número informado pertence a ele e que autoriza o recebimento de
              lembretes e comunicações relacionadas aos atendimentos da Clínica
              Reabilitare.
            </p>
          </section>

          <hr className="my-8 border-t border-gray-200" role="presentation" />

          <section>
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Limitações
            </h2>
            <p className="text-gray-600">
              A Clínica Reabilitare não se responsabiliza por falhas no
              recebimento das mensagens causadas por problemas no WhatsApp, na
              rede do usuário ou por informações de contato incorretas.
            </p>
          </section>

          <hr className="my-8 border-t border-gray-200" role="presentation" />

          <section>
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Alterações nos termos
            </h2>
            <p className="text-gray-600">
              Estes Termos de Uso podem ser atualizados a qualquer momento.
              Recomendamos que o usuário revise este conteúdo periodicamente
              para estar ciente de possíveis mudanças.
            </p>
          </section>

          <hr className="my-8 border-t border-gray-200" role="presentation" />

          <section>
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Contato
            </h2>
            <p className="text-gray-600">
              Para dúvidas ou solicitações relacionadas a este serviço, entre em
              contato conosco:
            </p>
            <ul className="text-gray-600 mt-2">
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
