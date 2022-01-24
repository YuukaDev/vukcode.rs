import DarkMode from "../components/DarkMode/DarkMode"
import Particles from "react-particles-js"

export default function Home() {
  return (
    <>
      <Particles
        params={{
          "particles": {
            "number": {
              "value": 50
            },
            "size": {
              "value": 3
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }} />
      <DarkMode />
    </>
  )
}
