import { Box, Heading, VStack } from "@chakra-ui/react";
import Form from "../Form/Form";

export default function Contact() {
    return (
        <VStack margin="0" id="contact" mb="50px">
            <Box
                width={{
                    sm: "110%",
                    xl: "35%"
                }}
                float="left">
                <Heading
                    fontSize={{
                        sm: "1.7em",
                        xl: "2.25rem"
                    }}
                    mb="0.7em"
                    textAlign="center">
                    You Can Contact Me Here
                </Heading>
                <Box>
                    <Form />
                </Box>
            </Box>
        </VStack>
    )
}