import React from "react";
import "../buttonkunjungitoko.css";
import { useNavigate } from "react-router-dom";

const ButtonKunjungiToko = () => {
  const navigate = useNavigate();

  const handleKunjungiTokoClick = () => {
    navigate("/storedetail");
  };

  return (
    <button className="button-kunjungi-toko" onClick={handleKunjungiTokoClick}>
      Kunjungi Toko
    </button>
  );
};

export default ButtonKunjungiToko;
