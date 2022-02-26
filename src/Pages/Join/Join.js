import { Animation, Card, Title, Input, Button } from "Components"
import "./Join.scss"

function JoinPage() {
  const c = "join-page"

  return (
    <Animation className={c} animation="bounceIn">
      <Title fontFamily="Righteous" fontSize={25}>
        Join The Random Game
      </Title>
      <Card>
        <Input placeholder="Username" />
        <Input isAnonymous placeholder="Password" />
        <div className={`${c}__actions`}>
          <Button active>Sign up</Button>
          <Button>Login</Button>
        </div>
      </Card>
    </Animation>
  )
}

export default JoinPage
