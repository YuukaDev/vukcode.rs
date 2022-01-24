import DarkMode from "../components/DarkMode/DarkMode"
import ImageNext from "next/image";
import { Image } from "@chakra-ui/react";

import manOne from "../public/man1.svg";
import manTwo from "../public/man2.svg";

export default function Home() {
  return (
    <>
      <ImageNext src={manOne} />
      <DarkMode />
    </>
  )
}
