import Script from "next/script";

const Ratings = () => {
  return (
    <section className="bg-(--color-emerald-800)">
      <div className="container mx-auto px-4 py-16">
        <Script
          src="https://elfsightcdn.com/platform.js"
          async
          strategy="lazyOnload"
        />
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-white mb-6">
            Avaliações dos Clientes
          </h2>
          <div
            className="elfsight-app-3437bd51-49a4-4264-9c5d-12fcdd682f13"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
};

export default Ratings;
