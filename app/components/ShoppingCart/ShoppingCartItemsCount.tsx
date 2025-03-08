"use client";
import { useCart } from "~/app/hooks/useCart";

export function ShoppingCartItemsCount() {
    const { count: cartItemCount } = useCart();

    return (
        <>
            {cartItemCount > 0 && (
                <div className=" flex absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 items-center justify-center font-bold">
                    {cartItemCount}
                </div>
            )}
        </>
    );
}
