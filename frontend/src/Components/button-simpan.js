import React from "react";
import "../button-simpan.css";

const ButtonSimpan = ({ text }) => {
  return (
    <div className="button-simpan">
      <button type="submit">{text}</button>
    </div>
  );
};
export default ButtonSimpan;
