import { MoblieLinks } from "./MobileLinks";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Veil } from "./Veil";

export function CompleteNavigators() {
    return (
        <>
            <Navbar />
            <MoblieLinks />
            <Veil />
            <Sidebar />
        </>
    );
}
