import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-(--color-emerald-800) text-white py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="order-last sm:order-first pt-2 sm:pt-0 text-center sm:text-left">
            <p className="text-sm">&copy; {new Date().getFullYear()} Clínica Reabilitare. Todos os direitos reservados.</p>
            <p className="text-xs text-white/70 mt-0.5">
              Fisioterapeuta responsável: Kauane Ramos &mdash; CREFITO-5:
              375851-F
            </p>
          </div>
          <nav aria-label="Links de especialidades no rodapé" className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-white/90">
            <Link href="/fisioterapia-pelotas" className="hover:text-white underline-offset-4 hover:underline">
              Fisioterapia em Pelotas
            </Link>
            <Link href="/pilates-pelotas" className="hover:text-white underline-offset-4 hover:underline">
              Pilates em Pelotas
            </Link>
            <Link href="/fisioterapia-pilates-pelotas" className="hover:text-white underline-offset-4 hover:underline">
              Fisioterapia e Pilates
            </Link>
          </nav>
          <a
            href="https://www.instagram.com/clinicareabilitare.fisio/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-gray-100 transition"
            aria-label="Instagram da Clínica Reabilitare"
            role="link"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.5 2C4.46 2 2 4.46 2 7.5v9C2 19.54 4.46 22 7.5 22h9c3.04 0 5.5-2.46 5.5-5.5v-9C22 4.46 19.54 2 16.5 2h-9zm0 2h9c2 0 3.5 1.5 3.5 3.5v9c0 2-1.5 3.5-3.5 3.5h-9C5.5 20 4 18.5 4 16.5v-9C4 5.5 5.5 4 7.5 4zm4.5 3a5.5 5.5 0 100 11 5.5 5.5 0 100-11zm0 2a3.5 3.5 0 110 7 3.5 3.5 0 110-7zm4.75-.5a1.25 1.25 0 110 2.5 1.25 1.25 0 110-2.5z"></path>
            </svg>
            <span>Siga-nos no Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
