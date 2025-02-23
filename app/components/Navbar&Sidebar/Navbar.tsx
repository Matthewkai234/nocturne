import { Search, User, ShoppingCart } from "lucide-react";
import "./styles.css";
import Link from "next/link";
import "./barsNavigation";
import { NavbarXButton } from "./NavbarXButton";

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
            href: "#",
            className: linksClass,
            name: "Store",
        },
        {
            href: "#",
            className: linksClass,
            name: "About Us",
        },
        {
            href: "/contact-us",
            className: linksClass,
            name: "Contact Us",
        },
        {
            href: "#",
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
                <ShoppingCart className="icon" />
            </div>
        </div>
    );
}
