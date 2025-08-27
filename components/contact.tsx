const Contact = () => {
  return (
    <section id="contato">
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
          <a
            href="https://wa.me/5553991669801"
            target="_blank"
            className="text-(--color-emerald-800) hover:underline"
          >
            Clique aqui para falar conosco
          </a>
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
