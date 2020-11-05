import React, { useState, useEffect } from "react";
import "./index.scss";

const Header = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="header-items">
      <div className="company-logo">Presto</div>
      <div className="location-server">AutoZone Dev</div>
      <div className="Date">{`${dateTime.toLocaleDateString()}`}</div>
    </div>
  );
};

export default Header;
