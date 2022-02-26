import { BrowserRouter as Router } from "react-router-dom"
import { AuthProvider } from "./AuthContext"
import { IOProvider } from "./IOContext"

function ContextProvider({ children }) {
  return (
    <Router>
      <AuthProvider>
        <IOProvider>{children}</IOProvider>
      </AuthProvider>
    </Router>
  )
}

export default ContextProvider
