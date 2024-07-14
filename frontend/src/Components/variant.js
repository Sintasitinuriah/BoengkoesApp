import React from "react";
import "../variant.css";

const Variant = () => {
  // state untuk melacak tombol yang aktif
  const [activeVariant, setActiveVariant] = React.useState(null);

  //   array varian untuk demonstrasi
  const variants = ["Chocomaltine"];

  return (
    <div className="variant-container">
      {variants.map((variant, index) => (
        <button
          key={index}
          className={`variant-button ${
            activeVariant === index ? "active" : ""
          }`}
          onClick={() => setActiveVariant(index)}
        >
          {variant}
        </button>
      ))}
    </div>
  );

  //   return <button>Chocomaltine</button>;
};

export default Variant;
