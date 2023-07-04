import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import Crypto from "./pages/Crypto";
import Home from "./pages/Home";
import CryptoDetails from "./components/CryptoDetails";

const Trending = lazy(() => import("./pages/Trending"));
const Saved = lazy(() => import("./pages/Saved"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: (
          <Suspense>
            <Crypto />
          </Suspense>
        ),
        children: [
          {
            path: ":cryptoId",
            element: <CryptoDetails />,
          },
        ],
      },
      {
        path: "/trending",
        element: (
          <Suspense>
            {" "}
            <Trending />
          </Suspense>
        ),
        children: [
          {
            path: ":crypotId",
            element: <CryptoDetails />,
          },
        ],
      },
      {
        path: "/saved",
        element: (
          <Suspense>
            <Saved />
          </Suspense>
        ),
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
