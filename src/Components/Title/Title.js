import "./Title.scss"

function Title({ children, fontFamily = "Alphacentauri", fontSize = 50 }) {
  const c = "title-component"
  const styles = { fontSize, fontFamily }

  return (
    <span className={c} style={styles}>
      {children}
    </span>
  )
}

export default Title
