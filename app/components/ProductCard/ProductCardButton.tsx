"use client";

import { useCart } from "~/app/hooks/useCart";

export function ProductCardButton() {
    const { addToCart } = useCart();

    return (
        <button className="btn btn-primary" onClick={addToCart}>
            Add to Cart
        </button>
    );
}
