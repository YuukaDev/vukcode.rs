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
                py={5}
            >
                <HStack alignItems="center" spacing={{ base: 0, md: 2 }}>
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
                    <Link
                        href="/about"
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
                    <Link
                        href="/#projects"
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
                    <Link
                        href="/#contact"
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