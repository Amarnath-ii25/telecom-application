import React from "react";
import "../css/ContactSection.css";

const ContactSection: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="contact-text">
          <div className="contact-header">
            <div className="contact-line"></div>
            <div className="contact-dots">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <h2>CONTACT US</h2>
          </div>

          <p className="contact-description">
            Have questions? Want to see a demo? Interested in knowing more about
            CDG Elements?
          </p>

          <button className="contact-button">Contact Us</button>
        </div>

        <div className="contact-image">
          <img
            src="https://cdg.us/wp-content/uploads/2024/03/Group-7987.png"
            alt="Contact Support"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
