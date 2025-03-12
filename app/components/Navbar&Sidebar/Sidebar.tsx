"use client";
import { Moon, ChevronDown } from "lucide-react";
import { useBarsNavigation } from "~/app/hooks/useBarsNavigation";
import Link from "next/link";

export function Sidebar() {
    const { isArrowClicked, isSideBarOpen, toggleDropArrow } =
        useBarsNavigation();

    return (
        <div
            className={`fixed top-20 bottom-0 left-0 w-72 bg-[url('https://www.transparenttextures.com/patterns/mirrored-squares.png'),_linear-gradient(to_bottom,#090909,#120612,#090909)] backdrop-blur-lg border-r border-[#D4AF37] 
                text-white transform transition-transform duration-300 ease-in-out 
                z-50 shadow-xl shadow-[#02020f] ${isSideBarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
            <div className="h-full overflow-y-auto pr-4 pb-20">
                {/* Sidebar Header */}
                <div className="flex flex-col items-center mt-6 mb-8 ml-2">
                    <Moon className="h-12 w-12 text-white mb-2" />
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#9b7f20] bg-clip-text text-transparent">
                        Our Collections
                    </span>
                </div>

                <div className="w-full px-4 my-4">
                    <hr className="border-t border-[#ffffff15]" />
                </div>

                {/* Navigation Items */}
                <ul className="space-y-2 px-4">
                    <li className="group relative">
                        <button
                            onClick={toggleDropArrow}
                            className="w-full flex items-center justify-between px-6 py-3 rounded-xl hover:bg-[#ffffff08] transition-all duration-300 hover:pl-8"
                        >
                            <span className="text-lg font-medium text-[#D4AF37] group-hover:text-white">
                                Mystical Categories
                            </span>
                            <ChevronDown
                                className={`transform transition-transform ${isArrowClicked ? "rotate-180" : ""} text-[#D4AF37]`}
                            />
                        </button>

                        {isArrowClicked && (
                            <ul className="ml-6 mt-2 space-y-2 border-l-2 border-[#D4AF37] pl-4">
                                {[
                                    "Ancient Relics",
                                    "Arcane Tools",
                                    "Enchanted Jewels",
                                    "Mystical Tomes",
                                ].map((item) => (
                                    <li key={item} className="group">
                                        <Link
                                            href="#"
                                            className="block px-4 py-2 text-gray-300 hover:text-[#D4AF37] rounded-lg transition-all duration-300 hover:bg-[#ffffff08] hover:pl-6"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    {[
                        "Featured Collections",
                        "New Arrivals",
                        "Best Sellers",
                        "Limited Editions",
                        "Seasonal Offers",
                    ].map((item) => (
                        <li key={item} className="group">
                            <Link
                                href="#"
                                className="flex items-center px-6 py-3 rounded-xl hover:bg-[#ffffff08] transition-all duration-300 hover:pl-8"
                            >
                                <span className="text-lg font-medium text-gray-300 group-hover:text-[#D4AF37]">
                                    {item}
                                </span>
                                <div className="ml-2 h-[2px] w-4 bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Special Offer Banner */}
                <div className="mt-8 mx-4 p-4 rounded-xl bg-gradient-to-r from-[#D4AF3715] to-[#9b7f2015] border border-[#D4AF3733]">
                    <h3 className="text-[#D4AF37] font-semibold mb-2">
                        Exclusive Offer
                    </h3>
                    <p className="text-sm text-gray-300">
                        Get 20% off your first purchase of ancient artifacts!
                    </p>
                </div>
            </div>
        </div>
    );
}
