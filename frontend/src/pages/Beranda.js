import React from "react";
// import NavbarBeranda from "../Components/NavbarBeranda";
import NavbarSearching from "../Components/NavbarSearching";
import Berandapage from "../Components/Berandapage";
import NavbarBeranda from "../Components/Navbarcart";
import Footer from "../Components/Footer";
import "../Beranda.css";

const Beranda = () => {
  return (
    <div className="Beranda">
      <NavbarBeranda />
      <Berandapage />
      <Footer />
    </div>
  );
};

export default Beranda;
