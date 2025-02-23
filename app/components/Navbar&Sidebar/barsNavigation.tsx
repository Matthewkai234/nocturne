"use client";

import { create, StoreApi, UseBoundStore } from "zustand";

export const useBarsNavigation: UseBoundStore<StoreApi<any>> = create(
    (set) => ({
        isSideBarOpen: false,
        toggleSideBar: () =>
            set((state: any) => ({ isSideBarOpen: !state.isSideBarOpen })),
        isArrowClicked: false,
        toggleDropArrow: () =>
            set((state: any) => ({ isArrowClicked: !state.isArrowClicked })),
    }),
);
