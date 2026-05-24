import { useNavigate } from "react-router-dom"

import { useAuth } from "../hooks/useAuth.ts"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ThemeToggle } from "../components/ThemeToggle.tsx"

export function Admin() {
  const navigate = useNavigate()

  const { logout } = useAuth()

  function handleLogout() {
    logout()

    navigate("/login")
  }

  return (
    <div className="min-h-screen bg-zinc-100 p-8 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Dashboard
            </h1>

            <p className="text-zinc-500">
              Bem-vindo ao painel administrativo
            </p>
          </div>

          <Button
            variant="destructive"
            onClick={handleLogout}
          >
            Sair
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
            <div className="absolute top-4 right-4">
                <ThemeToggle />
            </div>
          <Card>
            <CardHeader>
              <CardTitle>
                Usuários
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-3xl font-bold">
                120
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                Projetos
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-3xl font-bold">
                8
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                Receita
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-3xl font-bold">
                R$ 12k
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}