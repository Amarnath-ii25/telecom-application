import React from "react";
import HealthCareNavbar from "./HealthCareNavbar";
import openEmr from "../assets/images/openemr1.svg";
import "../css/HealthCareHeader.css";

const HealthCareHeader: React.FC = () => {
  return (
    <header className="healthcare-header">
      <div className="healthcare-header-container">
        {/* Logo */}
        <div className="healthcare-logo">
          <img src={openEmr} alt="OpenEMR Logo" />
        </div>

        {/* Navbar Links */}
        <HealthCareNavbar />

        {/* Donate Button */}
        <button className="donate-button">🤍 Donate</button>
      </div>
    </header>
  );
};

export default HealthCareHeader;
