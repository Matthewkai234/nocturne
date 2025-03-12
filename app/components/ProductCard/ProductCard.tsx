import Link from "next/link";
import { ProductCardButton } from "./ProductCardButton";
import NextImage from "next/image";

export type ProductCardProps = {
    id: number;
    pic: string;
    name: string;
    description: string;
    price: number;
    discountPrice?: number;
};

export function ProductCard({
    id,
    pic,
    name,
    description,
    price,
    discountPrice,
}: ProductCardProps) {
    return (
        <div className="w-72 bg-gradient-to-b from-[#0a0a0a] to-[#1c031c] shadow-lg rounded-xl overflow-hidden transform duration-300 transition-all hover:scale-105 hover:shadow-[0_10px_40px_rgba(212,175,55,0.2)] border border-[#ffffff15]">
            <div className="relative">
                <div className="aspect-w-4 aspect-h-3">
                    <Link
                        href={`/product/${id}`}
                        className="block overflow-hidden"
                    >
                        <NextImage
                            src={pic}
                            alt={name}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 hover:scale-110"
                            fill
                            priority
                        />
                    </Link>
                </div>
                {discountPrice !== undefined && discountPrice < price && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#D4AF37] to-[#9b7f20] text-black font-semibold px-3 py-1 rounded-full text-xs shadow-lg transform rotate-3">
                        {Math.round(((price - discountPrice) / price) * 100)}%{" "}
                        OFF
                    </div>
                )}
            </div>
            <div className="p-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png'),_linear-gradient(to_bottom,#000000,#1c031c,#000000)] backdrop-blur-lg">
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold text-white truncate group-hover:text-[#D4AF37] transition-colors">
                        {name}
                    </h3>
                    <p className="text-sm text-gray-300 truncate mt-1 text-center">
                        {description}
                    </p>
                    <div className="flex items-center mt-3">
                        {discountPrice !== undefined &&
                        discountPrice < price ? (
                            <>
                                <span className="text-xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#9b7f20] bg-clip-text text-transparent">
                                    ${discountPrice}
                                </span>
                                <span className="text-sm text-gray-400 line-through ml-2">
                                    ${price}
                                </span>
                            </>
                        ) : (
                            <span className="text-xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#9b7f20] bg-clip-text text-transparent">
                                ${price}
                            </span>
                        )}
                    </div>
                </div>
                <div className="mt-4 flex justify-center">
                    <ProductCardButton />
                </div>
            </div>
        </div>
    );
}
