import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavbarSearching from "../Components/NavbarSearching";
import HeaderToko from "../Components/HeaderToko";
import Category from "../Components/Category";
import CardProduk from "../Components/CardProduk";
import Footer from "../Components/Footer";
import "../storedetail.css";

const StoreDetail = () => {
  const { storeId } = useParams(); // Ambil storeId dari parameter URL
  // const [store, setStore] = useState(null);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchStore = async () => {
  //     try {
  //       const response = await axios.get(`https://boengkosapps-039320043b7f.herokuapp.com/api/v1/store/${storeId}`);
  //       setStore(response.data.data);
  //     } catch (err) {
  //       setError('Failed to fetch store details');
  //     }
  //   };

  //   fetchStore();
  // }, [storeId]);

  // if (error) {
  //   return <p>{error}</p>;
  // }

  // if (!store) {
  //   return <p>Loading...</p>;
  // }

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

export default StoreDetail;
