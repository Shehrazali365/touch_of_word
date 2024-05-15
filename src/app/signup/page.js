import Logo from '../../../public/Logo.svg'
import signup from '../../../public/SignUp.webp'
import Logowhite from '../../../public/Logowhite.svg'
import google from '../../../public/google.webp'
import github from '../../../public/github.webp'
import facebook from '../../../public/facebook.webp'
import Image from 'next/image'
import { FaLock, FaEnvelope, FaUser } from 'react-icons/fa'

function page() {
    return (
        <div className="xl:flex flex justify-center lg:grid lg:grid-cols-2 h-[100vh]">
            <div style={{ background: 'var(--auth-liner-color)' }} className="xl:flex-[3] hidden lg:block">
                <div className="flex flex-col gap-6 h-[100%] items-center justify-center">
                    <Image className="lg:w-80 w-60" src={Logowhite} alt="logo" />
                    <Image className="w-[350px] lg:w-[500px]" src={signup} width="100%" height="100%"
                        alt="SignUp image" />
                </div>
            </div>
            <div className="relative flex flex-col items-center w-[100%] px-4 sm:px-0 justify-center h-[100%] xl:flex-[2]">
                <div className=" absolute block lg:hidden left-4 top-4">
                    <Image src={Logo} style={{ width: "100%", height: "100%" }} alt="logo" />
                </div>
                <div className="flex flex-col gap-y-4 w-[100%] sm:w-[400px]">
                    <div className="flex flex-col">
                        <h3 className="text-[var(--secondary-color)] font-bold text-xl lg:text-2xl">Hello!</h3>
                        <p className=" text-sm lg:text-base text-gray-500">Sign Up to Get Started</p>
                    </div>
                    <div>
                        <form className="flex flex-col gap-4">
                            <div
                                className="grid grid-cols-[5%,95%] items-center gap-2 bg-[var(--section-bg)] py-1 lg:py-2 px-4 rounded-md">
                                <div>
                                    <FaUser className='text-[var(--secondary-color)] text-sm lg:text-base' />
                                </div>
                                <input
                                    className=" focus:outline-0 focus:ring-0 px-0 text-[var(--secondary-color)] text-sm border-none placeholder-[var(--secondary-color)] bg-transparent"
                                    placeholder="Full Name" />
                            </div>
                            <div
                                className="grid grid-cols-[5%,95%] items-center gap-2 bg-[var(--section-bg)] py-1 lg:py-2 px-4 rounded-md">
                                <div>
                                    <FaEnvelope className='text-[var(--secondary-color)] text-sm lg:text-base' />
                                </div>
                                <input
                                    className=" focus:outline-0 focus:ring-0 px-0 text-[var(--secondary-color)] text-sm border-none placeholder-[var(--secondary-color)] bg-transparent"
                                    placeholder="Email Address" />
                            </div>
                            <div
                                className="grid grid-cols-[5%,95%] items-center gap-2 bg-[var(--section-bg)] py-1 lg:py-2 px-4 rounded-md">
                                <div>
                                    <FaLock className='text-[var(--secondary-color)] text-sm lg:text-base' />
                                </div>
                                <input
                                    className=" focus:outline-0 focus:ring-0 px-0 text-[var(--secondary-color)] text-sm border-none placeholder-[var(--secondary-color)] bg-transparent"
                                    placeholder="Password" />
                            </div>
                            <div>
                                <div className="grid grid-cols-1">
                                    <button type="submit"
                                        className="p-2 rounded-md text-sm sm:text-base lg:text-base font-medium bg-[var(--secondary-color)] text-white">Register</button>
                                </div>
                            </div>
                        </form>
                        <div className="flex flex-col gap-4 pt-4">
                            <div className="flex justify-center text-[12px] text-gray-500">
                                <p>or sign up with</p>
                            </div>
                            <div className="flex justify-center gap-8">
                                <div><a href="#"><Image style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
                                    className="sm:w-10 w-7 rounded-full" src={google} width="100%"
                                    height="100%" alt="google img" /></a></div>
                                <div><a href="#"><Image style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
                                    className="sm:w-10 w-7 rounded-full" src={github} width="100%"
                                    height="100%" alt="github img" /></a></div>
                                <div><a href="#"><Image style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
                                    className="sm:w-10 w-7 rounded-full" src={facebook} width="100%"
                                    height="100%" alt="facebook img" /></a></div>
                            </div>
                            <div className="flex justify-center py-2">
                                <p className="text-[12px] text-gray-500">have an account yet? <a
                                    className=" font-medium text-[var(--secondary-color)] hover:underline"
                                    href="/login">Login!</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page