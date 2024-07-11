import React from "react";
import "../mediasosialseller.css";

const MediaSosialSeller = () => {
  return (
    <div className="container-profil-nomor-hp-seller">
      <p className="hint-seller">Whatsapp</p>
      <div className="textfield-nomor-hp-seller">
        <input type="text" placeholder="Masukkan nomor whatsapp" />
      </div>

      <p className="hint-seller">Facebook</p>
      <div className="textfield-nomor-hp">
        <input type="text" placeholder="Masukkan nama facebook" />
      </div>

      <p className="hint-seller">Instagram</p>
      <div className="textfield-nomor-hp">
        <input type="text" placeholder="Masukkan nama instagram" />
      </div>
    </div>
  );
};

export default MediaSosialSeller;
