// app/faq/FAQAccordion.tsx (Client Component)
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

export function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <>
            {faqs.map((faq, index) => (
                <div 
                    key={index}
                    className={`group transition-all duration-300 ${
                        openIndex === index ? 'ring-1 ring-purple-300/30' : 'hover:ring-1 hover:ring-purple-300/10'
                    } rounded-xl bg-white/5  backdrop-blur-sm border border-white/10 hover:border-white/20` }
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full  px-6 py-4 flex justify-between items-center"
                    >
                        <span className="text-left text-lg font-medium text-purple-50/90">
                            {faq.question}
                        </span>
                        <ChevronDown className={`transform transition-transform duration-300 ${
                            openIndex === index ? 'rotate-180' : ''
                        } text-purple-300`} />
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${
                        openIndex === index 
                            ? 'max-h-96 opacity-100' 
                            : 'max-h-0 opacity-0'
                    }`}>
                        <div className="px-6 pb-4 pt-0 text-purple-100/80">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}