import React from "react";
import "../card-produk.css";
import Chocomaltine from "../images/lamonde-chocomaltine.png";

const CardProduk = () => {
  return (
    <div className="container-card-produk">
      <div className="card-produk">
        <div className="container-gambar-produk">
          <img src={Chocomaltine} alt="Card-1" />
        </div>

        <div className="container-deskripsi-produk">
          <div className="container-nama-produk">
            <h3>New Lamonde Chocomaltine</h3>
          </div>

          <div className="container-harga-produk">
            <p>Rp 85.000</p>
          </div>

          <div className="container-produk-terjual">
            <p>9</p>
            <p>Terjual</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduk;