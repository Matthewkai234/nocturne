import "./style.css";

export default function SingleProductSkeleton() {
    return (
        <div className="container mx-auto py-8 px-4 lg:px-8 bg-[#121212] min-h-screen">
            <div className="flex items-center space-x-2 mb-6 lg:mb-8 animate-pulse">
                <div className="h-4 bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] rounded-md w-16"></div>
                <div className="text-[#7e1b5e]">/</div>
                <div className="h-4 bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] rounded-md w-24"></div>
                <div className="text-[#7e1b5e]">/</div>
                <div className="h-4 bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] rounded-md w-32"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] animate-shimmer">
                    <div className="aspect-w-1 aspect-h-1 h-96">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7e1b5e]/20 to-transparent"></div>
                    </div>
                    <div className="absolute top-6 right-6 h-8 w-24 bg-gradient-to-r from-[#7e1b5e] to-[#D4AF37]/50 rounded-full"></div>
                </div>

                <div className="flex flex-col space-y-6 lg:space-y-8">
                    <div className="h-10 bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] rounded-xl w-3/4 animate-pulse"></div>

                    <div className="flex items-center space-x-4">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className="h-6 w-6 bg-gradient-to-br from-[#7e1b5e] to-[#D4AF37] rounded-sm mr-1 animate-pulse"
                                />
                            ))}
                        </div>
                        <div className="h-4 bg-[#1a1a1a] rounded-md w-24"></div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="h-10 bg-gradient-to-r from-[#D4AF37] to-[#7e1b5e] rounded-lg w-32"></div>
                        <div className="h-6 bg-[#1a1a1a] rounded-md w-24"></div>
                    </div>

                    <div className="space-y-3">
                        <div className="h-5 bg-[#1a1a1a] rounded-md w-1/4 mb-3"></div>
                        <div className="h-4 bg-[#1a1a1a] rounded-md w-full"></div>
                        <div className="h-4 bg-[#1a1a1a] rounded-md w-11/12"></div>
                        <div className="h-4 bg-[#1a1a1a] rounded-md w-3/4"></div>
                    </div>

                    <div className="pt-4">
                        <div className="h-14 bg-gradient-to-r from-[#7e1b5e] to-[#D4AF37] rounded-xl animate-shimmer"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="p-4 bg-[#1a1a1a] rounded-xl border border-[#7e1b5e]/30"
                            >
                                <div className="h-6 w-6 bg-[#D4AF37]/20 rounded-full mb-3 mx-auto"></div>
                                <div className="h-4 bg-[#2d2d2d] rounded-md w-3/4 mx-auto"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-12 lg:mt-16">
                <div className="flex border-b border-[#7e1b5e]/30 mb-6">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="h-12 bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] rounded-t-xl w-32 mr-4"
                        ></div>
                    ))}
                </div>
                <div className="space-y-3">
                    <div className="h-4 bg-[#1a1a1a] rounded-md w-full"></div>
                    <div className="h-4 bg-[#1a1a1a] rounded-md w-11/12"></div>
                    <div className="h-4 bg-[#1a1a1a] rounded-md w-3/4"></div>
                </div>
            </div>
        </div>
    );
}
