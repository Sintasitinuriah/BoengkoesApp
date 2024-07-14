import React from "react";
import "../navigasiseller.css";
import { useNavigate } from "react-router-dom";

const NavigasiSeller = () => {
  const navigate = useNavigate();

  const handleTokoSayaClick = () => {
    navigate("/homeseller");
  };

  const handleHomeSellerClick = () => {
    navigate("/beranda");
  };

  return (
    <div className="container-navigasi-seller">
      <div className="navigasi-item-seller">
        <a href="/beranda" onClick={handleHomeSellerClick}>
          Layanan
        </a>
      </div>
      <div className="navigasi-item-seller">
        <a href="/homeseller" onClick={handleTokoSayaClick}>
          Toko Saya
        </a>
      </div>
    </div>
  );
};

export default NavigasiSeller;
