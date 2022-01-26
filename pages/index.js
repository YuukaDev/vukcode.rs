import DarkMode from "../components/DarkMode/DarkMode"
import ImageNext from "next/image";

import manOne from "../images/man1.svg"
import manTwo from "../images/man2.svg"



export default function Home() {
  return (
    <>
      <div className="container">
        <div className="drugi">
          <ImageNext className="drugi" src={manTwo} />
        </div>
        <ImageNext src={manOne} />
      </div>

      <DarkMode />
    </>
  )
}





