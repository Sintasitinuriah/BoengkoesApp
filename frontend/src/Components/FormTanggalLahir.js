import React from "react";
import "../formtanggallahir.css";

const FormTanggalLahir = () => {
  return (
    <div className="container-profil-tanggal-lahir">
      <p className="hint-tanggal-lahir">Tanggal Lahir</p>
      <div className="textfield-tanggal-lahir">
        <input type="date" />
      </div>
    </div>
  );
};

export default FormTanggalLahir;
