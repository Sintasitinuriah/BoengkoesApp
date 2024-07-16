import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toastr from "toastr";
import "../profilepageseller.css";
import "alertifyjs/build/css/alertify.css";
import alertify from "alertifyjs";
import NavbarSeller from "../Components/NavbarSeller";
import ButtonSimpan from "../Components/button-simpan";
import RadioButton from "../Components/RadioButton";
import FotoProfil from "../images/krinsa.png";
import Alamat from "../Components/Alamat";
import FormEmailProfil from "../Components/FormEmailProfil";
import Footer from "../Components/Footer";
import FormNamaSeller from "../Components/formnamaseller";
import MediaSosialSeller from "../Components/MediaSosialSeller";

const ProfilePageSeller = () => {
  const [sellerInfo, setSellerInfo] = useState({
    nama: "",
    alamat: "",
    mediaSosial: "",
    email: "",
    province: "",
    district: "",
    city: "",
  });
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const navigate = useNavigate();
  const handleLogout = (event) => {
    event.preventDefault(); // Mencegah perilaku default <a> tag

    alertify.confirm(
      "Konfirmasi Logout",
      "Apakah Anda yakin ingin keluar?",
      () => {
        localStorage.removeItem("authToken");
        toastr.success("Logout berhasil");
        navigate("/Homepage"); // Redirect ke halaman login
      },
      () => {
        toastr.info("Logout dibatalkan");
      }
    );
  };
  useEffect(() => {
    fetchProvinces();
  }, []);

  useEffect(() => {
    if (selectedProvince) {
      fetchCities(selectedProvince);
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedCity) {
      fetchDistricts(selectedCity);
    }
  }, [selectedCity]);

  const fetchProvinces = async () => {
    try {
      const response = await axios.get(
        "https://alamat.thecloudalert.com/api/provinsi/get/"
      );
      console.log("Provinces data:", response.data);

      if (response.data && Array.isArray(response.data.result)) {
        setProvinces(response.data.result);
      } else {
        console.error("Unexpected data format for provinces:", response.data);
      }
    } catch (error) {
      console.error("Error fetching provinces:", error);
    }
  };

  const fetchCities = async (provinceId) => {
    try {
      const response = await axios.get(
        `https://alamat.thecloudalert.com/api/kabkota/get/kabkota/get/?d_provinsi_id=${provinceId}`
      );
      console.log("Cities data:", response.data);

      if (response.data && Array.isArray(response.data.result)) {
        setCities(response.data.result);
      } else {
        console.error("Unexpected data format for cities:", response.data);
      }
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const fetchDistricts = async (cityId) => {
    try {
      const response = await axios.get(
        `https://alamat.thecloudalert.com/api/kecamatan/get/?d_kabkota_id=${cityId}`
      );
      console.log("Districts data:", response.data);

      if (response.data && Array.isArray(response.data.result)) {
        setDistricts(response.data.result);
      } else {
        console.error("Unexpected data format for districts:", response.data);
      }
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  };

  const handleSave = async () => {
    console.log("Button simpan diklik");
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      const response = await axios.post(
        "https://boengkosapps-039320043b7f.herokuapp.com/api/store",
        {
          id: userId,
          nama: sellerInfo.nama,
          alamat: sellerInfo.alamat,
          mediaSosial: sellerInfo.mediaSosial,
          email: sellerInfo.email,
          province: selectedProvince,
          city: selectedCity,
          district: selectedDistrict,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Store saved successfully:", response.data);
    } catch (error) {
      console.error("Error saving store:", error);
    }
  };

  return (
    <div className="profile-page-seller">
      <NavbarSeller />
      <div className="container-besar-profil-seller">
        <div className="note-pusat-dan-role-seller">
          <div className="container-pusat-akun-seller">
            <h3 className="label-pusat-akun">Pusat Akun</h3>
            <p className="catatan-pusat-akun">
              Semua perubahan yang dibuat akan mengubah data pengguna. Oleh
              karena itu, teliti kembali setiap perubahan yang Anda lakukan
            </p>
          </div>

          <div className="container-role-seller">
            <h3 className="label-role">Role</h3>
            <RadioButton />
          </div>
        </div>

        <div className="container-kanan-profil-seller">
          <h2 className="label-profil-seller">Profil Toko</h2>
          <div className="container-foto-profil-seller">
            <img className="foto-profil" src={FotoProfil} alt="Foto Profil" />
          </div>

          <div className="container-nama-alamat-seller">
            <h2 className="label-pemilik-akun">Info Penjual</h2>
            <FormNamaSeller
              sellerInfo={sellerInfo}
              setSellerInfo={setSellerInfo}
            />
            <Alamat sellerInfo={sellerInfo} setSellerInfo={setSellerInfo} />

            <div className="form-group">
              <label htmlFor="province">Provinsi</label>
              <select
                id="province"
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
              >
                <option value="">Pilih Provinsi</option>
                {provinces.map((province) => (
                  <option key={province.id} value={province.id}>
                    {province.text}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="city">Kota/Kabupaten</label>
              <select
                id="city"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                disabled={!selectedProvince}
              >
                <option value="">Pilih Kota/Kabupaten</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.text}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="district">Kecamatan</label>
              <select
                id="district"
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                disabled={!selectedCity}
              >
                <option value="">Pilih Kecamatan</option>
                {districts.map((district) => (
                  <option key={district.id} value={district.id}>
                    {district.text}
                  </option>
                ))}
              </select>
            </div>

            <h2 className="label-media-sosial">Media Sosial</h2>
            <MediaSosialSeller
              sellerInfo={sellerInfo}
              setSellerInfo={setSellerInfo}
            />
          </div>

          <div className="container-email-seller">
            <h2 className="label-email">Alamat Email Penjual</h2>
            <FormEmailProfil
              sellerInfo={sellerInfo}
              setSellerInfo={setSellerInfo}
            />
            <a href="/Homepage" className="keluar-akun" onClick={handleLogout}>
              Keluar Akun
            </a>
          </div>

          <ButtonSimpan onClick={handleSave}></ButtonSimpan>
<<<<<<< HEAD
          {<p className="error"></p>}
=======
>>>>>>> 6758b3eac88309d1b7f4c5e6acb62d216321b2c7
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePageSeller;
