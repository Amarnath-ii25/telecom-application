import React from "react";
import heroImage from "../assets/images/house.jpg"; // replace with your actual image
import "../css/RealEstateHero.css";

const RealEstateHero: React.FC = () => {
  return (
    <section
      className="realestate-hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          Rentals. Homes. <br />
          Agents. Loans.
        </h1>

        <div className="search-container">
          <input
            type="text"
            placeholder="Enter an address, neighborhood, city, or ZIP code"
            className="search-input"
          />
          <button className="search-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="22"
              viewBox="0 0 24 24"
              width="22"
              fill="currentColor"
            >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16a6.471 6.471 0 004.23-1.57l.27.28v.79l4.25 4.25 1.5-1.5L15.5 14zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RealEstateHero;
