import React from "react";
import "../Profile.css";
import Logo from "../images/logo.jpg";

const Profile = () => {
  return (
    <div className="contoh-profil">
      <div className="profile-header">
        <img src={Logo} alt="Profile" className="profile-image" />
        <h1>Nama Pengguna</h1>
        <p>Email: nama@domain.com</p>
      </div>
      <div className="profile-details">
        <h2>Informasi Pribadi</h2>
        <p>Nama: Nama Pengguna</p>
        <p>Email: nama@domain.com</p>
        <p>Nomor Telepon: 081234567890</p>
        <p>Alamat: Jalan Contoh No. 123, Kota, Negara</p>
      </div>
    </div>
  );
};

export default Profile;
