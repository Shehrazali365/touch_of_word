import Image from 'next/image'
import Donate1 from '../../../public/Donate1.webp'
import Donate2 from '../../../public/Donate2.webp'
import Donate3 from '../../../public/Donate3.webp'
import Donate4 from '../../../public/Donate4.webp'


function DonateMain() {
    return (
        <section id="hero"
            className="bg-[var(--section-bg-color)] pt-20 sm:pt-32 pb-5 sm:pb-16 flex items-center justify-center">
            <div
                className="container mx-auto px-3 md:px-5 xl:px-20 py-4 flex gap-2 sm:gap-4 flex-col items-center justify-between">
                <div className=" lg:grid flex flex-col lg:grid-cols-2 py-4">
                    <div className="flex flex-col gap-2 md:gap-4 py-8">
                        <h3 className="text-[var(--primary-color)] text-base md:text-xl italic">Making a Difference Through
                            Donations</h3>
                        <h1 className=" text-3xl md:text-4xl lg:text-5xl text-[var(--heading-color)] font-semibold">
                            <span className=" underline">Support</span> a Cause with Touch of Word
                        </h1>
                        <p className="text-sm py-4 sm:text-base text-[var(--paragraph-color)]">We're
                            At Touch of Word, we believe in the power of communication to drive positive change. That's why
                            we're committed to supporting charitable initiatives that make a difference in people's lives.
                            Join us in our mission to give back to the community and support causes that matter. Together,
                            we can make an impact, one letter at a time.</p>
                        <div className="flex gap-2">
                            <button
                                className="text-sm sm:text-base border py-2 px-2 sm:px-4 bg-[var(--primary-color)] text-[var(--secondary-color)] font-semibold transition-all duration-300 border-[var(--primary-color)] rounded-md"
                                fdprocessedid="cq4xp">Donate now</button>
                        </div>
                    </div>
                    <div className="flex justify-center gap-4 items-center">
                        <div className="flex gap-4 flex-col  rounded-l-2xl overflow-hidden">
                            <Image className="w-[173px] h-[200px] sm:h-[233px] object-cover grayscale-[100]"
                                src={Donate1} width="auto%" height="auto" alt="Donate_img" />
                            <Image className="w-[173px] h-[143px] sm:h-[176px] object-cover grayscale-[100]"
                                src={Donate2} width="auto%" height="auto" alt="Donate_img" />
                        </div>
                        <div className="flex gap-4 flex-col rounded-r-2xl overflow-hidden">
                            <Image className="w-[173px] h-[143px] sm:h-[176px] object-cover grayscale-[100]"
                                src={Donate3} width="auto%" height="auto" alt="Donate_img" />
                            <Image className="w-[173px] h-[200px] sm:h-[233px] object-cover grayscale-[100]"
                                src={Donate4} width="auto%" height="auto" alt="Donate_img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DonateMain