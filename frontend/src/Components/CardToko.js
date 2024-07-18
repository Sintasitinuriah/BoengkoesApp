import React, { useEffect, useState } from "react";
import "../card-toko.css";
import lamondePalembang from "../images/lamonde-palembang.png";
import star from "../images/star.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CardToko = () => {
  const navigate = useNavigate();
  const [store, setStore] = useState([]);

  const handleCardClick = () => {
    navigate("/storedetail");
  };

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
          </div>

          <div className="container-alamat-toko">
            <p>Jl. KH Azhari, Tangga Takat, Seberang Ulu 2, Palembang</p>
          </div>

          <div className="container-rating">
            <img src={star} alt="bintang" />
            <p>4.5</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CardToko;
