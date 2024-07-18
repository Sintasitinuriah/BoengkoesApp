import React from "react";
import { useNavigate } from "react-router-dom";
import "../button-small.css";

const Buttonsmall = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <button className="button-small" onClick={handleClick}>Mulai Belanja</button>
    </div>
  );
};

export default Buttonsmall;
