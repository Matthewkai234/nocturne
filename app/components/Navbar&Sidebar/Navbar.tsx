import { Search, User, ShoppingCart, Moon } from "lucide-react";
import Link from "next/link";
import { NavbarXButton } from "./NavbarXButton";
import { ShoppingCartItemsCount } from "../ShoppingCart/ShoppingCartItemsCount";

export function Navbar() {
    const linksClass = "relative text-lg font-medium text-white px-4 py-2 transition-all duration-300 hover:pl-6 group hover:text-[#D4AF37]";

    const links = [
        { href: "/", name: "Home" },
        { href: "/store", name: "Store" },
        { href: "/about", name: "About" },
        { href: "/contact-us", name: "Contact" },
        { href: "/faq", name: "FAQ" },
    ];

    return (
        <nav className="sticky top-0 flex justify-center xl:gap-10 items-center bg-[url('https://www.transparenttextures.com/patterns/mirrored-squares.png'),_linear-gradient(to_right,#000000,#1c031c,#000000)] backdrop-blur-lg border-b border-[#D4AF37] w-full h-20 z-50 shadow-xl shadow-[#02020f]">


            {/* Column 1 - NavbarXButton */}
            <div className="flex justify-center ml-2 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-10 pl-3 lg:pl-30 ">
                <button className="p-3.5 rounded-lg bg-[#ffffff08] hover:bg-[#b0a4ff15] transition-all group">
                    <NavbarXButton />
                </button>

                <div className="hidden sm:block  ml-2 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-10">
                    <Link href="/" className="flex items-center  group">
                        <Moon className="h-10 w-10 text-[#ffffff] transform group-hover:rotate-12 transition-transform" />
                        <span className="text-3xl mt-4 font-bold bg-gradient-to-r from-[#D4AF37] to-[#9b7f20] bg-clip-text text-transparent">
                            Nocturne
                        </span>
                    </Link>
                </div>

            </div>



            {/* Column 3 - Links */}
            <div className=" justify-center hidden lg:block lg:space-x-1 xl:space-x-5">
                {links.map((link, idx) => (
                    <Link key={idx} href={link.href} className={linksClass}>
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Column 4 - Search and Icons */}
            <div className="flex justify-center gap-5 lg:gap-3 xl:gap-5  sm:mr-4 md:mr-6 lg:mr-8 xl:mr-10 pr-3 lg:pr-30 ">
                <div className="relative group  mt-1">
                    <input
                        type="text"
                        placeholder="Search..."
                        className=" w-full pl-15 py-3 bg-[#fa525208] border border-[#ffffff15] rounded-xl text-[#ffffff] focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#b0a4ff33] transition-all placeholder-[#939393]"
                    />
                    <Search className="h-6 w-6 text-[#939393] absolute left-4 top-3 group-hover:text-[#D4AF37] transition-colors" />
                </div>

                <div className="flex gap-5 lg:gap-3 ">
                    <button className="p-3.5 rounded-lg bg-[#ffffff08] hover:bg-[#b0a4ff15] transition-all group">
                        <User className="h-8 w-8 text-white group-hover:text-[#D4AF37] transform group-hover:scale-125 transition-all duration-300" />
                    </button>

                    <button className="p-3.5 rounded-lg bg-[#ffffff08] hover:bg-[#b0a4ff15] transition-all group relative">
                        <ShoppingCart className="h-8 w-8 text-white group-hover:text-[#D4AF37] transform group-hover:scale-125 transition-all duration-300" />
                        <ShoppingCartItemsCount />
                    </button>
                </div>
            </div>

        </nav>
    );

}