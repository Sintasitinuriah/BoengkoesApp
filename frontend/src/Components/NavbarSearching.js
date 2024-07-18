import React, { useState, useEffect } from "react";
import "../navbarsearching.css";
import Logo from "../images/logo-chef.png";
import Bag from "../images/shopping-bag.png";
import Profile from "../images/profile.png";
import Searchbar from "./Searchbar";
import Navigasi from "./Navigasi";
import { useCart } from '../contexts/cartContext';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NavbarSearching = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const [locationName, setLocationName] = useState("Loading...");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          await fetchLocationName(lat, lon);
        },
        (err) => {
          setError(err.message);
          setLocationName("Location not found");
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setLocationName("Geolocation not supported");
    }
  }, []);

  const fetchLocationName = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
      );

      const address = response.data.address;
      const subdistrict = address.suburb || address.village || address.neighbourhood || "Unknown subdistrict";
      const city = address.city || address.town || address.county || "Unknown city";
      
      setLocationName(`${subdistrict}, ${city}`);
    } catch (error) {
      console.error("Error fetching location name:", error);
      setError("Could not fetch location name.");
      setLocationName("Unknown location");
    }
  };

  const handleProfileClick = () => {
    const userId = localStorage.getItem('userId');  // Mengambil userId dari localStorage
    if (userId) {
      navigate(`/profilepage/${userId}`);
    } else {
      // Penanganan jika userId tidak ditemukan
      console.error('User ID not found');
    }
  };

  const handleLocationClick = () => {
    // Handle location selection here, for now just log the location
    console.log("Location clicked");
  };

  const handleCartClick = () => {
    const userId = localStorage.getItem('userId');
    navigate(`/cart/${userId}`);
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);


  return (
    <div className="container-navbar-searching">
      <div className="navbar-left">
        <img src={Logo} alt="Logo" className="navbar-logo" />
        <button className="location-button" onClick={handleLocationClick}>
        {locationName}
        </button>
      </div>

      <div className="container-searchbar">
      <div className="cart-icon-container">
          <img src={Bag} alt="bag" onClick={handleCartClick} />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </div>
        <img src={Profile} alt="profile" onClick={handleProfileClick} />
        <Searchbar></Searchbar>
        <Navigasi></Navigasi>
      </div>
      <div className="container-icon"></div>
    </div>
  );
};

export default NavbarSearching;
