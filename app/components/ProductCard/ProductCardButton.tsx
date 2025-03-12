"use client";

import { useCart } from "~/app/hooks/useCart";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export function ProductCardButton() {
    const { addToCart } = useCart();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className="flex items-center justify-center gap-2 py-2.5 px-5 bg-[#ffffff08] hover:bg-[#b0a4ff15] border border-[#D4AF37] rounded-lg text-white font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] group"
            onClick={addToCart}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <ShoppingCart
                className={`h-5 w-5 ${isHovered ? "text-[#D4AF37]" : "text-white"} transform transition-all duration-300 ${isHovered ? "scale-125" : "scale-100"}`}
            />
            <span
                className={`transition-colors duration-300 ${isHovered ? "text-[#D4AF37]" : "text-white"}`}
            >
                Add to Cart
            </span>
        </button>
    );
}
