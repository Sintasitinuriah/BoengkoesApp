// import React from "react";
// import "../navigasiseller.css";
// import { useNavigate } from "react-router-dom";

// const NavigasiSeller = () => {
//   const navigate = useNavigate();

//   const handleTokoSayaClick = () => {
//     navigate("/homeseller");
//   };

//   const handleHomeSellerClick = () => {
//     navigate("/services");
//   };

//   return (
//     <div className="container-navigasi-seller">
//       <div className="navigasi-item-seller">
//         <a href="/services" onClick={handleHomeSellerClick}>
//           Layanan
//         </a>
//       </div>
//       <div className="navigasi-item-seller">
//         <a href="/homeseller" onClick={handleTokoSayaClick}>
//           Toko Saya
//         </a>
//       </div>
//     </div>
//   );
// };

// export default NavigasiSeller;

import React, { useEffect, useState } from "react";
import "../navigasiseller.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

const NavigasiSeller = () => {
  const navigate = useNavigate();
  const [storeExists, setStoreExists] = useState(null);
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    const checkStoreAvailability = async () => {
      try {
        // Get user ID from localStorage (or any other method you use to store user information)
        const userId = localStorage.getItem("userId");

        // Call API with userId
        const response = await axios.get(`https://boengkosapps-039320043b7f.herokuapp.com/api/v1/store/${userId}`);
        setStoreExists(response.data.store);
      } catch (error) {
        console.error('Error checking store availability:', error);
        setStoreExists(false);
      }
    };

    checkStoreAvailability();
  }, []);

  const handleTokoSayaClick = (e) => {
    e.preventDefault();
    if (storeExists) {
      navigate(`/storesaya/${userId}`);
    } else {
      alertify.alert("Pemberitahuan", "Anda belum membuat toko. Silahkan lakukan pendaftaran terlebih dahulu.");
      navigate(`/profilepageseller/${userId}`);
    }
  };

  return (
    <div className="container-navigasi-seller">
      <div className="navigasi-item-seller">
        <a href="/services">
          Layanan
        </a>
      </div>
      <div className="navigasi-item-seller">
        <a href="/homeseller" onClick={handleTokoSayaClick}>
          Toko Saya
        </a>
      </div>
    </div>
  );
};

export default NavigasiSeller;

