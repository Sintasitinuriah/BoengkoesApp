import React, { useState } from "react";
import "../formnamalengkap.css";

const FormNamaLengkap = ({ name }) => {
  const [nama, setNama] = useState("");
  console.log("Nama", nama);
  return (
    <div className="container-profil-nama">
      <p className="hint-nama-lengkap">Nama lengkap</p>
      <div className="textfield-nama-lengkap">
        <input type="text" value={name} placeholder="masukan nama anda" />
      </div>
    </div>
  );
};

export default FormNamaLengkap;
