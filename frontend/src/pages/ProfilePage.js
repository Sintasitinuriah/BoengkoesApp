import React from "react";
import { useNavigate } from "react-router-dom";
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
  return (
    <div className="profile-page">
      <NavbarSearching></NavbarSearching>
      <div className="container-besar-profil">
        <div className="note-pusat-dan-role">
          {/* pusat akun */}
          <div className="container-pusat-akun">
            <h3 className="label-pusat-akun">Pusat Akun</h3>
            <p className="catatan-pusat-akun">
              Semua perubahan yang dibuat akan mengubah data pengguna. Oleh
              karena itu, teliti kembali setiap perubahan yang Anda lakukan
            </p>
          </div>

          {/* role */}
          <div className="container-role">
            <h3 className="label-role">Role</h3>
            <RadioButton></RadioButton>
          </div>
        </div>

        {/* Profil */}
        <div className="container-kanan-profil">
          <h2 className="label-profil">Profil</h2>
          <div className="container-foto-profil">
            <img className="foto-profil" src={FotoProfil} alt="Foto Profil" />
          </div>

          <div className="container-nama-alamat">
            <h2 className="label-pemilik-akun">Info Pemilik Akun</h2>
            <FormNamaLengkap></FormNamaLengkap>
            <FormTanggalLahir></FormTanggalLahir>
            <Alamat></Alamat>
          </div>

          <div className="container-hp-email">
            <h2 className="label-hp-email">Info Pemilik Akun</h2>
            <FormNomorHp></FormNomorHp>
            <FormEmailProfil></FormEmailProfil>
            <a href="/Homepage" className="keluar-akun" onClick={handleLogout}>
              Keluar Akun
            </a>
          </div>

          <ButtonSimpan text={"Simpan"}></ButtonSimpan>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ProfilePage;
