import ScrollReveal from "./ScrollReveal";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="space-y-4 my-10 max-w-4xl mx-auto">
      {items.map((item, index) => (
        <ScrollReveal key={index} delay={index * 100}>
          <details className="group bg-white border border-slate-200/80 rounded-2xl shadow-2xs hover:shadow-md hover:border-emerald-600/30 overflow-hidden open:ring-2 open:ring-emerald-600/15 open:border-emerald-600/40 transition-all duration-300">
            <summary className="flex items-center justify-between cursor-pointer p-5 sm:p-6 font-bold text-base sm:text-lg text-slate-900 group-hover:text-emerald-800 select-none list-none [&::-webkit-details-marker]:hidden transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2 rounded-xl">
              <span className="pr-4">{item.question}</span>
              <span className="transition-transform duration-300 group-open:rotate-180 bg-emerald-50 text-emerald-700 rounded-full p-1.5 border border-emerald-200/70 shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="px-5 sm:px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4 text-sm sm:text-base bg-slate-50/50">
              {item.answer}
            </div>
          </details>
        </ScrollReveal>
      ))}
    </div>
  );
}

