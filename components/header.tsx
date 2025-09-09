import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";

export default function Header() {
  return (
    <header className="py-3 bg-(--color-emerald-800) fixed z-10 w-full">
      <div className="flex justify-between items-center container mx-auto px-4">
        <Link href="/" className="block">
          <Image
            src="/reabilitare-logo-white.webp"
            width={130}
            height={46}
            alt="Reabilitare logotipo"
          />
        </Link>
        <div className="flex justify-end items-center gap-6">
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Navegação principal"
          >
            <Link
              href="/#servicos"
              className="text-white hover:text-gray-100 transition"
            >
              Serviços
            </Link>
            <Link
              href="/#convenios"
              className="text-white hover:text-gray-100 transition"
            >
              Convênios
            </Link>
            <Link
              href="/#localizacao"
              className="text-white hover:text-gray-100 transition"
            >
              Localização
            </Link>
          </nav>
          <WhatsAppButton
            href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20os%20tratamentos%20de%20fisioterapia%20e%20pilates."
            className="block border-none rounded-full cursor-pointer text-md font-bold leading-5 px-5 py-1.5 transition-all duration-400 bg-white text-(--color-emerald-800) hover:bg-white/95"
            aria-label="Agendar atendimento pelo WhatsApp"
          >
            Agendar
          </WhatsAppButton>
        </div>
      </div>
    </header>
  );
}
