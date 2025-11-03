import React from "react";
import "../../css/WhoUsesOpenEMR.css";

import bgTop from "../../assets/images/bg1.jpg";
import bgBottom from "../../assets/images/bg2.jpg";
import ippf from "../../assets/images/ippf.png";
import peaceCorps from "../../assets/images/peacecorps.png";
import siaya from "../../assets/images/siaya.jpg";

const organizations = [
  { src: ippf, alt: "IPPF" },
  { src: peaceCorps, alt: "Peace Corps" },
  { src: siaya, alt: "Siaya District Hospital" },
];

const WhoUsesOpenEMR: React.FC = () => {
  return (
    <div className="who-uses-container">
      {/* Top blue background section */}
      <section
        className="bg-section"
        style={{ backgroundImage: `url(${bgTop})` }}
      ></section>

      {/* White middle section */}
      <section className="who-uses-middle">
        <h2 className="who-uses-title">Who uses OpenEMR</h2>
        <div className="who-uses-logos">
          {organizations.map((org, idx) => (
            <img
              key={idx}
              src={org.src}
              alt={org.alt}
              className="who-uses-logo"
            />
          ))}
        </div>
      </section>

      {/* Bottom blue background section */}
      <section
        className="bg-section"
        style={{ backgroundImage: `url(${bgBottom})` }}
      ></section>
    </div>
  );
};

export default WhoUsesOpenEMR;
