// src/pages/HomePage.js

import React from "react";
import MainContent from "../Components/MainContent";
import Navbar from "../Components/Navbar";

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <MainContent/>
    </div>
  );
};

export default HomePage;
