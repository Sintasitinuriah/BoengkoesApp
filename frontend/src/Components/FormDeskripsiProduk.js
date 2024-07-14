import React from "react";
import "../formdeskripsiproduk.css";

const FormDeskripsiProduk = () => {
  return (
    <div className="container-form-deskripsi-produk">
      <p className="hint-form-deskripsi-produk">Deskripsi</p>
      <div className="textarea-form-deskripsi-produk">
        <textarea placeholder="Masukkan deskripsi produk"> </textarea>
      </div>
    </div>
  );
};

export default FormDeskripsiProduk;
