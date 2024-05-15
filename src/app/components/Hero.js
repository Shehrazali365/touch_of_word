import Image from 'next/image'
import Slider1 from '../../../public/Slider1.webp'

function Hero() {
    return (
        <section id="hero"
            className="bg-[var(--section-bg-color)] pt-20 sm:pt-32 pb-5 sm:pb-16 flex items-center justify-center">
            <div
                className="container mx-auto px-3 md:px-5 xl:px-20 py-4 flex gap-2 sm:gap-4 flex-col items-center justify-between">
                <div className=" lg:grid flex flex-col lg:grid-cols-[60%,40%] py-4">
                    <div className="flex flex-col gap-2 md:gap-4 py-8">
                        <h3 className="text-[var(--primary-color)] text-base md:text-xl italic">AI's Creative Letter Design</h3>
                        <h1
                            className=" text-3xl md:text-4xl lg:text-5xl leading-10 md:leading-[58px] text-[var(--heading-color)] font-semibold">
                            Unlock the Power
                            of Letter with <span className="underline">Generative Al</span></h1>
                        <div className="flex flex-col gap-4 py-4">
                            <p className="text-sm sm:text-base  text-[var(--paragraph-color)]">We're
                                revolutionizing the way you craft and
                                send letters. Say goodbye to tedious hours spent composing, formatting, and sending letters
                                manually.</p>
                            <p className="text-sm sm:text-base  text-[var(--paragraph-color)]">Our cutting-edge Al
                                technology empowers you to
                                effortlessly generate personalized letters tailored to your needs, saving you time and
                                effort.&nbsp;</p>
                        </div>
                        <div className="flex gap-2"><button
                            className="text-[var(--secondary-color)] font-semibold text-sm sm:text-base py-2 px-2 sm:px-4 bg-[var(--primary-color)] border-[var(--primary-color)] rounded-md"
                            fdprocessedid="b39v5i">Get Started</button><button
                                className="text-[var(--primary-color)] text-sm sm:text-base border bg-transparent py-2 px-2 sm:px-4 hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)] font-semibold transition-all duration-300 border-[var(--primary-color)] rounded-md"
                                fdprocessedid="cq4xp">Donate now</button></div>
                    </div>
                    <div className="flex justify-center lg:justify-end"><Image className=" w-72 md:w-auto object-contain"
                        src={Slider1} width="100%" height="100%" alt="Slider_img" /></div>
                </div>
                <div className="flex justify-center gap-1">
                    <div className=" w-16 bg-[var(--primary-color)] h-1 sm:h-2 rounded-lg"></div>
                    <div className=" w-3 bg-[var(--slider-btn-color)] h-1 sm:h-2 rounded-lg"></div>
                    <div className=" w-3 bg-[var(--slider-btn-color)] h-1 sm:h-2 rounded-lg"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero