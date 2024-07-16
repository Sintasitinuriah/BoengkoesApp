import React from "react";
import "../formemailprofil.css";

const FormEmailProfil = ({email}) => {
  return (
    <div className="container-profil-email">
      <p className="hint-email">Email</p>
      <div className="textfield-email">
        <input type="email" placeholder="Masukkan email" value={email} readOnly />
      </div>
    </div>
  );
};

export default FormEmailProfil;
