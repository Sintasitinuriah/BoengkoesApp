import React from "react";
import "../formnamaproduk.css";

const FormNamaProduk = () => {
  return (
    <div className="container-form-nama-produk">
      <p className="label-nama-produk">Nama produk</p>
      <div className="form-nama-produk">
        <input type="text" placeholder="Masukkan nama produk" />
      </div>
    </div>
  );
};

export default FormNamaProduk;
