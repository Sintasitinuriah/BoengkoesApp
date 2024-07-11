import React from "react";
import "../homeseller.css";
import NavbarSeller from "../Components/NavbarSeller";
import ProductSeller from "../Components/ProductSeller";
import ButtonTambahProduk from "../Components/ButtonTambahProduk";
import Footer from "../Components/Footer";

const HomeSeller = () => {
  return (
    <div className="home-seller-page">
      <NavbarSeller></NavbarSeller>
      <div className="container-besar-home-seller">
        <div className="container-kiri-home-seller">
          <h2 className="label-produk-saya">Produk Saya</h2>
          <ProductSeller></ProductSeller>
        </div>

        <ButtonTambahProduk></ButtonTambahProduk>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeSeller;
