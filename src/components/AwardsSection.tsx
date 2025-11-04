import React from 'react';
import '../css/AwardsSection.css';
import awardsImage from '../assets/images/clients-logos-revmp.png';

const AwardsSection: React.FC = () => {
  return (
    <section className="awards-section">
      <h2 className="awards-title">Awesome gets awarded</h2>
      <div className="awards-container">
        <img src={awardsImage} alt="Awards and recognitions" className="awards-image" />
      </div>
    </section>
  );
};

export default AwardsSection;