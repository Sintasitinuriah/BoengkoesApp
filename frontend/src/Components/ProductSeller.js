import React from "react";
import "../productseller.css";
import TasMoi from "../images/tas-moi.png";

const ProductSeller = () => {
  return (
    <div className="container-produk-seller">
      <img src={TasMoi} alt=" Foto-produk" />
      <h3 className="label-nama-produk">
        Tas Moi Rumbai Tenun Tumanggal Etnik
      </h3>

      {/* Harga Produk */}
      <div className="container-harga-produk-penjual">
        <p className="label-harga-produk">Harga Produk</p>
        <div className="textfield-harga-produk">
          <input type="text" placeholder="Masukkan harga produk" />
        </div>
      </div>

      {/* Stok Produk */}
      <div className="container-stok-produk-penjual">
        <p className="label-stok-produk">Stok</p>
        <div className="textfield-stok-produk">
          <input type="text" placeholder="Masukkan jumlah stok" />
        </div>
      </div>

      {/*  Terjual */}
      <div className="container-terjual">
        <p className="label-terjual">Terjual</p>
        <div className="textfield-terjual">
          <input type="text" placeholder="3" />
        </div>
      </div>

      {/* Kategori */}
      <div className="container-kategori-produk">
        <p className="label-kategori-produk">Kategori</p>
        <div className="select-kategori">
          <select>
            <option value="">Pilih Kategori</option>
            <option value="makanan-minuman">Makanan & minuman</option>
            <option value="kerajinan-tangan">Kerajinan tangan</option>
            <option value="pakaian">Pakaian</option>
            <option value="produk-kecantikan">Produk Kecantikan</option>
          </select>
        </div>
      </div>

      <div className="wrapper-deskripsi">
        <p className="label-deskripsi">Deskripsi</p>
        <textarea></textarea>
      </div>

      <div className="seller-hapus-produk">
        <a href="/">Hapus Produk</a>
      </div>
    </div>
  );
};

export default ProductSeller;
