import { Box } from "@chakra-ui/react";
import { PageTransition } from "next-page-transitions";

import Navigation from "../components/Navigation/Navigation";
import ProjectsComponent from "../components/Projects/Projects";

export default function Projects() {
  return (
    <PageTransition timeout={300}>
      <Box height="100%">
        <Navigation />
        <ProjectsComponent />
      </Box>
    </PageTransition>
  );
}
