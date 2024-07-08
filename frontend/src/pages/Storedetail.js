import React from "react";
import NavbarSearching from "../Components/NavbarSearching";
import HeaderToko from "../Components/HeaderToko";
import Category from "../Components/Category";
import CardToko from "../Components/CardToko";
import Footer from "../Components/Footer";
import "../storedetail.css";

const StoreDetail = () => {
  return (
    <div className="store-detail-page">
      <NavbarSearching></NavbarSearching>
      <HeaderToko></HeaderToko>
      <Category></Category>
      <CardToko></CardToko>

      <div className="section-4">
        <div className="container-populer">
          <h1>Produk Populer</h1>
        </div>
      </div>
      <CardToko></CardToko>

      <div className="section-6">
        <div className="container-terbaru">
          <h1>Produk Terbaru</h1>
        </div>
      </div>
      <CardToko></CardToko>

      <Footer></Footer>
    </div>
  );
};

export default StoreDetail;
