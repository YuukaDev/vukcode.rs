import { useState } from "react";
import { Flex, Input, VStack, Button } from "@chakra-ui/react";


export default function FormComp() {
    const [objectData, setObjectData] = useState({
        name: "",
        email: "",
        subject: ""
    })
    return (
        <VStack>
            <form action="https://formsubmit.co/0a659b40cd7c824cd255011d92034184" method="POST">
                <Flex justifyContent="center" alignItems="center" flexDirection="column" gap="20px">
                    <Input type="hidden" name="_next" value="http://localhost:3000/" />
                    <Input type="hidden" name="_captcha" value="false" />
                    <Input
                    autoComplete="off"
                        width="180%"
                        onChange={(e) => setObjectData({
                            name: e.target.value
                        })}
                        id="name"
                        name="name"
                        placeholder="Name"
                        type="text" />
                    <Input
                        width="180%"
                        onChange={(e) => setObjectData({
                            email: e.target.value
                        })}
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email" />
                    <Input
                        width="180%"
                        onChange={(e) => setObjectData({
                            subject: e.target.value
                        })}
                        id="subject"
                        name="_subject"
                        placeholder="Message"
                        type="text"
                    />
                    <Button mt="10px" type="submit">Submit</Button>
                </Flex>
            </form>
        </VStack >
    )
}