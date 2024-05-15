import Image from "next/image"
import Together1 from '../../../public/Together1.webp'
import Together2 from '../../../public/Together2.webp'
import Together3 from '../../../public/Together3.webp'



function Together() {
    return (
        <section id="Together" className="bg-[var(--section-bg)]">
            <div
                className="container mx-auto px-3 md:px-5 xl:px-20 py-5 flex gap-2 sm:gap-4 flex-col items-center justify-between">
                <div className=" lg:grid flex flex-col-reverse gap-4 sm:gap-5 lg:gap-10 lg:grid-cols-2 py-0 sm:py-4">
                    <div className="flex flex-col gap-2 sm:gap-4 items-center justify-center">
                        <div className=" grid grid-cols-1 w-[100%] h-[150px] sm:h-[190px]">
                            <div className="w-[100%] h-[100%] rounded-xl overflow-hidden">
                                <Image className="w-[100%] h-[100%] object-cover" width="100%" height="100%"
                                    src={Together1} />
                            </div>
                        </div>
                        <div className=" grid grid-cols-2 w-[100%] h-[150px] sm:h-[190px] gap-2 sm:gap-4">
                            <div className="w-[100%] h-[150px] sm:h-[190px] rounded-xl overflow-hidden">
                                <Image className="w-[100%] h-[100%] object-cover" width="100%" height="100%"
                                    src={Together2} />
                            </div>
                            <div className="w-[100%] h-[150px] sm:h-[190px] rounded-xl overflow-hidden">
                                <Image className="w-[100%] h-[100%] object-cover" width="100%" height="100%"
                                    src={Together3} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-4 py-0 sm:py-8">
                        <h3 className="text-[var(--secondary-color)] text-base md:text-xl italic">Uniting for Positive Change
                        </h3>
                        <h2 className=" text-3xl md:text-4xl lg:text-5xl leading-10  md:leading-[58px] font-semibold">
                            <span className="text-[var(--secondary-color)]">Together</span> , We Can Make a Difference
                        </h2>
                        <div className="flex flex-col gap-4 py-4">
                            <p className="text-sm sm:text-base text-[var(--para-color)]">Join us in our
                                commitment to giving back and supporting those in need. Your contribution, no matter how big
                                or
                                small, can help create positive change and improve lives.</p>
                            <p className="text-sm sm:text-base text-[var(--para-color)]">Together, we can
                                make a difference through the power of letter writing.</p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                className="text-sm sm:text-base border py-2 px-2 sm:px-4 bg-[var(--secondary-color)] text-white font-semibold transition-all duration-300 border-[var(--primary-color)] rounded-md"
                                fdprocessedid="cq4xp">Donate now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Together