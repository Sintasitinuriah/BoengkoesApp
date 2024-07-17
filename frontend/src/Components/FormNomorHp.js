import React from "react";
import "../formnomorhp.css";

const FormNomorHp = ({phoneNumber}) => {
  return (
    <div className="container-profil-nomor-hp">
      <p className="hint-nomor-hp">Nomor Hp</p>
      <div className="textfield-nomor-hp">
        <input type="text" placeholder="Masukkan nomor hp" value={phoneNumber}/>
      </div>
    </div>
  );
};

export default FormNomorHp;
