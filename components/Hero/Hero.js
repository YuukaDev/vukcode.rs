import { HStack, Box, Heading, Text, Avatar, Link, Divider, VStack } from "@chakra-ui/react";

export default function Hero() {
    return (
        <VStack >
            <Box width="35%" float="left" mt="80px">
                <Heading>Hello, I'm Yuuka 👋</Heading>
                <Divider width="50%" mt="15px" mb="10px" bg="#ff4000" padding="1px" />
            </Box>
            <Box fontWeight="thin" fontSize="xx-large" width="35%" float="left" mt="80px">
                <Text>
                    Front End developer and a student
                </Text>

            </Box>
        </VStack>
    )
}