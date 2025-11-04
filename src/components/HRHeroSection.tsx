import React from 'react';
import '../css/HRHeroSection.css';
import dashboardImg from '../assets/images/hero-home.svg';
import g2RatingImg from '../assets/images/g2-capterra.png';

interface HeroSectionProps {
  dashboardImageSrc?: string;
  g2RatingImageSrc?: string;
}

const HRHeroSection: React.FC<HeroSectionProps> = ({
  dashboardImageSrc = dashboardImg,
  g2RatingImageSrc = g2RatingImg,
}) => {
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        {/* Left Content Section */}
        <div className="content-section">
          <div className="text-content">
            <h1 className="hero-title">
              Everything you need to build a great company
            </h1>
            
            <p className="hero-description">
              Keka is your people enabler. From automation of people processes to creating an engaged and driven culture, Keka is all you need to build a good to great company.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <button className="btn btn-primary">
              Get free trial
            </button>
            <button className="btn btn-secondary">
              Take a tour
            </button>
          </div>

          {/* Ratings Section */}
          <div className="ratings-section">
            <div className="rating-item">
              <img 
                src={g2RatingImageSrc} 
                alt="4.5 rating on G2" 
                className="rating-image"
              />
            </div>
          </div>
        </div>

        {/* Right Dashboard Image Section */}
        <div className="dashboard-section">
          <div className="dashboard-image-wrapper">
            <img 
              src={dashboardImageSrc} 
              alt="Keka Dashboard showing Analytics, Recognition, Feedback, Payroll and other features" 
              className="dashboard-image"
            />
          </div>
          
          {/* Decorative gradient overlays */}
          <div className="gradient-overlay gradient-overlay-1" />
          <div className="gradient-overlay gradient-overlay-2" />
        </div>
      </div>
    </div>
  );
};

export default HRHeroSection;