import React from 'react';
import {UserType} from "@/constants/types";

export interface HeaderProps {
    type: UserType;
}
function Header(props: HeaderProps) {
    return (
        <>
        <div className={"lg:h-36 h-28 w-screen bg-gradient-to-b from-primary-1 to-primary-2 flex items-center px-[8%] lg:px-20 xl:px-40 py-[1%] lg:py-10 xl:py-14"}>

            <Logo></Logo>

        </div>
        <div className="w-screen h-10 bg-violet-200" />
        </>
    );
}

// Create a logo component which imports a svg file
function Logo() {
    return (
        <div className="w-[58px] h-[58px] bg-gradient-to-br from-fuchsia-500 to-indigo-500 rounded-full flex items-center justify-center pr-[3px]">
            <img src="/logo_arrow.svg" alt="Deluxe Delivery Logo" className="" />
        </div>


    );
}

export default Header;