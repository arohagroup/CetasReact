// src/guards/useAuthGuard.ts
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthGuard = (): boolean => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!accessToken) {
      // Store the intended URL for redirection after login
      const redirectURL = window.location.pathname + window.location.search;
      sessionStorage.setItem("redirectURL", redirectURL);
      navigate("/login");
    }
  }, [accessToken, navigate]);

  return Boolean(accessToken);
};

export default useAuthGuard;
