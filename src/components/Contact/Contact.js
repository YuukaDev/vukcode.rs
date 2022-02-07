import { Box, Heading, VStack } from "@chakra-ui/react";
import Form from "../Form/Form";

export default function Contact() {
    return (
        <VStack margin="0" id="contact" mb="50px">
            <Box width="35%" float="left">
                <Heading mb="0.7em" textAlign="center">
                    You Can Contact Me Here
                </Heading>
                <Box>
                    <Form />
                </Box>
            </Box>
        </VStack>
    )
}