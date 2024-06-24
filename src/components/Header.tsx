import React from "react"
import { Link } from "react-router-dom"

type HeaderProps = {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="flexBetween h-[10svh] w-screen bg-stone-800 px-[10%] text-stone-50">
      <Link
        to={"/"}
        className="font-sans text-xl font-semibold"
      >
        GSAP Playground
      </Link>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}
export default Header
