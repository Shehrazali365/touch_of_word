import Image from 'next/image'
import Logowhite from '../../../public/Logowhite.svg'
import { FaPhone, FaEnvelope } from 'react-icons/fa'
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
    return (
        <footer className=" bg-[var(--section-bg-color)]  py-5 sm:py-10 md:py-20">
            <div className="container mx-auto px-3 md:px-5 xl:px-20 grid grid-cols-1 xl:grid-cols-2 justify-between">
                <div className="flex flex-col gap-5">
                    <div><Image className="sm:w-60 w-56 md:w-80" width="auto%" height="auto" src={Logowhite}
                        alt="Logo" /></div>
                    <div className="">
                        <p className=" text-base text-[var(--text-color)]  xl:w-[70%]">At Touch of Word, we're passionate about
                            transforming your words into powerful messages. With our AI Letter Writing Service,
                            communication has never been easier. Join us and discover the magic of Touch of Word today</p>
                    </div>
                </div>
                <div
                    className="md:flex md:justify-between grid grid-cols-1 sm:grid-cols-2 xl:justify-end gap-2 sm:gap-4 md:gap-16">
                    <div className="flex flex-col gap-2 sm:gap-3 md:gap-5">
                        <div className="h-9 mt-5">
                            <h2 className=" font-semibold text-[var(--primary-color)] text-lg leading-[22px]">Resources</h2>
                        </div>
                        <ul className="flex flex-col gap-2 md:gap-4">
                            <li className="flex items-center text-[var(--text-color)]"><a aria-current="page"
                                className="hover:text-[var(--primary-color)] hover:border-[var(--primary-color)] border-b-2 border-transparent transition-all duration-300 text-sm sm:text-base active"
                                href="/">Flowbite</a></li>
                            <li className="flex items-center text-[var(--text-color)]"><a aria-current="page"
                                className="hover:text-[var(--primary-color)] hover:border-[var(--primary-color)] border-b-2 border-transparent transition-all duration-300 text-sm sm:text-base active"
                                href="/">Tailwind CSS</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 sm:gap-3 md:gap-5">
                        <div className="h-9 mt-5">
                            <h2 className=" font-semibold text-[var(--primary-color)] text-lg leading-[22px]">Company</h2>
                        </div>
                        <ul className="flex flex-col gap-2 md:gap-4">
                            <li className="flex items-center text-[var(--text-color)]"><a aria-current="page"
                                className="hover:text-[var(--primary-color)] hover:border-[var(--primary-color)] border-b-2 border-transparent transition-all duration-300 text-sm sm:text-base active"
                                href="/">About us</a></li>
                            <li className="flex items-center text-[var(--text-color)]"><a aria-current="page"
                                className="hover:text-[var(--primary-color)] hover:border-[var(--primary-color)] border-b-2 border-transparent transition-all duration-300 text-sm sm:text-base active"
                                href="/">Pricing</a></li>
                            <li className="flex items-center text-[var(--text-color)]"><a aria-current="page"
                                className="hover:text-[var(--primary-color)] hover:border-[var(--primary-color)] border-b-2 border-transparent transition-all duration-300 text-sm sm:text-base active"
                                href="/">How it works</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col  gap-2gsm:ap-3 md:gap-5">
                        <div className="h-9 mt-5">
                            <h2 className=" font-semibold text-[var(--primary-color)] text-lg leading-[22px]">Contacts us</h2>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <div className=" text-[var(--text-color)] flex gap-4 items-center">
                                <div>
                                    <FaEnvelope className='text-sm sm:text-base' />
                                </div>
                                <div>
                                    <p className="text-sm leading-5">Shehrazali360@gmail.com</p>
                                </div>
                            </div>
                            <div className=" text-[var(--text-color)] flex gap-4 items-center">
                                <div>
                                    <FaPhone className='text-sm sm:text-base' />
                                </div>
                                <div>
                                    <p className="text-sm sm:text-base leading-5">(+92) 31 7439 4030</p>
                                </div>
                            </div>
                            <div className=" text-[var(--text-color)] flex gap-4 items-center">
                                <div>
                                    <FaLocationDot className='text-sm sm:text-base' />
                                </div>
                                <div>
                                    <p className="text-sm sm:text-base leading-5">794 Mcallister St San Francisco, 94102</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" container mx-auto px-3 md:px-5 xl:px-20 py-4">
                <div className="flex items-center justify-center md:justify-start">
                    <ul className="flex gap-2">
                        <li><a href="#"
                            className="w-8 h-8 p-2 flex items-center justify-center hover:text-[var(--secondary-color)] hover:bg-[var(--primary-color)] text-[var(--primary-color)] rounded-full transition-all duration-300"><svg
                                aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github"
                                className="svg-inline--fa fa-github  text-xl" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512">
                                <path fill="currentColor"
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                                </path>
                            </svg></a></li>
                        <li><a href="#"
                            className="w-8 h-8 p-2 flex items-center justify-center hover:text-[var(--secondary-color)] hover:bg-[var(--primary-color)] text-[var(--primary-color)] rounded-full transition-all duration-300"><svg
                                aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord"
                                className="svg-inline--fa fa-discord  text-xl" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 512">
                                <path fill="currentColor"
                                    d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z">
                                </path>
                            </svg></a></li>
                        <li><a href="#"
                            className="w-8 h-8 p-2 flex items-center justify-center hover:text-[var(--secondary-color)] hover:bg-[var(--primary-color)] text-[var(--primary-color)] rounded-full transition-all duration-300"><svg
                                aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook"
                                className="svg-inline--fa fa-facebook  text-xl" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z">
                                </path>
                            </svg></a></li>
                        <li><a href="#"
                            className="w-8 h-8 p-2 flex items-center justify-center hover:text-[var(--secondary-color)] hover:bg-[var(--primary-color)] text-[var(--primary-color)] rounded-full transition-all duration-300"><svg
                                aria-hidden="true" focusable="false" data-prefix="fab" data-icon="square-instagram"
                                className="svg-inline--fa fa-square-instagram  text-xl" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor"
                                    d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z">
                                </path>
                            </svg></a></li>
                        <li><a href="#"
                            className="w-8 h-8 p-2 flex items-center justify-center hover:text-[var(--secondary-color)] hover:bg-[var(--primary-color)] text-[var(--primary-color)] rounded-full transition-all duration-300"><svg
                                aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin"
                                className="svg-inline--fa fa-linkedin  text-xl" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor"
                                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
                                </path>
                            </svg></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer