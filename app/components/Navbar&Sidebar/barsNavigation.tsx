import { useState } from "react";
import { create, StoreApi, UseBoundStore } from "zustand";

export const useBarsNavigation: UseBoundStore<StoreApi<any>> = create((set)=>(({
    isSideBarOpen:false,
    toggleSideBar:()=>set((state:any) => ({isSideBarOpen: !state.isSideBarOpen})),
    isArrowClicked:false,
    toggleDropArrow:()=>set((state:any) => ({isArrowClicked: !state.isArrowClicked})),
})))

// export const useBarsNavigation = () => {
//     const [isSideBarOpen, setIsSideBarOpen] = useState(false);
//     const toggleSideBar = () => setIsSideBarOpen((prev) => !prev);

//     const [isArrowClicked, setIsArrowClicked] = useState(false);
//     const toggleDropArrow = () => setIsArrowClicked((prev) => !prev);
    
//     return {
//         isSideBarOpen,
//         toggleSideBar,
//         isArrowClicked,
//         toggleDropArrow,
//     };
// };