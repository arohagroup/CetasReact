// core/services/ProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  component: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component }) => {
  const isAuthenticated = !!localStorage.getItem("accessToken"); // Check token existence

  return isAuthenticated ? <>{component}</> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
