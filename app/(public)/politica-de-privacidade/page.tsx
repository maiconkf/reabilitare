import Footer from "@/components/footer";
import Header from "@/components/header";
import InternalHero from "@/components/InternalHero";
import Location from "@/components/location";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPolicy() {
  return (
    <div>
      <Header />
      <InternalHero
        title={<>Política de <strong className="text-emerald-300 font-extrabold">Privacidade</strong></>}
        subtitle="Transparência e segurança no tratamento dos dados dos nossos pacientes."
      />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <main className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-sm space-y-8">
          <section>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
              Última atualização: 21/07/2025
            </p>
            <p className="text-slate-600 leading-relaxed">
              A Clínica Reabilitare respeita a sua privacidade. Esta Política de
              Privacidade explica como coletamos, usamos e protegemos os dados
              pessoais fornecidos por você ao interagir com nosso serviço de
              lembretes via WhatsApp.
            </p>
          </section>

          <hr className="border-t border-slate-100" role="presentation" />

          <section>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
              Quais dados coletamos
            </h2>
            <p className="text-slate-600 mb-3 leading-relaxed">
              Para enviar lembretes de consultas e aulas, podemos coletar os
              seguintes dados:
            </p>
            <ul className="space-y-1.5 text-slate-600">
              <li>• Nome completo</li>
              <li>• Número de telefone</li>
              <li>• Data e horário da consulta ou aula</li>
              <li>• Confirmação de presença (sim/não)</li>
            </ul>
          </section>

          <hr className="border-t border-slate-100" role="presentation" />

          <section>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
              Como usamos os dados
            </h2>
            <p className="text-slate-600 mb-3 leading-relaxed">
              Seus dados são usados exclusivamente para gestão e confirmação de agendamentos:
            </p>
            <ul className="space-y-1.5 text-slate-600">
              <li>• Identificação do paciente</li>
              <li>• Envio de notificações e lembretes pelo WhatsApp</li>
              <li>• Organização da agenda de consultas e aulas</li>
            </ul>
            <p className="text-slate-600 mt-3 leading-relaxed">
              Não compartilhamos seus dados com terceiros, exceto quando exigido
              por lei.
            </p>
          </section>

          <hr className="border-t border-slate-100" role="presentation" />

          <section>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
              Segurança dos dados
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Adotamos medidas técnicas e organizacionais para proteger seus
              dados contra acesso não autorizado, perda ou divulgação indevida.
            </p>
          </section>

          <hr className="border-t border-slate-100" role="presentation" />

          <section>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
              Contato
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Se tiver dúvidas sobre esta política ou sobre o uso dos seus
              dados, fale com a gente:
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
