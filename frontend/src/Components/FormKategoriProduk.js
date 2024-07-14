import React from "react";
import "../formkategoriproduk.css";

const FormKategoriProduk = () => {
  return (
    <div className="container-form-kategori-produk">
      <p className="label-form-kategori-produk">Kategori</p>
      <div className="select-form-kategori">
        <select>
          <option value="">Pilih Kategori</option>
          <option value="makanan-minuman">Makanan & minuman</option>
          <option value="kerajinan-tangan">Kerajinan tangan</option>
          <option value="pakaian">Pakaian</option>
          <option value="produk-kecantikan">Produk Kecantikan</option>
        </select>
      </div>
    </div>
  );
};

export default FormKategoriProduk;
