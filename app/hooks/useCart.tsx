"use client";

import { create, StoreApi, UseBoundStore } from "zustand";

type Cart = {
    count: number;
    addToCart: () => void;
    removeFromCart: () => void;
};

export const useCart: UseBoundStore<StoreApi<Cart>> = create((set) => ({
    count: 0,
    addToCart: () => set((state: Cart) => ({ count: state.count + 1 })),
    removeFromCart: () => set((state: Cart) => ({ count: state.count - 1 })),
}));
