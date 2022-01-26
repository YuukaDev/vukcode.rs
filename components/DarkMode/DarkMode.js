import React from "react";
import { Button, useColorMode, Icon } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function DarkMode() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <div>
            <Button variant="ghost" size="sm" onClick={() => toggleColorMode()}>
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