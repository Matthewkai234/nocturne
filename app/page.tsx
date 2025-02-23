import NextImage from "next/image";
import NocturnalCover from "../review/NocturnalCover.jpg";
import { Products } from "./components/Home/Products";
import { CompleteNavigators } from "./components/Navbar&Sidebar/Index";
import { Linkedin } from "lucide-react";
import { Facebook, Instagram, X } from "./utils/brands";

export default function Home() {
    const socialLinks = [
        {
            icon: <Facebook size={20} />,
            href: "https://facebook.com/",
            label: "Facebook",
        },
        {
            icon: <X size={20} />,
            href: "https://twitter.com/",
            label: "Twitter",
        },
        {
            icon: <Instagram size={20} />,
            href: "https://instagram.com/",
            label: "Instagram",
        },
        {
            icon: <Linkedin size={20} />,
            href: "https://linkedin.com/",
            label: "LinkedIn",
        },
    ];

    return (
        <>
            {/* <div className="welcomeDev"><h2>Welcome to our store</h2></div> */}
            <CompleteNavigators />

            <div className="grid place-items-center">
                <NextImage
                    className="nocturneCoverImage w-[40rem] h-[15rem] sm:w-[50rem] sm:h-[15rem] md:w-[70rem] md:h-[18rem] lg:w-[120rem] lg:h-[28rem]"
                    src={NocturnalCover}
                    alt="Nocturne"
                />
            </div>

            <Products />

            <footer className="bg-gray-900 text-gray-300">
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm">
                            © {new Date().getFullYear()} Nocturne. All rights
                            reserved.
                        </p>

                        <div className="flex items-center gap-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        <a
                            href="mailto:info@nocturne.com"
                            className="text-sm hover:text-white transition-colors"
                        >
                            info@nocturne.com
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
