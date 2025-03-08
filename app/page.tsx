import NextImage from "next/image";
import NocturnalCover from "../review/NocturnalCover.jpg";
import { Products } from "./components/Home/Products";
import { CompleteNavigators } from "./components/Navbar&Sidebar/Index";
import { Footer } from "./components/Footer/Footer";

export const metadata = {
    title: "Nocturne",
};

export default function Home() {
    return (
        <>
            <CompleteNavigators />

            <div className="grid place-items-center">
                <NextImage
                    className="nocturneCoverImage w-[40rem] h-[15rem] sm:w-[50rem] sm:h-[15rem] md:w-[70rem] md:h-[18rem] lg:w-[120rem] lg:h-[28rem]"
                    src={NocturnalCover}
                    alt="Nocturne"
                />
            </div>

            <Products />
            <Footer />
        </>
    );
}
