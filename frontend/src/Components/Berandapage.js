import React from "react";
import Logotesla from "../images/logotesla.jpg";
import CardToko from "./CardToko";

const Berandapage = () => {
  return (
    <div className="beranda">
      <div className="logotesla">
        <img src={Logotesla} alt="Gambar" />
      </div>
      <div className="beranda-page">
        <div className="header-kayu">
          <p className="background-image">Toko Terdekat</p>
        </div>

        <div className="toko-terdekat">
          <CardToko />
          <CardToko />
          <CardToko />
        </div>

        <div className="cari-produk-lokasi">
          <h2>Mau Cari Produk di Daerah Lain?</h2>
          <p>Pilih lokasi dan cari produknya!</p>

          <div className="lokasi">
            <input
              type="text"
              placeholder="Masukkan nama lokasi"
              list="lokasi-list"
            />
            <datalist id="lokasi-list">
              <option value="Jakarta" />
              <option value="Surabaya" />
              <option value="Bandung" />
              <option value="Medan" />
              <option value="Makassar" />
              <option value="Palembang" />
            </datalist>
            <input
              type="text"
              placeholder="Cari produk unik dari seluruh Indonesia"
            />
          </div>
        </div>

        <div className="border-background">
          <CardToko />
          <CardToko />
          <CardToko />
        </div>
      </div>
    </div>
  );
};

export default Berandapage;
