import React from "react";
import "../css/FallLaunchBanner.css";

const FallLaunchBanner: React.FC = () => {
  return (
    <div className="fall-banner">
      <div className="fall-banner-content">
        <div className="text-section">
          <h2 className="banner-title">RealEstatePro’s Fall Launch</h2>
          <p className="banner-description">
            Don’t miss new tools like messages and virtual staging
            that make your home journey simpler and more fun.
          </p>
        </div>
        <button className="banner-button">See what’s new</button>
      </div>
    </div>
  );
};

export default FallLaunchBanner;
