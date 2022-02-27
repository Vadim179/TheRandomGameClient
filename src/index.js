import React from "react"
import ReactDOM from "react-dom"

import { TheBackground } from "./Components"
import { ContextProvider } from "Contexts"
import App from "./App"

import "animate.css"
import "./index.scss"

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <TheBackground />
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("game")
)
