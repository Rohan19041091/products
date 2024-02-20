// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item]);
  };

  const removeItem = (index) => {
    setCart(prevCart => prevCart.filter((_, i) => i !== index));
  };

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};
