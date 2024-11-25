import React, { useState, useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from "./layout/layout";
import Data from "./data";
import Cisodashboard from "./components/Cisodashboard/Cisodashboard";
import Customizeddashboard from "./components/Customizeddashboard";
import Threathunting from "./components/Threathunting";
import Addcomponent from "./components/Addcomponent";
import Identity360dashboard from "./components/Identity360dashboard";
import Riskdashboard from "./components/Riskdashboard/Riskdashboard";
import Socdashboard from "./components/Socdashboard";
import Systemhealthdashboard from "./components/Systemhealthdashboard";
import Dataops from "./comp2/dataops/dataops";
import Datatrend from "./comp2/datatrends/datatrend";
import Dataqualityalerts from "./comp2/dataqualityalerts/dataqualityalerts";
import Dataqualityrules from "./comp2/dataqualityrules/dataqualityrules";
import Dataqualityscan from "./comp2/dataqualityscan/dataqualityscan";
import Comp3 from "./comp3/comp3";
import Comp4 from "./comp4/comp4";
import Comp5 from "./comp5/comp5";
import Comp6 from "./comp6/comp6";
import Comp7 from "./comp7/comp7";
import Comp8 from "./comp8/comp8";
import Comp9 from "./comp9/comp9";
import Comp10 from "./comp10/comp10";
import Comp11 from "./comp11/comp11";
import Comp12 from "./comp12/comp12";
import Comp13 from "./comp13/comp13";
import SsoLandingPage from "./core/services/SsoLandingPage";
import Login from "./components/login/login";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      
      { path: "", element: <SsoLandingPage /> },
      { path: "/dashboard", element: <Socdashboard /> },
      { path: "/SOCDashboard", element: <Socdashboard /> },
      { path: "/data", element: <Data /> },
      { path: "/Cisodashboard", element: <Cisodashboard /> },
      { path: "/Addcomponent", element: <Addcomponent /> },
      { path: "/Customizeddashboard", element: <Customizeddashboard /> },
      { path: "/Identity360dashboard", element: <Identity360dashboard /> },
      { path: "/Riskdashboard", element: <Riskdashboard /> },
      { path: "/Systemhealthdashboard", element: <Systemhealthdashboard /> },
      { path: "/Threathunting", element: <Threathunting /> },
      { path: "/dataops", element: <Dataops /> },
      { path: "/datatrend", element: <Datatrend /> },
      { path: "/dataqualityscan", element: <Dataqualityscan /> },
      { path: "/dataqualityalerts", element: <Dataqualityalerts /> },
      { path: "/dataqualityrules", element: <Dataqualityrules /> },
      { path: "/comp3", element: <Comp3 /> },
      { path: "/comp4", element: <Comp4 /> },
      { path: "/comp5", element: <Comp5 /> },
      { path: "/comp6", element: <Comp6 /> },
      { path: "/comp7", element: <Comp7 /> },
      { path: "/comp8", element: <Comp8 /> },
      { path: "/comp9", element: <Comp9 /> },
      { path: "/comp10", element: <Comp10 /> },
      { path: "/comp11", element: <Comp11 /> },
      { path: "/comp12", element: <Comp12 /> },
      { path: "/comp13", element: <Comp13 /> },
    ],
  },
  { path: "/login", element: <Login /> },
  // {
  //   path: "/login", 
  //   element: <App />  
  // },
]);

