import React from "react";
import "../button-simpan.css";

<<<<<<< HEAD
const ButtonSimpan = ({ text, onClick }) => {
  return (
    <div className="button-simpan">
      <button type="button" onClick={onClick}>
        {text}
      </button>
=======
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
>>>>>>> 87c357f6885d5e9acda60222176fa7945fd34e01
    </div>
  );
};

export default ButtonSimpan;
