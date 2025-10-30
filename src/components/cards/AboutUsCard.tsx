import React from "react";
import "./../../css/CDGElements.css";

const UsersIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="#0077C8"
  >
    <path
      d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 
      1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 
      2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 
      5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 
      3.5V19h14v-2.5C15 14.17 10.33 13 8 
      13zm8 0c-.29 0-.62.02-.97.05C16.36 
      13.89 18 14.96 18 16.5V19h4v-2.5c0-2.33-4.67-3.5-6-3.5z"
    />
  </svg>
);

const AboutUsCard: React.FC = () => (
  <div className="card">
    <div className="card-icon">
      <UsersIcon />
    </div>
    <h2 className="card-title">About Us</h2>
    <p className="card-description">
      We are operator owned, operator managed, and dedicated to revolutionizing
      the telecommunications industry through delivering operator-driven,
      innovative, open architecture OSS/BSS solutions that empower our clients
      to deliver exceptional services to their customers.
    </p>
    <a href="#" className="card-link">
      Learn More
    </a>
  </div>
);

export default AboutUsCard;
