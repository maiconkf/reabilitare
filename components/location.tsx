export default function Location() {
  return (
    <section id="localizacao" className="bg-gray-50 pt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-(--color-emerald-800) mb-6">
          Nossa Localização
        </h2>
        <p className="text-lg lg:text-xl text-center text-gray-600 mb-12">
          Venha nos visitar! Estamos em um local de fácil acesso.
        </p>
      </div>

      <figure className="w-full h-80 rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa da localização da Clínica Reabilitare"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_API_KEY}&q=Rua+Vítor+Russomano+142,+Areal,+Pelotas,+RS`}
        ></iframe>
        <figcaption className="sr-only">
          Mapa da localização da Clínica Reabilitare
        </figcaption>
      </figure>
    </section>
  );
}
