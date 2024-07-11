import React from "react";
import logo from "../images/logo.jpg"; 
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

const NavbarBeranda = () => {
  const navigate = useNavigate();

  const handleLocationClick = () => {
    // Handle location selection here
  };

  const handleServicesClick = () => {
    navigate("/services"); // Make sure the services page route exists
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <button className="location-button" onClick={handleLocationClick}>
          Palembang
        </button>
      </div>
      <div className="navbar-right">
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
