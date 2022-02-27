import React from "react"
import classnames from "classnames"
import "./Animation.scss"

function Animation({ animation, className, children, infinite = false, ...props }) {
  const infiniteClass = infinite ? "animate__infinite" : ""
  const animationClass = `animate__animated animate__${animation} ${infiniteClass}`
  const classes = classnames(className, animationClass)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Animation
