import React from "react";
import NavbarSearching from "../Components/NavbarSearching";
import "../productdetail.css";
import Chocomaltineproduct from "../images/product-lamonde-chocomaltine.png";
import Variant from "../Components/variant";
import Quantity from "../Components/quantity";
import Buttonbeli from "../Components/Buttonbeli";
import ButtonKeranjang from "../Components/Buttonkeranjang";
import HeaderTokoChat from "../Components/HeaderTokoChat";
import Deskripsi from "../Components/Deskripsi";
import Footer from "../Components/Footer";
import CardProduk from "../Components/CardProduk";

const Productdetail = () => {
  return (
    <div className="product-detail-page">
      <NavbarSearching></NavbarSearching>
      <div className="section-1">
        <img src={Chocomaltineproduct} alt="Product" />

        <div className="container-detail">
          <h1>New Lamonde Chocomaltine</h1>

          <div className="container-harga">
            <p>Rp</p>
            <p>85.000</p>
          </div>

          <div className="container-stok">
            <p>Stok</p>
            <p>5</p>
          </div>

          <div className="container-jenis">
            <p>Varian :</p>
            <Variant></Variant>
          </div>

          <div className="container-kuantitas">
            <p>Kuantitas</p>
            <Quantity></Quantity>
          </div>

          <div className="container-button">
            <ButtonKeranjang></ButtonKeranjang>
            <Buttonbeli></Buttonbeli>
          </div>
        </div>
      </div>
      <div className="section-2">
        <HeaderTokoChat></HeaderTokoChat>
      </div>

      <div className="section-3">
        <Deskripsi></Deskripsi>
      </div>

      <div className="section-4">
        <div className="container-rekomendasi">
          <h1>Produk Rekomendasi Kami</h1>
        </div>
      </div>

      <div className="section-5">
        <CardProduk></CardProduk>
        <CardProduk></CardProduk>
        <CardProduk></CardProduk>
        <CardProduk></CardProduk>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Productdetail;
