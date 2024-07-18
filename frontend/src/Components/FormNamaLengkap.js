import React, { useState } from "react";
import "../formnamalengkap.css";

<<<<<<< HEAD
const FormNamaLengkap = ({ name }) => {
  const [nama, setNama] = useState("");
  console.log("Nama", nama);
=======
const FormNamaLengkap = ({ name, onChange}) => {
>>>>>>> 9510d821f584623c5444efe3155fdffd65cb075b
  return (
    <div className="container-profil-nama">
      <p className="hint-nama-lengkap">Nama lengkap</p>
      <div className="textfield-nama-lengkap">
<<<<<<< HEAD
        <input type="text" value={name} placeholder="masukan nama anda" />
=======
        <input type="text" placeholder="Masukkan nama lengkap" value={name} onChange={onChange}/>
>>>>>>> 9510d821f584623c5444efe3155fdffd65cb075b
      </div>
    </div>
  );
};

export default FormNamaLengkap;
