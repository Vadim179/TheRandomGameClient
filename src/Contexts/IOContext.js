import { useState, useContext, useEffect, createContext } from "react"
import { useAuth } from "Contexts"
import io from "socket.io-client"

const IOContext = createContext()

export function useIO() {
  return useContext(IOContext)
}

export function IOProvider({ children }) {
  const { user } = useAuth()
  const [socket, setSocket] = useState()

  useEffect(() => {
    if (!user) return
    const SOCKET_URL = process.env.REACT_APP_API_URL
    const socket = io(SOCKET_URL)

    socket.on("connect", () => setSocket(socket))
    return () => socket.disconnect()
  }, [user])

  return <IOContext.Provider value={{ socket }}>{children}</IOContext.Provider>
}
