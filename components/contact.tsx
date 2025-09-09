import WhatsAppButton from "./WhatsAppButton";

const Contact = () => {
  return (
    <section id="contato" className="mb-4 md:mb-16">
      <h2 className="text-2xl font-bold text-(--color-emerald-800) mb-4">
        Entre em Contato
      </h2>
      <p className="text-gray-600 mb-4">
        Saiba mais sobre nossos serviços de fisioterapia e pilates em Pelotas e
        agende sua avaliação.
      </p>
      <ul>
        <li>
          <strong>📞 Telefone:</strong>{" "}
          <a href="tel:+5553991669801">(53) 99166-9801</a>
        </li>
        <li>
          <strong>📱 WhatsApp:</strong>{" "}
          <WhatsAppButton
            href="https://wa.me/5553991669801"
            className="text-(--color-emerald-800) hover:underline"
            aria-label="Fale conosco pelo WhatsApp"
          >
            Clique aqui para falar conosco
          </WhatsAppButton>
        </li>
        <li>
          <strong>📍 Endereço:</strong> Rua Dr. Vítor Russomano, 142 – Bairro
          Areal, Pelotas – RS
        </li>
      </ul>
    </section>
  );
};

export default Contact;
