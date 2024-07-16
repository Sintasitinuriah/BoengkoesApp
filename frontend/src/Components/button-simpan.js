import React from "react";
import "../button-simpan.css";

const ButtonSimpan = ({ onClick }) => {
  return (
    <div className="button-simpan">
      <button type="button" onClick={onClick}>Simpan</button>
    </div>
  );
};

export default ButtonSimpan;
