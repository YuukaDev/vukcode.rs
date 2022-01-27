//import { theme as chakraTheme } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { mode } from "@chakra-ui/theme-tools";

const styles = {
    global: (props) => ({
        body: {
            bg: mode("#F7FAFC", "#111")(props),
            color: mode("black", "white")(props)
        }
    })
}

const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
})

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
}

const overrides = {
    breakpoints,
    config,
    styles
}

const customTheme = extendTheme(overrides);

export default customTheme;