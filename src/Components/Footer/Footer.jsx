import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className="bg-dark text-light pt-4 mt-5">
  <div className="container">
    <div className="row">
      {/* Brand / About */}
      <div className="col-md-4 mb-3">
        <h5 className="text-uppercase">MyShop</h5>
        <p>
          Your one-stop shop for the best products at unbeatable prices.  
          Fast delivery. Easy returns. 100% satisfaction.
        </p>
      </div>
      {/* Links */}
      <div className="col-md-2 mb-3">
        <h6 className="text-uppercase">Quick Links</h6>
        <ul className="list-unstyled">
          <li><a href="#" className="text-light text-decoration-none">Home</a></li>
          <li><a href="#" className="text-light text-decoration-none">Shop</a></li>
          <li><a href="#" className="text-light text-decoration-none">Cart</a></li>
          <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
        </ul>
      </div>
      {/* Customer Service */}
      <div className="col-md-3 mb-3">
        <h6 className="text-uppercase">Customer Service</h6>
        <ul className="list-unstyled">
          <li><a href="#" className="text-light text-decoration-none">FAQ</a></li>
          <li><a href="#" className="text-light text-decoration-none">Shipping &amp; Returns</a></li>
          <li><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
          <li><a href="#" className="text-light text-decoration-none">Terms &amp; Conditions</a></li>
        </ul>
      </div>
      {/* Newsletter */}
      <div className="col-md-3 mb-3">
        <h6 className="text-uppercase">Stay Connected</h6>
        <form>
          <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Email address" />
            <button className="btn btn-success" type="submit">Subscribe</button>
          </div>
        </form>
        <div>
          <a href="#" className="text-light me-3"><i className="bi bi-facebook" /></a>
          <a href="#" className="text-light me-3"><i className="bi bi-twitter" /></a>
          <a href="#" className="text-light"><i className="bi bi-instagram" /></a>
        </div>
      </div>
    </div>
    {/* Bottom bar */}
    <div className="text-center py-3 border-top">
      <p className="mb-0">© 2025 MyShop. All rights reserved.</p>
    </div>
  </div>
</footer>


    </>
  )
}
