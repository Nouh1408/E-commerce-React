import React, { useState } from "react";
import buy from "../../assets/Download Customer Shopping Online Concept for free.jpeg";

export default function Payment() {
  const [isPaid, setIsPaid] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setIsPaid(true);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center fw-bold">Checkout</h2>

      {isPaid ? (
        <div className="alert alert-success text-center fs-5 py-4 shadow">
           Payment successful! <br /> Thank you for your purchase.
        </div>
      ) : (
        <div className="row align-items-center">
          
          <div className="col-lg-6">
            <form
              onSubmit={handlePayment}
              className="p-4 shadow rounded bg-light"
            >
              <h5 className="mb-3 text-primary">Billing Address</h5>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Street Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  required
                />
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Zip Code</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    required
                  />
                </div>
              </div>

              <hr className="my-4" />

              <h5 className="mb-3 text-primary">Payment Details</h5>
              <div className="mb-3">
                <label className="form-label">Card Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Expiry Date</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">CVV</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="123"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-success w-100">
                Pay Now
              </button>
            </form>
          </div>

          
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <img
              src={buy}
              alt="Shopping Illustration"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
