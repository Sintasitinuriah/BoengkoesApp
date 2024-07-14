import React from "react";
import "../card-toko.css";
import lamondePalembang from "../images/lamonde-palembang.png";
import star from "../images/star.png";
import { useNavigate } from "react-router-dom";

const CardToko = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/storedetail");
  };

  return (
    <div className="container-card-toko">
      <div className="card-toko" onClick={handleCardClick}>
        <div className="container-gambar-toko">
          <img src={lamondePalembang} alt="Card-1" />
        </div>

        <div className="container-kata">
          <div className="container-nama-toko">
            <h3>Lamonde Palembang</h3>
          </div>

          <div className="container-alamat-toko">
            <p>Jl. KH Azhari, Tangga Takat, Seberang Ulu 2, Palembang</p>
          </div>

          <div className="container-rating">
            <img src={star} alt="bintang" />
            <p>4.5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardToko;
