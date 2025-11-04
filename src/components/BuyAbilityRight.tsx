import React from "react";
import "../css/BuyAbilitySection.css";
import home1 from "../assets/images/home1.webp";
import home2 from "../assets/images/home2.webp";
import home3 from "../assets/images/home3.webp";

const BuyAbilityRight: React.FC = () => {
  const homes = [home1, home2, home3];

  return (
    <div className="buyability-right">
      {homes.map((home, index) => (
        <div className="home-card" key={index}>
          <div className="badge">Within BuyAbility</div>
          <img src={home} alt={`Home ${index + 1}`} className="home-image" />
          <div className="home-placeholder">
            <div className="line short"></div>
            <div className="line long"></div>
            <div className="line short"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BuyAbilityRight;
