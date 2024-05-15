import Services3 from '../../../public/Services3.webp'
import Services2 from '../../../public/Services2.webp'
import Services1 from '../../../public/Services1.webp'
import Image from 'next/image'


function Services() {
    const serviceData = [
        {
            img: Services1,
            heading: 'Implementation',
            des: 'With innovation at our core, we continuously enhance our offerings new features to give customers a genuinely seamless experience.'
        },
        {
            img: Services2,
            heading: 'Customized Solution',
            des: 'We assist enterprises in their face verification journeys with the proper skill set. Industry expertise, and ability to designs domain-specific highly customized solutions.'
        },
        {
            img: Services3,
            heading: 'Implementation',
            des: 'With innovation at our core, we continuously enhance our offerings new features to give customers a genuinely seamless experience.'
        },
    ]
    return (
        <section id="service" className="py-5 sm:py-16">
            <div className="container mx-auto px-3 sm:px-5 xl:px-20 py-0 sm:py-4 gap-2 sm:gap-4 flex flex-col">
                <div className="flex flex-col gap-4 justify-center text-center">
                    <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl">Discover the Power of Touch of Word</h2>
                    <p className=" text-[var(--secondary-color)] text-base md:text-xl font-medium italic">Elevate Your Letters
                        with Ease
                    </p>
                </div>
                <div className="teams flex flex-wrap justify-center gap-5 mt-10 sm:mt-14 ">
                    {serviceData?.map((item, index) => (
                        <div key={index} className="flex flex-col rounded-2xl w-[21.5rem] h-[25rem] text-center items-center justify-center p-8 gap-2"
                            style={{ background: 'var(--card-linear-gradient-color)' }}><Image className="w-32 h-32"
                                src={item.img} width="auto%" height="auto" alt="img" />
                            <h3 className=" font-semibold text-[22px] md:text-[28px]">{item.heading}</h3>
                            <p className="text-sm md:text-base text-[var(--para-color)]">{item.des}</p>
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Services