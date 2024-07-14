import React from "react";
import "../formhargaproduk.css";

const FormHargaProduk = () => {
  return (
    <div className="container-form-harga-produk">
      <p className="label-harga-produk">Harga</p>
      <div className="form-harga-produk">
        <input type="text" placeholder="Masukkan harga produk" />
      </div>
    </div>
  );
};

export default FormHargaProduk;
