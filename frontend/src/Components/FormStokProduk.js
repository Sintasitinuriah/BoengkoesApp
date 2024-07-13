import React from "react";
import "../formstokproduk.css";

const FormStokProduk = () => {
  return (
    <div className="container-form-stok-produk">
      <p className="label-stok-produk">Stok</p>
      <div className="form-stok-produk">
        <input type="text" placeholder="Masukkan stok produk" />
      </div>
    </div>
  );
};

export default FormStokProduk;
