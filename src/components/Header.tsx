import { ThemeToggle } from "./ThemeToggle"

export function Header() {
  return (
    <header className="flex w-full items-center justify-between border-b bg-background px-8 py-4">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">
          Autenticação Meta
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </header>
  )
}