import React from "react";
import "../button-simpan.css";

<<<<<<< HEAD
const ButtonSimpan = ({ onClick }) => {
  return (
    <div className="button-simpan">
      <button type="button" onClick={onClick}>Simpan</button>
=======
const ButtonSimpan = ({ text }) => {
  return (
    <div className="button-simpan">
      <button type="submit">{text}</button>
>>>>>>> 717054a7ab50a2c506cbd06b376735998689517e
    </div>
  );
};

export default ButtonSimpan;
