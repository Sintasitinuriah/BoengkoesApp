import React from "react";
import "../buttonkembali.css";
import { useNavigate } from "react-router-dom";

const ButtonKembali = () => {
  const navigate = useNavigate();

  const handleKembaliClick = () => {
    navigate("/homeseller");
  };

  return (
    <div className="button-kembali">
      <button type="button" onClick={handleKembaliClick}>
        Kembali
      </button>
    </div>
  );
};
export default ButtonKembali;
