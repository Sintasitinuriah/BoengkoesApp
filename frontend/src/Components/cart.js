import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'New Lomaryde Chocomolins',
      price: 85000,
      quantity: 1,
      image: 'https://lamonde.com/wp-content/uploads/2023/06/New-Lomaryde-Chocomolins-Lamonde.jpg',
    },
    {
      id: 2,
      name: 'Varion Chocomatting',
      price: 25000,
      quantity: 2,
      image: 'https://lamonde.com/wp-content/uploads/2023/06/Varion-Chocomatting-Lamonde.jpg',
    },
    {
      id: 3,
      name: 'New Lomande Chocomoltine',
      price: 85000,
      quantity: 1,
      image: 'https://lamonde.com/wp-content/uploads/2023/06/New-Lomande-Chocomoltine-Lamonde.jpg',
    },
    {
      id: 4,
      name: 'Varaan Choc',
      price: 20000,
      quantity: 3,
      image: 'https://lamonde.com/wp-content/uploads/2023/06/Varaan-Choc-Lamonde.jpg',
    },
  ]);

  const handleQuantityChange = (id, quantity) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity };
        } else {
          return item;
        }
      })
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <h1>Keranjang</h1>

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Keranjang Anda kosong.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Nama Produk</th>
                <th>Harga</th>
                <th>Jumlah</th>
                <th>Total</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.name} width="50px" />
                    {item.name}
                  </td>
                  <td>Rp{item.price.toLocaleString('id-ID')}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={item.quantity}
                      onChange={(event) =>
                        handleQuantityChange(item.id, parseInt(event.target.value))
                      }
                    />
                  </td>
                  <td>Rp{(item.price * item.quantity).toLocaleString('id-ID')}</td>
                  <td>
                    <button onClick={() => handleRemoveItem(item.id)}>Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="cart-summary">
        <h2>Ringkasan Belanja</h2>
        <p>Pilih Semua</p>
        <p>Total Belanja: Rp{calculateTotalPrice().toLocaleString('id-ID')}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
