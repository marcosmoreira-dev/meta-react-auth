import { Routes, Route } from "react-router-dom"

import { Login } from "../pages/login"
import { Admin } from "../pages/admin"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/adm" element={<Admin />} />
    </Routes>
  )
}