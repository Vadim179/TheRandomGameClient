import "./Input.scss"

function Input({ isAnonymous, ...props }) {
  const c = "input-component"

  const type = isAnonymous ? "password" : "text"
  return <input type={type} className={c} {...props} />
}

export default Input
