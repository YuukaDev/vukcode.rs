import { HStack, Box, Heading, Text, Image, Link, Divider, VStack, Flex } from "@chakra-ui/react";
import Saturn from "./saturn.png";
//const element = <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 100 100" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path xmlns="http://www.w3.org/2000/svg" d="m81.355 49.225c-.414-16.942-14.315-30.6-31.355-30.6-5.417 0-10.519 1.381-14.97 3.808-17.099-6.15-28.944-6.141-32.542.08-2.737 4.73-.046 11.745 7.78 20.285 2.413 2.633 5.235 5.312 8.377 7.98.416 16.942 14.315 30.597 31.355 30.597 5.414 0 10.512-1.379 14.962-3.804 3.878 1.394 7.605 2.504 11.088 3.282 3.894.871 7.324 1.304 10.264 1.303 5.596 0 9.405-1.568 11.199-4.67 3.601-6.224-2.287-16.499-16.158-28.261zm-3.991.356c-.09.336-.091.687-.005 1.02-.206 9.497-5.268 17.813-12.801 22.565-6.984-2.638-14.452-6.211-21.881-10.51-7.433-4.3-14.255-8.993-20.025-13.736.57-14.595 12.616-26.295 27.348-26.295 14.954 0 27.139 12.055 27.364 26.956zm-64.148-9.486c-6.249-6.819-8.965-12.643-7.267-15.579 1.875-3.239 10.246-4.11 24.857.691-6.335 4.916-10.741 12.198-11.881 20.511-2.095-1.886-4.009-3.768-5.709-5.623zm36.784 37.28c-13.639 0-24.978-10.027-27.038-23.096 5.291 4.103 11.283 8.121 17.712 11.84 6.427 3.718 12.896 6.909 19.087 9.45-3.033 1.162-6.323 1.806-9.761 1.806zm44.05-1.892c-1.698 2.936-8.1 3.486-17.127 1.467-2.461-.55-5.052-1.273-7.737-2.151 6.339-4.914 10.747-12.197 11.889-20.512 11.443 10.27 14.851 17.954 12.975 21.196z" fill="#ff4000" data-original="#000000" class=""></path></g></svg>

export default function Hero() {
    return (
        <VStack className="hero-container">
            <Box width="35%" float="left" mt="80px">
                <Heading>Hello, I'm Vuk 👋</Heading>
                <Divider width="50%" mt="15px" mb="10px" bg="#ff4000" padding="1px" />
            </Box>
            <Box className="hero-container" fontWeight="thin" fontSize="xx-large" width="35%" float="left" mt="80px">
                <Text>
                    I'm just a student who loves to build amazing things and explore different adventures.
                </Text>
            </Box>
            <Box width="35%" float="left">
                <Flex mt="20px" fontSize="2em" gap="20px">
                    <Link href="https://github.com/YuukaDev" target="_blank" _hover={{
                        transition: "0.5s all ease",
                        color: "#ff4000"
                    }}>
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="social_headerinfo_svg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </Link>
                    <Link hreF="https://twitter.com/yuukasuoh" target="_blank" _hover={{
                        transition: "0.5s all ease",
                        color: "#ff4000"
                    }}>
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="social_headerinfo_svg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </Link>
                    <Link target="_blank" _hover={{
                        transition: "0.5s all ease",
                        color: "#ff4000"
                    }}>
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="social_headerinfo_svg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </Link>
                </Flex>
            </Box>
            <Box>
               
            </Box>
        </VStack >
    )
}