import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

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

  const updateCart = async (itemId, updatedItem) => {
    const userId = localStorage.getItem('userId');
    try {
      const response = await axios.post(`https://boengkosapps-039320043b7f.herokuapp.com/api/cart/update/${userId}/${itemId}`, {
        user: userId,
        items: [{
          product: updatedItem.productId,
          quantity: updatedItem.quantity
        }]
      });
      setCartItems(response.data.items);
    } catch (error) {
      console.error("Failed to update cart:", error);
    }
  };


  const removeFromCart = async (itemId) => {
    const userId = localStorage.getItem('userId');
    const updatedItems = cartItems.filter(item => item._id !== itemId);
  
    try {
      const response = await axios.delete(`https://boengkosapps-039320043b7f.herokuapp.com/api/cart/${userId}/${itemId}`, {
        data: {
          user: userId,
          items: updatedItems.map(item => ({
            product: item.productId,
            quantity: item.quantity
          }))
        }
      });
  
      setCartItems(response.data.items);
    } catch (error) {
      console.error("Failed to remove from cart:", error);
    }
  };
  

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, updateCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
