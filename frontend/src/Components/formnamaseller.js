import React from "react";
import "../formnamaseller.css";

const FormNamaSeller = () => {
  return (
    <div className="container-profil-nama-seller">
      <p className="hint-nama-lengkap-seller">Nama Toko</p>
      <div className="textfield-nama-lengkap-seller">
        <input type="text" placeholder="Masukkan nama penjual" />
      </div>
    </div>
  );
};

export default FormNamaSeller;
