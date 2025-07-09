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
      loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
    },
  ],
  {
    hydrateFallback: <div>Loading...</div>, // Provide fallback UI here
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
