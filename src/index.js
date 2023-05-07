import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import Crypto from "./pages/Crypto";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Saved from "./pages/Saved";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Crypto />,
      },
      {
        path: "/trending",
        element: <Trending />,
      },
      {
        path: "/saved",
        element: <Saved />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
