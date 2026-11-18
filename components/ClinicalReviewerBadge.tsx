import Image from "next/image";

interface ClinicalReviewerBadgeProps {
  specialtyLabel: string;
}

export default function ClinicalReviewerBadge({
  specialtyLabel,
}: ClinicalReviewerBadgeProps) {
  return (
    <aside
      aria-label="Responsabilidade Técnica e Revisão Clínica"
      className="mb-12 rounded-2xl bg-slate-50 border border-slate-200/80 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-2xs"
    >
      <div className="w-14 h-14 rounded-full bg-emerald-950 overflow-hidden shrink-0 border-2 border-emerald-600/30 flex items-end justify-center">
        <Image
          src="/kauane-ramos-fisioterapia-pelotas.webp"
          alt="Dra. Kauane Ramos - Fisioterapeuta Responsável Técnica CREFITO-5: 375851-F"
          width={64}
          height={80}
          loading="lazy"
          sizes="56px"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="flex-1 text-left">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100/90 px-2.5 py-0.5 rounded-full">
            Responsável Técnica · Revisão Clínica
          </span>
          <span className="text-xs font-semibold text-slate-600">
            CREFITO-5: 375851-F
          </span>
        </div>
        <p className="text-sm sm:text-base font-extrabold text-slate-900">
          Dra. Kauane Ramos — Fisioterapeuta em Pelotas/RS
        </p>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">
          Conteúdo técnico sobre <strong>{specialtyLabel}</strong> revisado sob
          diretrizes clínicas baseadas em evidências científicas. Atendimento
          presencial na Av. Bento Gonçalves, 2146 (Areal, Pelotas/RS).
        </p>
      </div>
    </aside>
  );
}
