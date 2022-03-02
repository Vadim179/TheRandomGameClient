import { useState } from "react"
import { Animation, Input, Button, Card } from "Components"
import "./MatchMaker.scss"

function MatchMakerPage() {
  const c = "matchmaker-page"
  const [anim] = useState("bounceIn")

  return (
    <Animation className={c} animation={anim}>
      <Card className={`${c}__header`}>
        <span>2320 Online</span>
        <span>Vadimus27</span>
      </Card>
      <Card className={`${c}__content`}>
        <Input placeholder="Username" />
        <div className={`${c}__content-actions`}>
          <Button active>Request</Button>
          <Button>Random Match</Button>
        </div>
      </Card>
    </Animation>
  )
}

export default MatchMakerPage
