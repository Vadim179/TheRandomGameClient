import React from "react"
import classnames from "classnames"
import "./Animation.scss"

function Animation({ animation, className, children, infinite = false, ...props }) {
  let animationClass = "animate__animated"
  animationClass += ` animate__${animation}`
  animationClass += ` ${infinite ? "animate__infinite" : ""}`
  const classes = classnames(className, animationClass)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Animation
