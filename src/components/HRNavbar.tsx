import React from "react";
import "../css/HRNavbar.css";
import keka from "../assets/images/KekaLogoBlack.svg";

const HrNavbar: React.FC = () => {
  return (
    <nav className="HrNavbar">
      {/* Left Section - Logo */}
      <div className="HrNavbar-logo">
        <img src={keka} alt="" />
      </div>

      {/* Center Section - Links */}
      <ul className="HrNavbar-links">
        <li>
          Products <span className="dropdown">▾</span>
        </li>
        <li>
          Customers <span className="dropdown">▾</span>
        </li>
        <li>Pricing</li>
        <li>
          About <span className="dropdown">▾</span>
        </li>
        <li>
          Resources <span className="dropdown">▾</span>
        </li>
        <li>Careers</li>
      </ul>

      {/* Right Section - Buttons */}
      <div className="navbar-actions">
        <button className="login-btn">Login</button>
        <button className="free-trial-btn">Get free trial</button>
        <button className="tour-btn">Take a tour</button>
      </div>
    </nav>
  );
};

export default HrNavbar;
