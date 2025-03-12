import ScrollToTop from "./ScrollToTop";
import "./style.css";

export default function SingleProductSkeleton() {
    return (
        <div className="mx-auto py-8 px-4 lg:px-8 bg-gradient-to-b from-[#0a0a0a] to-[#1c031c] min-h-screen">
            <ScrollToTop />
            <div className="flex items-center space-x-2 mb-6 lg:mb-8 animate-pulse">
                <div className="h-4 bg-gradient-to-r from-[#0a0a0a] to-[#1c031c] rounded-md w-16"></div>
                <div className="text-white opacity-50">/</div>
                <div className="h-4 bg-gradient-to-r from-[#0a0a0a] to-[#1c031c] rounded-md w-24"></div>
                <div className="text-white opacity-50">/</div>
                <div className="h-4 bg-gradient-to-r from-[#0a0a0a] to-[#1c031c] rounded-md w-32"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#1c031c] animate-shimmer border border-[#ffffff15] p-4">
                    <div className="aspect-w-1 aspect-h-1 h-96">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent"></div>
                    </div>
                    <div className="absolute top-6 right-6 h-8 w-24 bg-gradient-to-r from-[#D4AF37] to-[#9b7f20]/50 rounded-full transform rotate-3"></div>
                </div>

                <div className="flex flex-col space-y-6 lg:space-y-8 bg-[url('https://www.transparenttextures.com/patterns/white-diamond-dark.png'),_linear-gradient(to_bottom,#040105,#0e030f,#040105)] p-6 rounded-2xl border border-[#ffffff15]">
                    <div className="h-10 bg-gradient-to-r from-[#D4AF37]/20 to-[#9b7f20]/20 rounded-xl w-3/4 animate-pulse"></div>

                    <div className="flex items-center space-x-4">
                        <div className="h-10 bg-gradient-to-r from-[#D4AF37]/20 to-[#9b7f20]/20 rounded-lg w-32 animate-pulse"></div>
                        <div className="h-6 bg-[#ffffff08] rounded-md w-24"></div>
                    </div>

                    <div className="space-y-3">
                        <div className="h-5 bg-[#D4AF37]/20 rounded-md w-1/4 mb-3"></div>
                        <div className="h-4 bg-[#ffffff08] rounded-md w-full"></div>
                        <div className="h-4 bg-[#ffffff08] rounded-md w-11/12"></div>
                        <div className="h-4 bg-[#ffffff08] rounded-md w-3/4"></div>
                    </div>

                    <div className="pt-4 border-t border-[#ffffff15]">
                        <div className="h-14 bg-gradient-to-r from-[#ffffff08] to-[#b0a4ff15] rounded-xl animate-shimmer border border-[#ffffff15]"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="p-4 bg-[#ffffff08] rounded-xl border border-[#ffffff15]"
                            >
                                <div className="h-6 w-6 bg-[#D4AF37]/20 rounded-full mb-3 mx-auto"></div>
                                <div className="h-4 bg-[#ffffff08] rounded-md w-3/4 mx-auto"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-12 lg:mt-16">
                <div className="flex border-b border-[#ffffff15] mb-6">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="h-12 bg-gradient-to-r from-[#0a0a0a] to-[#1c031c] rounded-t-xl w-32 mr-4"
                        ></div>
                    ))}
                </div>
                <div className="space-y-3">
                    <div className="h-4 bg-[#ffffff08] rounded-md w-full"></div>
                    <div className="h-4 bg-[#ffffff08] rounded-md w-11/12"></div>
                    <div className="h-4 bg-[#ffffff08] rounded-md w-3/4"></div>
                </div>
            </div>
        </div>
    );
}
