import React from "react"

type HeaderProps = {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="flexCenter h-[10svh] w-screen bg-slate-400 text-slate-950">
      This is Header
    </div>
  )
}
export default Header
