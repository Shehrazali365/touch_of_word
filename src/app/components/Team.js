import Team6 from '../../../public/Team6.webp'
import Team5 from '../../../public/Team5.webp'
import Team4 from '../../../public/Team4.webp'
import Team3 from '../../../public/Team3.webp'
import Team2 from '../../../public/Team2.webp'
import Team1 from '../../../public/Team1.webp'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Team() {
    const teamMember = [
        {
            img: Team1,
            name: "Name",
            position: "position",
            faceBook: "#",
            linkedin: '#',
            twitter: '#',
            instagram: '#'
        },
        {
            img: Team2,
            name: "Name",
            position: "position",
            faceBook: "#",
            linkedin: '#',
            twitter: '#',
            instagram: '#'
        },
        {
            img: Team3,
            name: "Name",
            position: "position",
            faceBook: "#",
            linkedin: '#',
            twitter: '#',
            instagram: '#'
        },
        {
            img: Team4,
            name: "Name",
            position: "position",
            faceBook: "#",
            linkedin: '#',
            twitter: '#',
            instagram: '#'
        },
        {
            img: Team5,
            name: "Name",
            position: "position",
            faceBook: "#",
            linkedin: '#',
            twitter: '#',
            instagram: '#'
        },
        {
            img: Team6,
            name: "Name",
            position: "position",
            faceBook: "#",
            linkedin: '#',
            twitter: '#',
            instagram: '#'
        },
    ]
    return (
        <section id="team" className="py-5 sm:py-16">
            <div className="container mx-auto px-3 sm:px-5 xl:px-20 py-4 gap-2 sm:gap-4 flex flex-col">
                <div className="flex flex-col gap-4 justify-center text-center">
                    <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl ">Our Team: Innovators in Action</h2>
                    <p className=" text-[var(--secondary-color)] text-base md:text-xl font-medium italic">Strategists,
                        Designers,
                        Developers – Small Yet Mighty</p>
                </div>
                <div className="teams flex flex-wrap justify-start sm:justify-center gap-5 mt-14 ">
                    {teamMember.map((item, index) => (
                        <div key={index} className="flex team_card h-[25rem] sm:h-[30.5rem] flex-col rounded-md w-[100%] sm:w-[22rem] p-6 sm:p-8 gap-2"
                            style={{ background: 'var(--card-linear-gradient-color)' }}>
                            <div className="relative sm:w-[17.75rem] h-[85%] sm:h-[22rem] overflow-hidden"><Image
                                className="h-[100%] rounded-md object-cover w-[100%]" width="100%" height="100%"
                                src={item.img} alt="Name" />
                                <div style={{ background: 'linear-gradient(180deg, rgba(3, 52, 152, 0.5), rgba(255,255,255,0.5) 100%)' }}
                                    className="absolute team_icon transition-all duration-300 translate-y-[100%] bottom-0 w-[100%] py-4">
                                    <ul className="flex gap-4 justify-center items-center">
                                        <li className=" flex items-center justify-center"><a
                                            className=" text-white p-2 hover:bg-white hover:text-[var(--secondary-color)] transition-all duration-300 rounded-full"
                                            href={item.faceBook}>
                                            <FaFacebook />
                                        </a></li>
                                        <li className=" flex items-center justify-center"><a
                                            className=" text-white p-2 hover:bg-white hover:text-[var(--secondary-color)] transition-all duration-300 rounded-full"
                                            href={item.linkedin}><FaLinkedin /></a></li>
                                        <li className=" flex items-center justify-center"><a
                                            className=" text-white p-2 hover:bg-white hover:text-[var(--secondary-color)] transition-all duration-300 rounded-full"
                                            href={item.twitter}><FaTwitter /></a></li>
                                        <li className=" flex items-center justify-center"><a
                                            className=" text-white p-2 hover:bg-white hover:text-[var(--secondary-color)] transition-all duration-300 rounded-full"
                                            href={item.instagram}><FaInstagram /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="py-2">
                                <h3 className=" font-bold text-xl ">{item.name}</h3>
                                <p className=" text-base text-[var(--para-color)]">{item.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Team