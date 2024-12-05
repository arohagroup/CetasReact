import React from "react";
import { useNavigate } from "react-router-dom";

// PrivateRoute component to protect routes
const PrivateRoute = ({ children }: any) => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("accessToken");

  if (!isAuthenticated) {
    // If not authenticated, navigate to login page
    navigate("/login", { replace: true });
    return null;
  }

  return children;
};

export default PrivateRoute;
