
import { VStack, Box, Heading, Divider, Text, Flex, Link } from "@chakra-ui/react";
import Hero from "../components/Hero/Hero";
import Navigation from "../components/Navigation/Navigation";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Particles from "../components/Particles/Particles";


export default function Test() {

    return (
        <>
            <Navigation />
            <Hero />
            <Divider width={{ sm: "90%", xl: "50%" }} margin="0 auto" mt={{ sm: "20%", xl: "5%" }} />
            <VStack margin="0" id="projects">
                <Box mt={{
                    sm: "20%",
                    xl: "5%"
                }} width={{
                    sm: "90%",
                    md: "50%",
                    lg: "50%",
                    xl: "35% ",
                }} float="left">
                    <Heading fontSize={{
                        sm: "2em",
                        xl: "2.25rem"
                    }}>Featured Projects 👨‍💻</Heading>
                </Box>
                <Box width={{
                    sm: "80%",
                    xl: "37%"
                }}>
                    <Box>

                        <Flex margin="10px" padding="10px" gap="2em">
                            <Box border="1px solid #fff" width="650px" height="250px">
                                <Heading>Xquisite Bot</Heading>
                            </Box>
                            <Box border="1px solid #fff" width="300px" height="300px">
                                <Heading>Xquisite Bot</Heading>
                            </Box>
                            <Box border="1px solid #fff" width="300px" height="300px">
                                <Heading>Xquisite Bot</Heading>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </VStack>
            <br /><br /><br /><br /><br />
            <Contact />
            <Footer />
        </>
    )
}