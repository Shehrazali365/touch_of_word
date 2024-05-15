import Image from "next/image"
import program3 from '../../../public/program3.svg'
import try1 from '../../../public/try1.svg'
import try2 from '../../../public/try2.svg'
import program2 from '../../../public/program2.svg'
import program1 from '../../../public/program1.svg'
import program4 from '../../../public/program4.svg'



function DonationPrograms() {
    return (
        <section id="donation_programs" className="bg-[var(--section-bg)] py-5 sm:py-16">
            <div
                className="container mx-auto px-3 md:px-5 xl:px-20 py-4 flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-2 gap-4 items-center">
                <div className="flex flex-col gap-2 md:gap-4 py-0 sm:py-8 h-full">
                    <h3 className="text-[var(--secondary-color)] font-medium text-base md:text-xl italic">Explore Donation
                        Programs</h3>
                    <h2 className=" text-3xl md:text-4xl lg:text-5xl leading-10 sm:leading-[58px] font-semibold">Several <span
                        className="text-[var(--secondary-color)]">Donation Programs</span> that can Make it Easier for You
                    </h2>
                    <div className="flex flex-col py-4">
                        <p className=" text-sm sm:text-base text-[var(--paragraph-gray-color)]">Explore our range of
                            donation programs designed to simplify your giving experience. From one-time contributions to
                            recurring donations, we offer options tailored to your preferences. Join us in making a
                            difference today.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button
                            className=" font-font-semibold text-white text-sm sm:text-base py-2 px-2 sm:px-4 bg-[var(--secondary-color)] border-[var(--secondary-color)] rounded-md"
                            fdprocessedid="8gu3pp">Donate now</button>
                    </div>
                </div>
                <div className="flex w-[100%] justify-center sm:py-8 py-4  items-center flex-row p-0 sm:p-4 h-full">
                    <div className="flex w-[100%] flex-col gap-4 md:gap-6 md:justify-center md:items-center sm:justify-center">
                        <div className="grid grid-cols-[60%,40%] w-[100%]">
                            <div className="shadow-md bg-white rounded-full p-2 md:p-4 w-[100%] flex items-center gap-8">
                                <div
                                    className=" bg-[var(--secondary-color)] w-[40px] md:w-[60px] h-[40px] md:h-[60px] flex items-center justify-center rounded-full">
                                    <Image src={program3} width="auto" height="auto" alt="images" />
                                </div>
                                <div className="w-[70%] text-center">
                                    <h3 className=" font-medium text-base sm:text-[18px] md:text-[22px]">Humanity
                                    </h3>
                                </div>
                            </div>
                            <div className=" flex justify-end items-center">
                                <div className="w-[60px] h-[60px]">
                                    <Image className="" src={try1} width="100%" height="100%" alt="images" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40%,60%] w-[100%]">
                            <div className=""></div>
                            <div
                                className="shadow-md bg-white rounded-full p-2 md:p-4 w-[100%] flex flex-row-reverse items-center gap-8">
                                <div
                                    className=" bg-[var(--secondary-color)] w-[40px] md:w-[60px] h-[40px] md:h-[60px] flex items-center justify-center rounded-full">
                                    <Image src={program2} width="auto" height="auto" alt="images" />
                                </div>
                                <div className="w-[70%] text-center">
                                    <h3 className=" font-medium text-base sm:text-[18px] md:text-[22px]">Food</h3>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[60%,40%] w-[100%]">
                            <div className="shadow-md bg-white rounded-full p-2 md:p-4 w-[100%] flex items-center gap-8">
                                <div
                                    className=" bg-[var(--secondary-color)] w-[40px] md:w-[60px] h-[40px] md:h-[60px] flex items-center justify-center rounded-full">
                                    <Image src={program1} width="auto" height="auto" alt="images" />
                                </div>
                                <div className="w-[70%] text-center">
                                    <h3 className=" font-medium text-base sm:text-[18px] md:text-[22px]">Medicines</h3>
                                </div>
                            </div>
                            <div className=""></div>
                        </div>
                        <div className="grid grid-cols-[40%,60%] w-[100%]">
                            <div className=" flex items-center justify-start">
                                <div className="w-[60px] h-[60px]">
                                    <Image className="" src={try2} width="100%" height="100%" alt="images" />
                                </div>
                            </div>
                            <div
                                className="shadow-md bg-white rounded-full p-2 md:p-4 w-[100%] flex flex-row-reverse items-center gap-8">
                                <div
                                    className=" bg-[var(--secondary-color)] w-[40px] md:w-[60px] h-[40px] md:h-[60px] flex items-center justify-center rounded-full">
                                    <Image src={program4} width="auto" height="auto" alt="images" />
                                </div>
                                <div className="w-[70%] text-center">
                                    <h3 className=" font-medium text-base sm:text-[18px] md:text-[22px]">Education</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DonationPrograms