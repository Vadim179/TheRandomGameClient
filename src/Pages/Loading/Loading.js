import { useEffect } from "react"
import { BackroundUtility } from "Utilities"
import { Animation } from "Components"
import "./Loading.scss"

function LoadingPage() {
  const c = "loading-page"

  useEffect(() => {
    BackroundUtility.setBackgroundOpacity(50)
    return () => BackroundUtility.setBackgroundOpacity(100)
  })

  return (
    <div className={c}>
      <Animation className={`${c}__spinner`} animation="flip" infinite />
    </div>
  )
}

export default LoadingPage
