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
    gsap.fromTo(
      "#heading",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.5,
      }
    )
  }, [])
  return (
    <div className="flexCenter my-auto h-[80dvh] w-full flex-col">
      <h1
        id="heading"
        className="mb-5 text-2xl font-bold"
      >
        Create animations with
      </h1>
      <h1
        id="heading"
        className="mb-32 text-8xl font-bold"
      >
        GSAP!
      </h1>
      <div
        id="purple-box"
        className="flex size-32 rounded-3xl bg-green-900"
      />
    </div>
  )
}
export default Home
