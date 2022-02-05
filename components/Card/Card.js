
import { Box, Flex, Heading, Text, Icon, Link, Image } from "@chakra-ui/react";

import NextImage from "next/image";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLink } from "react-icons/ai";

// Images
import Bernie from "../../public/xquisite.jpg";

export default function Card() {
    return (
        <>
            { /*First Card*/}

            <Box width="35%" float="left">
                <Heading mt="12%" mb="-40px">Xquisite Bot</Heading>
                <Box width="100%">
                    <Flex alignItems="center" mr="-100px" flexDirection="row">
                        <Text fontSize="1.2em" mr="2rem" textAlign="left">
                            Xquisite is an open-source discord bot made using
                            {" "}
                            <Link target="_blank" href="https://nodejs.org/en/" color="#ff4000" _hover={{
                                textDecoration: "none"
                            }}>
                                Node.js
                            </Link>
                            {" "}
                            and
                            {" "}
                            <Link target="_blank" href="https://discord.js.org" color="#ff4000" _hover={{
                                textDecoration: "none"
                            }}>
                                discord.js
                            </Link> library it has over 60 commands that includes moderation, action, and much more, a bot is simple so that means everyone can use it, the bot is currently offline because of rework he is getting
                        </Text>
                        <Image width="310px" height="294px" src={Bernie} />
                    </Flex>
                    <Box display="flex" gap="15px" color="#ff4000" mt="-35px">
                        <Link target="_blank" href="https://github.com/YuukaDev/Xquisite" _hover={{
                            textDecoration: "none"
                        }} display="flex" justifyContent="center" alignItems="center" gap="5px" >
                            <button className="css-button-3d--blue">
                                GitHub <Icon as={FiGithub} />
                            </button>
                        </Link>
                        <Link target="_blank" href="https://xquisite.netlify.app/" display="flex" justifyContent="center" alignItems="center" gap="5px" _hover={{
                            textDecoration: "none"
                        }}>
                            <button className="css-button-3d--blue">
                                Preview <Icon as={AiOutlineLink} />
                            </button>
                        </Link>
                    </Box>
                </Box>
            </Box>

            { /*Second Card*/}

            <Box width="35%" float="left">
                <Box>
                    <Box display="flex" alignItems="center" justifyContent="center" mr="-29.5%" mb="-8%">
                        <Heading mt="12%" mb="20px">Aethersio</Heading>
                    </Box>
                    <Flex justifyContent="center" alignItems="center" gap="40px" mr="-100px" flexDirection="row">
                        <Image width="310px" height="294px" src={Bernie} />
                        <Text fontSize="1.2em" textAlign="left">
                            Aethersio is a chat application made with
                            {" "}
                            <Link target="_blank" href="https://nextjs.org/" color="#ff4000" _hover={{
                                textDecoration: "none",
                            }}>
                                Next.js
                            </Link>
                            {" "}
                            and
                            {" "}
                            <Link target="_blank" href="https://socket.io/" color="#ff4000" _hover={{
                                textDecoration: "none",
                            }}>
                                Socket.io
                            </Link>
                            {" "}
                            connected with the back-end it has a feature like GitHub authentication provided by firebase, the application is not finished there are some things to be added and fixed, you can contribute to this project if you like as this project is public                        </Text>
                    </Flex>
                    <Box display="flex" gap="15px" color="#ff4000" ml="52.5%" mt="-20px">
                        <Link target="_blank" href="https://github.com/YuukaDev/Aethersio" display="flex" justifyContent="center" alignItems="center" gap="5px" _hover={{
                            textDecoration: "none"
                        }}>
                            <button className="css-button-3d--blue">
                                GitHub <Icon as={FiGithub} />
                            </button>
                        </Link>
                        <Link borderRadius="lg" display="flex" justifyContent="center" alignItems="center" gap="5px" _hover={{
                            textDecoration: "none"
                        }}>
                            <button className="css-button-3d--blue">
                                Preview <Icon as={AiOutlineLink} />
                            </button>
                        </Link>
                    </Box>
                </Box>
            </Box>

            { /*First Card*/}

            <Box width="35%" float="left">
                <Heading mt="12%" mb="-35px">Foodyya</Heading>
                <Box width="100%">
                    <Flex alignItems="center" mr="-100px" flexDirection="row">
                        <Text mt="-50px" fontSize="1.2em" mr="2rem" textAlign="left">
                            Foodyya is a search engine application where you can search for your favorite recipes around the world, the application is using Recipe Search API and it has been created with
                            {" "}
                            <Link target="_blank" href="https://reactjs.org/" color="#ff4000" _hover={{
                                textDecoration: "none",
                            }}>
                                React
                            </Link>
                            {" "}
                            and styled with
                            {" "}
                            <Link target="_blank" href="https://chakra-ui.com/" color="#ff4000" _hover={{
                                textDecoration: "none",
                            }}>
                                Chakra UI
                            </Link>
                        </Text>
                        <Image width="310px" height="294px" src={Bernie} />
                    </Flex>
                    <Box display="flex" gap="15px" color="#ff4000" mt="-75px">
                        <Link target="_blank" href="https://github.com/YuukaDev/Foody" _hover={{
                            textDecoration: "none"
                        }} display="flex" justifyContent="center" alignItems="center" gap="5px" >
                            <button className="css-button-3d--blue">
                                GitHub <Icon as={FiGithub} />
                            </button>
                        </Link>
                        <Link href="https://foody-react.vercel.app/" target="_blank" display="flex" justifyContent="center" alignItems="center" gap="5px" _hover={{
                            textDecoration: "none"
                        }}>
                            <button className="css-button-3d--blue">
                                Preview <Icon as={AiOutlineLink} />
                            </button>
                        </Link>
                    </Box>
                </Box>
            </Box>

            { /*Second Card*/}

            <Box width="35%" float="left">
                <Box>
                    <Box display="flex" alignItems="center" justifyContent="center" mr="-32%" mb="-8%">
                        <Heading mt="10%" mb="20px">vukcode.rs</Heading>
                    </Box>
                    <Flex justifyContent="center" alignItems="center" gap="40px" mr="-100px" flexDirection="row">
                        <Image width="310px" height="294px" src={Bernie} />
                        <Text fontSize="1.2em" textAlign="left">
                            An android application through which one can scan his/her bill and all the products will be scanned, categorised and will be added to his/her monthly expenses. This app also shows top 100 crypto currencies and clicking on particular crypto all the information (along with chart) will be displayed.
                        </Text>
                    </Flex>
                    <Box display="flex" gap="15px" color="#ff4000" ml="52.5%" mt="-20px">
                        <Link display="flex" justifyContent="center" alignItems="center" gap="5px" _hover={{
                            textDecoration: "none"
                        }}>
                            <button className="css-button-3d--blue">
                                GitHub <Icon as={FiGithub} />
                            </button>
                        </Link>
                        <Link target="_blank" href="https://www.vukcode.rs/" borderRadius="lg" display="flex" justifyContent="center" alignItems="center" gap="5px" _hover={{
                            textDecoration: "none"
                        }}>
                            <button className="css-button-3d--blue">
                                Preview <Icon as={AiOutlineLink} />
                            </button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </>
    )
}