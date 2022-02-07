import React from "react";
import { Button, useColorMode, Icon } from "@chakra-ui/react";

function DarkMode() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <div>
            <Button fontSize={{
                sm: "1em",
                xl: "1.2em"
                }} variant="ghost" size="md" onClick={() => toggleColorMode()}>
                {colorMode === "light" ?
                    <span role="img" aria-label="moon">🌙</span>
                    :
                    <span role="img" aria-label="sun">🌤️</span>
                }
            </Button>
        </div>
    );
}

export default DarkMode;

//🌤️
//🌙