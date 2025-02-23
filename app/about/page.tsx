import { CompleteNavigators } from "../components/Navbar&Sidebar/Index";

export const metadata = {
    title: "About Us",
};

export default function About() {
    return (
        <>
            <CompleteNavigators />
            <h1 className="text-3xl">About</h1>
            <h2 className="text-2xl">Nocturne</h2>
        </>
    );
}
