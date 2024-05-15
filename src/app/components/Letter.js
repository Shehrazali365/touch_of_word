import Image from "next/image"
import letter from '../../../public/Letter.webp'


function Letter() {
    return (
        <section id="letter" className="py-5 sm:py-20 bg-[var(--section-bg-color)]">
            <div className="container mx-auto px-3 sm:px-5 xl:px-20 flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-2">
                <div className="flex flex-col gap-4 py-0 sm:py-8">
                    <h3 className="text-[var(--primary-color)] text-base md:text-xl italic">AI-Powered Letter Writing Revolution
                    </h3>
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl leading-10 sm:leading-[58px] text-[var(--heading-color)] font-semibold">
                        Easy Letter Crafting:
                        <span className=" border-b-2 border-white">How it Works?</span>
                    </h2>
                    <div className="flex flex-col gap-4 py-4">
                        <p className="text-sm sm:text-base text-[var(--paragraph-color)]">Step into a world where crafting the
                            perfect
                            letter is effortless and seamless. At Touch of Word, our AI letter-writing service
                            revolutionizes the way you communicate.</p>
                        <p className="text-sm sm:text-base text-[var(--paragraph-color)]"> Here's how it works: Simply input
                            your
                            message, choose your desired tone and style, and let our advanced algorithms do the rest.
                            Whether it's a heartfelt note, a professional email, or a personalized greeting, our AI
                            service delivers tailor-made letters that capture your essence. Experience the magic of
                            Touch of Word and elevate your written communication to new heights.&nbsp;</p>
                    </div>
                    <div className="flex gap-2"><button
                        className=" font-semibold text-[var(--secondary-color)] text-sm sm:text-base py-2 px-2 sm:px-4 bg-[var(--primary-color)] border-[var(--primary-color)] rounded-md"
                        fdprocessedid="exeq0o">Get Started</button><button
                            className=" font-semibold text-[var(--primary-color)] text-sm sm:text-base border bg-transparent py-2 px-2 sm:px-4 hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-all duration-300 border-[var(--primary-color)] rounded-md"
                            fdprocessedid="mlefzp">Donate now</button></div>
                </div>
                <div className="flex items-center justify-end"><Image className=" w-[20rem] md:w-[24rem] " width="auto%" height="auto"
                    src={letter} alt="letterImge" /></div>
            </div>
        </section>
    )
}

export default Letter;