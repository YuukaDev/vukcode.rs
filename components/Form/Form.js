import { useState } from "react";
import { Box, FormControl, FormLabel, Input, VStack, Button, Textarea } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";


export default function FormComp() {
    const toast = useToast();
    const [objectData, setObjectData] = useState({
        name: "",
        email: "",
        subject: ""
    })
    return (
        <VStack>
            <form action="https://formsubmit.co/0a659b40cd7c824cd255011d92034184" method="POST">
                <Box width="400px">
                    <FormControl isRequired>
                        <Input
                            variant="flushed"
                            type="text"
                            placeholder="Name"
                            size="lg"
                            onChange={(e) => setObjectData({
                                name: e.target.value
                            })}
                        />
                    </FormControl>
                    <FormControl isRequired mt={4}>
                        <Input
                            variant="flushed"
                            type="email"
                            placeholder="Email Adress"
                            size="lg"
                            onChange={(e) => setObjectData({
                                email: e.target.value
                            })}
                        />
                    </FormControl>
                    <FormControl isRequired mt={4}>
                        <Textarea
                            variant="flushed"
                            placeholder="Message"
                            size="lg"
                            onChange={(e) => setObjectData({
                                subject: e.target.value
                            })}
                        />
                    </FormControl>
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