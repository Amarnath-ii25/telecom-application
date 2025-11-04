import React from "react";
import "../../css/HomeOptionsSection.css";
import sellHome from '../../assets/images/sellhome.webp'

const SellHomeCard: React.FC = () => {
  return (
    <div className="home-option-card">
      <img src={sellHome} alt="Sell a home" className="home-option-img" />
      <h2>Sell a home</h2>
      <p>
        No matter what path you take to sell your home, we can help you navigate a successful sale.
      </p>
      <button className="home-option-btn">See your options</button>
    </div>
  );
};

export default SellHomeCard;
