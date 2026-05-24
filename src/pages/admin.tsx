import { useNavigate } from "react-router-dom"

import { useAuth } from "../hooks/useAuth.ts"

import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export function Admin() {
  const navigate = useNavigate()

  const { logout } = useAuth()

  function handleLogout() {
    logout()

    navigate("/login")
  }

  return (
    <div className="flex min-h-screen flex-col bg-zinc-100 p-8 dark:bg-zinc-950">
      <div className="flex w-full flex-col gap-6">

        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold">
              Dashboard
            </h1>

            <p className="text-zinc-500">
              Bem-vindo ao painel administrativo
            </p>
          </div>

          <div className="flex items-center gap-2">

            <Button
              variant="destructive"
              onClick={handleLogout}
            >
              Sair
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">

          <Card className="flex flex-1 min-w-[250px] flex-col">
            <CardHeader>
              <CardTitle>
                Usuários
              </CardTitle>
            </CardHeader>

            <CardContent className="flex items-center">
              <p className="text-3xl font-bold">
                120
              </p>
            </CardContent>
          </Card>

          <Card className="flex flex-1 min-w-[250px] flex-col">
            <CardHeader>
              <CardTitle>
                Projetos
              </CardTitle>
            </CardHeader>

            <CardContent className="flex items-center">
              <p className="text-3xl font-bold">
                8
              </p>
            </CardContent>
          </Card>

          <Card className="flex flex-1 min-w-[250px] flex-col">
            <CardHeader>
              <CardTitle>
                Receita
              </CardTitle>
            </CardHeader>

            <CardContent className="flex items-center">
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