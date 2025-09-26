import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Products({ showPagination = true }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("")
  const postPerPage = 8;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products`);

        if (!showPagination) {
          setProducts(res.data.slice(0, 8));
          setFilteredProducts(res.data.slice(0, 8));
        } else {
          setProducts(res.data);
          setFilteredProducts(res.data);
        }
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchProducts();
  }, [showPagination]);

  
  useEffect(() => {
    let filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if(sortOrder ==="lowToHigh"){
      filtered = [...filtered].sort((a,b)=>a.price - b.price)
    } else if(sortOrder ==="highToLow"){
      filtered =[...filtered].sort((a,b)=>b.price - a.price)
    }
    setFilteredProducts(filtered);
    setCurrentPage(1); 
  }, [searchTerm,sortOrder, products]);


  const lastPostIndex = currentPage * postPerPage;//8=1*8
  const firstPostIndex = lastPostIndex - postPerPage; //0=8-8
  const currentPosts = showPagination ? filteredProducts.slice(firstPostIndex, lastPostIndex) : filteredProducts;
  const totalPages = Math.ceil(filteredProducts.length / postPerPage);

  return (
    <div className="mt-5 text-center">
      <h1 className="mb-4 fw-bold">Products</h1>
      <div className="container">
        <div className=" mb-4 d-flex justify-content-center gap-3 ">
        <input
          type="text"
          className="form-control w-25 border-black"
          placeholder="Search for item"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
         <select
          className="form-select w-25 border-black"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>
        <div className="row g-4 ">
          <hr />
          {currentPosts.length > 0 ? (
            currentPosts.map((product) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3"
                key={product.id}
              >
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top p-3"
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title fw-semibold mb-2">
                      {product.title.split(" ", 3).join(" ")}
                    </h6>
                    <p className="card-text text-success fw-bold">
                      EGP {product.price}
                    </p>
                    <button
                      className="btn btn-outline-dark mt-auto"
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted">No products found.</p>
          )}
        </div>

       
        {showPagination && filteredProducts.length > postPerPage && (
          <div className="d-flex justify-content-center flex-wrap gap-2 my-4">
            <button
              className="btn btn-primary"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`btn ${
                  currentPage === index + 1 ? "btn-dark" : "btn-outline-dark"
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="btn btn-primary"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
