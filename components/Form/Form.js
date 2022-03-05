import { useState } from "react";
import { Box, Input, VStack, Button, Textarea } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";


export default function FormComp() {
    //const toast = useToast();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    return (
        <VStack>
            <form action="https://formsubmit.co/90adeb8f3cf4e253525d1de3241cd17a" method="POST">
                <Box width={{ sm: "330px", xl: "400px" }}>
                    <input type="hidden" name="_next" value="http://localhost:3000/" />
                    <input type="hidden" name="_captcha" value="false" />
                    <Input
                        value={name}
                        name="name"
                        mb="10px"
                        variant="outline"
                        type="text"
                        placeholder="Name"
                        size="lg"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        value={email}
                        name="email"
                        mb="10px"
                        variant="outline"
                        type="email"
                        placeholder="Email Adress"
                        size="lg"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Textarea
                        value={subject}
                        name="message"
                        variant="outline"
                        placeholder="Message"
                        size="lg"
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </Box>
                <Button
                    colorScheme="messenger"
                    variant="outline"
                    type="submit"
                    width="40%"
                    mt={4}
                >
                    Send
                </Button>
            </form>
        </VStack >
    )
}