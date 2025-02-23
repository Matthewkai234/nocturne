"use client";
import "./styles.css";
import { useBarsNavigation } from "~/app/hooks/useBarsNavigation";

export function Veil() {
    const { isSideBarOpen, toggleSideBar } = useBarsNavigation();
    return (
        <div
            className={`fixed inset-0 top-[3rem] bg-black z-40 bg-opacity-50 transition-opacity duration-300 ${
                isSideBarOpen ? "block" : "hidden"
            }`}
            onClick={toggleSideBar}
        ></div>
    );
}
