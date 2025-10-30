import React from "react";
import "./../../css/CDGElements.css";

const WiFiIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="#2C4875"
  >
    <path
      d="M12 18c-.83 0-1.5.67-1.5 1.5S11.17 21 
      12 21s1.5-.67 1.5-1.5S12.83 18 12 
      18zm0-4c-1.48 0-2.83.52-3.9 
      1.39l1.43 1.43A3.978 3.978 0 0112 
      17c1.1 0 2.1-.45 2.82-1.18l1.43 
      1.43A5.978 5.978 0 0012 
      14zm0-4c-2.61 0-5.06.99-6.93 
      2.76l1.43 1.43A7.954 7.954 0 0112 
      13c2.2 0 4.2.9 5.66 2.34l1.43-1.43A9.954 
      9.954 0 0012 10zm0-4C7.41 6 3.21 
      7.68.39 10.5l1.43 1.43C4.04 9.71 
      7.84 8 12 8s7.96 1.71 10.18 
      3.93l1.43-1.43C20.79 7.68 16.59 
      6 12 6z"
    />
  </svg>
);

const WhoWeServeCard: React.FC = () => (
  <div className="card">
    <div className="card-icon">
      <WiFiIcon />
    </div>
    <h2 className="card-title">Who We Serve</h2>
    <p className="card-description">
      We serve Tier 3 to Tier 1 service providers (ILECs, CLECs, ISPs, BSPs,
      transport providers, cable providers, MSOs, electric co-ops, and RBOCs)
      who offer fiber internet, wireline, DSL, cable, wireless, VoIP, MDU, IPTV,
      enterprise, utilities, interconnection, or other general services.
    </p>
    <p className="card-additional">
      Clients range from fewer than 1,000 to more than 26 million subscribers.
    </p>
  </div>
);

export default WhoWeServeCard;
