import { useState, useEffect } from "react";

import { Box, Heading, VStack, Grid, GridItem, Divider, Link, Flex } from "@chakra-ui/react";

import Card from "../Card/Card";
import CardTwo from "../CardTwo/CardTwo";

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
                xl: "36% ",
            }} float="left">
                <Heading fontSize={{
                    sm: "2em",
                    xl: "2.25rem"
                }}>Featured Projects 👨‍💻</Heading>
                <Divider width={{ sm: "90%", xl: "52%" }} mt="15px" mb="10px" bg="#ff4000" padding="1px" />
            </Box>
            <Box>
                <CardTwo />
            </Box>
        </VStack >
    )
}
