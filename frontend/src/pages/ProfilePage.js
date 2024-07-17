import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import toastr from "toastr";
import "../profilepage.css";
import NavbarSearching from "../Components/NavbarSearching";
import ButtonSimpan from "../Components/button-simpan";
import RadioButton from "../Components/RadioButton";
import FotoProfil from "../images/foto-profil.png";
import FormNamaLengkap from "../Components/FormNamaLengkap";
import FormTanggalLahir from "../Components/FormTanggalLahir";
import Alamat from "../Components/Alamat";
import FormNomorHp from "../Components/FormNomorHp";
import FormEmailProfil from "../Components/FormEmailProfil";
import Footer from "../Components/Footer";
import "alertifyjs/build/css/alertify.css";
import alertify from "alertifyjs";

// import CustomConfirm from "../Components/alert/CustomConfirm";
// import AlertifyConfirm from "../Components/alert/CustomAlert";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);

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
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      console.log("Token retrieved:", token); // Debug: Print token

      if (!token) {
        setError("Token not found");
        return;
      }

      try {
        const response = await axios.get(`https://boengkosapps-039320043b7f.herokuapp.com/api/user/${userId}`, {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        });
        console.log("User data:", response.data); // Debug: Print user data
        setProfileData(response.data);
        console.log(profileData.data.name)
        console.log(profileData.data.rule)
      } catch (error) {
        console.error("Error:", error);
        if (error.response) {
          if (error.response.status === 401) {
            setError('Unauthorized: Invalid token or session expired');
          } else {
            setError(`Error: ${error.response.status} - ${error.response.data.message || error.message}`);
          }
        } else if (error.request) {
          setError('Error: No response received from server');
        } else {
          setError(`Error: ${error.message}`);
        }
      }
    };

    fetchProfile(); // Call the async function
  }, [userId]);

  const handleRoleChange = (event) => {
    setProfileData({ ...profileData, role: parseInt(event.target.value) });
  };

  return (
    <div className="profile-page">
      <NavbarSearching />
      <div className="container-besar-profil">
        <div className="note-pusat-dan-role">
          <div className="container-pusat-akun">
            <h3 className="label-pusat-akun">Pusat Akun</h3>
            <p className="catatan-pusat-akun">
              Semua perubahan yang dibuat akan mengubah data pengguna. Oleh
              karena itu, teliti kembali setiap perubahan yang Anda lakukan
            </p>
          </div>
          <div className="container-role">
            <h3 className="label-role">Role</h3>
            {profileData && (
              <RadioButton role={profileData.data.rule} handleChange={handleRoleChange} />
            )}
          </div>
        </div>
        <div className="container-kanan-profil">
          <h2 className="label-profil">Profil</h2>
          <div className="container-foto-profil">
            <img className="foto-profil" src={FotoProfil} alt="Foto Profil" />
          </div>
          <div className="container-nama-alamat">
            <h2 className="label-pemilik-akun">Info Pemilik Akun</h2>
            {profileData && (
              <>
                <FormNamaLengkap name={profileData.data.name} />
                <FormTanggalLahir dateOfBirth={profileData.dateOfBirth} />
                <Alamat address={profileData.address} />
              </>
            )}
          </div>
          <div className="container-hp-email">
            <h2 className="label-hp-email">Info Pemilik Akun</h2>
            {profileData && (
              <>
                <FormNomorHp phoneNumber={profileData.phoneNumber} />
                <FormEmailProfil email={profileData.data.email} />
              </>
            )}
            <a href="/Homepage" className="keluar-akun" onClick={handleLogout}>
              Keluar Akun
            </a>
          </div>
          <ButtonSimpan text={"Simpan"} />
        </div>
      </div>
      <Footer />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ProfilePage;
