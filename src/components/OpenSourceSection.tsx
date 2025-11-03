import React from "react";
import osiLogo from "../assets/images/osi-certified.png";
import onPremisesImg from "../assets/images/server.svg";
import cloudBasedImg from "../assets/images/cloud.svg";
import "../css/OpenSourceSection.css"; // Import the CSS file

const OpenSourceSection: React.FC = () => {
  return (
    <section className="open-source-section">
      <div className="open-source-container">
        {/* Top Row */}
        <div className="open-source-top">
          <img
            src={osiLogo}
            alt="OSI Certified"
            className="open-source-logo"
          />
          <div className="open-source-text">
            <h2 className="open-source-title">Open-Source</h2>
            <p className="open-source-description">
              Open source software has changed the world for the better. OpenEMR
              is a leader in healthcare open source software. Costly proprietary
              EMRs are no longer the only option. Learn how to start contributing
              today!
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="open-source-grid">
          {/* On-Premises */}
          <div className="open-source-item">
            <img
              src={onPremisesImg}
              alt="On-Premises"
              className="open-source-icon"
            />
            <h3 className="open-source-subtitle">On-Premises</h3>
            <p className="open-source-subdesc">
              Run OpenEMR on your own servers on location
            </p>
          </div>

          {/* Cloud-Based */}
          <div className="open-source-item">
            <img
              src={cloudBasedImg}
              alt="Cloud-Based"
              className="open-source-icon"
            />
            <h3 className="open-source-subtitle">Cloud-Based</h3>
            <p className="open-source-subdesc">
              Deploy OpenEMR to the cloud
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
