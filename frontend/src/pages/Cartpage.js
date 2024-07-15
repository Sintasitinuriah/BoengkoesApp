import React from "react";
import Cart from "../Components/cart";
import Navbarcart from "../Components/Navbarcart";
import Footer from "../Components/Footer";
import "../cart.css";
import NavbarSearching from "../Components/NavbarSearching";


const Cartpage = () => {
  return (
    <div className="cart">
      <NavbarSearching/>
      <Cart/>
      <Footer/>
    </div>
  );
};

export default Cartpage;
