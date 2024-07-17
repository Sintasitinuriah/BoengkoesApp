import React from "react";
import "../Navigasi.css";
import { useNavigate } from "react-router-dom";

const Navigasi = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/beranda");
  };

  return (
    <div className="container-navigasi">
      <div className="navigasi-item">
        <a href="/beranda" onClick={handleHomeClick}>
          Home
        </a>
      </div>
      <div className="navigasi-item">
        <a href="/services">Layanan</a>
      </div>
    </div>
  );
};

export default Navigasi;
