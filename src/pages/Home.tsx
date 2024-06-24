import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React from "react"

type HomeProps = {}

const Home: React.FC<HomeProps> = () => {
  // TODO: gsap.to()
  useGSAP(() => {
    gsap.fromTo(
      "#purple-box",
      {
        x: -200,
        borderRadius: "0%",
      },
      {
        x: 200,
        duration: 1,
        ease: "power1.inOut",
        rotate: 360,
        borderRadius: "100%",
        repeat: -1,
        yoyo: true,
      }
    )
  }, [])
  return (
    <div className="flexCenter my-auto h-[80dvh] w-full">
      <div
        id="purple-box"
        className="flex size-32 rounded-3xl bg-purple-900"
      />
    </div>
  )
}
export default Home
