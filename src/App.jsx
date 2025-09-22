import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import ErrorPath from './Components/eRRORpATH/ErrorPath.jsx'
import Products from './Components/Products/Products.jsx'
import Cart from './Components/Cart/Cart.jsx'


export default function App() {
  const router =createBrowserRouter([
          {path:"", element:<Layout/>,children:[
            {index:true,element:<Home/>},
            {path:"/products",element:<Products/>},
            {path:"/cart",element:<Cart/>},
            {path:"*",element:<ErrorPath/>}
          ]}
        ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
