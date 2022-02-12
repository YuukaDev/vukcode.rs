import { Box, Text, Link, Container, Stack, Icon } from "@chakra-ui/react";

import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
    return (
        <Box bg="#171717">
            <Container
                color="#fff"
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
                <Text>
                    Built with 💖 and
                    {" "}
                    <Link _hover={{
                        color: "#ff4000"
                    }}
                        href="https://nextjs.org/">
                        Next.js
                    </Link>
                </Text>
                <Stack direction={'row'} spacing={6}>
                    <Link target="_blank" href="https://github.com/YuukaDev">
                        <Icon fontSize="1.3em">
                            <FiGithub />
                        </Icon>
                    </Link>
                    <Link target="_blank" href="https://twitter.com/yuukasuoh">
                        <Icon fontSize="1.3em">
                            <FiTwitter />
                        </Icon>
                    </Link>
                    <Link target="_blank" href="https://www.linkedin.com/in/yuuka-suoh-b996111b5/">
                        <Icon fontSize="1.3em">
                            <FiLinkedin />
                        </Icon>
                    </Link>
                    <Link href="mailto:yuukadev@gmail.com">
                        <Icon fontSize="1.3em">
                            <HiOutlineMail />
                        </Icon>
                    </Link>
                </Stack>
            </Container>
        </Box>
    )
}
