import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext.jsx";

export default function Cart() {
  const { cart, addToCart, decreaseQuantity } = useContext(CartContext);

  // Calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex align-items-center justify-content-between"
              >
                {/* Product image */}
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "50px", height: "50px", objectFit: "contain" }}
                  className="me-3"
                />

                {/* Product title */}
                <span className="flex-grow-1">{item.title}</span>

                {/* Price */}
                <span className="fw-bold me-3">EGP {item.price}</span>

                {/* Quantity controls */}
                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="btn btn-sm btn-outline-success"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Cart Total */}
          <div className="d-flex justify-content-end">
            <h4 className="fw-bold">
              Total: <span className="text-success">EGP {total.toFixed(2)}</span>
            </h4>
          </div>
        </>
      )}
    </div>
  );
}
