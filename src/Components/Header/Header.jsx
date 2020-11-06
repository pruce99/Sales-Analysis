import React, { useState, useEffect } from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(
    () => {
      const onbeforeunloadFn = () => {
        localStorage.setItem("time", dateTime.toLocaleTimeString());
      };

      window.addEventListener("beforeunload", onbeforeunloadFn);
      return () => {
        window.removeEventListener("beforeunload", onbeforeunloadFn);
      };
    },
    // eslint-disable-next-line
    []
  );

  return (
    <div className="header-items">
      <Link style={{ textDecoration: "none" }} to="/">
        <div className="company-logo">Presto</div>
      </Link>
      <div className="location-server">AutoZone Dev</div>
      <div className="Date">{`${dateTime.toLocaleDateString()}`}</div>
    </div>
  );
};

export default Header;
