"use client";

import { create, StoreApi, UseBoundStore } from "zustand";

type BarsNavigation = {
    isSideBarOpen: boolean;
    toggleSideBar: () => void;
    isArrowClicked: boolean;
    toggleDropArrow: () => void;
};

export const useBarsNavigation: UseBoundStore<StoreApi<BarsNavigation>> =
    create((set) => ({
        isSideBarOpen: false,
        toggleSideBar: () =>
            set((state: any) => ({ isSideBarOpen: !state.isSideBarOpen })),
        isArrowClicked: false,
        toggleDropArrow: () =>
            set((state: any) => ({ isArrowClicked: !state.isArrowClicked })),
    }));
