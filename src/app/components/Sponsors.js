import Image from 'next/image'
import sponsor1 from '../../../public/sponsor1.webp'
import sponsor2 from '../../../public/sponsor2.webp'
import sponsor3 from '../../../public/sponsor3.webp'
import sponsor4 from '../../../public/sponsor4.webp'


function Sponsors() {
    const sponsorData = [
        {
            img: sponsor1,
        },
        {
            img: sponsor2,
        },
        {
            img: sponsor3,
        },
        {
            img: sponsor4,
        },
    ]
    return (
        <section id="sponsors">
            <div
                class="container mx-auto flex flex-wrap items-center text-center justify-center gap-5 sm:gap-20 px-3 md:px-5 xl:px-20 py-5 sm:py-10">
                {sponsorData?.map((item, index) => (
                    <Image key={index} class="md:w-[190px] w-[130px] sm:w-[160px] h-[40px] sm:h-[80px] md:h-[110px] object-cover"
                        src={item.img} width="auto%" height="auto" alt="sponsor_img" />
                ))}
            </div>
        </section>
    )
}

export default Sponsors