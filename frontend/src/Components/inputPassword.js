import React from "react";
import "../formemailprofil.css";

const FormPasswordProfil = ({password, disabled, onChange}) => {
  return (
    <div className="container-profil-email">
      <p className="hint-email">Konfirmasi Password</p>
      <div className="textfield-email">
        <input type="password" placeholder="Masukkan ulang password" value={password} disabled={disabled} onChange={onChange} />
      </div>
    </div>
  );
};

export default FormPasswordProfil;
