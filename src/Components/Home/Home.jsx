import React, { useEffect, useState } from "react";
import Products from "../Products/Products.jsx";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products`);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-dark bg-gradient text-white text-center py-5 mb-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to Our Store</h1>
          <p className="lead">Find the best products at unbeatable prices</p>
          <a href="#products" className="btn btn-warning btn-lg mt-3">
            Shop Now
          </a>
        </div>
      </div>

      
      <div className="container my-5">
        <h2 className="text-center  fw-bold mb-5">
          Shop by Category
        </h2>
        <div className="row g-4 text-center">
          
          <div className="col-6 col-md-3">
            <Link
              to="/category/men's clothing"
              className="text-decoration-none"
            >
              <div className="card shadow h-100 border-0 hover-shadow">
                <img
                  src={products[1]?.image}
                  alt="Men's Clothing"
                  className="card-img-top p-3"
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-dark">Men's Clothing</h5>
                </div>
              </div>
            </Link>
          </div>

          
          <div className="col-6 col-md-3">
            <Link
              to="/category/women's clothing"
              className="text-decoration-none"
            >
              <div className="card shadow h-100 border-0">
                <img
                  src={products[15]?.image}
                  alt="Women's Clothing"
                  className="card-img-top p-3"
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-dark">Women's Clothing</h5>
                </div>
              </div>
            </Link>
          </div>

          
          <div className="col-6 col-md-3">
            <Link to="/category/electronics" className="text-decoration-none">
              <div className="card shadow h-100 border-0">
                <img
                  src={products[11]?.image}
                  alt="Electronics"
                  className="card-img-top p-3"
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-dark">Electronics</h5>
                </div>
              </div>
            </Link>
          </div>

          
          <div className="col-6 col-md-3">
            <Link to="/category/jewelery" className="text-decoration-none">
              <div className="card shadow h-100 border-0">
                <img
                  src={products[6]?.image}
                  alt="Jewelry"
                  className="card-img-top p-3"
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-dark">Jewelry</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      
      <div className="bg-light py-5" id="products">
        <div className="container">
          <h2 className="text-center text-success fw-bold mb-5 ">
            Featured Products
          </h2>
          <Products showPagination={false} />
        </div>
      </div>
    </>
  );
}
