import React, { useState, useEffect } from "react";
import "../card-toko.css";
import lamondePalembang from "../images/lamonde-palembang.png"; // Gambar default jika tidak ada gambar toko
import star from "../images/star.png";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const CardToko = () => {
  const navigate = useNavigate();
  const [stores, setStores] = useState([]);
  const [error, setError] = useState(null);

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

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container-card-toko">
      {stores.map((store) => (
        <div className="card-toko" key={store._id} onClick={() => handleCardClick(store._id)}>
          <div className="container-gambar-toko">
            <img src={store.image || lamondePalembang} alt={store.name} />
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
      ))}
    </div>
  );
};

export default CardToko;
