import React from "react"
import ReactDOM from "react-dom"

import { TheBackground } from "./Components"
import App from "./App"

import "animate.css"
import "./index.scss"

ReactDOM.render(
  <React.StrictMode>
    <TheBackground />
    <App />
  </React.StrictMode>,
  document.getElementById("game")
)
