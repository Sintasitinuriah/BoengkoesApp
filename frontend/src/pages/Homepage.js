// src/pages/HomePage.js

import React from "react";
import MainContent from "../Components/MainContent";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <MainContent/>
      <Footer/>
    </div>
  );
};

export default HomePage;
