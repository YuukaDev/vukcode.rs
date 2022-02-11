import { useState, useEffect } from "react";

import { Box, Heading, VStack, Grid, GridItem, Divider, Link, Flex } from "@chakra-ui/react";

import Card from "../Card/Card";

export default function Projects() {
    return (
        <VStack margin="0" id="projects">
            <Box mt={{
                sm: "20%",
                xl: "5%"
            }} width={{
                sm: "90%",
                md: "50%",
                lg: "50%",
                xl: "35% ",
            }} float="left">
                <Heading fontSize={{
                    sm: "2em",
                    xl: "2.25rem"
                }}>Featured Projects 👨‍💻</Heading>
                <Divider width={{ sm: "70%", xl: "52%" }} mt="15px" mb="10px" bg="#ff4000" padding="1px" />
            </Box>
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
                <Box>
                    <br />
                    <Grid width="700px" gridTemplateColumns="repeat(2, 2fr)" gap="25px">
                        <Box
                            transition="0.5s all ease"
                            _hover={{
                                transition: "0.5s all ease",
                                transform: "scale(1.05)"
                            }}
                            boxShadow="dark-lg">
                            <Link href="https://github.com/YuukaDev/Xquisite"><img src="https://gh-card.dev/repos/YuukaDev/Xquisite.svg" /></Link>
                        </Box>
                        <Box
                            transition="0.5s all ease"
                            _hover={{
                                transition: "0.5s all ease",
                                transform: "scale(1.05)"
                            }}
                            bg="#fff"
                            boxShadow="dark-lg">
                            <Link href="https://github.com/YuukaDev/Foody"><img src="https://gh-card.dev/repos/YuukaDev/Foody.svg" /></Link>
                        </Box>
                        <Box
                            transition="0.5s all ease"
                            _hover={{
                                transition: "0.5s all ease",
                                transform: "scale(1.05)"
                            }}
                            boxShadow="dark-lg">
                            <Link href="https://github.com/YuukaDev/GitHub-Searcher"><img src="https://gh-card.dev/repos/YuukaDev/GitHub-Searcher.svg" /></Link>
                        </Box>
                        <Box
                            transition="0.5s all ease"
                            _hover={{
                                transition: "0.5s all ease",
                                transform: "scale(1.05)"
                            }}
                            boxShadow="dark-lg">
                            <Link href="https://github.com/YuukaDev/Pokedex"><img src="https://gh-card.dev/repos/YuukaDev/Pokedex.svg" /></Link>
                        </Box>
                        <Box
                            transition="0.5s all ease"
                            _hover={{
                                transition: "0.5s all ease",
                                transform: "scale(1.05)"
                            }}
                            boxShadow="dark-lg"
                        >
                            <Link href="https://github.com/YuukaDev/Anime-Quotes"><img src="https://gh-card.dev/repos/YuukaDev/Anime-Quotes.svg" /></Link>
                        </Box>
                        <Box
                            transition="0.5s all ease"
                            _hover={{
                                transition: "0.5s all ease",
                                transform: "scale(1.05)"
                            }}
                            boxShadow="dark-lg">
                            <Link href="https://github.com/YuukaDev/Aethersio"><img src="https://gh-card.dev/repos/YuukaDev/Aethersio.svg" /></Link>
                        </Box>
                    </Grid>
                </Box>
            </Box >
        </VStack >
    )
}
