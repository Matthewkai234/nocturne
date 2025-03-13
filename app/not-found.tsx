import Link from "next/link";
import { CompleteNavigators } from "./components/Navbar&Sidebar/Index";
import { Footer } from "./components/Footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "404 Not Found",
};

type NotFoundProps = {
    show?: boolean;
};

export default function NotFound({ show }: NotFoundProps) {
    return (
        <>
            <title>404 Not Found</title>
            {show === undefined || show ? <CompleteNavigators /> : null}
            <main className="min-h-screen bg-[url('https://www.transparenttextures.com/patterns/white-diamond-dark.png'),linear-gradient(to_bottom,#040105,#0e030f,#040105)] flex flex-col">
                <div className="flex flex-col items-center justify-center flex-grow text-center py-20">
                    <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                    <p className="text-xl text-gray-300 mb-8">
                        Oops! The page you are looking for does not exist.
                    </p>
                    <Link
                        href="/"
                        className="px-6 py-3 bg-[#D4AF37] hover:bg-[#ffd700] text-black font-semibold rounded"
                    >
                        Go to Home
                    </Link>
                </div>
            </main>
            {show === undefined || show ? <Footer /> : null}
        </>
    );
}
