import React, { useState, useEffect } from "react";
import axios from "axios";
import Logotesla from "../images/logotesla.jpg";
import CardToko from "./CardToko";

const Berandapage = () => {
  const [profile, setProfile] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      console.log("Token retrieved:", token); // Debug: Print token

      if (!token) {
        setError("Token not found");
        return;
      }

      try {
        const response = await axios.get(
          "https://boengkosapps-039320043b7f.herokuapp.com/api/getprofile",
          console.log("token :", token),
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        console.log("Profile data:", response.data); // Debug: Print profile data
        setProfile(response.data);
      } catch (error) {
        console.error("Error:", error);
        if (error.response) {
          // Server responded with a status other than 2xx
          if (error.response.status === 401) {
            setError("Unauthorized: Invalid token or session expired");
          } else {
            setError(
              `Error: ${error.response.status} - ${
                error.response.data.message || error.message
              }`
            );
          }
        } else if (error.request) {
          // No response received from the server
          setError("Error: No response received from server");
        } else {
          // Error occurred in setting up the request
          setError(`Error: ${error.message}`);
        }
      }
    };

    fetchProfile();
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
        </div>
      </div>
    </div>
  );
};

export default Berandapage;
