import Image from "next/image"
import About from '../../../public/About.webp'


function Communication() {
    return (
        <section id="communication" className="py-5 sm:py-20">
            <div
                className="container mx-auto px-3  gap-6 lg:gap-0 md:px-5 xl:px-20 flex flex-col-reverse lg:grid lg:grid-cols-2 xl:grid-cols-[40%,60%] items-center">
                <div className="flex"><Image className=" w-72 md:w-auto object-contain" src={About} width="100%"
                    height="100%" alt="About_img" />
                </div>
                <div className="flex flex-col gap-2 md:gap-4 py-0 sm:py-8">
                    <h3 className="text-[var(--secondary-color)] font-medium text-base md:text-xl italic">The Power of
                        Communication</h3>
                    <h2 className=" text-3xl md:text-4xl lg:text-5xl leading-10 sm:leading-[58px] font-semibold">Why Talk to
                        <span className="text-[var(--secondary-color)]">Someone?</span>
                    </h2>
                    <div className="flex flex-col gap-4 py-4">
                        <p className=" text-sm sm:text-base text-[var(--paragraph-gray-color)]">Whatever you have struggled or
                            are
                            struggling with, there's hope for you. Connecting with someone who is kind and compassionate
                            allows you to talk about what you're going through and be reminded that you are forgiven.
                        </p>
                        <p className=" text-sm sm:text-base text-[var(--paragraph-gray-color)]"> It even gives you someone who
                            can pray
                            with you and for you. You're never alone. Click below to get connected with someone who
                            cares about you.&nbsp;</p>
                    </div>
                    <div className="flex gap-2"><button
                        className=" font-font-semibold text-white text-sm sm:text-base py-2 px-2 sm:px-4 bg-[var(--secondary-color)] border-[var(--secondary-color)] rounded-md"
                        fdprocessedid="8gu3pp">Get connected</button><button
                            className=" font-font-semibold text-[var(--secondary-color)] text-sm sm:text-base border bg-transparent py-2 px-2 sm:px-4 hover:bg-[var(--secondary-color)] hover:text-white transition-all duration-300 border-[var(--secondary-color)] rounded-md"
                            fdprocessedid="hsc9v">Donate now</button></div>
                </div>
            </div>
        </section>
    )
}

export default Communication