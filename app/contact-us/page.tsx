import { Mail, Phone, MapPin } from "lucide-react";
import { Footer } from "../components/Footer/Footer";
import { CompleteNavigators } from "../components/Navbar&Sidebar/Index";

export const metadata = {
    title: "Contact Us",
};

export default function ContactUs() {
    return (
        <>
            <CompleteNavigators />
            <div className="bg-[url('https://www.transparenttextures.com/patterns/white-diamond-dark.png'),_linear-gradient(to_bottom,#0a030c,#140316,#0a030c)] min-h-screen flex flex-col items-center justify-center px-4 py-24">
                <div className="max-w-7xl w-full mx-4">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#D4AF37] to-[#9b7f20] bg-clip-text text-transparent">
                            Contact Us
                        </h1>
                        <p className="text-lg text-purple-100/80 max-w-2xl mx-auto">
                            Have questions or need support? Reach out to our team and we'll get back to you as soon as possible.
                        </p>
                    </div>

                    <div className="grid grid-cols-1  gap-8">

                        {/* Contact Form */}
                        <form className="space-y-8 px-20 py-10 rounded-xl bg-white/3 backdrop-blur-sm border border-white/10 hover:border-white/20">
                            <div>
                                <label className="block text-sm font-medium text-purple-100/80 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] text-purple-50/90 placeholder-purple-100/30 transition-all duration-300"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-purple-100/80 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] text-purple-50/90 placeholder-purple-100/30 transition-all duration-300"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-purple-100/80 mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] text-purple-50/90 placeholder-purple-100/30 transition-all duration-300"
                                    placeholder="Your message..."
                                />
                            </div>
                            <div className="flex justify-center">

                            <button
                                type="submit"
                                className="px-6 py-3 mt-4 bg-gradient-to-r from-[#D4AF37] to-[#7d692a] hover:from-[#a88b2b] hover:to-[#a88b2b]  text-[#e4dcec] rounded-lg shadow-md shadow-gray-900 border border-[#D4AF37] transition-all group"
                            >
                                <span className="flex items-center font-bold">
                                    <Mail className="h-5 w-5 mr-2 text-white group-hover:scale-125 transition-all duration-300" />
                                    Send Message
                                </span>
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}