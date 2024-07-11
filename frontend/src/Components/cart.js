import React, { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "New Lamanda Chocoalmondine",
      variant: "Chocoalmondine",
      price: 85000,
      quantity: 2,
      from: "Lamanda Palembang",
    },
    {
      id: 2,
      name: "New Lamanda Chocoalmondine",
      variant: "Chocoalmondine",
      price: 85000,
      quantity: 2,
      from: "Cikini Deli",
    },
  ]);

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

  const couriers = ["jne", "pos", "tiki"]; // RajaOngkir supports these couriers

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/province', {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'key': 'ab06c563e2c72379f0ec46ea5b01d36d', // Replace with your actual API key
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
          'key': 'ab06c563e2c72379f0ec46ea5b01d36d', // Replace with your actual API key
        },
      });
      setterFunc(response.data.rajaongkir.results);
    } catch (error) {
      console.error(`Error fetching cities from RajaOngkir API for province ${provinceId}:`, error.message);
      setError("Failed to fetch cities");
    }
  };

  const handleQuantityChange = (id, change) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + change } : item
      )
    );
  };

  const handleRemove = (id) => {
    setItems(items.filter((item) => item.id !== id));
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
            'key': 'ab06c563e2c72379f0ec46ea5b01d36d', // Replace with your actual API key
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

  const totalItem = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const grandTotal = totalPrice + shippingCost;

  return (
    <div className="app">
      <div className="cart">
        <h2>Keranjang</h2>
        <div className="cart-items">
          {items.map((item) => (
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
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}>
                  +
                </button>
                <button onClick={() => handleRemove(item.id)}>🗑️</button>
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
            {/* <label htmlFor="originCity">Kota Asal</label> */}
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
            {/* <label htmlFor="destinationCity">Kota Tujuan</label> */}
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
