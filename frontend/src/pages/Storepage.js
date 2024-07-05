import React from "react";
import Store from "../Components/Store";
import NavbarBeranda from "../Components/NavbarBeranda";
import Footer from "../Components/Footer";
import "../Store.css"

const Storepage = () => {
  return (
    <div className="home-page">
      <NavbarBeranda />
      <Store />
      <Footer />
    </div>
  );
};

export default Storepage;
