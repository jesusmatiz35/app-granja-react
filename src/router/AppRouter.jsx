import { Navigate, Route, Routes } from "react-router"
import { LoginPage } from "../auth/pages/LoginPage"
import { AdminRoute } from "../admin/routes/AdminRoute"
import { ProtectedRoute } from "../auth/components/ProtectedRoute"

export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/" element={ <Navigate to="/login" /> } />  
        {/* Rutas protegidas */}
        <Route path="/" element={ <ProtectedRoute /> } >
            <Route path="/*" element={ <AdminRoute /> } />
        </Route>
    </Routes>
    </>
  )
}
