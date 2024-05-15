

function Charity() {
    const charityData = [
        {
            heading: 'Address Critical Issues',
            des: "Partnering with reputable charitable organizations allows us to address crucial issues such as education, healthcare, and environmental conservation."
        },
        {
            heading: 'Improve Lives',
            des: "Your support directly contributes to improving the lives of individuals and communities worldwide, making a tangible difference where it's needed most."
        },
        {
            heading: 'Create Lasting Impact',
            des: 'Together, we can create a lasting impact by supporting initiatives that promote positive change and uplift those in need.'
        },
    ]
    return (
        <section id="Charity" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #DDE8FF 100%)' }} className="py-5 sm:py-16">
            <div className="container mx-auto px-3 sm:px-5 xl:px-20 py-4 gap-2 sm:gap-4 flex flex-col">
                <div className="flex flex-col gap-4 justify-center text-center">
                    <h2 className="font-semibold  text-3xl md:text-4xl lg:text-5xl ">Why Support Our Charity Partners?</h2>
                    <p className=" text-[var(--secondary-color)] text-base md:text-xl font-medium italic">Making an Impact
                        Through Purposeful Giving</p>
                </div>
                <div className="Charity-conatant flex flex-wrap justify-center gap-5 sm:gap-16 lg:gap-12 xl:gap-5 mt-14 ">
                    {charityData?.map((item, index) => (
                        <div key={index} className="Charity-card hover:bg-[var(--secondary-color)] transition-all duration-300 cursor-pointer relative flex flex-col rounded-xl sm:rounded-[42px] w-[21.5rem] bg-white text-center items-center justify-center p-6 sm:p-8 gap-4 sm:gap-6"
                            style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
                            <h3 className="font-bold text-base sm:text-xl">{item.heading}</h3>
                            <p className="text-sm sm:text-base text-[var(--para-color)]">{item.des}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container mx-auto mt-10 px-3 sm:px-5 xl:px-20 py-0 sm:py-4 gap-2 sm:gap-4 flex flex-col">
                <div className="rounded-xl p-0 sm:p-4 py-0 sm:py-6 flex items-center justify-center gap-4 flex-wrap">
                    <div
                        className="flex flex-col gap-2 justify-center items-center w-[100%] sm:w-60 h-auto md:h-40 rounded-xl border text-center bg-white p-4 px-8">
                        <h3 className=" text-[var(--secondary-color)] font-bold text-2xl md:text-3xl lg:text-5xl">5K+</h3>
                        <p className=" text-base md:text-lg lg:text-xl text-[var(--para-color)]">Donation Received</p>
                    </div>
                    <div
                        className="flex flex-col gap-2 justify-center items-center w-[100%] sm:w-60 h-auto md:h-40 rounded-xl border text-center bg-white p-4 px-8">
                        <h3 className=" text-[var(--secondary-color)] font-bold text-2xl md:text-3xl lg:text-5xl">$10K</h3>
                        <p className=" text-base md:text-lg lg:text-xl text-[var(--para-color)]">Money Donated</p>
                    </div>
                    <div
                        className="flex flex-col gap-2 justify-center items-center w-[100%] sm:w-60 h-auto md:h-40 rounded-xl border text-center bg-white p-4 px-8">
                        <h3 className=" text-[var(--secondary-color)] font-bold text-2xl md:text-3xl lg:text-5xl">10+</h3>
                        <p className=" text-base md:text-lg lg:text-xl text-[var(--para-color)]">Active Compaigns</p>
                    </div>
                    <div
                        className="flex flex-col gap-2 justify-center items-center w-[100%] sm:w-60 h-auto md:h-40 rounded-xl border text-center bg-white p-4 px-8">
                        <h3 className=" text-[var(--secondary-color)] font-bold text-2xl md:text-3xl lg:text-5xl">$2M</h3>
                        <p className=" text-base md:text-lg lg:text-xl text-[var(--para-color)]">Charity in last year</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Charity