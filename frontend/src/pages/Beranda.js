
import React from "react";
import NavbarBeranda from "../Components/NavbarBeranda";
import Berandapage from "../Components/Berandapage";
import Footer from "../Components/Footer";
import "../Beranda.css";



const Beranda = () => {
  return (
    <div className="Beranda">
      <NavbarBeranda/>
      <Berandapage/>
      <Footer/>
    </div>
  );
};

export default Beranda;
