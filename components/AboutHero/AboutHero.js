import {
    VStack,
    Box,
    Divider,
    Heading,
    Text,
    List,
    ListItem,
    UnorderedList,
    Code,
    OrderedList
} from "@chakra-ui/react";

export default function AboutHero() {
    return (
        <VStack className="hero-container">
            <Box width="35%" float="left" mt="125px">
                <Heading>About Me 📜</Heading>
                <Divider width="35%" mt="15px" mb="10px" bg="#ff4000" padding="1px" />
            </Box>
            <Box className="hero-container" fontWeight="thin" fontSize="xx-large" width="35%" float="left" mt="80px">
                <Text>
                    Hey, my name is Vuk Gligorić and I am Front End Developer based in Novi Sad, Serbia.
                    <br />
                    I build fast and beautiful websites with modern technology I love challenges and complex problems that I can work on, also I love to spend my time learning about new things.
                    <br />I am currently in my third year of high school outside of programming, I enjoy playing video games, reading manga, reading books about stoicism, and much more.
                </Text>
            </Box>
            <br />
            <Box width="35%" float="left" mt="125px">
                <Heading>Interest</Heading>
            </Box>
            <Box className="hero-container" fontWeight="thin" fontSize="xx-large" width="35%" float="left" mt="80px">
                <Text>
                    I like technology and of course, i like to expand my knowledge every day, although at the moment what catches my eye is
                    <Box fontSize="0.7em" display="flex" gap="5px">
                        <Code>
                            Ruby
                        </Code>
                        <Code>
                            Go
                        </Code>
                        <Code>
                            Lua
                        </Code>
                        <Code>
                            Flutter
                        </Code>
                    </Box>
                </Text>
            </Box>
        </VStack>
    )
}