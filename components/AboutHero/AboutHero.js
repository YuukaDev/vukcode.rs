import {
    VStack,
    Box,
    Divider,
    Heading,
    Text,
    Code,
    Icon,
    Tooltip,
    Link
} from "@chakra-ui/react";

import { SiJavascript, SiHtml5, SiCss3, SiSass, SiReact, SiBootstrap, SiGit, SiVisualstudiocode, SiNextdotjs, SiChakraui, SiLinux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import Head from "next/head";

export default function AboutHero() {
    return (
        <>
            <VStack className="hero-container" id="about">
                <Box width={{
                    sm: "85%",
                    md: "50%",
                    lg: "50%",
                    xl: "35% ",
                }} float="left" mt={{
                    sm: "50px",
                    lg: "150px",
                    xl: "100px"
                }}>
                    <Heading>About Me 📜</Heading>
                    <Divider width={{ sm: "70%", xl: "35%" }} mt="15px" mb="10px" bg="#ff4000" padding="1px" />
                </Box>
                <Box
                    className="hero-container"
                    fontWeight="thin"
                    fontSize={{
                        sm: "1.3em",
                        md: "1em",
                        lg: "1.5em",
                        xl: "2xl",
                    }}
                    width={{
                        sm: "85%",
                        xl: "35%"
                    }}
                    float="left"
                    mt="80px">
                    <Text>
                        Hey, my name is Vuk Gligorić and I am Front End Developer based in Novi Sad, Serbia.
                        <br />
                        I build fast and beautiful websites with modern technology I love challenges and complex problems that I can work on, also I enjoy spending my time learning about new things.
                        <br />
                        I am currently in my third year of high school outside of programming, I enjoy playing video games, reading books especially those about stoicism, reading manga, and much more.                </Text>
                </Box>
                <br />
                <Box width={{
                    sm: "85%",
                    md: "50%",
                    lg: "50%",
                    xl: "35% ",
                }} float="left" mt="125px">
                    <Heading>Interest</Heading>
                </Box>
                <Box
                    className="hero-container"
                    fontWeight="thin"
                    fontSize={{
                        sm: "1.3em",
                        md: "1em",
                        lg: "1.5em",
                        xl: "2xl",
                    }}
                    width={{
                        sm: "85%",
                        xl: "35%"
                    }}
                    float="left"
                    mt="80px">
                    <Text>
                        I like technology and of course, i like to expand my knowledge every day, although at the moment what catches my eye is
                        Creating discord bots using the famous discord.js library, and I would love to go back to making games on the Roblox platform using the
                        {" "}
                        <Link _hover={{
                            color: "#ff4000"
                        }} href="https://www.lua.org/">
                            Lua
                        </Link> language.

                        <Box mt="10px" fontSize="0.7em" display="flex" gap="5px">
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
                <br />
                <br />
                <br />
                <Box width={{ sm: "90%", xl: "35%" }} float="left">
                    <Box display="flex" justifyContent="center" alignItems="center" gap="20px">
                        <Divider bg="#fff" width="20%" />
                        <Heading textAlign="center">Tools & Technologies</Heading>
                        <Divider bg="#fff" width="20%" />
                    </Box>
                </Box>
                <br />
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    gap={{
                        sm: "5px",
                        xl: "15px"
                    }}
                    fontSize={{
                        sm: "1.5em",
                        xl: "2em"
                    }}>
                    <Tooltip label='HTML5' fontSize='md'>
                        <span>
                            <Icon as={SiHtml5} />
                        </span>
                    </Tooltip>
                    <Tooltip label='CSS3' fontSize='md'>
                        <span>
                            <Icon as={SiCss3} />
                        </span>
                    </Tooltip>
                    <Tooltip label='Java Script' fontSize='md'>
                        <span>
                            <Icon as={SiJavascript} />
                        </span>
                    </Tooltip>
                    <Tooltip label='Node.js' fontSize='md'>
                        <span>
                            <Icon as={FaNodeJs} />
                        </span>
                    </Tooltip>
                    <Tooltip label='Sass' fontSize='md'>
                        <span>
                            <Icon as={SiSass} />
                        </span>
                    </Tooltip>
                    <Tooltip label='React' fontSize='md'>
                        <span>
                            <Icon as={SiReact} />
                        </span>
                    </Tooltip>
                    <Tooltip label='Next.js' fontSize='md'>
                        <span>
                            <Icon as={SiNextdotjs} />
                        </span>
                    </Tooltip>
                    <Tooltip label='Bootstrap' fontSize='md'>
                        <span>
                            <Icon as={SiBootstrap} />
                        </span>
                    </Tooltip>
                    <Tooltip label='Chakra UI' fontSize='md'>
                        <span>
                            <Icon as={SiChakraui} />
                        </span>
                    </Tooltip>
                    <Tooltip label='Git' fontSize='md'>
                        <span>
                            <Icon as={SiGit} />
                        </span>
                    </Tooltip>
                    <Tooltip label='Visual Studio Code' fontSize='md'>
                        <span>
                            <Icon as={SiVisualstudiocode} />
                        </span>
                    </Tooltip>
                    <Tooltip label='Linux OS' fontSize='md'>
                        <span>
                            <Icon as={SiLinux} />
                        </span>
                    </Tooltip>
                </Box>
                <br /><br /><br /><br />
            </VStack >
        </>
    )
}
