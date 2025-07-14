import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import NotFoundPage from "./pages/404.jsx";
import ProductCard from "./components/fragments/ProductCard.jsx";
import ProductPage from "./pages/products.jsx";
import HomePage from "./pages/home.jsx";
import APIProductPage from "./pages/productsAPI.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/product",
    element: <APIProductPage/>
  },
  {
    path :"product-api",
    element: <APIProductPage/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
