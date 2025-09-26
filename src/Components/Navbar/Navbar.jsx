import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext.jsx";
import { CiShoppingCart } from "react-icons/ci";
import { IoStorefrontSharp } from "react-icons/io5";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">
        
        <Link className="navbar-brand fw-bold d-flex align-items-center" to={"/"}>
          <IoStorefrontSharp className="me-2 fs-4 text-warning" />
          Online Store
        </Link>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

      
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <NavLink end className="nav-link px-3" to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3" to={"/product"}>
                Products
              </NavLink>
            </li>
          </ul>

          
          <NavLink
            to={"/cart"}
            className="btn btn-outline-success d-flex align-items-center"
          >
            <CiShoppingCart className="me-2 fs-5" />
            Cart
            {cart.length > 0 && (
              <span className="badge bg-success ms-2">{cart.length}</span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
