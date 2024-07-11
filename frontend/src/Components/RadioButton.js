// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "../radiobutton.css";
// import Productdetail from "../pages/Productdetail";

// const RadioButton = () => {
//   const navigate = useNavigate();
//   const [selectedOption, setSelectedOption] = useState("pembeli");

//   useEffect(() => {
//     if (selectedOption) {
//       navigate("/", { state: { selectedOption } });
//     }
//   }, [selectedOption, navigate]);

//   const handleChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <div className="radio-role">
//       <div className="radio-container">
//         <input
//           className="radio-pembeli"
//           type="radio"
//           name="radio"
//           value="pembeli"
//           checked={selectedOption === "pembeli"}
//           onChange={handleChange}
//         />
//         <span className="checkmark">Pembeli</span>
//       </div>
//       <div className="radio-container">
//         <input
//           className="radio-penjual"
//           type="radio"
//           name="radio"
//           value="penjual"
//           checked={selectedOption === "penjual"}
//           onChange={handleChange}
//         />
//         <span className="checkmark">Penjual</span>
//       </div>
//     </div>
//   );
// };

// export default RadioButton;

import React from "react";
import { useNavigate } from "react-router-dom";
import "../radiobutton.css";
import Productdetail from "../pages/Productdetail";

const RadioButton = () => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    if (event.target.value === "pembeli") {
      navigate("/productdetail");
    } else if (event.target.value === "penjual") {
      navigate("/productdetail");
    }
  };

  return (
    <div className="radio-role">
      <div className="radio-container">
        <input
          className="radio-pembeli"
          type="radio"
          name="radio"
          value="pembeli"
          onChange={handleChange}
        />
        <span className="checkmark">Pembeli</span>
      </div>
      <div className="radio-container">
        <input
          className="radio-penjual"
          type="radio"
          name="radio"
          value="penjual"
          onChange={handleChange}
        />
        <span className="checkmark">Penjual</span>
      </div>
    </div>
  );
};

export default RadioButton;
