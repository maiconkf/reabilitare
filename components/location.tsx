import Image from "next/image";

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

      <div className="w-full h-80 rounded-lg overflow-hidden relative">
        <a
          href="https://maps.app.goo.gl/v9oi4SFsH5MgpuSb7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={`https://maps.googleapis.com/maps/api/staticmap?center=Rua+Vítor+Russomano+142,+Areal,+Pelotas,+RS&zoom=15&size=1920x320&scale=2&markers=color:red%7CRua+Vítor+Russomano+142,+Areal,+Pelotas,+RS&key=${process.env.NEXT_PUBLIC_API_KEY}`}
            alt="Localização da Clínica"
            fill
            className="object-cover rounded-lg"
            loading="lazy"
            sizes="100vw"
            priority={false}
          />
        </a>
      </div>
    </section>
  );
}
