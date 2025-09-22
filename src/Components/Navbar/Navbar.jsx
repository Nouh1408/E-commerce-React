import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark border-bottom  box-shadow ">
  <div className="container">
    <a className="navbar-brand text-light" to={'/'}> <img src="src/assets/react.svg" width={30} className='me-2' /> Shopping Store</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to={"/"}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" aria-current="page" to={"/products"}>Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" aria-current="page" to={"/cart"}>Cart</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}
