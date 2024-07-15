import React, {useState, useEffect} from "react";
import axios from "axios";
import Logotesla from "../images/logotesla.jpg";
import CardToko from "./CardToko";

const Berandapage = () => {
  const [profile, setProfile] = useState(""); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token'); // Pastikan ini menggunakan nama yang benar dari localStorage
    if (!token) {
      setError("Token not found");
      return;
    }

    axios.get('https://boengkosapps-039320043b7f.herokuapp.com/api/getprofile', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log(response.data); 
      setProfile(response.data);
    })
    .catch(error => {
      console.error("Error: ", error);
      if (error.response && error.response.status === 401) {
        setError('Unauthorized');
      } else {
        setError(error.message);
      }
    });
  }, []);

  return (
    <div className="beranda">
      <div className="logotesla">
        <img src={Logotesla} alt="Gambar" />
      </div>
      <div className="beranda-page">
        <div className="header-kayu">
          <p className="background-image">Toko Terdekat</p>
        </div>

        <div className="toko-terdekat">
          <CardToko />
          <CardToko />
          <CardToko />
        </div>

        <div className="cari-produk-lokasi">
          <h2>Mau Cari Produk di Daerah Lain?</h2>
          <p>Pilih lokasi dan cari produknya!</p>

          <div className="lokasi">
            <input
              type="text"
              placeholder="Masukkan nama lokasi"
              list="lokasi-list"
            />
            <datalist id="lokasi-list">
              <option value="Jakarta" />
              <option value="Surabaya" />
              <option value="Bandung" />
              <option value="Medan" />
              <option value="Makassar" />
              <option value="Palembang" />
            </datalist>
            <input
              type="text"
              placeholder="Cari produk unik dari seluruh Indonesia"
            />
          </div>
        </div>

        <div className="border-background">
          <CardToko />
          <CardToko />
          <CardToko />
        </div>
      </div>
    </div>
  );
};

export default Berandapage;
