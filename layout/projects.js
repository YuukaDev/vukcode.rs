import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

import Navigation from "../components/Navigation/Navigation";
import ProjectsComponent from "../components/Projects/Projects";

export default function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ default: { duration: 0.5 } }}
        >
            <Box height="100%">
                <Navigation />
                <ProjectsComponent />
            </Box>
        </motion.div>
    )
}
