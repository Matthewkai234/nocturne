"use client";

import { useState } from "react";
import { useCart } from "~/app/hooks/useCart";
import { ShoppingCart } from "~/app/utils/product";

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
                    Added to Cart
                </div>
            ) : (
                <>
                    <ShoppingCart />
                    Add to Cart
                </>
            )}
        </button>
    );
}
