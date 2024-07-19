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
      <div className="title"> 
        <h2 className="label-produk-saya">Produk Saya</h2>
      </div>
      <div className="container-besar-home-seller">
        <div className="container-kiri-home-seller">
          <ProductSeller></ProductSeller>
        </div>

        <ButtonTambahProduk></ButtonTambahProduk>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeSeller;
