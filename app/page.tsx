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
import NextImage from "next/image";
import NocturnalCover from "../review/NocturnalCover.jpg";

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const toggleSideBar = () => setIsSideBarOpen((prev) => !prev);

    const [isArrowClicked, setIsArrowClicked] = useState(false);
    const toggleDropArrow = () => setIsArrowClicked((prev) => !prev);

    return (
        <>
            {/* <div className="welcomeDev"><h2>Welcome to our store</h2></div> */}

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
                    <a href="#" className="text-xl font-serif hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Home</a>
                    <a href="#" className="text-xl font-serif hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Store</a>
                    {/* <Swords className="brandIcon w-8 h-8 text-yellow-400 transform rotate-45 hover:scale-110 transition-transform duration-300 cursor-pointer" /> */}
                    <a href="#" className="text-xl font-serif hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">About Us</a>
                    <a href="#" className="text-xl font-serif hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Contact Us</a>
                    <a href="#" className="text-xl font-serif hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">FAQ</a>
                </div>


                <div className=" searchCartUserDiv">
                    <Search className="icon" />
                    <User className="icon" />
                    <ShoppingCart className="icon" />
                </div>
            </div>

            <div
                className={`fixed inset-0 top-[3rem] bg-black z-40 bg-opacity-50 transition-opacity duration-300 ${
                    isSideBarOpen ? "block" : "hidden"
                }`}
                onClick={toggleSideBar}
            ></div>

            <div
                className={`fixed top-30 left-0 h-full bg-gradient-to-b
                bg-[#121212]
                text-white 
                bg-opacity-95
                flex
                flex-col
                w-64 transform transition-transform duration-300 ease-in-out z-50 ${
                    isSideBarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="sideBarHeaderDiv  justify-center mt-4">
                    <div className="flex justify-center">
                        <Swords className="h-10 w-10"/>
                    </div>
                    <span className="sideBarHeader flex justify-center font-extrabold text-xl font-sans-serif pt-2">
                        Our Mystical Products
                    </span>
                </div>

                <div className="w-full px-4 my-4">
                    <hr className="border-t border-gray-600" />
                </div>
                
                <ul className="sidebar-list mt-10 space-y-4">
                    <li 
                        className={`group hover:bg-[#7e1b5e] rounded-xl transition-all duration-300 cursor-pointer text-center py-3 px-6 relative flex items-center justify-center space-x-2`}
                        onClick={toggleDropArrow}
                    >
                        <span className="text-lg font-semibold ml-8">A</span>
                        <span 
                            className={`transition-transform duration-300 transform ${isArrowClicked ? 'rotate-180' : ''}`}
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

                <div className="flex-1"></div>
                <div className="searchCartUserDivInSidebar flex-1">
                    <Search className="icon" />
                    <User className="icon" />
                    <ShoppingCart className="icon" />
                </div>
            </div>

            <div className="brandLessThanSmall">
                    <a href="#" className="text-xl font-serif hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Home</a>
                    <a href="#" className="text-xl font-serif hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Store</a>
                    {/* <Swords className="brandIcon w-8 h-8 text-yellow-400 transform rotate-45 hover:scale-110 transition-transform duration-300 cursor-pointer" /> */}
                    <a href="#" className="text-xl font-serif hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">About</a>
                    <a href="#" className="text-xl font-serif hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Contact</a>
                    <a href="#" className="text-xl font-serif hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">FAQ</a>
            </div>

            <div className="grid place-items-center">
                <NextImage className="nocturneCoverImage w-[40rem] h-[15rem] sm:w-[50rem] sm:h-[15rem] md:w-[70rem] md:h-[18rem] lg:w-[120rem] lg:h-[28rem]" src={NocturnalCover} alt = "Nocturne" />
            </div>

            <div>
            </div>

        <footer className="bg-gray-950 text-white py-6">
            <div className="max-w-screen-xl mx-auto text-center">
            <p className="text-sm">&copy; 2025 Nocturne. All Rights Reserved.</p>
            <div className="mt-4">
            <a href="https://www.facebook.com" target="_blank" className="text-white mx-4 hover:text-blue-600">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" className="text-white mx-4 hover:text-blue-400">Twitter</a>
            <a href="https://www.instagram.com" target="_blank" className="text-white mx-4 hover:text-pink-600">Instagram</a>
            <a href="https://www.linkedin.com" target="_blank" className="text-white mx-4 hover:text-blue-500">LinkedIn</a>
            </div>
            <div className="mt-4">
            <p className="text-sm">Contact us: <a href="mailto:info@yourcompany.com" className="text-white hover:underline">info@yourcompany.com</a></p>
            </div>
            </div>
        </footer>
        </>
    );
}
