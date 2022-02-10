import { Box, Heading, VStack, Flex, Divider } from "@chakra-ui/react";
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
                <Divider width={{ sm: "70%", xl: "52%" }} mt="15px" mb="10px" bg="#ff4000" padding="1px" />
            </Box>
            <Box width={{
                sm: "85%",
                md: "50%",
                lg: "50%",
                xl: "35% ",
            }} float="left" mt={{
                sm: "50px",
                lg: "150px",
                xl: "100px"
            }}>
                <Flex gap="20px">
                    <Box width="350px" height="300px" border="1px solid #fff">
                        <Heading>
                            Xquisite Bot
                        </Heading>
                    </Box>
                    <Box border="1px solid #fff">
                        <Heading>
                            Xquisite Bot
                        </Heading>
                    </Box>
                </Flex>
            </Box>
        </VStack>
    )
}
