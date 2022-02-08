import { Box, Heading, VStack } from "@chakra-ui/react";
import Card from "../Card/Card";

export default function Projects() {
    return (
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
            <Card />
        </VStack>
    )
}
