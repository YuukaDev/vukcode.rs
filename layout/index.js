import Navigation from "../components/Navigation/Navigation"
import Hero from "../components/Hero/Hero"
import Projects from "../components/Projects/Projects"
import { Divider } from "@chakra-ui/react"

export default function Layout() {
    return (
        <>
            <Navigation />
            <Hero />
            <Divider width="50%" margin="0 auto" mt="5%" />
            <Projects />
        </>
    )
}