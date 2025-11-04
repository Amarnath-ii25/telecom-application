import React from "react";
import "../../css/HomeOptionsSection.css";
import rentHome from '../../assets/images/renthome.webp'

const RentHomeCard: React.FC = () => {
  return (
    <div className="home-option-card">
      <img src={rentHome} alt="Rent a home" className="home-option-img" />
      <h2>Rent a home</h2>
      <p>
        We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.
      </p>
      <button className="home-option-btn">Find rentals</button>
    </div>
  );
};

export default RentHomeCard;
