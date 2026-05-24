import { type ReactNode, useState } from "react"

import { AuthContext } from "../contexts/auth-context"

type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function login(email: string, password: string) {
    const validEmail = "admin@metaconsultoria.com"
    const validPassword = "Meta#123"

    if (email === validEmail && password === validPassword) {
      setIsAuthenticated(true)
      return true
    }

    return false
  }

  function logout() {
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}