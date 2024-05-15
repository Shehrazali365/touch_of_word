

function Supporting() {
    const supportingData = [
        {
            heading: "Charity Letters",
            des: "Opt to have a portion of your letter writing fees donated to our charity partners. With every letter you write, you'll be supporting a worthy cause."
        },
        {
            heading: "Donate",
            des: "Make a direct donation to one of our featured charities. Your contribution will go towards funding their programs and initiatives."
        },
        {
            heading: "Spread Awarenes",
            des: "Share information about our charity partners and the causes they support with your friends, family, and social networks. Help us raise awareness and inspire others to get involved."
        },
    ]
    return (
        <section id="Supporting" className="py-5 sm:py-16">
            <div className="container mx-auto px-3 sm:px-5 xl:px-20 py-0 sm:py-4 gap-2 sm:gap-4 flex flex-col">
                <div className="flex flex-col gap-4 justify-center text-center">
                    <h2 className="font-semibold  text-3xl md:text-4xl lg:text-5xl ">Supporting Causes</h2>
                    <p className=" text-[var(--secondary-color)] text-base md:text-xl font-medium italic">Empowering Giving:
                        Your Contribution Matters</p>
                </div>
                <div className=" flex flex-wrap justify-center gap-5 sm:gap-16 lg:gap-12 xl:gap-5 mt-14 ">
                    {supportingData?.map((item, index) => (
                        <div key={index} style={{ background: 'linear-gradient(180deg, #F3EFFF 0%, #FFFFFF 100%)' }}
                            className=" hover:bg-[var(--secondary-color)] transition-all duration-300 cursor-pointer relative flex flex-col rounded-xl sm:rounded-[42px] w-[22rem] h-max py-6 sm:py-4 sm:h-[28rem] bg-white text-center items-center justify-center p-4 gap-4 sm:gap-6">
                            <h3 className=" font-medium text-base md:text-2xl lg:text-3xl">{item.heading}</h3>
                            <p className="text-sm sm:text-base text-[var(--para-color)]">{item.des}</p>
                            <button
                                className="border rounded-lg bg-[var(--secondary-color)] text-sm sm:text-base font-semibold text-[var(--primary-color)] py-2 px-2 sm:px-4">Contact
                                us</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Supporting