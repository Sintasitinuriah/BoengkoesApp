import React from "react";
import { useParams } from "react-router-dom";
import NavbarSearching from "../Components/NavbarSearching";
import HeaderToko from "../Components/HeaderToko";
import Category from "../Components/Category";
import CardProduk from "../Components/CardProduk";
import Footer from "../Components/Footer";
import "../tokosaya.css";

const StoreSaya = () => {
  const { storeId } = useParams();

  if (!storeId) {
    return (
      <div className="store-detail-page">
        <NavbarSearching />
        <div className="store-not-found">
            <h1>Toko belum tersedia</h1>
            <p>Maaf, toko yang Anda cari belum dibuat atau tidak tersedia.</p>
          </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="store-detail-page">
      <NavbarSearching />
      <HeaderToko storeId={storeId} />
      <Category />
      <CardProduk storeId={storeId} />

      <div className="section-4">
        <div className="container-populer">
          <h1>Produk Populer</h1>
        </div>
      </div>
      <CardProduk storeId={storeId} />

      <div className="section-6">
        <div className="container-terbaru">
          <h1>Produk Terbaru</h1>
        </div>
      </div>
      <CardProduk storeId={storeId} />

      <Footer />
    </div>
  );
};

export default StoreSaya;
