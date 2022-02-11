import { Divider } from "@chakra-ui/react"

import Navigation from "../components/Navigation/Navigation"
import Hero from "../components/Hero/Hero"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"
import AboutHero from "../components/AboutHero/AboutHero";

export default function Layout() {
    return (
        <>
            <Navigation />
            <Hero />
            <Divider bg="GrayText" width={{ sm: "90%", xl: "50%" }} margin="0 auto" mt={{ sm: "20%", xl: "5%" }} />
            <AboutHero />
            <Contact />
            <Footer />
        </>
    )
}