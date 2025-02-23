"use client";
import {
    Search,
    User,
    ShoppingCart,
    Menu,
    Swords,
    X,
    ChevronDown,
    Sidebar,
} from "lucide-react";
import { useState } from "react";
import "./styles.css";
import Link from "next/link";
import "./barsNavigation";
import { useBarsNavigation } from "./barsNavigation";


export function Navbar() {
    const { isSideBarOpen, toggleSideBar } = useBarsNavigation();
    return (
        <div className="navamp z-60">
            <div className="navMenu">
                {" "}
                {isSideBarOpen ? (
                    <X className="icon" onClick={toggleSideBar} />
                ) : (
                    <Menu className="icon" onClick={toggleSideBar} />
                )}
            </div>

            <div className="brand">
                <a
                    href="#"
                    className="text-xl font-serif hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer"
                >
                    Home
                </a>
                <a
                    href="#"
                    className="text-xl font-serif hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer"
                >
                    Store
                </a>
                
                <a
                    href="#"
                    className="text-xl font-serif hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer"
                >
                    About Us
                </a>
                <Link
                    href="/contact-us"
                    className="text-xl font-serif hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer"
                >
                    Contact Us
                </Link>
                <a
                    href="#"
                    className="text-xl font-serif hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer"
                >
                    FAQ
                </a>
            </div>

            <div className="searchCartUserDiv">
                <Search className="icon" />
                <User className="icon" />
                <ShoppingCart className="icon" />
            </div>
        </div>
    );
}
