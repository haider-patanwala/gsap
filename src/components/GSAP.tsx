import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

type GSAPProps = {}

function gsapComponents(gsapComponent: string | undefined): React.ReactNode {
  switch (gsapComponent ?? "") {
    case "gsap-to":
      return <GSAPTo />
    default:
      return <p>Hellllooooo</p>
  }
}

const GSAP: React.FC<GSAPProps> = () => {
  const { gsapcomponent } = useParams()
  const [gsapComponent, setGsapComponent] = useState<
    React.ReactNode | undefined
  >()
  useEffect(() => {
    setGsapComponent(gsapComponents(gsapcomponent))
    console.log(gsapcomponent)
  }, [gsapcomponent])
  return <div className="flexCenter min-h-[80vh]">{gsapComponent}</div>
}
export default GSAP

// =============================================================================
type Props = {}

function GSAPTo({}: Props) {
  return <div>GSAP</div>
}
