import React from "react";
import { useNavigate } from "react-router-dom";
import "../radiobutton.css";

const RadioButton = () => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    if (event.target.value === "pembeli") {
      navigate("/profilepage");
    } else if (event.target.value === "penjual") {
      navigate("/profilepageseller");
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

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../radiobutton.css";

// const RadioButton = () => {
//   const navigate = useNavigate();

//   const handleChange = (event) => {
//     if (event.target.value === "pembeli") {
//       navigate("/profilepage");
//     } else if (event.target.value === "penjual") {
//       navigate("/profilepageseller");
//     }
//   };

//   return (
//     <div className="radio-role">
//       <div className="radio-container">
//         <input
//           className="radio-pembeli"
//           type="radio"
//           name="radio"
//           value="pembeli"
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
//           onChange={handleChange}
//         />
//         <span className="checkmark">Penjual</span>
//       </div>
//     </div>
//   );
// };

// export default RadioButton;
