import React from "react";
import "../formemailprofil.css";

const FormEmailProfil = ({email, disabled, onChange}) => {
  return (
    <div className="container-profil-email">
      <p className="hint-email">Email</p>
      <div className="textfield-email">
        <input type="email" placeholder="Masukkan email" value={email} disabled={disabled} onChange={onChange} />
      </div>
    </div>
  );
};

export default FormEmailProfil;
