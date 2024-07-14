import React from "react";
import ShippingPage from "../Components/ShippingPage";
import NavbarSeller from "../Components/NavbarSeller";
import Footer from "../Components/Footer";
import "../ShippingPage.css";


const Shipping = () => {
  return (
    <div className="Shipping">
      <NavbarSeller/>
      <ShippingPage/>
      <Footer/>
    </div>
  );
};

export default Shipping;
