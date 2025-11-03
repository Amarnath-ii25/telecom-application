import React from "react";
import { FaHeart } from "react-icons/fa";
import bg3 from "../assets/images/bg3.jpg";
import "../css/HelpSection.css"; // Import the new CSS file

const HelpSection: React.FC = () => {
  return (
    <section className="help-section">
      {/* Top White Content */}
      <div className="help-content">
        <div className="help-text">
          <h2 className="help-title">Help Needed!</h2>
          <p className="help-description">
            OpenEMR is in need of funding for new development efforts that will
            benefit outpatient and inpatient users alike. Features include hybrid
            inpatient/outpatient support, advanced billing, Fast Healthcare
            Interoperability Resources (FHIR) integration, modern cloud offerings,
            ability to perform quality reporting, low-cost medical devices
            connectivity, and other commonly requested solutions. Our vibrant
            community is dedicated to responding to user needs and setting our
            priorities to be consistent with the requests of our colleagues abroad.
          </p>
          <button className="help-button">
            <FaHeart className="heart-icon" />
            Donate Now
          </button>
        </div>
      </div>

      {/* Bottom Blue Image Section */}
      <div
        className="help-bg"
        style={{ backgroundImage: `url(${bg3})` }}
      >
        <div className="help-overlay"></div>
      </div>
    </section>
  );
};

export default HelpSection;
