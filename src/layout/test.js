import { SimpleGrid, Box, Heading, Text, Image } from "@chakra-ui/react"

export default function Test() {
    return (
        <SimpleGrid columns={2} spacing={10}>
            <Box bg='tomato' w="50%" height='80px'></Box>
            <Box bg='tomato' w="50%" height='80px'></Box>
            <Box bg='tomato' w="50%" height='80px'></Box>
            <Box bg='tomato' w="50%" height='80px'></Box>
            <Box bg='tomato' w="50%" height='80px'></Box>
        </SimpleGrid>
    )
}