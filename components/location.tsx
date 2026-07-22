import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Location() {
  return (
    <section id="localizacao" className="bg-gray-50 pt-20">
      <div className="container mx-auto px-4 mb-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-(--color-emerald-800) bg-emerald-100/80 px-3.5 py-1 rounded-full inline-block mb-3">
              Onde Estamos
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-(--color-emerald-800) mb-4">
              Nossa Localização em Pelotas
            </h2>
            <p className="text-base lg:text-lg text-gray-600 mb-6">
              Venha nos visitar! Estamos em um local de fácil acesso.
            </p>

            <div className="inline-flex flex-wrap justify-center gap-3 text-sm text-gray-700 bg-white border border-gray-200/80 rounded-2xl p-4 shadow-xs">
              <span className="font-semibold text-(--color-emerald-800) flex items-center gap-1.5">
                📍 Av. Bento Gonçalves, 2146 &ndash; Areal, Pelotas/RS
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <a
        href="https://maps.app.goo.gl/S4y6tkkLfFWxKYir8"
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-full h-80 overflow-hidden group shadow-md"
      >
        <Image
          src={`https://maps.googleapis.com/maps/api/staticmap?center=Av.+Bento+Gonçalves+2146,+Areal,+Pelotas,+RS&zoom=15&size=1920x320&scale=2&markers=color:red%7CAv.+Bento+Gonçalves+2146,+Areal,+Pelotas,+RS&key=${process.env.NEXT_PUBLIC_API_KEY}`}
          alt="Localização da Clínica Reabilitare"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
          <span className="bg-white text-(--color-emerald-800) font-bold text-sm px-5 py-2.5 rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300">
            🗺️ Abrir no Google Maps
          </span>
        </div>
      </a>
    </section>
  );
}
