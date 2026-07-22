import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";

export default function Header() {
  return (
    <header className="py-3 bg-(--color-emerald-800)/90 backdrop-blur-md fixed z-50 w-full border-b border-white/10 shadow-xs transition-all duration-300">
      <div className="flex justify-between items-center container mx-auto px-4">
        <Link href="/" className="block hover:opacity-90 transition-opacity">
          <Image
            src="/reabilitare-logo-white.webp"
            width={130}
            height={46}
            alt="Reabilitare logotipo"
            priority
          />
        </Link>
        <div className="flex justify-end items-center gap-6">
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Navegação principal"
          >
            <Link
              href="/#servicos"
              className="text-white/90 hover:text-white font-medium text-sm transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all hover:after:w-full"
            >
              Serviços
            </Link>
            <Link
              href="/#convenios"
              className="text-white/90 hover:text-white font-medium text-sm transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all hover:after:w-full"
            >
              Convênios
            </Link>
            <Link
              href="/#localizacao"
              className="text-white/90 hover:text-white font-medium text-sm transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all hover:after:w-full"
            >
              Localização
            </Link>
          </nav>
          <WhatsAppButton
            href="https://wa.me/5553991669801?text=Olá%2C%20preciso%20de%20informações%20sobre%20os%20tratamentos%20de%20fisioterapia%2C%20pilates%20e%20quiropraxia."
            className="block border-none rounded-full cursor-pointer text-sm font-bold leading-5 px-5 py-2 transition-all duration-300 bg-white text-(--color-emerald-800) hover:bg-white/95 hover:shadow-md hover:scale-[1.03] active:scale-[0.97]"
            aria-label="Agendar atendimento pelo WhatsApp"
          >
            Agendar
          </WhatsAppButton>
        </div>
      </div>
    </header>
  );
}
