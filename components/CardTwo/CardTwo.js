
import NextLink from "next/link";
import { Box, Grid, GridItem, Heading, Icon, Link, Text, Flex, useColorMode, Divider } from "@chakra-ui/react";
import { SiGithub } from "react-icons/si"
import { BiLinkExternal } from "react-icons/bi";

export default function Card() {
    const { colorMode } = useColorMode();
    const rotating = 'rotate(-26deg)';
    return (
        <>
            <Box>
                <br />
                <Grid width={{ sm: "300px", xl: "700px" }} gridTemplateColumns={{ sm: "repeat(1, 1fr)", xl: "repeat(2, 2fr)" }} gap="25px">
                    <GridItem lineHeight="20px" height="100%" transition="0.5s all ease" cursor="pointer" border="1.5px solid #ff4000" borderRadius="xl" _hover={{
                        transition: '0.5s all ease',
                        transform: 'scale(1.05)',
                    }}>
                        <Box m={5}>
                            <Heading as='h3' size='lg'>
                                Xquisite
                            </Heading>
                            <Text fontSize="lg" mt="10px" fontWeight="light">
                                Xquisite is an open-source discord bot made using
                                {" "}
                                <Link target="_blank" href="https://nodejs.org/en/" color="#ff4000" textDecoration="underline">
                                    Node.js
                                </Link>
                                {" "}
                                and
                                {" "}
                                <Link target="_blank" href="https://discord.js.org/#/" color="#ff4000" textDecoration="underline">
                                    discord.js
                                </Link>
                                {" "}
                                library it has over 60 commands that includes moderation, action, and much more, a bot is simple so that means everyone can use it, the bot is currently offline because of rework he is getting
                            </Text>
                            <Flex mt="20px" float="right" gap="10px">
                                <NextLink href="https://github.com/YuukaDev/Xquisite" passHref>
                                    <Link target="_blank">
                                        <Icon transition="0.5s all ease" _hover={{
                                            transform: rotating
                                        }} mb="15px" fontSize="1.5em" as={SiGithub} />
                                    </Link>
                                </NextLink>
                                <NextLink href="https://xquisite.netlify.app/" passHref>
                                    <Link target="_blank">
                                        <Icon transition="0.5s all ease" _hover={{
                                            transition: '0.5s all ease',
                                            transform: rotating
                                        }} mb="15px" fontSize="1.5em" as={BiLinkExternal} />
                                    </Link>
                                </NextLink>
                            </Flex>
                        </Box>
                    </GridItem>
                    <GridItem lineHeight="20px" height="100%" transition="0.5s all ease" cursor="pointer" border="1.5px solid #ff4000" borderRadius="xl" _hover={{
                        transition: '0.5s all ease',
                        transform: 'scale(1.05)',
                    }}>
                        <Box m={5}>
                            <Heading as='h3' size='lg'>
                                Aethersio
                            </Heading>
                            <Text fontSize="lg" mt="10px" fontWeight="light">
                                Aethersio is a chat application made with
                                {" "}
                                <Link target="_blank" href="https://nextjs.org/" color="#ff4000" textDecoration="underline">
                                    Next.js
                                </Link>
                                {" "}
                                and <Link target="_blank" href="https://socket.io/" color="#ff4000" textDecoration="underline">
                                    {" "}
                                    Socket.io
                                </Link>
                                {" "}
                                connected with the back-end it has a feature like GitHub authentication provided by firebase, the application is not finished there are some things to be added and fixed, you can contribute to this project if you like as this project is public
                            </Text>
                            <Flex float="right" gap="10px">
                                <NextLink href="https://github.com/YuukaDev/Aethersio" passHref>
                                    <Link target="_blank">
                                        <Icon transition="0.5s all ease" _hover={{
                                            transform: rotating
                                        }} mb="15px" fontSize="1.5em" as={SiGithub} />
                                    </Link>
                                </NextLink>
                                <NextLink href="/" passHref>
                                    <Link target="_blank">
                                        <Icon transition="0.5s all ease" _hover={{
                                            transition: '0.5s all ease',
                                            transform: rotating
                                        }} mb="15px" fontSize="1.5em" as={BiLinkExternal} />
                                    </Link>
                                </NextLink>
                            </Flex>
                        </Box>
                    </GridItem>
                    <GridItem lineHeight="20px" height="100%" transition="0.5s all ease" cursor="pointer" border="1.5px solid #ff4000" borderRadius="xl" _hover={{
                        transition: '0.5s all ease',
                        transform: 'scale(1.05)',
                    }}>
                        <Box m={5}>
                            <Heading as='h3' size='lg'>
                                Foodyya
                            </Heading>
                            <Text mt="10px" fontSize="lg" fontWeight="light">
                                Foodyya is a search engine application where you can search for your favorite recipes around the world, the application is using Recipe Search API and it has been created with
                                {" "}
                                <Link target="_blank" href="https://reactjs.org/" color="#ff4000" textDecoration="underline">
                                    React
                                </Link>
                                {" "}
                                and
                                styled with
                                {" "}
                                <Link target="_blank" href="https://chakra-ui.com/" color="#ff4000" textDecoration="underline">
                                    Chakra UI
                                </Link>
                            </Text>
                            <Flex mt="70px" float="right" gap="10px">
                                <NextLink href="https://github.com/YuukaDev/Foody" passHref>
                                    <Link target="_blank">
                                        <Icon transition="0.5s all ease" _hover={{
                                            transform: rotating
                                        }} mb="15px" fontSize="1.5em" as={SiGithub} />
                                    </Link>
                                </NextLink>
                                <NextLink href="https://foody-react.vercel.app/" passHref>
                                    <Link target="_blank">
                                        <Icon transition="0.5s all ease" _hover={{
                                            transition: '0.5s all ease',
                                            transform: rotating
                                        }} mb="15px" fontSize="1.5em" as={BiLinkExternal} />
                                    </Link>
                                </NextLink>
                            </Flex>
                        </Box>
                    </GridItem>
                    <GridItem lineHeight="20px" height="100%" transition="0.5s all ease" cursor="pointer" border="1.5px solid #ff4000" borderRadius="xl" _hover={{
                        transition: '0.5s all ease',
                        transform: 'scale(1.05)',
                    }}>
                        <Box m={5}>
                            <Heading as='h3' size='lg'>
                                vukcode.rs
                            </Heading>
                            <Text fontSize="lg" mt="10px" fontWeight="light">
                                My personal website portfolio built with
                                {" "}
                                <Link target="_blank" href="https://nextjs.org/" color="#ff4000" textDecoration="underline">
                                    Next.js
                                </Link>
                                {" "}
                                and styled with
                                <Link target="_blank" href="https://chakra-ui.com/" color="#ff4000" textDecoration="underline">
                                    Chakra UI
                                </Link>
                            </Text>
                            <Flex mt="150px" float="right" gap="10px">
                                <NextLink target="bla" href="https://github.com/YuukaDev/vukcode.rs" passHref>
                                    <Link target="_blank">
                                        <Icon transition="0.5s all ease" _hover={{
                                            transform: rotating
                                        }} mb="15px" fontSize="1.5em" as={SiGithub} />
                                    </Link>
                                </NextLink>
                                <NextLink href="https://www.vukcode.rs/" passHref>
                                    <Link target="_blank">
                                        <Icon transition="0.5s all ease" _hover={{
                                            transition: '0.5s all ease',
                                            transform: rotating
                                        }} mb="15px" fontSize="1.5em" as={BiLinkExternal} />
                                    </Link>
                                </NextLink>
                            </Flex>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
        </>
    )
}