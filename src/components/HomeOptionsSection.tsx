import React from "react";
import BuyHomeCard from "./cards/BuyHomeCard";
import SellHomeCard from "./cards/SellHomeCard";
import RentHomeCard from "./cards/RentHomeCard";
import "../css/HomeOptionsSection.css";


const HomeOptionsSection: React.FC = () => {
  return (
    <section className="home-options-section">
      <h1 className="home-options-title">Explore Your Home Journey</h1>
      <div className="home-options-container">
        <BuyHomeCard />
        <SellHomeCard />
        <RentHomeCard />
      </div>
    </section>
  );
};

export default HomeOptionsSection;

