// app/faq/page.tsx (Server Component)
import { ChevronDown } from "lucide-react";
import { CompleteNavigators } from "../components/Navbar&Sidebar/Index";
import { Footer } from "../components/Footer/Footer";
import { FAQAccordion } from "./FAQAccordion";

export const metadata = {
    title: "FAQ",
};

const FAQS = [
    {
        question: "How long does delivery usually take?",
        answer: "Typically, orders are processed within 1-2 business days and delivered within 5-7 working days depending on your location."
    },
    {
        question: "How long does delivery usually take?",
        answer: "Typically, orders are processed within 1-2 business days and delivered within 5-7 working days depending on your location."
    },
];

export default function FAQ() {
    return (
        <>
            <CompleteNavigators />
            <div className="bg-[url('https://www.transparenttextures.com/patterns/white-diamond-dark.png'),_linear-gradient(to_bottom,#040105,#0e030f,#040105)] min-h-screen flex flex-col items-center py-20 px-4">
                <div className="max-w-3xl w-full space-y-4">
                    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#D4AF37] mb-12 text-center">
                        Frequently Asked Questions
                    </h1>

                    <FAQAccordion faqs={FAQS} />
                </div>
            </div>
            <Footer />
        </>
    );
}