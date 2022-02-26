import { useState, useContext, useEffect, createContext } from "react"
import { AuthAPI } from "API"
import validate from "aproba"

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    AuthAPI.me()
      .then((response) => setUser(response.data))
      .catch((error) => console.error(error.response.data))
      .finally(() => setLoading(false))
  }, [])

  /**
   * @param {String} username
   * @param {String} password
   * @returns {Promise<void>}
   */
  function login(username, password) {
    validate("SS", arguments)

    return AuthAPI.login(username, password).then((response) =>
      setUser(response.data)
    )
  }

  /**
   * @param {String} username
   * @param {String} password
   * @returns {Promise<void>}
   */
  async function register(username, password) {
    validate("SS", arguments)

    return AuthAPI.register(username, password).then((response) =>
      setUser(response.data)
    )
  }

  /**
   * @returns {Promise<void>}
   */
  function logout() {
    return AuthAPI.logout().then(() => setUser(null))
  }

  const value = { user, loading, login, register, logout }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
