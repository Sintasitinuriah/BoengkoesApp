import React from "react";
import Star from "../images/star.png";
import FotoProfil from "../images/pp-lamonde.png";
import Facebook from "../images/facebook-colored.png";
import Instagram from "../images/instagram-colored.png";
import Whatsapp from "../images/whatsapp-colored.png";
import "../headertoko.css";

const HeaderToko = () => {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/palembanglamonde/?hl=en", "_blank");
  };

  const handleFacebookClick = () => {
    window.open("https://web.facebook.com/lamondepalembang/?locale=id_ID&_rdc=1&_rdr", "_blank");
  };

  const handleWhatsappClick = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=6282133395550&text=%20Mau%20Order%20Lamonde%20Dong%20Min",
      "_blank"
    );
  };

  return (
    <div className="section-1-header-toko">
      <div className="container-header-toko">
        {/* Kiri */}
        <div className="container-kiri">
          <div className="container-pp-toko">
            <img src={FotoProfil} alt="Profile" />
          </div>

          <div className="container-keterangan-toko">
            <h2 className="sebutan-nama-toko">Lamonde Palembang</h2>
            <p>Jl. KH Azhari, Tangga Takat, Seberang Ulu 2, Palembang</p>
          </div>
        </div>
        {/* End of Kiri */}

        {/* title-produk */}
        <div className="container-jumlah-produk">
          <h3>Produk</h3>
          <p>5</p>
        </div>
        {/* end of title-produk */}

        {/* title-rating */}
        <div className="container-jumlah-rating">
          <h3>Rating</h3>
          <div className="ikon-bintang">
            <img src={Star} alt="Star" />
            <p>4.5</p>
          </div>
        </div>
        {/* end of title-rating */}

        {/* social */}
        <div className="container-sosmed">
          <h3>Sosial Media</h3>
          <div className="container-logo-sosmed">
            <img src={Facebook} alt="Facebook" onClick={handleFacebookClick}/>
            <img
              src={Instagram}
              alt="Instagram"
              onClick={handleInstagramClick}
            />
            <img src={Whatsapp} alt="Whatsapp" onClick={handleWhatsappClick} />
          </div>
        </div>
        {/* end of social */}
      </div>
    </div>
  );
};

export default HeaderToko;
