import { Navigate, Outlet } from "react-router";

export const ProtectedRoute = () => {

    const isAuthenticated = localStorage.getItem('authToken');

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

  return <Outlet />
}
