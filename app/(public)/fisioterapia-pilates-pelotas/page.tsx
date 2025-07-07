import Footer from "@/components/footer";
import Header from "@/components/header";
import Location from "@/components/location";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fisioterapia e Pilates em Pelotas",
  description:
    "Encontre alívio para suas dores com Fisioterapia especializada e aulas de Pilates em Pelotas. Tratamento personalizado para reabilitação e bem-estar.",
  alternates: {
    canonical: "/fisioterapia-pilates-pelotas",
  },
  openGraph: {
    title: "Fisioterapia e Pilates em Pelotas | Clínica Reabilitare",
    description:
      "Tratamento personalizado para reabilitação e bem-estar no bairro Areal.",
    url: "https://www.clinicareabilitare.com/fisioterapia-pilates-pelotas",
    images: "/cover-fisioterapia.png",
  },
  twitter: {
    title: "Fisioterapia e Pilates em Pelotas | Clínica Reabilitare",
    description:
      "Tratamento personalizado para reabilitação e bem-estar no bairro Areal.",
    images: ["/cover-fisioterapia.png"],
  },
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Physiotherapy",
                name: "Clínica Reabilitare",
                description:
                  "Página sobre Fisioterapia e Pilates em Pelotas. Oferecemos tratamentos para reabilitação, lesões, pós-operatório, correção postural e alívio de dores.", // Descrição específica da página
                url: "https://www.clinicareabilitare.com/fisioterapia-pilates-pelotas",
                logo: "https://www.clinicareabilitare.com/logo-reabilitare.jpg",
                image: "https://www.clinicareabilitare.com/foto-clinica.jpg",
                telephone: "+5553991669801",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Rua Dr. Vítor Russomano, 142",
                  addressLocality: "Pelotas",
                  addressRegion: "RS",
                  postalCode: "96077-620",
                  addressCountry: "BR",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+5553991669801",
                  contactType: "customer service",
                  areaServed: "BR",
                  availableLanguage: "Portuguese",
                },
                sameAs: ["https://www.instagram.com/clinicareabilitare.fisio"],
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                    ],
                    opens: "08:00",
                    closes: "20:00",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Preciso de encaminhamento médico para fazer Fisioterapia?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Embora o encaminhamento seja bem-vindo, não é obrigatório para realizar uma avaliação. Nossos fisioterapeutas são capacitados para avaliar sua condição e, se necessário, indicar a consulta com um médico especialista.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Pilates é indicado para quem tem dor na coluna?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sim! O Pilates, especialmente o clínico orientado por um fisioterapeuta, é uma das melhores atividades para quem sofre com dores na coluna, pois fortalece os músculos profundos que a sustentam.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Quantas sessões são necessárias?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "O número de sessões varia conforme a condição de cada paciente. Após uma avaliação detalhada, nosso profissional irá estimar um plano de tratamento e a frequência ideal para você.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "O plano de saúde cobre as sessões?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Trabalhamos com diversas modalidades de atendimento. Entre em contato para verificar a cobertura do seu plano ou as opções de reembolso.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
      <Header />
      <div className="container mx-auto px-4 pt-25">
        <main className="pt-4 pb-12 md:pb-0">
          <section>
            <h1 className="text-3xl font-extrabold text-(--color-emerald-800) mb-6">
              Fisioterapia e Pilates em Pelotas: Sua jornada para o bem-estar
              começa aqui
            </h1>

            <p className="text-gray-600 mb-2">
              Você está em Pelotas e busca uma solução eficaz para dores, lesões
              ou simplesmente quer melhorar sua qualidade de vida? Seja
              bem-vindo à Clínica Reabilitare, seu centro de referência em{" "}
              <strong>Fisioterapia e Pilates</strong> na região.
            </p>
            <p className="text-gray-600 mb-2">
              Nossa missão é combinar as técnicas mais avançadas de reabilitação
              com os benefícios transformadores do Pilates, oferecendo um
              tratamento completo e personalizado. Entendemos que cada corpo é
              único, e por isso, criamos um plano de cuidado focado nas suas
              necessidades específicas para você viver sem dor e com mais
              movimento.
            </p>
          </section>

          <hr className="my-8 border-t border-gray-200" role="presentation" />

          <section>
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Fisioterapia em Pelotas: Reabilitação e Cuidado Especializado
            </h2>
            <p className="text-gray-600 mb-8">
              A dor não precisa ser uma constante em sua vida. Nossa equipe de
              fisioterapeutas altamente qualificados está pronta para
              diagnosticar e tratar a causa do seu problema, utilizando
              abordagens modernas e eficazes.
            </p>

            <h3 className="text-xl font-semibold text-(--color-emerald-800) mb-4">
              Nossos Tratamentos de Fisioterapia Incluem:
            </h3>
            <ul>
              <li className="mb-2">
                <strong>Tratamento de Lesões e Reabilitação:</strong> Cuidado
                especializado para uma recuperação completa e individualizada
                após lesões musculares, articulares, ligamentares e traumas.
              </li>
              <li className="mb-2">
                <strong>Recuperação Pós-Operatória:</strong> Suporte dedicado
                para acelerar e otimizar seu processo de recuperação após
                cirurgias, restaurando a mobilidade, a força e garantindo seu
                conforto.
              </li>
              <li className="mb-2">
                <strong>Correção Postural:</strong> Análise e tratamento de
                desvios posturais com exercícios específicos para alinhar o
                corpo, prevenir dores crônicas e aliviar tensões musculares.
              </li>
              <li className="mb-2">
                <strong>Alívio de Dores:</strong> Foco em tratamentos para o
                alívio rápido e eficaz de dores agudas e crônicas na coluna,
                articulações e músculos, atacando a causa do problema.
              </li>
            </ul>
            <p className="text-lg  text-gray-600 my-4">
              <strong>
                Não espere a dor piorar. Agende sua avaliação de fisioterapia em
                Pelotas e inicie sua recuperação!
              </strong>
            </p>
            <a
              href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20os%20tratamento%20de%20fisioterapia."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mr-3 mb-3 border-none rounded-full cursor-pointer text-lg font-bold leading-5 px-9 py-2.5 transition-all duration-400 bg-(--color-emerald-800) text-white hover:bg-(--color-emerald-800)/90"
              aria-label="Agendar avaliação de Fisioterapia pelo WhatsApp"
            >
              Agendar Fisioterapia
            </a>
          </section>

          <hr className="my-8 border-t border-gray-200" role="presentation" />

          <section>
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Pilates em Pelotas: Força, Flexibilidade e Consciência Corporal
            </h2>
            <p className="text-gray-600 mb-8">
              O Pilates é mais do que um exercício, é uma ferramenta poderosa
              para fortalecer o corpo de dentro para fora, prevenir lesões e
              complementar seu tratamento fisioterapêutico. Em nosso estúdio de{" "}
              <strong>Pilates em Pelotas</strong>, oferecemos um ambiente
              acolhedor e equipamentos modernos.
            </p>

            <h3 className="text-xl font-semibold text-(--color-emerald-800) mb-4">
              Benefícios do Pilates na Clínica Reabilitare:
            </h3>
            <ul>
              <li className="mb-2">
                <strong>Prevenção de Lesões e Condicionamento Físico:</strong>{" "}
                Fortaleça seu corpo de forma inteligente e global, melhorando a
                resistência e criando uma estrutura muscular sólida para evitar
                futuras lesões.
              </li>
              <li className="mb-2">
                <strong>Aumento da Flexibilidade e Mobilidade:</strong> Sinta
                seu corpo mais livre, ágil e com maior amplitude de movimento
                para as atividades do dia a dia, do lazer ao esporte.
              </li>
              <li className="mb-2">
                <strong>Melhora do Equilíbrio e Coordenação Motora:</strong>{" "}
                Desenvolva maior consciência corporal e controle dos movimentos
                com exercícios que desafiam e aprimoram sua estabilidade.
              </li>
              <li className="mb-2">
                <strong>Fortalecimento do Core:</strong> Construa um centro de
                força robusto, fundamental para a saúde da coluna vertebral,
                melhora da postura e alívio de dores lombares e corporais em
                geral.
              </li>
            </ul>
            <p className="text-lg  text-gray-600 my-4">
              <strong>
                Quer um corpo mais forte e equilibrado? Conheça nossas aulas de
                Pilates em Pelotas!
              </strong>
            </p>
            <a
              href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20os%20tratamento%20de%20pilates."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mr-3 mb-3 border-none rounded-full cursor-pointer text-lg font-bold leading-5 px-9 py-2.5 transition-all duration-400 bg-(--color-emerald-800) text-white hover:bg-(--color-emerald-800)/90"
              aria-label="Agendar aula de Pilates pelo WhatsApp"
            >
              Agendar Pilates
            </a>
          </section>

          <hr className="my-8 border-t border-gray-200" role="presentation" />

          <section>
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Por que Escolher a Clínica Reabilitare em Pelotas?
            </h2>
            <p className="text-gray-600 mb-4">
              Sabemos que existem outras opções, mas nosso compromisso é com o
              seu resultado.
            </p>
            <ul>
              <li>
                <span aria-hidden="true">✅ </span>{" "}
                <strong>Atendimento Personalizado:</strong> Seu plano de
                tratamento é 100% individualizado.
              </li>
              <li>
                <span aria-hidden="true">✅ </span>{" "}
                <strong>Profissionais Qualificados:</strong> Fisioterapeutas com
                vasta experiência e em constante atualização.
              </li>
              <li>
                <span aria-hidden="true">✅ </span>{" "}
                <strong>Ambiente Integrado:</strong> Combine o melhor da
                Fisioterapia e do Pilates em um só lugar.
              </li>
              <li>
                <span aria-hidden="true">✅ </span>{" "}
                <strong>Localização de Fácil Acesso:</strong> No bairro Areal,
                com um espaço pensado para o seu conforto.
              </li>
              <li>
                <span aria-hidden="true">✅ </span>{" "}
                <strong>Foco na Causa:</strong> Não tratamos apenas os sintomas,
                investigamos a origem do problema para uma solução duradoura.
              </li>
            </ul>
          </section>

          <hr className="my-8 border-t border-gray-200" role="presentation" />

          <section>
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Perguntas Frequentes (FAQ)
            </h2>

            <article>
              <h3 className="text-lg font-semibold text-(--color-emerald-800) mb-2">
                Preciso de encaminhamento médico para fazer Fisioterapia?
              </h3>
              <p className="text-gray-600 mb-4">
                Embora o encaminhamento seja bem-vindo, não é obrigatório para
                realizar uma avaliação. Nossos fisioterapeutas são capacitados
                para avaliar sua condição e, se necessário, indicar a consulta
                com um médico especialista.
              </p>
            </article>

            <article>
              <h3 className="text-lg font-semibold text-(--color-emerald-800) mb-2">
                Pilates é indicado para quem tem dor na coluna?
              </h3>
              <p className="text-gray-600 mb-4">
                Sim! O Pilates, especialmente o clínico orientado por um
                fisioterapeuta, é uma das melhores atividades para quem sofre
                com dores na coluna, pois fortalece os músculos profundos que a
                sustentam.
              </p>
            </article>

            <article>
              <h3 className="text-lg font-semibold text-(--color-emerald-800) mb-2">
                Quantas sessões são necessárias?
              </h3>
              <p className="text-gray-600 mb-4">
                O número de sessões varia conforme a condição de cada paciente.
                Após uma avaliação detalhada, nosso profissional irá estimar um
                plano de tratamento e a frequência ideal para você.
              </p>
            </article>

            <article>
              <h3 className="text-lg font-semibold text-(--color-emerald-800) mb-2">
                O plano de saúde cobre as sessões?
              </h3>
              <p className="text-gray-600 mb-4">
                Trabalhamos com diversas modalidades de atendimento. Entre em
                contato para verificar a cobertura do seu plano ou as opções de
                reembolso.
              </p>
            </article>
          </section>

          <hr className="my-8 border-t border-gray-200" role="presentation" />

          <section id="contato">
            <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
              Dê o Primeiro Passo Para uma Vida Sem Dor!
            </h2>
            <p className="text-gray-600 mb-4">
              Chega de adiar seu bem-estar. Nossa equipe está pronta para te
              ajudar a reconquistar sua qualidade de vida.
            </p>
            <p className="text-lg text-gray-700 mb-3">
              <strong>
                Entre em contato agora mesmo e agende sua avaliação inicial!
              </strong>
            </p>

            <ul>
              <li>
                <strong>📞 Telefone:</strong>{" "}
                <a href="tel:+5553991669801">(53) 99166-9801</a>
              </li>

              <li>
                <strong>📱 WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20os%20tratamentos%20de%20fisioterapia%20e%20pilates."
                  target="_blank"
                  className="text-(--color-emerald-800) hover:underline"
                >
                  Clique aqui para falar conosco pelo WhatsApp!
                </a>
              </li>

              <li>
                <strong>📍 Endereço:</strong>{" "}
                <a
                  href="https://www.google.com/maps/place/Cl%C3%ADnica+Reabilitare+Fisioterapia+e+Pilates/@-31.7585982,-52.3278109,17z/data=!3m1!4b1!4m6!3m5!1s0x9511b5629e964ba1:0x2c5bc5a96cb86d4a!8m2!3d-31.7585982!4d-52.3278109!16s%2Fg%2F11vdrq4xrj?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rua Dr. Vítor Russomano, 142, Bairro Areal, Pelotas - RS,
                  96077-620
                </a>
              </li>
            </ul>
          </section>
        </main>
      </div>
      <Location />
      <Footer />
    </div>
  );
}
