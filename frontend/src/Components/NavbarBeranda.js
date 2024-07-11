import React, { useState, useEffect } from "react";
import logo from "../images/logo.jpg"; 
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const NavbarBeranda = () => {
  const navigate = useNavigate();
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
      setLocationName(response.data.display_name);
    } catch (error) {
      console.error("Error fetching location name:", error);
      setError("Could not fetch location name.");
      setLocationName("Unknown location");
    }
  };

  const handleLocationClick = () => {
    // Handle location selection here, for now just log the location
    console.log("Location clicked");
  };

  const handleServicesClick = () => {
    navigate("/services"); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <button className="location-button" onClick={handleLocationClick}>
          {locationName}
        </button>
      </div>
      <div className="navbar-right">
        <button className="icon-button" onClick={() => navigate("/cart")}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
        <button className="icon-button" onClick={() => navigate("/profile")}>
          <FontAwesomeIcon icon={faUser} />
        </button>
        <div className="navbar-center">
          <input
            type="text"
            placeholder="Cari produk unik disekitarmu"
            className="search-bar"
          />
        </div>
        <button className="navbar-link" onClick={handleServicesClick}>
          Layanan
        </button>
      </div>
    </nav>
  );
};

export default NavbarBeranda;
