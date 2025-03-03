"use client";

import { Menu, X } from "lucide-react";
import { useBarsNavigation } from "~/app/hooks/useBarsNavigation";
import "./styles.css";

export function NavbarXButton() {
    const { isSideBarOpen, toggleSideBar } = useBarsNavigation();

    return (
        <div >
            {" "}
            {isSideBarOpen ? (
                <X className="h-8 w-8 text-white group-hover:text-[#D4AF37] transform group-hover:scale-125 transition-all duration-300" onClick={toggleSideBar} />
            ) : (
                <Menu className="h-8 w-8 text-white group-hover:text-[#D4AF37] transform group-hover:scale-125 transition-all duration-300" onClick={toggleSideBar} />
            )}
        </div>
    );
}
