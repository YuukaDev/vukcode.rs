
import { Box, Grid, Link } from "@chakra-ui/react";

export default function Card() {
    return (
        <>
            <Box width={{
                sm: "85%",
                md: "50%",
                lg: "50%",
                xl: "35% ",
            }} float="left" mt={{
                sm: "0px",
                lg: "150px",
                xl: "0px"
            }}>
                <Box>
                    <br />
                    <Grid width={{ sm: "300px", xl: "700px" }} gridTemplateColumns={{ sm: "repeat(1, 1fr)", xl: "repeat(2, 2fr)" }} gap="25px">
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
        </>
    )
}