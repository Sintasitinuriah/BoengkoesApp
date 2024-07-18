import React from "react";
import "../alamat.css";

const Alamat = ({address, disabled, onChange}) => {
  return (
    <div className="container-profil-alamat">
      <p className="hint-alamat">Alamat</p>
      <div className="textarea-alamat">
        <textarea placeholder="Masukkan Alamat" value={address} disabled={disabled} onChange={onChange}> </textarea>
      </div>
    </div>
  );
};

export default Alamat;
