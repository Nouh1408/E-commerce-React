import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import ErrorPath from "./Components/eRRORpATH/ErrorPath.jsx";
import Products from "./Components/Products/Products.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import ItemDescription from "./Components/ItemDescription/ItemDescription.jsx";
import { CartProvider } from "./Components/CartContext/CartContext.jsx";
import Category from "./Components/Catrgory/Category.jsx";

import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import Payment from "./Components/Payment/Payment.jsx";


function ProtectedRoute({ children }) {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!loggedInUser) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default function App() {
  const router = createBrowserRouter([
    
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "product", element: <Products showPagination={true} /> },
        { path: "product/:id", element: <ItemDescription /> },
        { path: "cart", element: <Cart /> },
        {path:'payment', element:<Payment/>},
        { path: "category/:categoryName", element: <Category /> },
        { path: "*", element: <ErrorPath /> },
      ],
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}
