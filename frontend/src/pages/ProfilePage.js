import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import toastr from 'toastr';
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
import FormPasswordProfil from "../Components/inputPassword";
import Footer from "../Components/Footer";
import "alertifyjs/build/css/alertify.css";
import alertify from "alertifyjs";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

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
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });
        console.log("User data:", response.data); // Debug: Print user data
        setProfileData(response.data);
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

  useEffect(() => {
    if (profileData) {
      if (profileData.data.rule === 1) {
        navigate(`/profilepageseller/${userId}`);
      }
    }
  }, [profileData, navigate]);

  const handleRoleChange = (event) => {
    setProfileData({
      ...profileData,
      data: {
        ...profileData.data,
        rule: parseInt(event.target.value, 10)
      }
    });
  };

  const handleInputChange = (field, value) => {
    setProfileData({
      ...profileData,
      data: {
        ...profileData.data,
        [field]: value
      }
    });
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    console.log('Profile data to be sent:', profileData);
    
    // Mengatur password jika tidak diubah
    const updatedProfileData = { ...profileData.data };
    if (!updatedProfileData.password) {
      delete updatedProfileData.password;
    }
  
    axios.put(`https://boengkosapps-039320043b7f.herokuapp.com/api/users/${userId}`, updatedProfileData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log('Response data:', response.data);
        setProfileData(response.data);
        setIsEditMode(false);
        toastr.success('Profile updated successfully');
      })
      .catch(err => {
        setError('Error updating profile');
        console.error('Error updating profile:', err);
        toastr.error('Failed to update profile');
      });
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
              <RadioButton
                role={profileData.data.rule}
                handleChange={handleRoleChange}
                disabled={!isEditMode}
              />
            )}
          </div>
        </div>
        <div className="container-kanan-profil">
          <h2 className="label-profil">Profil</h2>
          <div className="container-foto-profil">
            {profileData && (
              <img className="foto-profil" src={profileData.data.image || FotoProfil} alt="Foto Profil" />
            )}
          </div>
          <div className="container-nama-alamat">
            <h2 className="label-pemilik-akun">Info Pemilik Akun</h2>
            {profileData && (
              <>
                <FormNamaLengkap
                  name={profileData.data.name}
                  disabled={!isEditMode}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
                <FormTanggalLahir
                  dateOfBirth={new Date(profileData.data.birthDate).toISOString().split('T')[0]}
                  disabled={!isEditMode}
                  onChange={(e) => handleInputChange('birthDate', e.target.value)}
                />
                <Alamat
                  address={profileData.data.address}
                  disabled={!isEditMode}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                />

              </>
            )}
          </div>
          <div className="container-hp-email">
            <h2 className="label-hp-email">Info Pemilik Akun</h2>
            {profileData && (
              <>
                <FormNomorHp
                  phoneNumber={profileData.data.phoneNumber}
                  disabled={!isEditMode}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                />
                <FormEmailProfil
                  email={profileData.data.email}
                  disabled={!isEditMode}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
                <FormPasswordProfil
                  name={profileData.data.password}
                  disabled={!isEditMode}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                />
              </>
            )}
            <a href="/Homepage" className="keluar-akun" onClick={handleLogout}>
              Keluar Akun
            </a>
          </div>
          {isEditMode ? (
            <ButtonSimpan text={"Simpan"} onClick={handleSaveClick}>Simpan</ButtonSimpan>
          ) : (
            <ButtonSimpan text={"Ubah"} onClick={handleEditClick} />
          )}
        </div>
      </div>
      <Footer />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ProfilePage;
