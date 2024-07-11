import React from "react";
import "../formnamalengkap.css";

const FormNamaLengkap = () => {
  return (
    <div className="container-profil-nama">
      <p className="hint-nama-lengkap">Nama lengkap</p>
      <div className="textfield-nama-lengkap">
        <input type="text" placeholder="Masukkan nama lengkap" />
      </div>
    </div>
  );
};

export default FormNamaLengkap;
