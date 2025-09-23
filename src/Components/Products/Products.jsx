import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export default function Products() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(8)
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products`);
        if (location.pathname === "/") {
          setProducts(res.data.slice(0, 8));
        } else {
          setProducts(res.data);
        }
      } catch (error) {
        console.log("====================================");
        console.log("error fetching data", error);
        console.log("====================================");
      }
    };
    fetchProducts();
  }, []);

  const lastPostIndex = currentPage *postPerPage //LPI =8
  const firstPostIndex = lastPostIndex -postPerPage //FPI =0
  const curretPost = products.slice(firstPostIndex,lastPostIndex) //0-->8
  const totalPages = Math.ceil(products.length/postPerPage) //20/8
  // console.log(products.length);
  

  return (
    <div className="mt-5 text-center">
      <h1>Products</h1>
      <div className="container">
        <div className="row">
          {curretPost.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.split(" ", 3).join(" ")}
                  </h5>
                  <p className="card-text">EGP {product.price}</p>
                  <button
                    className="btn btn-outline-success"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    view Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" d-flex justify-content-center my-3">
          <button className="btn btn-primary mx-1" disabled={currentPage===1} onClick={()=>setCurrentPage(currentPage-1)}>Prev</button>
          {[...Array(totalPages)].map((_,index)=>(
            <button key={index} className={`btn mx-1 ${currentPage===index+1?"btn-dark":"btn-outline-dark"}`} onClick={()=>setCurrentPage(index+1)}>{index+1}</button>
          ))}
          <button
            className="btn btn-primary mx-1"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
