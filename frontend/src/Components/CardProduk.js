import React from "react";
import "../card-produk.css";
import Chocomaltine from "../images/lamonde-chocomaltine.png";

const CardProduk = () => {
  return (
    <div className="container-card">
      <div className="card-produk">
        <div className="container-gambar">
          <img src={Chocomaltine} alt="Card-1" />
        </div>

        <div className="container-deskripsi">
          <h3>New Lamonde Chocomaltine</h3>
        </div>

        <div className="container-harga">
          <p>Rp </p>
          <p>85.000</p>
        </div>

        <div className="container-terjual">
          <p>9</p>
          <p>Terjual</p>
        </div>
      </div>
    </div>
  );
};

export default CardProduk;
