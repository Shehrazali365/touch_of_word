import Image from 'next/image'
import Testimonials1 from '../../../public/Testimonials1.webp'
import Testimonials2 from '../../../public/Testimonials2.webp'
import Testimonials3 from '../../../public/Testimonials3.webp'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


function Testimonials() {
    const testimonialsData = [
        {
            img: Testimonials1,
            des: 'Touch of Word completely transformed the way I approach letter writing. With their AI service, I was able to craft professional emails in minutes, saving me time and hassle. Highly recommended',
            name: 'Sarah Zach',
        },
        {
            img: Testimonials2,
            des: 'Touch of Word completely transformed the way I approach letter writing. With their AI service, I was able to craft professional emails in minutes, saving me time and hassle. Highly recommended',
            name: 'Kyle Merwin',
        },
        {
            img: Testimonials3,
            des: 'Touch of Word completely transformed the way I approach letter writing. With their AI service, I was able to craft professional emails in minutes, saving me time and hassle. Highly recommended',
            name: 'Paul Brandon',
        },
    ]
    return (
        <section id="testimonials" className="sm:py-16 py-5 bg-[var(--section-bg)]">
            <div className="container mx-auto px-3 sm:px-5 xl:px-20 py-0 sm:py-4 gap-2 sm:gap-4 flex flex-col">
                <div className="flex flex-col gap-4 justify-center text-center">
                    <h2 className="font-semibold  text-3xl md:text-4xl lg:text-5xl ">Testimonials</h2>
                    <p className=" text-[var(--secondary-color)] text-base md:text-xl font-medium italic">Insights from Those
                        Who've
                        Experienced Touch of Word</p>
                </div>
                <div className="teams flex flex-wrap justify-center gap-16 lg:gap-12 xl:gap-5 mt-14 ">
                    {testimonialsData?.map((item, index) => (
                        <div key={index} className="testimonials-card hover:bg-[var(--secondary-color)] transition-all duration-300 cursor-pointer relative flex flex-col rounded-[42px] w-[21.5rem] pt-[4.5rem] sm:pt-[6rem] bg-white text-center items-center justify-center p-8 gap-2"
                            style={{ boxShadow: 'rgba(0, 0, 0, 0.09) 0px 4px 6px 0px' }}><Image
                                className="sm:w-32 w-24 h-24 sm:h-32 object-bottom rounded-full border-2 border-white shadow-2xl absolute top-[-15%]"
                                src={item.img} width="auto%" height="auto" alt="img" />
                            <p className="text-sm sm:text-base text-[var(--para-color)]">{item.des}</p>
                            <h3 className="font-bold text-base sm:text-lg">{item.name}</h3>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center mt-7">
                    <div className="flex gap-4">
                        <button
                            className=" active:!shadow-none text-[var(--primary-color)] bg-[var(--secondary-color)] font-bold text-base md:text-xl  p-4 rounded-full "
                            fdprocessedid="k6d4nx" style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 4px 4px 0px' }}>
                            <FaChevronLeft />
                        </button>
                        <button
                            className=" active:!shadow-none text-[var(--primary-color)] bg-[var(--secondary-color)] font-bold text-base md:text-xl  p-4 rounded-full "
                            fdprocessedid="s361ri" style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 4px 4px 0px' }}>
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials