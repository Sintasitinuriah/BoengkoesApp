import React from "react";
import Cart from "../Components/cart";
import NavbarBeranda from "../Components/NavbarBeranda";
import Footer from "../Components/Footer";
import "../cart.css";


const Cartpage = () => {
  return (
    <div className="cart">
      <NavbarBeranda/>
      <Cart/>
      <Footer/>
    </div>
  );
};

export default Cartpage;
