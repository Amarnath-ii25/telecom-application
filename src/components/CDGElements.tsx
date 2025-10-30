import React from "react";
import "../css/CDGElements.css";
import AboutUsCard from "../components/cards/AboutUsCard";
import WhoWeServeCard from "../components/cards/WhoWeServeCard";

const CDGElements: React.FC = () => {
  return (
    <section className="cdg-container">
      <div className="main-section">
        <p className="main-description">
          CDG Elements is a SaaS-delivered, open architecture OSS/BSS platform
          that empowers service providers offering broadband, data, utility, and
          interconnect services to create the optimal service ecosystem for
          growing their customer base, improving their BI, and deploying AI/ML
          and automation technologies to increase their operational efficiencies
          and revenue streams.
        </p>
      </div>

      <div className="cards-container">
        <AboutUsCard />
        <WhoWeServeCard />
      </div>
    </section>
  );
};

export default CDGElements;
