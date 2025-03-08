import { Mail } from "lucide-react";
import { Footer } from "../components/Footer/Footer";
import { CompleteNavigators } from "../components/Navbar&Sidebar/Index";

export const metadata = {
    title: "Contact Us",
};

export default function ContactUs() {
    return (
        <>
            <CompleteNavigators />
            <div className="bg-[url('https://www.transparenttextures.com/patterns/white-diamond-dark.png'),_linear-gradient(to_right,#000000,#1c031c,#000000)] min-h-screen flex flex-col items-center justify-center px-4">
                <div className="max-w-4xl w-full bg-[#121212] p-8 rounded-lg shadow-xl shadow-[#02020f] border border-[#D4AF37]">
                    <h1 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-[#D4AF37] to-[#9b7f20] bg-clip-text text-transparent">
                        Contact Us
                    </h1>
                    <form className="space-y-6">
                        <div className="flex flex-col">
                            <label
                                htmlFor="name"
                                className="text-white font-medium"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                className="p-3 mt-2 bg-[#ffffff08] text-white rounded-lg border border-[#ffffff15] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="email"
                                className="text-white font-medium"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="p-3 mt-2 bg-[#ffffff08] text-white rounded-lg border border-[#ffffff15] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="message"
                                className="text-white font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Write your message here"
                                rows={4}
                                className="p-3 mt-2 bg-[#ffffff08] text-white rounded-lg border border-[#ffffff15] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition"
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="px-6 py-3 mt-4 bg-[#ffffff08] hover:bg-[#b0a4ff15] text-white rounded-lg shadow-md shadow-gray-900 border border-[#D4AF37] hover:text-[#D4AF37] transition-all group"
                            >
                                <span className="flex items-center">
                                    <Mail className="h-5 w-5 mr-2 text-[#D4AF37] group-hover:scale-125 transition-all duration-300" />
                                    Send Message
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
