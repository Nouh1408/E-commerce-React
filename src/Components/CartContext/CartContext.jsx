import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  
  function addToCart(product) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }

  
  function decreaseQuantity(productId) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) 
    );
  }

  
  function removeFromCart(productId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, decreaseQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
