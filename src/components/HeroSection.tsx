import React from "react";
import "../css/HomePage.css";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="hero-section">
      <h1 className="hero-title">{title}</h1>
      <p className="hero-subtitle">{subtitle}</p>
    </section>
  );
};

export default HeroSection;
