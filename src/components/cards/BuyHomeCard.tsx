import React from "react";
import "../../css/HomeOptionsSection.css";
import buyHome from '../../assets/images/buyhome.webp'

const BuyHomeCard: React.FC = () => {
  return (
    <div className="home-option-card">
      <img src={buyHome} alt="Buy a home" className="home-option-img" />
      <h2>Buy a home</h2>
      <p>
        A real estate agent can provide you with a clear breakdown of costs so that you can avoid surprise expenses.
      </p>
      <button className="home-option-btn">Find a local agent</button>
    </div>
  );
};

export default BuyHomeCard;
