import React from "react";
import Cart from "../Components/cart";
import Navbarcart from "../Components/Navbarcart";
import Footer from "../Components/Footer";
import "../cart.css";


const Cartpage = () => {
  return (
    <div className="cart">
      <Navbarcart/>
      <Cart/>
      <Footer/>
    </div>
  );
};

export default Cartpage;
