<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> 9510d821f584623c5444efe3155fdffd65cb075b
import "../card-toko.css";
import lamondePalembang from "../images/lamonde-palembang.png"; // Gambar default jika tidak ada gambar toko
import star from "../images/star.png";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import axios from "axios";

const CardToko = () => {
  const navigate = useNavigate();
  const [store, setStore] = useState([]);
=======
import axios from 'axios';

const CardToko = () => {
  const navigate = useNavigate();
  const [stores, setStores] = useState([]);
  const [error, setError] = useState(null);
>>>>>>> 9510d821f584623c5444efe3155fdffd65cb075b

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get('https://boengkosapps-039320043b7f.herokuapp.com/api/v1/store/');
        const store = response.data.data;
        console.log(store._id);
        setStores(response.data.data);
      } catch (err) {
        setError('Failed to fetch stores');
      }
    };

    fetchStores();
  }, []);

  const handleCardClick = (storeId) => {
    navigate(`/storedetail/${storeId}`);
    const store = localStorage.setItem('store', storeId);
    console.log(store);
  };

<<<<<<< HEAD
  const getDataStore = async () => {
    console.log("getDataStore");
    try {
      const response = await axios.get(
        "https://boengkosapps-039320043b7f.herokuapp.com/api/v1/store"
      );
      // console.log("response", response.data); // Periksa data di sini
      setStore(response.data.data); 
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error);
        alert(error?.message);
        return;
      }
      alert(error?.message);
    }
  };

  useEffect(() => {
    getDataStore();
  }, []);

  console.log("store", store);

  return (
    <div className="container-card-toko">
      {store.map((e) => (
        <div className="card-toko" onClick={handleCardClick}>
          <div className="container-gambar-toko">
            <img src={e?.owner?.image} alt="Card-1" />
          </div>

          <div className="container-kata">
            <div className="container-nama-toko">
              <h3>{e?.name}</h3>
            </div>

            <div className="container-alamat-toko">
              <p>
                {e?.city} {e?.district} {e?.province}
              </p>
            </div>

            <div className="container-rating">
              <img src={star} alt="bintang" />
              <p>4.5</p>
            </div>
          </div>
        </div>
      ))}

      {/* <div className="card-toko" onClick={handleCardClick}>
        <div className="container-gambar-toko">
          <img src={lamondePalembang} alt="Card-1" />
        </div>

        <div className="container-kata">
          <div className="container-nama-toko">
            <h3>Lamonde Palembang</h3>
=======
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container-card-toko">
      {stores.map((store) => (
        <div className="card-toko" key={store._id} onClick={() => handleCardClick(store._id)}>
          <div className="container-gambar-toko">
            <img src={store.image || lamondePalembang} alt={store.name} />
>>>>>>> 9510d821f584623c5444efe3155fdffd65cb075b
          </div>

          <div className="container-kata">
            <div className="container-nama-toko">
              <h3>{store.name}</h3>
            </div>

            <div className="container-alamat-toko">
              <p>{store.address}</p>
            </div>

            <div className="container-rating">
              <img src={star} alt="bintang" />
              <p>{store.rating || 'N/A'}</p>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div> */}
=======
      ))}
>>>>>>> 9510d821f584623c5444efe3155fdffd65cb075b
    </div>
  );
};

export default CardToko;
