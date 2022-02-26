import { Title, Button, Animation } from "Components"
import "./Welcome.scss"

function WelcomePage() {
  const c = "welcome-page"

  return (
    <Animation className={c} animation="backInUp">
      <Title>Welcome to The Random Game</Title>
      <Button active>Launch</Button>
    </Animation>
  )
}

export default WelcomePage
