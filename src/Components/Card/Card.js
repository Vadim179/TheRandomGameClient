import "./Card.scss"

function Card({ children, backgroundColor = "#3F3351" }) {
  const c = "card-component"
  const styles = { backgroundColor }

  return (
    <div className={c} style={styles}>
      {children}
    </div>
  )
}

export default Card
