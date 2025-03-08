import { Mail, Moon } from "lucide-react";
import React from "react";
import { Facebook, Instagram, Linkedin, X } from "~/app/utils/brands";

export function Footer() {
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
            <footer className=" bottom-0 bg-[url('https://www.transparenttextures.com/patterns/mirrored-squares.png'),_linear-gradient(to_right,#121212,#000000,#121212)] backdrop-blur-lg border-t border-[#D4AF37] w-full z-50 ">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center group">
                            <Moon className="h-6 w-6 text-[#D4AF37] mr-2" />
                            <p className="text-sm bg-gradient-to-r from-[#D4AF37] to-[#9b7f20] bg-clip-text text-transparent font-bold">
                                © {new Date().getFullYear()} Nocturne
                            </p>
                        </div>

                        <div className="flex items-center gap-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-[#ffffff08] hover:bg-[#b0a4ff15] transition-all group"
                                    aria-label={social.label}
                                >
                                    {React.cloneElement(social.icon, {
                                        className: "h-6 w-6 text-white group-hover:text-[#D4AF37] transform group-hover:scale-125 transition-all duration-300"
                                    })}
                                </a>
                            ))}
                        </div>

                        <a
                            href="mailto:info@nocturne.com"
                            className="text-sm text-gray-300 hover:text-[#D4AF37] transition-colors flex items-center"
                        >
                            <Mail className="h-5 w-5 mr-2 text-[#D4AF37]" />
                            info@nocturne.com
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
