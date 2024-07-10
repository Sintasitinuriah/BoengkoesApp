import React, { useState } from 'react';

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'New Lamanda Chocoalmondine', variant: 'Chocoalmondine', price: 85000, quantity: 2, from: 'Lamanda Palembang' },
    { id: 2, name: 'New Lamanda Chocoalmondine', variant: 'Chocoalmondine', price: 85000, quantity: 2, from: 'Cikini Deli' },
  ]);

  const handleQuantityChange = (id, change) => {
    setItems(items.map(item => item.id === id ? { ...item, quantity: item.quantity + change } : item));
  };

  const handleRemove = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const totalItem = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingCost = 33000;
  const grandTotal = totalPrice + shippingCost;

  return (
    <div className="app">
      <div className="cart">
        <h2>Keranjang</h2>
        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <input type="checkbox" />
              <img src="path-to-image" alt={item.name} />
              <div className="item-details">
                <p>{item.from}</p>
                <p>{item.name}</p>
                <p>Varian: {item.variant}</p>
                <p>Rp {item.price.toLocaleString()}</p>
              </div>
              <div className="item-actions">
                <button onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity === 1}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                <button onClick={() => handleRemove(item.id)}>🗑️</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="summary">
        <h2>Ringkasan Belanja</h2>
        <p>Item: {totalItem}</p>
        <p>Total Item: Rp {totalPrice.toLocaleString()}</p>
        <p>Ongkos Kirim: Rp {shippingCost.toLocaleString()}</p>
        <p>Total Belanja: Rp {grandTotal.toLocaleString()}</p>
        <button>Lanjut Pembayaran</button>
      </div>
    </div>
  );
};

export default Cart;
