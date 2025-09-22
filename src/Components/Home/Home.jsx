import React, { useEffect, useState } from 'react'
import Products from '../Products/Products.jsx'
import axios from 'axios';
import { Alert } from 'react-bootstrap';

export default function Home() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await axios.get(`https://fakestoreapi.com/products`);
        setProducts(data.data).split(" ",8);
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
      {/* Hero Section */}
      <div className="bg-dark text-white text-center py-5 mb-4">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to Our Store</h1>
          <p className="lead">Find the best products at unbeatable prices</p>
          <a href="#products" className="btn btn-warning btn-lg mt-3">
            Shop Now
          </a>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Shop by Category</h2>
        <div className="row text-center">
          <div className="col-md-3 mb-4">
            <div className="card shadow h-100 ">
              <img src={products[1]?.image} alt={products[1]?.title} />

              <div className="card-body">
                <h5 className="card-img-bottom">Men's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card shadow h-100">
              <img
                src={products[15]?.image}
                className="card-img-bottom"
                alt={products[15]?.title}
              />
              <div className="card-body">
                <h5 className="card-img-bottom">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card shadow h-100">
              <img
                src={products[11]?.image}
                className="card-img"
                alt={products[11]?.title}
              />
              <div className="card-body">
                <h5 className="card-img-bottom">Electronics</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card shadow h-100">
              <img
                src={products[6]?.image}
                className="card-img"
                alt={products[6]?.title}
              />
              <div className="card-body">
                <h5 className="card-img-bottom">Jewelry</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="container my-5" id="products">
        <h2 className="text-center mb-4">Featured Products</h2>
        <Products />
      </div>
</div>

</>
  )}
