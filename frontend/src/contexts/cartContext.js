import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`https://boengkosapps-039320043b7f.herokuapp.com/api/cart/${userId}`);
        setCartItems(response.data.items);
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
      }
    };

    if (userId) {
      fetchCart();
    }
  }, [userId]);

  const addToCart = async (product, quantity) => {
    try {
      const response = await axios.post('https://boengkosapps-039320043b7f.herokuapp.com/api/cart', {
        user: userId,
        items: [{ product: product._id, quantity }]
      });
      setCartItems(response.data.items);
    } catch (error) {
      console.error("Failed to add to cart:", error);
    }
  };

  const updateCart = async (updatedItems) => {
    try {
      const response = await axios.post(`https://boengkosapps-039320043b7f.herokuapp.com/api/cart`, {
        user: userId,
        items: updatedItems.map(item => ({
          product: item.productId,
          quantity: item.quantity
        }))
      });
      setCartItems(response.data.items);
    } catch (error) {
      console.error("Failed to update cart:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};
