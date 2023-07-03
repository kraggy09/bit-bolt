import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import Crypto from "./pages/Crypto";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Saved from "./pages/Saved";
import CryptoDetails from "./components/CryptoDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Crypto />,
        children: [
          {
            path: ":cryptoId",
            element: <CryptoDetails />,
          },
        ],
      },
      {
        path: "/trending",
        element: <Trending />,
        children: [
          {
            path: ":crypotId",
            element: <CryptoDetails />,
          },
        ],
      },
      {
        path: "/saved",
        element: <Saved />,
        children: [
          {
            path: ":crypotId",
            element: <CryptoDetails />,
          },
        ],
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
