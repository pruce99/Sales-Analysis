import React from "react";
import Header from "../Header/Header";
import Navbar from "../NavBar/Navbar";

const WelcomePage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <ul>
        <li>
          Welcome, <b>Presto Live</b>(Pricing Analyst).
        </li>
        <li>Last Login {localStorage.getItem("time")}</li>
        <li>There are 0 unopened messages.</li>
      </ul>
    </div>
  );
};

export default WelcomePage;
