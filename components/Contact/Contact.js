import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Form from "../Form/Form";

export default function Contact() {
    return (
        <VStack margin="0" id="contact" mb="100px">
            <Box width="35%" float="left">
                <Heading>
                    You Can Contact Me Here
                </Heading>
                <Box>
                    <Form />
                </Box>
            </Box>
        </VStack>
    )
}