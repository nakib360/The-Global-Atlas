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
      loader: () => fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,flags,tld,currencies,languages,maps,gini,continents"),
    }
  ]
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
