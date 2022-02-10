import { useState, useEffect } from "react";
import axios from "axios";

import { Box, Heading, VStack, Grid, GridItem, Divider, Link } from "@chakra-ui/react";

import Card from "../Card/Card";

export default function Projects() {
    const [data, setData] = useState([]);

    const fetchUser = async () => {
        try {
            const response = await axios.get(
                `https://api.github.com/users/YuukaDev/repos`
            );
            console.log(response.data);
            setData(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchUser();
    }, [])
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
                    <Grid
                        alignItems="center"
                        justifyContent="center"
                        alignContent="center"
                        gridGap="4em"
                        templateColumns="repeat(2, 1fr)"
                    >
                        <GridItem
                            width="400px"
                            boxShadow="dark-lg">
                            <Link href="https://github.com/YuukaDev/Xquisite"><img src="https://gh-card.dev/repos/YuukaDev/Xquisite.svg" /></Link>
                        </GridItem>
                    </Grid>
                </Box>
            </Box>
        </VStack >
    )
}
