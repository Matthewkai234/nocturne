export default function SingleProductSkeleton() {
    return (
        <div className="container mx-auto py-8 px-4">
            <div className="flex items-center space-x-2 mb-6">
                <div className="h-4 bg-gray-300 rounded-md w-16 animate-pulse"></div>
                <div className="text-gray-400">/</div>
                <div className="h-4 bg-gray-300 rounded-md w-24 animate-pulse"></div>
                <div className="text-gray-400">/</div>
                <div className="h-4 bg-gray-300 rounded-md w-32 animate-pulse"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative rounded-xl overflow-hidden bg-gray-300 animate-pulse">
                    <div className="aspect-w-4 aspect-h-3 h-96"></div>
                    <div className="absolute top-4 right-4 bg-gray-400 h-6 w-16 rounded-full"></div>
                </div>

                <div className="flex flex-col space-y-6">
                    <div className="h-8 bg-gray-300 rounded-md w-3/4 animate-pulse"></div>

                    <div className="flex items-center space-x-2">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <div
                                    key={star}
                                    className="h-5 w-5 bg-gray-300 rounded-sm mr-1 animate-pulse"
                                ></div>
                            ))}
                        </div>
                        <div className="h-4 bg-gray-300 rounded-md w-20 animate-pulse"></div>
                    </div>

                    <div className="flex items-center">
                        <div className="h-8 bg-gray-300 rounded-md w-24 animate-pulse"></div>
                        <div className="h-5 bg-gray-300 rounded-md w-16 ml-4 animate-pulse"></div>
                    </div>

                    <div>
                        <div className="h-5 bg-gray-300 rounded-md w-1/4 mb-3 animate-pulse"></div>
                        <div className="h-4 bg-gray-300 rounded-md w-full mb-2 animate-pulse"></div>
                        <div className="h-4 bg-gray-300 rounded-md w-full mb-2 animate-pulse"></div>
                        <div className="h-4 bg-gray-300 rounded-md w-3/4 animate-pulse"></div>
                    </div>

                    <div className="pt-4">
                        <div className="h-12 bg-gray-400 rounded-md w-full max-w-xs animate-pulse"></div>
                    </div>

                    <div className="pt-4">
                        <div className="h-5 bg-gray-300 rounded-md w-1/4 mb-3 animate-pulse"></div>
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-300 rounded-md w-full animate-pulse"></div>
                            <div className="h-4 bg-gray-300 rounded-md w-full animate-pulse"></div>
                            <div className="h-4 bg-gray-300 rounded-md w-2/3 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <div className="flex border-b mb-6">
                    <div className="h-10 bg-gray-300 rounded-t-md w-24 animate-pulse mr-4"></div>
                    <div className="h-10 bg-gray-300 rounded-t-md w-24 animate-pulse mr-4"></div>
                    <div className="h-10 bg-gray-300 rounded-t-md w-24 animate-pulse"></div>
                </div>
                <div className="space-y-3">
                    <div className="h-4 bg-gray-300 rounded-md w-full animate-pulse"></div>
                    <div className="h-4 bg-gray-300 rounded-md w-full animate-pulse"></div>
                    <div className="h-4 bg-gray-300 rounded-md w-3/4 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
}
