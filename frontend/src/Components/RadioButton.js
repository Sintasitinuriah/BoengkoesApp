// RadioButton.js
import React from 'react';
import '../radiobutton.css'; // Sesuaikan path ini

const RadioButton = ({ role, handleChange }) => {
  return (
    <div className="radio-role">
      <div className="radio-container">
        <input
          className="radio-pembeli"
          type="radio"
          name="role"
          value="0"
          checked={role === 0}
          onChange={handleChange}
        />
        <span className="checkmark">Pembeli</span>
      </div>
      <div className="radio-container">
        <input
          className="radio-penjual"
          type="radio"
          name="role"
          value="1"
          checked={role === 1}
          onChange={handleChange}
        />
        <span className="checkmark">Penjual</span>
      </div>
    </div>
  );
};

export default RadioButton;
