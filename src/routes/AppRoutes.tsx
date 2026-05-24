import { Routes, Route } from "react-router-dom"

import { Login } from "../pages/login"
import { Admin } from "../pages/admin"

import { ProtectedRoute } from "../components/ProtectedRoute"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/adm"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}