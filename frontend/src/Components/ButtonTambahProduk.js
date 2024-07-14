import React from "react";
import "../buttontambahproduk.css";
import { useNavigate } from "react-router-dom";

const ButtonTambahProduk = () => {
  const navigate = useNavigate();

  const handleTambahProdukBaruClick = () => {
    navigate("/addproduct");
  };

  return (
    <div className="container-button-tambah-produk">
      <div className="button-tambah-produk">
        <button onClick={handleTambahProdukBaruClick}>
          Tambah Produk Baru
        </button>
      </div>
    </div>
  );
};

export default ButtonTambahProduk;
