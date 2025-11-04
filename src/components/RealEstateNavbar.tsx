import React, { useState } from "react";
import "../css/RealEstateNavbar.css";

const RealEstateNavbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="real-estate-header">
      <nav className="real-estate-navbar">
        {/* Logo (optional, center or left) */}
        <h2 className="real-estate-logo">RealEstatePro</h2>

        {/* Left and Right Menus (Desktop) */}
        <div className="nav-desktop">
          <ul className="nav-left">
            <li>Buy</li>
            <li>Rent</li>
            <li>Sell</li>
            <li>Get a mortgage</li>
            <li>Find an agent</li>
          </ul>

          <ul className="nav-right">
            <li>Manage rentals</li>
            <li>Advertise</li>
            <li>Get help</li>
            <li>Sign in</li>
          </ul>
        </div>

        {/* Hamburger icon */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="nav-mobile">
          <ul>
            <li>Buy</li>
            <li>Rent</li>
            <li>Sell</li>
            <li>Get a mortgage</li>
            <li>Find an agent</li>
            <li>Manage rentals</li>
            <li>Advertise</li>
            <li>Get help</li>
            <li>Sign in</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default RealEstateNavbar;
