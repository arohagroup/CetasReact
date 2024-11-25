// src/guards/useMainAuthGuard.ts
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUtilService } from "../core/services/utilService";

const useMainAuthGuard = (): boolean => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const currentUserProfile: any = useUtilService(); // Get profile from shared context or service

  useEffect(() => {
    if (accessToken) {
      if (currentUserProfile === "AIR") {
        navigate("/airDashboard");
      } else {
        navigate("/amgDashboard");
      }
    } else {
      const redirectURL = window.location.pathname + window.location.search;
      sessionStorage.setItem("redirectURL", redirectURL);

      // Example: Redirect to a custom auth page if on 'ustcl', else go to login
      if (window.location.href.includes("ustcl")) {
        window.location.href = "/auth";
      } else {
        navigate("/login");
      }
    }
  }, [accessToken, currentUserProfile, navigate]);

  return Boolean(accessToken);
};

export default useMainAuthGuard;
