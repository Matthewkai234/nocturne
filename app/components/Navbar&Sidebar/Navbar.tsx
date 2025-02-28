import { Search, User, ShoppingCart } from "lucide-react";
import "./styles.css";
import Link from "next/link";
import { NavbarXButton } from "./NavbarXButton";
import { ShoppingCartItemsCount } from "../ShoppingCart/ShoppingCartItemsCount";

export function Navbar() {
    const linksClass =
        "text-xl font-serif hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer";

    const links = [
        {
            href: "/",
            className: linksClass,
            name: "Home",
        },
        {
            href: "/store",
            className: linksClass,
            name: "Store",
        },
        {
            href: "/about",
            className: linksClass,
            name: "About Us",
        },
        {
            href: "/contact-us",
            className: linksClass,
            name: "Contact Us",
        },
        {
            href: "/faq",
            className: linksClass,
            name: "FAQ",
        },
    ];

    return (
        <div className="navamp z-60">
            <NavbarXButton />

            <div className="brand">
                {links.map((link, idx) => (
                    <Link key={idx} href={link.href} className={link.className}>
                        {link.name}
                    </Link>
                ))}
            </div>

            <div className="searchCartUserDiv">
                <Search className="icon" />
                <User className="icon" />
                <div className="relative">
                    <ShoppingCart className="icon" />
                    <ShoppingCartItemsCount />
                </div>
            </div>
        </div>
    );
}
