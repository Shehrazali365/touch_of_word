import Charity from "../components/Charity"
import CommunityJoin from "../components/CommunityJoin"
import DonateMain from "../components/DonateMain"
import DonationPrograms from "../components/DonationPrograms"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Sponsors from "../components/Sponsors"
import Supporting from "../components/Supporting"
import Together from "../components/Together"


function page() {
  return (
    <>
        <Navbar />
        <DonateMain />
        <Sponsors />
        <Charity />
        <Supporting />
        <Together />
        <DonationPrograms />
        <CommunityJoin />
        <Footer />
    </>
  )
}

export default page