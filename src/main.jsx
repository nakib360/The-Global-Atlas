import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      loader: () => fetch("/public/placeholder_images.json"),
    }
  ]
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
