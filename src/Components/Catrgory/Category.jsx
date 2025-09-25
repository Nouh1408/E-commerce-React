// src/Components/Category/Category.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Category() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
const navigate = useNavigate()
  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/category/${categoryName}`
        );
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching category products", error);
      }
    };
    fetchCategoryProducts();
  }, [categoryName]);

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-capitalize">{categoryName}</h2>
      <div className="row">
        {products.map((item) => (
          <div key={item.id} className="col-md-3 mb-4">
            <div className="card h-100 shadow">
              <img
                src={item.image}
                className="card-img-top p-3"
                alt={item.title}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h6 className="card-title">{item.title}</h6>
                <p className="fw-bold">EGP {item.price}</p>
                <button
  className="btn btn-outline-success w-100 mt-2"
  style={{ cursor: "pointer" }}
  onClick={() => navigate(`/product/${item.id}`)}
>
  View Details
</button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
