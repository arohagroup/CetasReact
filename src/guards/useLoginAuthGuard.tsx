// src/guards/useLoginAuthGuard.ts
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useLoginAuthGuard = (): boolean => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (accessToken) {
      // Redirect logged-in users to the dashboard
      navigate("/");
    }
  }, [accessToken, navigate]);

  return !accessToken;
};

export default useLoginAuthGuard;
