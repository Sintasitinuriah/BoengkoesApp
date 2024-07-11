import React from "react";
import "../formemailprofil.css";

const FormEmailProfil = () => {
  return (
    <div className="container-profil-email">
      <p className="hint-email">Email</p>
      <div className="textfield-email">
        <input type="email" placeholder="Masukkan email" />
      </div>
    </div>
  );
};

export default FormEmailProfil;
