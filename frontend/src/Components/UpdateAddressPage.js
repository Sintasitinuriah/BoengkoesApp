// UpdateAddressPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddress } from "./AddressContext";
import "../UpdateAddressPage.css";

const UpdateAddressPage = () => {
  const [newAddress, setNewAddress] = useState("");
  const navigate = useNavigate();
  const { address, updateAddress } = useAddress(); // Destructure address and updateAddress

  const handleAddressChange = (e) => {
    setNewAddress(e.target.value);
  };

  const handleSaveAddress = () => {
    updateAddress(newAddress); // Call updateAddress from context
    navigate("/ShippingPage");
  };

  return (
    <div className="update-address-container">
      <h2>Ubah Alamat</h2>
      <input
        type="text"
        value={newAddress}
        onChange={handleAddressChange}
        placeholder="Masukkan alamat baru"
      />
      <button onClick={handleSaveAddress}>Simpan Alamat</button>
    </div>
  );
};

export default UpdateAddressPage;
