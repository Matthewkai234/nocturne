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
        <div className="w-72 bg-white shadow-lg rounded-xl overflow-hidden transform  duration-300 transition-all hover:scale-105 hover:shadow-2xl">
            <div className="relative">
                <div className="aspect-w-4 aspect-h-3">
                    <Link href={`/product/${id}`}>
                        <NextImage
                            src={pic}
                            alt={name}
                            sizes="(max-width: 768px) 100vw,
                                   (max-width: 1200px) 50vw,
                                   33vw"
                            className="object-fill"
                            fill
                            priority
                        />
                    </Link>
                </div>
                {discountPrice !== undefined && discountPrice < price && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                        {Math.round(((price - discountPrice) / price) * 100)}%{" "}
                        OFF
                    </div>
                )}
            </div>
            <div className="p-4 bg-[#121212]">
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold text-gray-200 truncate">
                        {name}
                    </h3>
                    <p className="text-sm text-gray-200 truncate">
                        {description}
                    </p>
                    <div className="flex items-center mt-2">
                        <span className="text-xl font-bold text-gray-200">
                            $
                            {discountPrice && discountPrice < price
                                ? discountPrice
                                : price}
                        </span>
                        {discountPrice !== undefined &&
                            discountPrice < price && (
                                <span className="text-sm text-gray-200 line-through ml-2">
                                    ${price}
                                </span>
                            )}
                    </div>
                </div>
                <div className="py-2 flex justify-center">
                    <ProductCardButton />
                </div>
            </div>
        </div>
    );
}
