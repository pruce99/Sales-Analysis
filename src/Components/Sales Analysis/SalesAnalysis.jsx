import React, { useState } from "react";
import Header from "../Header/Header";
import Navbar from "../NavBar/Navbar";
import SalesControl from "./Sales Control/SalesControl";

const SalesAnalysis = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="Top-nav">
          hey focksz
        <SalesControl />
      </div>
    </div>
  );
};

export default SalesAnalysis;
