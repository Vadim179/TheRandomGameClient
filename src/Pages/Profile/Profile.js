import { useState } from "react"
import { Animation, Button, Card } from "Components"
import "./Profile.scss"

function ProfilePage() {
  const c = "profile-page"
  const [anim] = useState("bounceIn")

  return (
    <Animation className={c} animation={anim}>
      <Card className={`${c}__header`}>
        <span>Vadimus27</span>
        <span>Level 12, 1000 C</span>
      </Card>
      <div className={`${c}__actions`}>
        <Button className={`${c}__actions-claim-daily-reward`}>
          Claim Daily Reward
        </Button>
        <Button className={`${c}__actions-watch-ad`}>Watch Ad For 300 C</Button>
      </div>
    </Animation>
  )
}

export default ProfilePage
