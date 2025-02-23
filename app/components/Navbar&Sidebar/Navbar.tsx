import { Search, User, ShoppingCart } from "lucide-react";
import "./styles.css";
import Link from "next/link";
import "./barsNavigation";
import { NavbarXButton } from "./NavbarXButton";

export function Navbar() {
    return (
        <div className="navamp z-60">
            <NavbarXButton />

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
