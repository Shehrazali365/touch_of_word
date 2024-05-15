"use client"
import Image from "next/image"
import Logo from '../../../public/Logo.svg'
import { useEffect, useState } from 'react';
import {FaBars} from 'react-icons/fa'

function Navbar() {
    const [isSmallNavOpen, setIsSmallNavOpen] = useState(false);

    useEffect(() => {
        const togglebar = document.getElementById("togglebar");
        const smallnav = document.getElementById("smallnav");

        const handleToggleBarClick = () => {
            if (window.innerWidth < 1024) {
                setIsSmallNavOpen(!isSmallNavOpen);
            } else {
                setIsSmallNavOpen(false);
            }
        };

        const handleWindowResize = () => {
            if (window.innerWidth >= 1024) {
                setIsSmallNavOpen(false);
            }
        };

        togglebar.addEventListener("click", handleToggleBarClick);
        window.addEventListener("resize", handleWindowResize);

        return () => {
            togglebar.removeEventListener("click", handleToggleBarClick);
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [isSmallNavOpen]);
    return (
        <nav id="navbar" className="fixed w-[100%] z-[100] pt-3 px-0 ">
            <div className="container mx-auto gap-4 px-3 md:px-5 flex flex-col xl:px-20">
                <div className=" px-5 shadow-md bg-white rounded-xl py-4 flex gap-2 sm:gap-4 items-center justify-between">
                    <div><a aria-current="page" className="active" href="/home"><Image className="sm:w-56 w-40 h-11"
                        src={Logo} alt="logo" /></a></div>
                    <div>
                        <ul className=" hidden lg:flex gap-4">
                            <li
                                className="text-base text-[var(--secondary-color)] font-semibold  border-b-2 border-transparent hover:border-[var(--secondary-color)] transition-all duration-300">
                                <a aria-current="page" className="active" href="/home">Home</a>
                            </li>
                            <li
                                className="text-base text-[var(--secondary-color)] font-semibold  border-b-2 border-transparent hover:border-[var(--secondary-color)] transition-all duration-300">
                                <a aria-current="page" className="active" href="#">About</a>
                            </li>
                            <li
                                className="text-base text-[var(--secondary-color)] font-semibold  border-b-2 border-transparent hover:border-[var(--secondary-color)] transition-all duration-300">
                                <a aria-current="page" className="active" href="#">Services</a>
                            </li>
                            <li
                                className="text-base text-[var(--secondary-color)] font-semibold  border-b-2 border-transparent hover:border-[var(--secondary-color)] transition-all duration-300">
                                <a aria-current="page" className="active" href="#">Pricing</a>
                            </li>
                            <li
                                className="text-base text-[var(--secondary-color)] font-semibold  border-b-2 border-transparent hover:border-[var(--secondary-color)] transition-all duration-300">
                                <a aria-current="page" className="active" href="#">Conatct</a>
                            </li>
                            <li
                                className="text-base text-[var(--secondary-color)] font-semibold  border-b-2 border-transparent hover:border-[var(--secondary-color)] transition-all duration-300">
                                <a className="" href="/donate">Donate</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-1 sm:gap-[10px]">
                        <a href="/login"
                            className=" hidden sm:block text-[var(--secondary-color)] rounded-md  p-2 px-2 sm:px-4 hover:text-white text-[12px] sm:text-base transition-all duration-300 hover:bg-[var(--secondary-color)]"
                            fdprocessedid="0dc6bb">Sign in</a>
                        <a href="/signup"
                            className="  hidden sm:block  rounded-md bg-[var(--secondary-color)]  p-2 px-2 sm:px-4 text-[12px] sm:text-base text-white"
                            fdprocessedid="k765bn">Sign up</a>
                        <div id="togglebar"
                            className="p-2 px-2 sm:px-4 bg-[var(--secondary-color)] text-white cursor-pointer transition-all duration-300 text-sm flex lg:hidden items-center justify-center rounded-md">
                            <FaBars />
                        </div>
                    </div>
                </div>
                <div id="smallnav"
                    className={`h-0 transition-all ${isSmallNavOpen ? "open" : ""} px-5 overflow-hidden duration-300 shadow-md bg-white rounded-xl flex flex-col gap-2`}>
                    <ul className="flex gap-4 flex-col">
                        <li
                            className="text-base text-[var(--secondary-color)] font-semibold border-b-2 border-transparent hover:border-[var(--secondary-color)] transition-all duration-300 w-max">
                            <a aria-current="page" className="active" href="/home">Home</a>
                        </li>
                        <li
                            className="text-base text-[var(--secondary-color)] font-semibold border-b-2 border-transparent hover:border-[var(--secondary-color)] transition-all duration-300 w-max">
                            <a aria-current="page" className="active" href="#">About</a>
                        </li>
                        <li
                            className="text-base text-[var(--secondary-color)] font-semibold border-b-2 border-transparent hover:border-[var(--secondary-color)] transition-all duration-300 w-max">
                            <a aria-current="page" className="active" href="#">Services</a>
                        </li>
                        <li
                            className="text-base text-[var(--secondary-color)] font-semibold border-b-2 border-transparent hover:border-[var(--secondary-color)] transition-all duration-300 w-max">
                            <a aria-current="page" className="active" href="#">Pricing</a>
                        </li>
                        <li
                            className="text-base text-[var(--secondary-color)] font-semibold border-b-2 border-transparent hover:border-[var(--secondary-color)] transition-all duration-300 w-max">
                            <a aria-current="page" className="active" href="#">Conatct</a>
                        </li>
                        <li
                            className="text-base text-[var(--secondary-color)] font-semibold border-b-2 border-transparent hover:border-[var(--secondary-color)] transition-all duration-300 w-max">
                            <a className="" href="/donate">Donate</a>
                        </li>
                    </ul>
                    <div className=" gap-1 grid grid-cols-2 sm:hidden sm:gap-[10px]">
                        <a href="/login"
                            className="text-[var(--secondary-color)] text-center border border-[var(--secondary-color)] rounded-md  p-2 px-2 sm:px-4 hover:text-white text-[12px] sm:text-base transition-all duration-300 hover:bg-[var(--secondary-color)]"
                            fdprocessedid="0dc6bb">Sign in</a>
                        <a href="/signup"
                            className="rounded-md bg-[var(--secondary-color)] text-center  p-2 px-2 sm:px-4 text-[12px] sm:text-base text-white"
                            fdprocessedid="k765bn">Sign up</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar