import { Box, Flex, HStack, Heading, Text, Link, Divider, Container, Stack, Icon, Code } from "@chakra-ui/react";

import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

export default function Footer() {
    return (
        <Box bg="#171717">
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Text as="samp">
                    © vukcode.rs 2022
                </Text>
                <Stack direction={'row'} spacing={6}>
                    <Link>
                        <Icon>
                            <FiGithub />
                        </Icon>
                    </Link>
                    <Link>
                        <Icon>
                            <FiTwitter />
                        </Icon>
                    </Link>
                    <Link>
                        <Icon>
                            <FiLinkedin />
                        </Icon>
                    </Link>
                </Stack>
            </Container>
        </Box>
    )
}



// Socials
// Built With
//#171717