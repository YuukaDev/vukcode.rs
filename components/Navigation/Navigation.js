import NextLink from "next/link";
import { Link, Button, HStack } from "@chakra-ui/react";
import DarkMode from "../DarkMode/DarkMode";

export default function Navigation() {
    return (
        <div className="navigation-bar">
            <HStack
                mt="15px"
                padding="25%"
                justifyContent="center"
                alignItems="center"
                py={{ sm: 3, xl: 5 }}
            >
                <HStack alignItems="center" spacing={{ base: 0, md: 2 }}>
                    <NextLink href="/" passHref>
                        <Link
                            href="/"
                            transition="0.5s all ease"
                            textDecoration="none"
                            _hover={{
                                transition: "0.5s all ease",
                                transform: "scale(1.1)",
                                textDecoration: "none",
                            }}
                        >
                            <Button fontSize={{
                                sm: "1em",
                                md: "0.5em",
                                lg: "1em",
                                xl: "1.2em",
                            }} size="md" variant="ghost">
                                Home
                            </Button>
                        </Link>
                    </NextLink>
                    <NextLink href="/#about" passHref>
                        <Link
                            transition="0.5s all ease"
                            textDecoration="none"
                            _hover={{
                                transition: "0.5s all ease",
                                transform: "scale(1.1)",
                                textDecoration: "none",
                            }}
                        >
                            <Button fontSize={{
                                sm: "1em",
                                md: "0.5em",
                                lg: "1em",
                                xl: "1.2em",
                            }} size="md" variant="ghost">
                                About
                            </Button>
                        </Link>
                    </NextLink>
                    <NextLink href="/projects" passHref>
                        <Link
                            transition="0.5s all ease"
                            textDecoration="none"
                            _hover={{
                                transition: "0.5s all ease",
                                transform: "scale(1.1)",
                                textDecoration: "none",
                            }}
                        >
                            <Button fontSize={{
                                sm: "1em",
                                md: "0.5em",
                                lg: "1em",
                                xl: "1.2em",
                            }} size="md" variant="ghost">
                                Projects
                            </Button>
                        </Link>
                    </NextLink>
                    <NextLink href="/#contact" passHref>
                        <Link
                            transition="0.5s all ease"
                            textDecoration="none"
                            _hover={{
                                transition: "0.5s all ease",
                                transform: "scale(1.1)",
                                textDecoration: "none",
                            }}
                        >
                            <Button fontSize={{
                                sm: "1em",
                                md: "0.5em",
                                lg: "1em",
                                xl: "1.2em",
                            }} size="md" variant="ghost">
                                Contact
                            </Button>
                        </Link>
                    </NextLink>
                    <Link
                        transition="0.5s all ease"
                        textDecoration="none"
                        _hover={{
                            transition: "0.5s all ease",
                            transform: "scale(1.1)",
                            textDecoration: "none",
                        }}>
                        <DarkMode />
                    </Link>
                </HStack>
            </HStack>
        </div>
    )
}