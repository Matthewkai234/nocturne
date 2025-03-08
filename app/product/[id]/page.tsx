import { Suspense } from "react";
import { CompleteNavigators } from "~/app/components/Navbar&Sidebar/Index";
import { db } from "~/app/db/fake-db";
import Loading from "./loading";
import NextImage from "next/image";
import Link from "next/link";
import { ProductPageCartButton } from "./ProductPageCartButton";
import { Footer } from "~/app/components/Footer/Footer";

export default async function ProductPage({
    params,
}: {
    params: Promise<{ id: number }>;
}) {
    const id = (await params).id;
    return (
        <>
            <main className="min-h-screen bg-gradient-to-b from-[#121212] to-[#1a1a1a]">
                <CompleteNavigators />
                <Suspense fallback={<Loading />}>
                    <ProductDetails id={id} />
                </Suspense>
            </main>

            <Footer />
        </>
    );
}

async function ProductDetails({ id }: { id: number }) {
    const product = await db.findById(id);

    if (!product) {
        return <h1 className="text-3xl">No Such Product</h1>;
    }

    const discountPercentage = product.discountPrice
        ? Math.round(
              ((product.price - product.discountPrice) / product.price) * 100,
          )
        : 0;

    return (
        <div className="container mx-auto py-8 px-4 lg:px-8">
            <nav className="flex items-center text-sm mb-6 lg:mb-8">
                <Link
                    href="/"
                    className="text-[#D4AF37] hover:text-[#ffd700] transition-colors duration-200"
                >
                    Home
                </Link>
                <span className="mx-2 text-[#7e1b5e]">/</span>
                <Link
                    href="/products"
                    className="text-[#D4AF37] hover:text-[#ffd700] transition-colors duration-200"
                >
                    Products
                </Link>
                <span className="mx-2 text-[#7e1b5e]">/</span>
                <span className="text-white font-medium">{product.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div className="relative rounded-2xl overflow-hidden bg-[#1a1a1a] p-4 shadow-2xl shadow-gray-900">
                    <div className="aspect-w-1 aspect-h-1 bg-[#121212] rounded-xl">
                        <NextImage
                            src={product.pic}
                            alt={product.name}
                            className="object-contain hover:scale-105 transition-transform duration-300 rounded-xl"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            fill
                            priority
                        />
                    </div>
                    {product.discountPrice && (
                        <div className="absolute top-6 right-6 bg-[#7e1b5e] text-[#D4AF37] px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-gray-900">
                            {discountPercentage}% OFF
                        </div>
                    )}
                </div>

                <div className="flex flex-col bg-[#121212] p-6 lg:p-8 rounded-2xl shadow-2xl shadow-gray-900">
                    <h1 className="text-3xl lg:text-4xl font-bold text-[#D4AF37] mb-4">
                        {product.name}
                    </h1>

                    <div className="flex items-center mb-6">
                        <span className="text-4xl font-bold text-[#D4AF37]">
                            ${product.discountPrice || product.price}
                        </span>
                        {product.discountPrice && (
                            <span className="text-2xl text-[#7e1b5e] line-through ml-4">
                                ${product.price}
                            </span>
                        )}
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-[#D4AF37] mb-3 border-b border-[#7e1b5e] pb-2">
                            Product Details
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            {product.description}
                        </p>
                    </div>

                    <div className="mt-auto space-y-4 border-t border-[#7e1b5e] pt-6">
                        <ProductPageCartButton />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                            <div className="p-3 bg-[#1a1a1a] rounded-lg">
                                <div className="flex items-center justify-center mb-2">
                                    <svg
                                        className="w-6 h-6 text-[#D4AF37]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-300">
                                    Fast Shipping
                                </span>
                            </div>
                            <div className="p-3 bg-[#1a1a1a] rounded-lg">
                                <div className="flex items-center justify-center mb-2">
                                    <svg
                                        className="w-6 h-6 text-[#D4AF37]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-300">
                                    Quality Guarantee
                                </span>
                            </div>
                            <div className="p-3 bg-[#1a1a1a] rounded-lg">
                                <div className="flex items-center justify-center mb-2">
                                    <svg
                                        className="w-6 h-6 text-[#D4AF37]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                        />
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-300">
                                    Easy Returns
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
