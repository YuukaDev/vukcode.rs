import { useState } from "react";
import { Box, Heading, Text, Input, VStack, Button } from "@chakra-ui/react";


export default function FormComp() {
    const [objectData, setObjectData] = useState({
        name: "",
        email: "",
        subject: ""
    })
    return (
        <VStack>
            <form action="https://formsubmit.co/0a659b40cd7c824cd255011d92034184" method="POST">
                <input type="hidden" name="_next" value="http://localhost:3000/" />
                <input type="hidden" name="_captcha" value="false" />
                <label htmlFor="firstName">First Name</label>
                <Input onChange={(e) => setObjectData({
                    name: e.target.value
                })} id="name" name="name" placeholder="Name" type="text" />

                <label htmlFor="lastName">Email</label>
                <Input onChange={(e) => setObjectData({
                    email: e.target.value
                })} id="email" name="email" placeholder="Email" type="email" />

                <label htmlFor="email">Message</label>
                <Input
                    onChange={(e) => setObjectData({
                        subject: e.target.value
                    })}
                    id="subject"
                    name="_subject"
                    placeholder="Message"
                    type="text"
                />
                <Button mt="10px" type="submit">Submit</Button>
            </form>
        </VStack >
    )
}