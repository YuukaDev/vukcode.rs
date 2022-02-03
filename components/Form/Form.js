import { useState } from "react";
import { Box, Input, VStack, Button, Textarea } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";


export default function FormComp() {
    const toast = useToast();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    return (
        <VStack>
            <form action="https://formsubmit.co/0a659b40cd7c824cd255011d92034184" method="POST">
                <Box width="400px">
                    <input type="hidden" name="_next" value="http://localhost:3000/" />
                    <input type="hidden" name="_captcha" value="false" />
                    <Input
                        mb="10px"
                        variant="flushed"
                        type="text"
                        placeholder="Name"
                        size="lg"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        mb="10px"
                        variant="flushed"
                        type="email"
                        placeholder="Email Adress"
                        size="lg"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Textarea
                        variant="flushed"
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