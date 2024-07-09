import React, { useState } from "react";
import "../quantity.css";

const Quantity = () => {
  const [quantity, setQuantity] = useState(1); // State untuk melacak nilai kuantitas

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1); // Tambah kuantitas
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      // Cegah kuantitas menjadi kurang dari 1
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="quantity-container">
      <button className="quantity-button" onClick={handleDecrement}>
        -
      </button>
      <input
        type="text"
        value={quantity}
        readOnly
        className="quantity-display"
      />
      <button className="quantity-button" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Quantity;
