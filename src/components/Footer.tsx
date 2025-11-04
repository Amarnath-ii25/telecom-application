import React from "react";
import "../css/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Contact Us:</h3>
          <p>
            2107 S Neil Street
            <br />
            Champaign, IL 61820
          </p>
          <p>info@cdg.ws</p>
          <p className="footer-phone">888-234-4443</p>
        </div>

        <div className="footer-column">
          <h3>OSS/BSS Elements</h3>
          <ul>
            <li>Operate</li>
            <li>Evolve</li>
            <li>Manage</li>
            <li>Engage</li>
            <li>Bill</li>
            <li>Interconnect</li>
            <li>Partners and Integrations</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li>News and Events</li>
            <li>Our Leadership Team</li>
            <li>Our Experience</li>
            <li>Testimonials</li>
            <li>Job Openings</li>
            <li>Press Releases</li>
            <li>CDG Blog</li>
            <li>Privacy</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        <div className="footer-column footer-RealEstatePro">
          <button className="footer-RealEstatePro-btn">SCHEDULE A RealEstatePro</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 CDG. All rights reserved. | Designed by Nex-Tech</p>

        <div className="footer-social">
          <span>Follow us on:</span>
          <div className="social-icons">
            <a href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png"
                alt="X (Twitter)"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                alt="YouTube"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
