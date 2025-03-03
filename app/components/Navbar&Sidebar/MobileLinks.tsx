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
            <div className=" text-white flex place-items-center  place-content-center bg-black space-x-6 sm:space-x-18 md:space-x-20 lg:hidden border-b  border-gray-300 border-solid shadow-lg  py-1">
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
