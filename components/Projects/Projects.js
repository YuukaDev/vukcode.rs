import { Box, Flex, Text, Heading, Image, VStack, Divider } from "@chakra-ui/react";

export default function Projects() {
    return (
        <VStack margin="0" id="projects">
            <Box mt="5%" width="35%" float="left">
                <Heading>Featured Projects</Heading>
            </Box>
            <Box>
                <Heading>
                    Finance Tracker
                </Heading>
                <Box width="50%" float="left" margin="0 auto">
                    <VStack width="50%" float="left" margin="0 auto">
                        <Text justifyContent="left" textAlign="left">
                            An android application through which one can scan his/her bill and all the products will be scanned, categorised and will be added to his/her monthly expenses. This app also shows top 100 crypto currencies and clicking on particular crypto all the information (along with chart) will be displayed.
                        </Text>
                        <Image width="100px" height="100px" src="https://portfolio-neelbavarva.vercel.app/static/media/FinanceTracker.06457114.jpeg" />
                    </VStack>
                </Box>
            </Box>
        </VStack>
    )
}

//https://portfolio-neelbavarva.vercel.app/static/media/FinanceTracker.06457114.jpeg