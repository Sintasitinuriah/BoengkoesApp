import React from "react";
// import NavbarBeranda from "../Components/NavbarBeranda";
import NavbarSearching from "../Components/NavbarSearching";
import Berandapage from "../Components/Berandapage";
import Footer from "../Components/Footer";
import "../Beranda.css";
import NavbarSearching from "../Components/NavbarSearching";

const Beranda = () => {
  return (
    <div className="Beranda">
      <NavbarSearching />
      <Berandapage />
      <Footer />
    </div>
  );
};

export default Beranda;
