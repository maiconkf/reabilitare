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

export default function PrivacyPolicy() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 pt-25">
        <main className="pt-4 pb-12 md:pb-0">
          <section>
            <h1 className="text-3xl font-extrabold text-(--color-emerald-800) mb-1">
              Política de Privacidade – Clínica Reabilitare
            </h1>

            <p className="text-gray-600 mb-2">Última atualização: 21/07/2025</p>
            <p className="text-gray-600 mb-2">
              A Clínica Reabilitare respeita a sua privacidade. Esta Política de
              Privacidade explica como coletamos, usamos e protegemos os dados
              pessoais fornecidos por você ao interagir com nosso serviço de
              lembretes via WhatsApp.
            </p>
          </section>

          <hr className="my-8 border-t border-gray-200" role="presentation" />

          <section>
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Quais dados coletamos
            </h2>
            <p className="text-gray-600 mb-2">
              Para enviar lembretes de consultas e aulas, podemos coletar os
              seguintes dados:
            </p>
            <ul>
              <li className="mb-1">- Nome completo</li>
              <li className="mb-1">- Número de telefone</li>
              <li className="mb-1">- Data e horário da consulta ou aula</li>
              <li className="mb-1">- Confirmação de presença (sim/não)</li>
            </ul>
          </section>

          <hr className="my-8 border-t border-gray-200" role="presentation" />

          <section>
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Como usamos os dados
            </h2>
            <p className="text-gray-600 mb-2">
              Seus dados são usados exclusivamente para:
            </p>
            <ul>
              <li className="mb-1">- Nome completo</li>
              <li className="mb-1">- Número de telefone</li>
              <li className="mb-1">- Data e horário da consulta ou aula</li>
              <li className="mb-1">- Confirmação de presença (sim/não)</li>
            </ul>
            <p className="text-gray-600 mt-2">
              Não compartilhamos seus dados com terceiros, exceto quando exigido
              por lei.
            </p>
          </section>

          <hr className="my-8 border-t border-gray-200" role="presentation" />

          <section>
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Segurança dos dados
            </h2>
            <p className="text-gray-600">
              Adotamos medidas técnicas e organizacionais para proteger seus
              dados contra acesso não autorizado, perda ou divulgação indevida.
            </p>
          </section>

          <hr className="my-8 border-t border-gray-200" role="presentation" />

          <section>
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Contato
            </h2>
            <p className="text-gray-600">
              Se tiver dúvidas sobre esta política ou sobre o uso dos seus
              dados, fale com a gente:
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
