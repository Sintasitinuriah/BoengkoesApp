
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../buttonkunjungitoko.css';

const ButtonKunjungiToko = ({ storeId }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/storedetail/${storeId}`);
  };

  return (
    <button className="button-kunjungi-toko" onClick={handleButtonClick}>
      Kunjungi Toko
    </button>
  );
};

export default ButtonKunjungiToko;

