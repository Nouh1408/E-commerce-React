import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import ErrorPath from './Components/eRRORpATH/ErrorPath.jsx'
import Products from './Components/Products/Products.jsx'
import Cart from './Components/Cart/Cart.jsx'
import ItemDescription from './Components/ItemDescription/ItemDescription.jsx'
import { CartProvider } from './Components/CartContext/CartContext.jsx'
import Category from './Components/Catrgory/Category.jsx'

export default function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: "/product", element: <Products showPagination={true} /> },
          { path: "/product/:id", element: <ItemDescription /> },
          { path: "/cart", element: <Cart /> },
          { path: "/category/:categoryName", element: <Category /> },
          { path: "*", element: <ErrorPath /> }
        ]
      }
    ],
    {
      basename: "/E-commerce-React", 
    }
  );

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}
