import React from "react";
import "../css/AboutRecommendations.css";
import { ChevronDown } from "lucide-react"; 

const AboutRecommendations: React.FC = () => {
  return (
    <section className="about-recommendations">
      <h3 className="about-title">About RealEstatePro's Recommendations</h3>
      <p className="about-description">
        Recommendations are based on your location and search activity, such as
        the homes you've viewed and saved and the filters you've used. We use
        this information to bring similar homes to your attention, so you don't
        miss out.
      </p>

      <div className="about-links">
        <div className="about-link">
          <span>Real Estate</span>
          <ChevronDown size={18} />
        </div>

        <div className="divider" />

        <div className="about-link">
          <span>Rentals</span>
          <ChevronDown size={18} />
        </div>

        <div className="divider" />

        <div className="about-link">
          <span>Mortgage Rates</span>
          <ChevronDown size={18} />
        </div>

        <div className="divider" />

        <div className="about-link">
          <span>Browse Homes</span>
          <ChevronDown size={18} />
        </div>
      </div>
    </section>
  );
};

export default AboutRecommendations;
