import { Footer } from "../components/Footer/Footer";
import { CompleteNavigators } from "../components/Navbar&Sidebar/Index";

export const metadata = {
    title: "Contact Us",
};

export default function ContactUs() {
    return (
        <>
            <CompleteNavigators />
            <div className="bg-[#121212] min-h-screen flex flex-col items-center justify-center px-4">
                <div className="max-w-4xl w-full bg-[#1c1c1c] p-8 rounded-lg shadow-lg shadow-gray-900">
                    <h1 className="text-3xl text-[#D4AF37] font-bold mb-4 text-center">
                        Contact Us
                    </h1>
                    <h2 className="text-2xl text-[#7e1b5e] font-medium mb-8 text-center">
                        Nocturne
                    </h2>

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
                                className="p-3 mt-2 bg-[#2d2d2d] text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition"
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
                                className="p-3 mt-2 bg-[#2d2d2d] text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition"
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
                                className="p-3 mt-2 bg-[#2d2d2d] text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition"
                            />
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="px-6 py-3 mt-4 bg-[#7e1b5e] text-white rounded-lg shadow-md shadow-gray-900 hover:bg-[#D4AF37] transition-colors"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
