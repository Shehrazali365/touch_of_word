"use client"
import Image from "next/image"
import Logo from '../../../public/Logo.svg'
import Community from '../../../public/Community.webp'
import { useState } from 'react';

function CommunityJoin() {
    const [isCustomDonationInputShown, setIsCustomDonationInputShown] = useState(false);
    const handleCustomDonationClick = () => {
        setIsCustomDonationInputShown(!isCustomDonationInputShown);
    };
    return (
        <section id="Community_join" className="py-5 sm:py-16">
            <div className="container mx-auto px-3 sm:px-5 xl:px-20 py-0 sm:py-4 gap-2 sm:gap-4 flex flex-col">
                <div className="flex flex-col gap-4 justify-center text-center">
                    <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl ">Join Our Community</h2>
                    <p className=" text-[var(--secondary-color)] text-base md:text-xl font-medium italic">Any question or
                        remarks? Just
                        write us a message!</p>
                </div>
                <div
                    className=" grid grid-cols-1 lg:grid-cols-2 shadow-xl mt-10 sm:mt-14 border border-gray-200 p-4 sm:p-6 rounded-xl gap-5">
                    <div
                        className={` relative join h-96 lg:h-auto flex justify-between text-center rounded-xl overflow-hidden`}>
                        <Image src={Community} alt="Community_img" className="z-10 grayscale-[100] absolute left-0 top-0 w-[100%] h-[100%]" />
                        <div className=" z-20 px-6 p-8 border opacity-80 w-[100%] h-[100%]"
                            style={{ background: 'linear-gradient(180deg, rgba(3, 52, 152, 1), #FFFFFF 100%)' }}>
                            <h2 className=" font-bold text-white text-2xl sm:text-3xl md:text-5xl lg:text-7xl">We Can Save The
                                Future</h2>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start gap-2 sm:gap-4">
                        <div className="flex flex-col gap-2">
                            <div className="sm:w-52 w-40 h-10">
                                <Image className="" src={Logo} width="100%" height="100%" alt="logo" />
                            </div>
                            <p className="italic font-medium text-base md:text-lg lg:text-xl text-[var(--secondary-color)]">
                                Touching Lives Through Every Letter: Supporting Causes That Matter</p>
                        </div>
                        <form className="flex flex-col gap-2 sm:gap-4">
                            <div className="flex flex-col gap-2">
                                <h3 className=" font-medium text-sm md:text-lg text-gray-600">Choose a donation type</h3>
                                <select
                                    className="bg-[var(--section-bg)] px-4 outline-none p-2 text-sm sm:text-base rounded-md border-none focus:ring-0 text-gray-600">
                                    <option className="">Cost of education</option>
                                    <option className="">Cost of education</option>
                                    <option className="">Cost of education</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="font-medium text-sm md:text-lg text-gray-600">Choose donation amount</h3>
                                <div className="flex gap-2 sm:gap-4 items-center">
                                    <input
                                        className=" focus:ring-0 !border-[var(--secondary-color)] text-[var(--secondary-color)] w-4 h-4 sm:w-5 sm:h-5 focus:border-none"
                                        name="donation" value="$25" type="radio" />
                                    <label className="font-medium text-sm sm:text-base md:text-xl">$25</label>
                                </div>
                                <div className="flex gap-2 sm:gap-4 items-center">
                                    <input
                                        className=" focus:ring-0 !border-[var(--secondary-color)] text-[var(--secondary-color)] w-4 h-4 sm:w-5 sm:h-5 focus:border-none"
                                        name="donation" value="$50" type="radio" />
                                    <label className="font-medium text-sm sm:text-base md:text-xl">$50</label>
                                </div>
                                <div className="flex gap-2 sm:gap-4 items-center">
                                    <input
                                        className=" focus:ring-0 !border-[var(--secondary-color)] text-[var(--secondary-color)] w-4 h-4 sm:w-5 sm:h-5 focus:border-none"
                                        name="donation" value="$100" type="radio" />
                                    <label className="font-medium text-sm sm:text-base md:text-xl">$100</label>
                                </div>
                                <div className="flex flex-col gap-2 sm:gap-4">
                                    <a id="customdonation"
                                        onClick={handleCustomDonationClick}
                                        className="text-[var(--secondary-color)] text-sm sm:text-base underline cursor-pointer ">Enter
                                        a custom donation amount</a>
                                    <div id="customdonationinput"
                                        className={`gap-2 ${isCustomDonationInputShown ? "show" : "hidden"} border w-max p-2 items-center justify-center rounded-md bg-[var(--section-bg)]`}>
                                        <label>$</label>
                                        <input type="number" name="donation"
                                            className="border-none py-1 text-[12px] bg-transparent sm:text-sm focus:outline-none focus:ring-0 focus:border-[var(--secondary-color) border-[var(--para-color)]" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-sm md:text-lg text-[var( --para-color)]">Choose a donation frequency</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div
                                        className="flex p-2 sm:p-4 gap-2 sm:gap-4 focus:bg-[var(--secondary-color)] focus:text-white items-center rounded-md border border-[var(--secondary-color)] text-[var(--secondary-color)]">
                                        <input name="frequency" value="Monthly"
                                            className="focus:ring-0 !border-[var(--secondary-color)] text-[var(--secondary-color)] w-4 h-4 sm:w-5 sm:h-5 focus:border-none"
                                            type="radio" />
                                        <label className=" text-sm sm:text-base">Monthly</label>
                                    </div>
                                    <div
                                        className="flex p-2 sm:p-4 gap-2 sm:gap-4 focus:bg-[var(--secondary-color)] focus:text-white items-center rounded-md border border-[var(--secondary-color)] text-[var(--secondary-color)]">
                                        <input name="frequency" value="onetime"
                                            className="focus:ring-0 !border-[var(--secondary-color)] text-[var(--secondary-color)] w-4 h-4 sm:w-5 sm:h-5 focus:border-none"
                                            type="radio" />
                                        <label className=" text-sm sm:text-base">one time</label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <input name="terms" value="true"
                                    className="focus:ring-0 !border-[var(--secondary-color)] text-[var(--secondary-color)] w-4 h-4 sm:w-5 sm:h-5 focus:border-none"
                                    type="radio" />
                                <label className=" text-[12px] sm:text-sm text-[var(--para-color)]">By clicking <span
                                    className=" font-bold">'Submit'</span>, you consent to the <span
                                        className="text-[#0279EF] underline"><a href="#">terms and conditions</a></span>
                                    mentioned.</label>
                            </div>
                            <div className=" grid grid-cols-1">
                                <button
                                    className="border rounded-lg bg-[var(--secondary-color)] text-sm sm:text-base font-semibold text-[var(--primary-color)] py-2 px-2 sm:px-4"
                                    fdprocessedid="wvmqalq">Go to checkout</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CommunityJoin