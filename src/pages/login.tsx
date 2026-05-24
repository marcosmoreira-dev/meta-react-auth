import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { useAuth } from "../hooks/useAuth.ts"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ThemeToggle } from "../components/ThemeToggle.tsx"


export function Login() {
  const navigate = useNavigate()

  const { login } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleLogin(event: React.FormEvent) {
    event.preventDefault()

    const success = login(email, password)

    if (success) {
      setTimeout(() => {
        navigate("/adm")
      })
    } else {
      alert("Credenciais inválidas")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 dark:bg-zinc-950">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">
            Login
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={handleLogin}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="email">
                Email
              </Label>

              <Input
                id="email"
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">
                Senha
              </Label>

              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
              />
            </div>

            <Button
              type="submit"
              className="w-full"
            >
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}