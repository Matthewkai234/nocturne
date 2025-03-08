import { CompleteNavigators } from "../components/Navbar&Sidebar/Index";

export const metadata = {
    title: "Store",
};

export default function Store() {
    return (
        <>
            <CompleteNavigators />
            <h1 className="text-3xl">Store</h1>
            <h2 className="text-2xl">Nocturne</h2>
        </>
    );
}
