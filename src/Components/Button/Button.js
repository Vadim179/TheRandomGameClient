import classnames from "classnames"
import "./Button.scss"

function Button({ active, children, ...props }) {
  const c = "button-component"
  const classes = classnames(c, {
    [`${c}--active`]: active,
  })

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Button
