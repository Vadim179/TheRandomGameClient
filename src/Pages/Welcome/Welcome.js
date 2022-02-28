import { useState, useEffect } from "react"
import { Title, Button, Animation } from "Components"
import { NavigationUtility } from "Utilities"
import { PublicPagesEnum, NavigatorsEnum } from "Enums"
import "./Welcome.scss"

function WelcomePage() {
  const c = "welcome-page"
  const [anim, setAnim] = useState("")

  function doLaunchGame() {
    setAnim("fadeOutDown")

    setTimeout(() => {
      NavigationUtility.doNavigate(NavigatorsEnum.PublicPages, PublicPagesEnum.Join)
    }, 1000)
  }

  useEffect(() => {
    setTimeout(() => {
      setAnim("fadeInUp")
    }, 3000)
  }, [])

  return (
    <Animation className={c} animation={anim}>
      <Title>Welcome to The Random Game</Title>
      <Button active onClick={doLaunchGame}>
        Launch
      </Button>
    </Animation>
  )
}

export default WelcomePage
