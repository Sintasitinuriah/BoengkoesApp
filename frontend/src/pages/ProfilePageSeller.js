import React from "react";
import "../profilepageseller.css";
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
  return (
    <div className="profile-page-seller">
      <NavbarSeller></NavbarSeller>
      <div className="container-besar-profil-seller">
        <div className="note-pusat-dan-role-seller">
          {/* pusat akun */}
          <div className="container-pusat-akun-seller">
            <h3 className="label-pusat-akun">Pusat Akun</h3>
            <p className="catatan-pusat-akun">
              Semua perubahan yang dibuat akan mengubah data pengguna. Oleh
              karena itu, teliti kembali setiap perubahan yang Anda lakukan
            </p>
          </div>

          {/* role */}
          <div className="container-role-seller">
            <h3 className="label-role">Role</h3>
            <RadioButton></RadioButton>
          </div>
        </div>

        {/* Profil */}
        <div className="container-kanan-profil-seller">
          <h2 className="label-profil-seller">Profil Toko</h2>
          <div className="container-foto-profil-seller">
            <img className="foto-profil" src={FotoProfil} alt="Foto Profil" />
          </div>

          <div className="container-nama-alamat-seller">
            <h2 className="label-pemilik-akun">Info Penjual</h2>
            <FormNamaSeller></FormNamaSeller>
            <Alamat></Alamat>
            <h2 className="label-media-sosial">Media Sosial</h2>
            <MediaSosialSeller></MediaSosialSeller>
          </div>

          <div className="container-email-seller">
            <h2 className="label-email">Alamat Email Penjual</h2>
            <FormEmailProfil></FormEmailProfil>
            <a href="/" className="keluar-akun-penjual">
              Keluar Akun
            </a>
          </div>

          <ButtonSimpan></ButtonSimpan>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ProfilePageSeller;
