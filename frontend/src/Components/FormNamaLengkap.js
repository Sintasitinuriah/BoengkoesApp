import React from 'react';
import "../formnamalengkap.css";

const FormNamaLengkap = ({ name, onChange}) => {
  return (
    <div className="container-profil-nama">
      <p className="hint-nama-lengkap">Nama lengkap</p>
      <div className="textfield-nama-lengkap">
        <input type="text" placeholder="Masukkan nama lengkap" value={name} onChange={onChange}/>
      </div>
    </div>
  );
};

export default FormNamaLengkap;
