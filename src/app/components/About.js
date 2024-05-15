import heart from '../../../public/heart.svg'
import robo from '../../../public/robo.svg'
import Vector from '../../../public/Vector.svg'
import earth from '../../../public/earth.svg'
import Image from 'next/image'

function About() {
    return (
        <section id="about" className="bg-[var(--section-bg)] py-5 sm:py-16">
            <div
                className="container mx-auto px-3 md:px-5 xl:px-20 flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-[60%,40%] gap-4 items-center">
                <div className="flex flex-col gap-2 md:gap-4 h-full py-0 sm:py-8 justify-center">
                    <h3 className="text-[var(--secondary-color)] font-medium text-base md:text-xl italic">About Us</h3>
                    <h2 className=" text-3xl md:text-4xl lg:text-5xl leading-10 sm:leading-[58px] font-semibold">Our <span
                        className="text-[var(--secondary-color)]">Mission & Services</span></h2>
                    <div className="flex flex-col gap-4 py-4">
                        <p className=" text-sm sm:text-base  text-[var(--paragraph-gray-color)]">Touch of Word seamlessly merges
                            heartfelt
                            communication with cutting-edge AI technology. We specialize in crafting personalized messages
                            that convey sincerity and clarity, whether it's expressing gratitude, offering condolences, or
                            celebrating milestones. Our AI-driven platform ensures each word resonates authentically,
                            leaving a lasting impression.
                        </p>
                        <p className=" text-sm sm:text-base text-[var(--paragraph-gray-color)]"> Beyond letter-writing, we're
                            dedicated to
                            making a positive impact. With every letter sent, you support charitable initiatives, spreading
                            kindness and making a difference. Join us in our mission to spread compassion and experience the
                            transformative power of heartfelt communication with Touch.&nbsp;</p>
                    </div>
                    <div className="flex gap-2"><button
                        className=" font-font-semibold text-white text-sm sm:text-base py-2 px-2 sm:px-4 bg-[var(--secondary-color)] border-[var(--secondary-color)] rounded-md"
                        fdprocessedid="8gu3pp">Get Started</button><button
                            className=" font-font-semibold text-[var(--secondary-color)] text-sm sm:text-base border bg-transparent py-2 px-2 sm:px-4 hover:bg-[var(--secondary-color)] hover:text-white transition-all duration-300 border-[var(--secondary-color)] rounded-md"
                            fdprocessedid="hsc9v">Contact Us</button></div>
                </div>
                <div className="flex w-[100%] justify-center flex-row px-0 sm:p-4 h-full py-8 items-center">
                    <div className="flex w-[100%] flex-col gap-6 md:gap-8 md:justify-center md:items-center sm:justify-center">
                        <div className="grid grid-cols-1 border md:grid-cols-[90%,10%]">
                            <div className="shadow-md bg-white rounded-full p-2 md:p-4 md:w-[374px] flex items-center gap-8">
                                <div
                                    className=" bg-[var(--secondary-color)] w-[40px] md:w-[60px] h-[40px] md:h-[60px] flex items-center justify-center rounded-full">
                                    <Image src={heart} width="auto" height="auto" alt="images" />
                                </div>
                                <div className="w-[70%] text-center">
                                    <h3 className=" font-medium text-base sm:text-[18px] md:text-[22px]">Heartfelt Connection
                                    </h3>
                                </div>
                            </div>
                            <div className=" hidden md:block"></div>
                        </div>
                        <div className="grid grid-cols-1 border md:grid-cols-[10%,90%]">
                            <div className=" hidden md:block"></div>
                            <div
                                className="shadow-md bg-white rounded-full p-2 md:p-4 md:w-[374px] flex flex-row-reverse items-center gap-8">
                                <div
                                    className=" bg-[var(--secondary-color)] w-[40px] md:w-[60px] h-[40px] md:h-[60px] flex items-center justify-center rounded-full">
                                    <Image src={robo} width="auto" height="auto" alt="images" />
                                </div>
                                <div className="w-[70%] text-center">
                                    <h3 className=" font-medium text-base sm:text-[18px] md:text-[22px]">AI Letter-writing</h3>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 border md:grid-cols-[90%,10%]">
                            <div className="shadow-md bg-white rounded-full p-2 md:p-4 md:w-[374px] flex items-center gap-8">
                                <div
                                    className=" bg-[var(--secondary-color)] w-[40px] md:w-[60px] h-[40px] md:h-[60px] flex items-center justify-center rounded-full">
                                    <Image src={Vector} width="auto" height="auto" alt="images" />
                                </div>
                                <div className="w-[70%] text-center">
                                    <h3 className=" font-medium text-base sm:text-[18px] md:text-[22px]">Empowering Change</h3>
                                </div>
                            </div>
                            <div className=" hidden md:block"></div>
                        </div>
                        <div className="grid grid-cols-1 border md:grid-cols-[10%,90%]">
                            <div className=" hidden md:block"></div>
                            <div
                                className="shadow-md bg-white rounded-full p-2 md:p-4 md:w-[374px] flex flex-row-reverse items-center gap-8">
                                <div
                                    className=" bg-[var(--secondary-color)] w-[40px] md:w-[60px] h-[40px] md:h-[60px] flex items-center justify-center rounded-full">
                                    <Image src={earth} width="auto" height="auto" alt="images" />
                                </div>
                                <div className="w-[70%] text-center">
                                    <h3 className=" font-medium text-base sm:text-[18px] md:text-[22px]">Worldly Impact</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About