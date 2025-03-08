"use client";
import { useBarsNavigation } from "~/app/hooks/useBarsNavigation";

export function Veil() {
    const { isSideBarOpen, toggleSideBar } = useBarsNavigation();
    return (
        <div
            className={`fixed inset-0 top-0 bg-black z-40 bg-opacity-90 transition-opacity duration-300 ${
                isSideBarOpen ? "block" : "hidden"
            }`}
            onClick={toggleSideBar}
        ></div>
    );
}
