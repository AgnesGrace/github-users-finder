import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import NotFound from "./components/routes/NotFound";
import User from "./components/routes/User";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/users/:login",
    element: <User />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GithubProvider>
      <AlertProvider>
        <RouterProvider router={router} />
      </AlertProvider>
    </GithubProvider>
  </React.StrictMode>
);
