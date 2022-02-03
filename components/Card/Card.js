
import { Box, Flex, Heading, Text, Image, Icon, Link } from "@chakra-ui/react";

import { FiGithub } from "react-icons/fi";
import { AiOutlineLink } from "react-icons/ai";


export default function Card() {
    return (
        <>
            { /*First Card*/}

            <Box width="35%" float="left">
                <Heading mt="12%" mb="-35px">Finance Tracking</Heading>
                <Box width="100%">
                    <Flex alignItems="center" mr="-100px" flexDirection="row">
                        <Text fontSize="1.2em" mr="2rem" textAlign="left">
                            An android application through which one can scan his/her bill and all the products will be scanned, categorised and will be added to his/her monthly expenses. This app also shows top 100 crypto currencies and clicking on particular crypto all the information (along with chart) will be displayed.
                        </Text>
                        <Image width="310px" height="294px" src="https://portfolio-neelbavarva.vercel.app/static/media/FinanceTracker.06457114.jpeg" />
                    </Flex>
                    <Box display="flex" gap="15px" color="#ff4000" mt="-20px">
                        <Link _hover={{
                            textDecoration: "none"
                        }} display="flex" justifyContent="center" alignItems="center" gap="5px" >
                            <button className="css-button-3d--blue">
                                GitHub <Icon as={FiGithub} />
                            </button>
                        </Link>
                        <Link display="flex" justifyContent="center" alignItems="center" gap="5px" _hover={{
                            textDecoration: "none"
                        }}>
                            <button className="css-button-3d--blue">
                                Preview <Icon as={AiOutlineLink} />
                            </button>
                        </Link>
                    </Box>
                </Box>
            </Box>

            { /*Second Card*/}

            <Box width="35%" float="left">
                <Box>
                    <Box display="flex" alignItems="center" justifyContent="center" mr="-47%" mb="-8%">
                        <Heading mt="12%" mb="20px">Finance Tracking</Heading>
                    </Box>
                    <Flex justifyContent="center" alignItems="center" gap="40px" mr="-100px" flexDirection="row">
                        <Image width="310px" height="294px" src="https://portfolio-neelbavarva.vercel.app/static/media/FinanceTracker.06457114.jpeg" />
                        <Text fontSize="1.2em" textAlign="left">
                            An android application through which one can scan his/her bill and all the products will be scanned, categorised and will be added to his/her monthly expenses. This app also shows top 100 crypto currencies and clicking on particular crypto all the information (along with chart) will be displayed.
                        </Text>
                    </Flex>
                    <Box display="flex" gap="15px" color="#ff4000" ml="52.5%" mt="-20px">
                        <Link display="flex" justifyContent="center" alignItems="center" gap="5px" _hover={{
                            textDecoration: "none"
                        }}>
                            <button className="css-button-3d--blue">
                                GitHub <Icon as={FiGithub} />
                            </button>
                        </Link>
                        <Link borderRadius="lg" display="flex" justifyContent="center" alignItems="center" gap="5px" _hover={{
                            textDecoration: "none"
                        }}>
                            <button className="css-button-3d--blue">
                                Preview <Icon as={AiOutlineLink} />
                            </button>
                        </Link>
                    </Box>
                </Box>
            </Box>

            { /*First Card*/}

            <Box width="35%" float="left">
                <Heading mt="12%" mb="-35px">Finance Tracking</Heading>
                <Box width="100%">
                    <Flex alignItems="center" mr="-100px" flexDirection="row">
                        <Text fontSize="1.2em" mr="2rem" textAlign="left">
                            An android application through which one can scan his/her bill and all the products will be scanned, categorised and will be added to his/her monthly expenses. This app also shows top 100 crypto currencies and clicking on particular crypto all the information (along with chart) will be displayed.
                        </Text>
                        <Image width="310px" height="294px" src="https://portfolio-neelbavarva.vercel.app/static/media/FinanceTracker.06457114.jpeg" />
                    </Flex>
                    <Box display="flex" gap="15px" color="#ff4000" mt="-20px">
                        <Link _hover={{
                            textDecoration: "none"
                        }} display="flex" justifyContent="center" alignItems="center" gap="5px" >
                            <button className="css-button-3d--blue">
                                GitHub <Icon as={FiGithub} />
                            </button>
                        </Link>
                        <Link display="flex" justifyContent="center" alignItems="center" gap="5px" _hover={{
                            textDecoration: "none"
                        }}>
                            <button className="css-button-3d--blue">
                                Preview <Icon as={AiOutlineLink} />
                            </button>
                        </Link>
                    </Box>
                </Box>
            </Box>

            { /*Second Card*/}

            <Box width="35%" float="left">
                <Box>
                    <Box display="flex" alignItems="center" justifyContent="center" mr="-47%" mb="-8%">
                        <Heading mt="10%" mb="20px">Finance Tracking</Heading>
                    </Box>
                    <Flex justifyContent="center" alignItems="center" gap="40px" mr="-100px" flexDirection="row">
                        <Image width="310px" height="294px" src="https://portfolio-neelbavarva.vercel.app/static/media/FinanceTracker.06457114.jpeg" />
                        <Text fontSize="1.2em" textAlign="left">
                            An android application through which one can scan his/her bill and all the products will be scanned, categorised and will be added to his/her monthly expenses. This app also shows top 100 crypto currencies and clicking on particular crypto all the information (along with chart) will be displayed.
                        </Text>
                    </Flex>
                    <Box display="flex" gap="15px" color="#ff4000" ml="52.5%" mt="-20px">
                        <Link display="flex" justifyContent="center" alignItems="center" gap="5px" _hover={{
                            textDecoration: "none"
                        }}>
                            <button className="css-button-3d--blue">
                                GitHub <Icon as={FiGithub} />
                            </button>
                        </Link>
                        <Link borderRadius="lg" display="flex" justifyContent="center" alignItems="center" gap="5px" _hover={{
                            textDecoration: "none"
                        }}>
                            <button className="css-button-3d--blue">
                                Preview <Icon as={AiOutlineLink} />
                            </button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </>
    )
}