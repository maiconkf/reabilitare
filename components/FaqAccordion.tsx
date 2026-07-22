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
          <details className="group bg-white border border-gray-100 rounded-2xl shadow-xs hover:shadow-md hover:border-emerald-500/30 overflow-hidden open:ring-2 open:ring-emerald-500/20 transition-all duration-300">
            <summary className="flex items-center justify-between cursor-pointer p-5 sm:p-6 font-bold text-base sm:text-lg text-gray-800 group-hover:text-(--color-emerald-800) select-none list-none [&::-webkit-details-marker]:hidden transition-colors">
              <span className="pr-4">{item.question}</span>
              <span className="transition-transform duration-300 group-open:rotate-180 bg-emerald-50 text-emerald-600 rounded-full p-1 border border-emerald-100 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="px-5 sm:px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4 text-sm sm:text-base bg-gray-50/50">
              {item.answer}
            </div>
          </details>
        </ScrollReveal>
      ))}
    </div>
  );
}
