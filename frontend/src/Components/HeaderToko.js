import React from "react";
import Star from "../images/star.png";
import FotoProfil from "../images/pp-lamonde.png";
import Facebook from "../images/facebook-colored.png";
import Instagram from "../images/instagram-colored.png";
import Whatsapp from "../images/whatsapp-colored.png";
import "../headertoko.css";

const HeaderToko = () => {
  return (
    <div className="section-1">
      <div className="container-header">
        {/* Kiri */}
        <div className="kiri">
          <div className="container-profil">
            <img src={FotoProfil} alt="Profile" />
          </div>

          <div className="container-title">
            <h2 className="nama-toko">Lamonde Palembang</h2>
            <p>Jl. KH Azhari, Tangga Takat, Seberang Ulu 2, Palembang</p>
          </div>
        </div>
        {/* End of Kiri */}

        {/* title-produk */}
        <div className="container-title-produk">
          <h3>Produk</h3>
          <p>5</p>
        </div>
        {/* end of title-produk */}

        {/* title-rating */}
        <div className="container-title-rating">
          <h3>Rating</h3>
          <div className="star">
            <img src={Star} alt="Star" />
            <p>4.5</p>
          </div>
        </div>
        {/* end of title-rating */}

        {/* social */}
        <div className="container-social">
          <h3>Sosial Media</h3>
          <div className="container-logo-sosmed">
            <img src={Facebook} alt="Facebook" />
            <img src={Instagram} alt="Instagram" />
            <img src={Whatsapp} alt="Whatsapp" />
          </div>
        </div>
        {/* end of social */}
      </div>
    </div>
  );
};

export default HeaderToko;
