import React from "react";
import "../alamat.css";

const Alamat = ({address, disabled}) => {
  return (
    <div className="container-profil-alamat">
      <p className="hint-alamat">Alamat</p>
      <div className="textarea-alamat">
        <textarea placeholder="Masukkan Alamat" value={address} disabled={disabled}> </textarea>
      </div>
    </div>
  );
};

export default Alamat;
