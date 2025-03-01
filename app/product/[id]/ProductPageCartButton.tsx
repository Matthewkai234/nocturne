"use client";

import { useState } from "react";
import { ProductCardProps } from "~/app/components/ProductCard/ProductCard";
import { useCart } from "~/app/hooks/useCart";

export function ProductPageCartButton() {
    const { addToCart } = useCart();
    const [isLoading, setIsLoading] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);

    function handleAddToCart() {
        setIsLoading(true);
        setTimeout(() => {
            addToCart();
            setIsLoading(false);
            setAddedToCart(true);
            setTimeout(() => setAddedToCart(false), 2000);
        }, 800);
    }

    return (
        <button
            className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                addedToCart ? "bg-[#7e1b5e] text-white" : "btn btn-primary"
            } ${isLoading ? "opacity-75 cursor-not-allowed" : ""}`}
            onClick={handleAddToCart}
            disabled={isLoading}
        >
            {isLoading ? (
                <div className="flex items-center justify-center">
                    <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                    Loading...
                </div>
            ) : addedToCart ? (
                <div className="flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Added to Cart
                </div>
            ) : (
                "Add to Cart"
            )}
        </button>
    );
}
