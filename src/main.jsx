import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import NotFoundPage from "./pages/404.jsx";
import HomePage from "./pages/home.jsx";
import APIProductPage from "./pages/productsAPI.jsx";
import DetailProduct from "./pages/product.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import DarkModeContextProvider from "./context/DarkMode.jsx";
import ShowCartDialogContextProvider from "./context/ShowCartDialog.jsx";

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
    path: "/products",
    element: <APIProductPage />,
  },
  {
    path: "/product",
    element: <APIProductPage />,
  },
  {
    path: "product/:id",
    element: <DetailProduct />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeContextProvider>
      <ShowCartDialogContextProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ShowCartDialogContextProvider>
    </DarkModeContextProvider>
  </StrictMode>
);
