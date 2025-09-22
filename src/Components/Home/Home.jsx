import React, { useEffect, useState } from 'react'
import Products from '../Products/Products.jsx'
import axios from 'axios';
import { Alert } from 'react-bootstrap';

export default function Home() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products`);
        setProducts(res.data);
      } catch (error) {
        console.log("====================================");
        console.log("error fetching data", error);
        console.log("====================================");
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
    <div>
        <div>
             <h1>Home page</h1>
        </div>

        <Products/>
    </div>

    </>
  )
}
