import React from "react";
import "../css/HomeRecommendations.css";
import homeImage from "../assets/images/recommented-home.webp"; // replace with your image

const HomeRecommendations: React.FC = () => {
  return (
    <section className="home-rec-section">
      <div className="home-rec-container">
        {/* Left Text Content */}
        <div className="home-rec-text">
          <h2 className="home-rec-title">Get home recommendations</h2>
          <p className="home-rec-subtext">
            Sign in for a more personalized experience.
          </p>
          <button className="home-rec-btn">Sign in</button>
        </div>

        {/* Right Image Content */}
        <div className="home-rec-image-wrapper">
          <img
            src={homeImage}
            alt="Recommended homes preview"
            className="home-rec-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeRecommendations;

