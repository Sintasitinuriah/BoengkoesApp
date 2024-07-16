import React from "react";
import "../formnamalengkap.css";

const FormNamaLengkap = ({ name }) => {
  return (
    <div className="container-profil-nama">
      <p className="hint-nama-lengkap">Nama lengkap</p>
      <div className="textfield-nama-lengkap">
        <input type="text" placeholder="Masukkan nama lengkap" value={name} readOnly />
      </div>
    </div>
  );
};

export default FormNamaLengkap;
