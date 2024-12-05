import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
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

// PrivateRoute Component to handle authentication check
const PrivateRoute = ({ children }: any) => {
  const isAuthenticated = localStorage.getItem("accessToken");

  if (!isAuthenticated) {
    // Redirect them to login if not authenticated
    return <Login />;
  }

  return children;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      // Protected Routes
      { path: '', element: <PrivateRoute><Socdashboard />   </PrivateRoute>},
      { path: '/dashboard', element: <PrivateRoute><Socdashboard /></PrivateRoute> },
      { path: "/SOCDashboard", element: <PrivateRoute><Socdashboard /></PrivateRoute> },
      { path: "/data", element: <PrivateRoute><Data /></PrivateRoute> },
      { path: "/Cisodashboard", element: <PrivateRoute><Cisodashboard /></PrivateRoute> },
      { path: "/Addcomponent", element: <PrivateRoute><Addcomponent /></PrivateRoute> },
      { path: "/Customizeddashboard", element: <PrivateRoute><Customizeddashboard /></PrivateRoute> },
      { path: "/Identity360dashboard", element: <PrivateRoute><Identity360dashboard /></PrivateRoute> },
      { path: "/Riskdashboard", element: <PrivateRoute><Riskdashboard /></PrivateRoute> },
      { path: "/Systemhealthdashboard", element: <PrivateRoute><Systemhealthdashboard /></PrivateRoute> },
      { path: "/Threathunting", element: <PrivateRoute><Threathunting /></PrivateRoute> },
      { path: "/dataops", element: <PrivateRoute><Dataops /></PrivateRoute> },
      { path: "/datatrend", element: <PrivateRoute><Datatrend /></PrivateRoute> },
      { path: "/dataqualityscan", element: <PrivateRoute><Dataqualityscan /></PrivateRoute> },
      { path: "/dataqualityalerts", element: <PrivateRoute><Dataqualityalerts /></PrivateRoute> },
      { path: "/dataqualityrules", element: <PrivateRoute><Dataqualityrules /></PrivateRoute> },
      { path: "/comp3", element: <PrivateRoute><Comp3 /></PrivateRoute> },
      { path: "/comp4", element: <PrivateRoute><Comp4 /></PrivateRoute> },
      { path: "/comp5", element: <PrivateRoute><Comp5 /></PrivateRoute> },
      { path: "/comp6", element: <PrivateRoute><Comp6 /></PrivateRoute> },
      { path: "/comp7", element: <PrivateRoute><Comp7 /></PrivateRoute> },
      { path: "/comp8", element: <PrivateRoute><Comp8 /></PrivateRoute> },
      { path: "/comp9", element: <PrivateRoute><Comp9 /></PrivateRoute> },
      { path: "/comp10", element: <PrivateRoute><Comp10 /></PrivateRoute> },
      { path: "/comp11", element: <PrivateRoute><Comp11 /></PrivateRoute> },
      { path: "/comp12", element: <PrivateRoute><Comp12 /></PrivateRoute> },
      { path: "/comp13", element: <PrivateRoute><Comp13 /></PrivateRoute> },
    ],
  },
  { path: "/login", element: <Login /> },
]);

const RouterSetup = () => {
  return <RouterProvider router={router} />;
};

export default RouterSetup;
