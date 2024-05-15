import About from "../components/About"
import Communication from "../components/Communication"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Letter from "../components/Letter"
import Navbar from "../components/Navbar"
import Pricing from "../components/Pricing"
import Services from "../components/Services"
import Team from "../components/Team"
import Testimonials from "../components/Testimonials"



function page() {
    return (
        <>
            <Navbar />
            <Hero />
            <Communication />
            <About />
            <Team />
            <Letter />
            <Services />
            <Testimonials />
            <Pricing />
            <Contact />
            <Footer />
        </>
    )
}

export default page