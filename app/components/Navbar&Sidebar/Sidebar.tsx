"use client";
import { Search, User, ShoppingCart, Swords, ChevronDown } from "lucide-react";
import "./styles.css";
import { useBarsNavigation } from "~/app/hooks/useBarsNavigation";

export function Sidebar() {
    const { isArrowClicked, isSideBarOpen, toggleDropArrow } =
        useBarsNavigation();

    return (
        <div
            className={`fixed top-20 bottom-0 left-0 w-64 bg-gradient-to-b bg-[#121212] 
                text-white bg-opacity-95 transform transition-transform duration-300 ease-in-out 
                z-50 ${isSideBarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
            <div className="h-full overflow-y-auto pr-4 pb-20">
                <div className="sideBarHeaderDiv justify-center mt-4">
                    <div className="flex justify-center">
                        <Swords className="h-10 w-10" />
                    </div>
                    <span className="sideBarHeader flex justify-center text-center font-extrabold text-xl font-sans-serif pt-2">
                        Our Mystical Products
                    </span>
                </div>
                <div className="w-full px-4 my-4">
                    <hr className="border-t border-gray-600" />
                </div>
                <ul className="sidebar-list mt-10 space-y-4">
                    <li
                        className="group hover:bg-[#7e1b5e] rounded-xl transition-all duration-300 cursor-pointer text-center py-3 px-6 relative flex items-center justify-center space-x-2"
                        onClick={toggleDropArrow}
                    >
                        <span className="text-lg font-semibold ml-8">A</span>
                        <span
                            className={`transition-transform duration-300 transform ${isArrowClicked ? "rotate-180" : ""}`}
                        >
                            <ChevronDown className="text-white" />
                        </span>
                    </li>
                    {isArrowClicked && (
                        <ul className="sub-list mt-2 ml-8 space-y-2">
                            <li className="hover:bg-[#7e1b5e] rounded-xl transition-all duration-300 cursor-pointer text-center py-2 px-6">
                                <span className="text-sm font-medium">a1</span>
                            </li>
                            <li className="hover:bg-[#7e1b5e] rounded-xl transition-all duration-300 cursor-pointer text-center py-2 px-6">
                                <span className="text-sm font-medium">a2</span>
                            </li>
                        </ul>
                    )}
                    <li className="hover:bg-[#7e1b5e] rounded-xl transition duration-500 cursor-pointer text-center py-3 px-6">
                        <span className="text-lg font-semibold">B</span>
                    </li>
                    <li className="hover:bg-[#7e1b5e] rounded-xl transition duration-500 cursor-pointer text-center py-3 px-6">
                        <span className="text-lg font-semibold">C</span>
                    </li>
                    <li className="hover:bg-[#7e1b5e] rounded-xl transition duration-500 cursor-pointer text-center py-3 px-6">
                        <span className="text-lg font-semibold">D</span>
                    </li>
                    <li className="hover:bg-[#7e1b5e] rounded-xl transition duration-500 cursor-pointer text-center py-3 px-6">
                        <span className="text-lg font-semibold">E</span>
                    </li>
                    <li className="hover:bg-[#7e1b5e] rounded-xl transition duration-500 cursor-pointer text-center py-3 px-6">
                        <span className="text-lg font-semibold">F</span>
                    </li>
                </ul>
            </div>


        </div>
    );
}