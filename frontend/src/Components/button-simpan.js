import React from "react";
import "../button-simpan.css";

const ButtonSimpan = ({ text, onClick }) => {
  return (
    <div className="button-simpan">
      <button type="button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
export default ButtonSimpan;
