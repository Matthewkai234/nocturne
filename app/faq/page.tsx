import { CompleteNavigators } from "../components/Navbar&Sidebar/Index";

export const metadata = {
    title: "FAQ",
};

export default function FAQ() {
    return (
        <>
            <CompleteNavigators />
            <h1 className="text-3xl">FAQ</h1>
            <h2 className="text-2xl">Nocturne</h2>
        </>
    );
}
