import React from "react";
import "./index.scss";
import { AiOutlineBell, AiOutlineMenu } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="part1-nav">
        <div className="Nav-Components">Dashboard</div>
        <div className="Nav-Components">Strategy What-If</div>
        <div className="Nav-Components">Price Review</div>
        <Link style={{ textDecoration: "none" }} to="/SalesAnalysis">
          <div className="Nav-Components">Sales Analysis</div>
        </Link>
        <div className="Nav-Components">Item Trend</div>
        <div className="Nav-Components">Price Index</div>
        <div className="Nav-Components">Category Analysis</div>
        <div className="Nav-Components">Promotion Analysis</div>
        <div className="Nav-Components">Quarterly Financials</div>
      </div>
      <div className="part2-nav">
        <div
          style={{ fontSize: "19px", marginRight: "1px" }}
          className="Nav-Components"
        >
          About
        </div>
        <div
          style={{ fontSize: "23px", marginRight: "1px" }}
          className="Nav-Components"
        >
          <AiOutlineBell />
        </div>
        <div
          style={{ fontSize: "23px", marginRight: "1px" }}
          className="Nav-Components"
        >
          <AiOutlineMenu />
        </div>
        <div
          style={{ fontSize: "23px", marginRight: "1px" }}
          className="Nav-Components"
        >
          <FaUserTie />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
