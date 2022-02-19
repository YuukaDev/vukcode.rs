import { Box } from "@chakra-ui/react";
import Navigation from "../components/Navigation/Navigation";
import ProjectsComponent from "../components/Projects/Projects";

export default function Projects() {
    return (
        <Box height="100%">
            <Navigation />
            <ProjectsComponent />
        </Box>
    )
}