import { useEffect } from "react"
import { BackroundUtility } from "Utilities"
import "./TheBackground.scss"

function TheBackground() {
  useEffect(() => {
    setTimeout(() => {
      BackroundUtility.setBackgroundPositionY(0)
    }, 1000)
  }, [])

  return <div className="background-component" />
}

export default TheBackground
