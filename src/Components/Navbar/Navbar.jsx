import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext.jsx";
import { CiShoppingCart } from "react-icons/ci";
import { IoStorefrontSharp } from "react-icons/io5";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold d-flex align-items-center" to={"/"}>
          <IoStorefrontSharp className="me-2 fs-4 text-warning" />
          Online Store
        </Link>

        {/* Toggler */}
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

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Center Links */}
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

          {/* Right Side: Cart + Auth */}
          <div className="d-flex align-items-center gap-2">
            {/* Cart */}
            <NavLink
              to={"/cart"}
              className="btn btn-outline-success d-flex align-items-center position-relative"
            >
              <CiShoppingCart className="me-2 fs-5" />
              Cart
              {cart.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  {cart.length}
                </span>
              )}
            </NavLink>

            {/* Auth Buttons */}
            {!user ? (
              <>
                <NavLink to="/login" className="btn btn-outline-light">
                  Login
                </NavLink>
                <NavLink to="/register" className="btn btn-warning">
                  Register
                </NavLink>
              </>
            ) : (
              <div className="d-flex align-items-center gap-2">
                <span className="text-light">Hi, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="btn btn-danger btn-sm"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
