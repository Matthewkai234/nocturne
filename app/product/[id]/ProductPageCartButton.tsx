"use client";
import { useState } from "react";
import { useCart } from "~/app/hooks/useCart";
import { ShoppingCart } from "lucide-react";

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
            className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3 ${
                addedToCart
                    ? "bg-gradient-to-r from-[#D4AF37] to-[#9b7f20] text-black"
                    : "bg-[#ffffff08] hover:bg-[#b0a4ff15] text-white border border-[#D4AF37]"
            } ${isLoading ? "opacity-75 cursor-not-allowed" : ""} hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]`}
            onClick={handleAddToCart}
            disabled={isLoading}
        >
            {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                    <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Processing...</span>
                </div>
            ) : addedToCart ? (
                <div className="flex items-center justify-center gap-2">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span>Added to Cart</span>
                </div>
            ) : (
                <>
                    <ShoppingCart className="h-6 w-6" />
                    <span>Add to Cart</span>
                </>
            )}
        </button>
    );
}
