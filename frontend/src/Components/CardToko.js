import React from "react";
import "../card-toko.css";
import lamondePalembang from "../images/lamonde-palembang.png";
import star from "../images/star.png";

const CardToko = () => {
  return (
    <div className="container-card">
      <div className="card-toko">
        <div className="container-gambar">
          <img src={lamondePalembang} alt="Card-1" />
        </div>

        <div className="container-deskripsi">
          <h3>Lamonde Palembang</h3>
        </div>

        <div className="container-rating">
          <img src={star} alt="bintang" />
          <p>4.5</p>
        </div>
      </div>
    </div>
  );
};

export default CardToko;
