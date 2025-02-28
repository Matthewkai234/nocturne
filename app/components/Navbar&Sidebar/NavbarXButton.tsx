"use client";

import { Menu, X } from "lucide-react";
import { useBarsNavigation } from "~/app/hooks/useBarsNavigation";
import "./styles.css";

export function NavbarXButton() {
    const { isSideBarOpen, toggleSideBar } = useBarsNavigation();

    return (
        <div className="navMenu">
            {" "}
            {isSideBarOpen ? (
                <X className="icon" onClick={toggleSideBar} />
            ) : (
                <Menu className="icon" onClick={toggleSideBar} />
            )}
        </div>
    );
}
