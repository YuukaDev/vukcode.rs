import { Box, Heading, VStack } from "@chakra-ui/react";
import Card from "../Card/Card";

export default function Projects() {
    return (
        <VStack margin="0" id="projects">
            <Box mt="5%" width="35%" float="left">
                <Heading>Featured Projects 👨‍💻</Heading>
            </Box>
            <Card />
        </VStack>
    )
}
