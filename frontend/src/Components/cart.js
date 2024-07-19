import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import { useCart } from '../contexts/cartContext';

const Cart = () => {
  const navigate = useNavigate();
  
  const { cartItems, setCartItems, updateCart, removeFromCart } = useCart();
  const userId = localStorage.getItem('userId');
  // const handleCheckoutClick = () => {
  //   const message = `Ringkasan Belanja:%0A` +
  //                   `Total Item: ${totalSelectedItem}%0A` +
  //                   `Total Harga Barang: Rp ${totalSelectedPrice}%0A` +
  //                   `Biaya Pengiriman: Rp ${shippingCost}%0A` +
  //                   `Grand Total: Rp ${grandTotal}`;

  //   const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
  //   window.open(whatsappUrl, '_blank');
  // };
  const [originProvince, setOriginProvince] = useState("");
  const [originCity, setOriginCity] = useState("");
  const [destinationProvince, setDestinationProvince] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [weight, setWeight] = useState(1);
  const [selectedCourier, setSelectedCourier] = useState("");
  const [shippingCost, setShippingCost] = useState(0);
  const [error, setError] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [originCities, setOriginCities] = useState([]);
  const [destinationCities, setDestinationCities] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const couriers = ["jne", "pos", "tiki"];

  const handleCheckoutClick = async () => {
    // Create PDF
    const doc = new jsPDF();
  
    // Set document properties
    doc.setProperties({
      title: 'Ringkasan Belanja',
      subject: 'Detail pembelian',
      // author: 'Your Company Name',
      keywords: 'belanja, ringkasan, pembelian',
      // creator: 'Your Company Name'
    });
  
    // Add title and metadata
    doc.setFontSize(18);
    doc.text('Ringkasan Belanja', 10, 10);
  
    doc.setFontSize(12);
    doc.text(`Total Item:`, 10, 30);
    doc.text(`${totalSelectedItem}`, 60, 30);
  
    doc.text(`Total Harga Barang:`, 10, 40);
    doc.text(`Rp ${totalSelectedPrice}`, 60, 40);
  
    doc.text(`Biaya Pengiriman:`, 10, 50);
    doc.text(`Rp ${shippingCost}`, 60, 50);
  
    doc.text(`Grand Total:`, 10, 60);
    doc.text(`Rp ${grandTotal}`, 60, 60);
  
    // Optional: Add line breaks for better spacing
    doc.setLineWidth(0.5);
    doc.line(10, 15, 200, 15); // Horizontal line below title
    doc.line(10, 55, 200, 55);
    doc.line(10, 65, 200, 65); // Horizontal line below total
  
    // Convert the PDF to a Blob
    const pdfBlob = doc.output('blob');
    const formData = new FormData();
    formData.append('file', pdfBlob, 'ringkasan_belanja.pdf');
  
    try {
      // Upload the PDF to your backend API
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      const fileUrl = response.data.fileUrl; // Get the URL of the uploaded file
  
      const message = `Ringkasan Belanja:%0A` +
                      `Total Item: ${totalSelectedItem}%0A` +
                      `Total Harga Barang: Rp ${totalSelectedPrice}%0A` +
                      `Biaya Pengiriman: Rp ${shippingCost}%0A` +
                      `Grand Total: Rp ${grandTotal}%0A%0A` +
                      `Lihat detail: ${fileUrl}`;
  
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } catch (error) {
      console.error('Failed to upload file:', error);
    }
  };
  

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/province', {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'key': 'c63cc54787424f891ca2b5e0517d8bc5', // Replace with your actual API key
          },
        });
        setProvinces(response.data.rajaongkir.results);
      } catch (error) {
        console.error("Error fetching provinces from RajaOngkir API:", error.message);
        setError("Failed to fetch provinces");
      }
    };

    fetchProvinces();
  }, []);

  const fetchCities = async (provinceId, setterFunc) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/city?province=${provinceId}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'key': 'c63cc54787424f891ca2b5e0517d8bc5', // Replace with your actual API key
        },
      });
      setterFunc(response.data.rajaongkir.results);
    } catch (error) {
      console.error(`Error fetching cities from RajaOngkir API for province ${provinceId}:`, error.message);
      setError("Failed to fetch cities");
    }
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`https://boengkosapps-039320043b7f.herokuapp.com/api/cart/${userId}`);
        setCartItems(response.data.items);
      } catch (error) {
        console.error("Error fetching cart items:", error.message);
        setError("Failed to fetch cart items");
      }
    };

    fetchCartItems();
  }, [setCartItems, userId]);

  const handleQuantityChange = async (itemId, change) => {
    const updatedItems = cartItems.map(item =>
      item._id === itemId ? { ...item, quantity: item.quantity + change } : item
    ).filter(item => item.quantity > 0);
    
    setCartItems(updatedItems);
    console.log(updatedItems);
  
    try {
      const newQuantity = updatedItems.find(item => item._id === itemId)?.quantity || 0;
      await axios.put(`http://localhost:api/cart/update/${userId}/${itemId}`, {
        quantity: newQuantity,
      });
    } catch (error) {
      console.error("Failed to update cart:", error);
    }
  };

  const handleRemove = async (itemId) => {
    try {
      await removeFromCart(itemId);
    } catch (error) {
      console.log(itemId);
      console.error("Failed to remove from cart:", error);
    }
  };

  const handleCourierChange = (courier) => {
    setSelectedCourier(courier);
  };

  const handleCheckOngkir = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/cost',
        new URLSearchParams({
          origin: originCity,
          destination: destinationCity,
          weight,
          courier: selectedCourier,
        }),
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded',
            'key': 'c63cc54787424f891ca2b5e0517d8bc5', // Replace with your actual API key
          },
        }
      );

      console.log(response.data);
      setShippingCost(response.data.rajaongkir.results[0].costs[0].cost[0].value); // Example to set shipping cost
    } catch (error) {
      console.error("Error checking shipping cost:", error.message);
      setError("Failed to fetch shipping cost");
    }
  };

  const handleCheckboxChange = (itemId, checked) => {
    setSelectedItems(prevSelectedItems => {
      if (checked) {
        return [...prevSelectedItems, itemId];
      } else {
        return prevSelectedItems.filter(id => id !== itemId);
      }
    });
  };

  const totalSelectedItem = cartItems
    .filter(item => selectedItems.includes(item._id))
    .reduce((acc, item) => acc + item.quantity, 0);

  const totalSelectedPrice = cartItems
    .filter(item => selectedItems.includes(item._id))
    .reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  // const totalItem = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  // const totalPrice = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const grandTotal = totalSelectedPrice + shippingCost;

  return (
    <div className="app">
      <div className="cart">
        <h2>Keranjang</h2>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <input
                type="checkbox"
                checked={selectedItems.includes(item._id)}
                onChange={(e) => handleCheckboxChange(item._id, e.target.checked)}
              />
              <img src={item.product.image}  alt={item.product.name} />
              <div className="item-details">
                <p>{item.product.name}</p>
                <p>Rp {item.product.price}</p>
              </div>
              <div className="item-actions">
              {/* <button onClick={() => handleQuantityChange(item._id, item.quantity + 1)}>+</button><span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item._id, item.quantity - 1)} disabled={item.quantity === 1}>-</button> */}
                <button onClick={() => handleQuantityChange(item._id, -1)} disabled={item.quantity === 1}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item._id, 1)}>
                  +
                </button>
                <button onClick={() => handleRemove(item._id)}>🗑️</button>
              </div>
            </div>
          ))}
        </div>

        <div className="shipping-cost">
          <h2>Cek Ongkos Kirim Disini!</h2>
          <div className="form-group">
            <label htmlFor="originProvince">Alamat Pengirim</label>
            <select
              id="originProvince"
              value={originProvince}
              onChange={(e) => {
                setOriginProvince(e.target.value);
                fetchCities(e.target.value, setOriginCities);
              }}
            >
              <option value="">Pilih Provinsi Asal</option>
              {provinces.map((province) => (
                <option key={province.province_id} value={province.province_id}>
                  {province.province}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <select
              id="originCity"
              value={originCity}
              onChange={(e) => setOriginCity(e.target.value)}
            >
              <option value="">Pilih Kota Asal</option>
              {originCities.map((city) => (
                <option key={city.city_id} value={city.city_id}>
                  {city.city_name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="destinationProvince">Alamat Penerima</label>
            <select
              id="destinationProvince"
              value={destinationProvince}
              onChange={(e) => {
                setDestinationProvince(e.target.value);
                fetchCities(e.target.value, setDestinationCities);
              }}
            >
              <option value="">Pilih Provinsi Tujuan</option>
              {provinces.map((province) => (
                <option key={province.province_id} value={province.province_id}>
                  {province.province}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <select
              id="destinationCity"
              value={destinationCity}
              onChange={(e) => setDestinationCity(e.target.value)}
            >
              <option value="">Pilih Kota Tujuan</option>
              {destinationCities.map((city) => (
                <option key={city.city_id} value={city.city_id}>
                  {city.city_name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="weight">Berat (kg)</label>
            <input
              type="number"
              id="weight"
              placeholder="Berat (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <h3>Tampilkan Kurir</h3>
            <div className="couriers">
              {couriers.map((courier, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    name="courier"
                    value={courier}
                    checked={selectedCourier === courier}
                    onChange={() => handleCourierChange(courier)}
                  />
                  <label>{courier.toUpperCase()}</label>
                </div>
              ))}
            </div>
          </div>
          <button onClick={handleCheckOngkir}>Cek Ongkir!</button>
          {error && <p className="error-message">{error}</p>}
          <p>Ongkos Kirim: Rp {shippingCost.toLocaleString()}</p>
        </div>
      </div>

        <div className="summary">
          <h2>Ringkasan Belanja</h2>
          <p>Total Item: {totalSelectedItem}</p>
          <p>Total Harga Barang: Rp {totalSelectedPrice}</p>
          <p>Biaya Pengiriman: Rp {shippingCost}</p>
          <h3>Grand Total: Rp {grandTotal}</h3>
          <button className="checkout-button" onClick={handleCheckoutClick}>
          Checkout
        </button>
        </div>
      </div>
  );
};

export default Cart;
