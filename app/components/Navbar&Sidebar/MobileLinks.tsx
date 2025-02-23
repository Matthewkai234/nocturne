import Link from "next/link";
import "./styles.css";

export function MoblieLinks(){
    const links = [
        {
            href:"/", className: "text-xl font-serif hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer", name:"Home"
        },
        {
            href:"#", className: "text-xl font-serif hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer", name:"Store"
        },
        {
            href:"#", className: "text-xl font-serif hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer", name:"About"
        },
        {
            href:"/contact-us", className: "text-xl font-serif hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer", name:"Contact"
        },
        {
            href:"#", className: "text-xl font-serif hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer", name:"FAQ"
        }
    ]

    return(
        <>
            <div className="brandLessThanSmall">
                {links.map((link,index)=>(
                    <Link key={index} href={link.href} className={link.className}>{link.name}</Link>
                ))}
            </div>
        </>
    )
}