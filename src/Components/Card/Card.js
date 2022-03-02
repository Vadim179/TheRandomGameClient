import classnames from "classnames"
import "./Card.scss"

function Card({ className, children, backgroundColor = "#363062" }) {
  const c = "card-component"
  const styles = { backgroundColor }
  const classes = classnames(c, className)

  return (
    <div className={classes} style={styles}>
      {children}
    </div>
  )
}

export default Card
