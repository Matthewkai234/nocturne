import Link from "next/link";
import "./styles.css";

export function MoblieLinks() {
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
            name: "About",
        },
        {
            href: "/contact-us",
            className: linksClass,
            name: "Contact",
        },
        {
            href: "/faq",
            className: linksClass,
            name: "FAQ",
        },
    ];

    return (
        <>
            <div className="brandLessThanSmall">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className={link.className}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </>
    );
}
