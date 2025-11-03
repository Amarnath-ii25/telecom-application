import React from "react";
import logo from "../assets/images/openemr.svg";
import "../css/HealthCareFooter.css"; // import the CSS file

const HealthCareFooter: React.FC = () => {
  return (
    <footer className="healthcare-footer">
      <div className="footer-container">
        {/* --- Top Section --- */}
        <div className="footer-grid">
          {/* Logo */}
          <div className="footer-logo">
            <img src={logo} alt="OpenEMR Logo" className="footer-logo-img" />
          </div>

          {/* Main Project Links */}
          <div>
            <h3 className="footer-title">Main Project Links</h3>
            <ul className="footer-links">
              <li><a href="#">Features</a></li>
              <li><a href="#">Demo</a></li>
              <li><a href="#">Download</a></li>
              <li><a href="#">Modules</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Docs</a></li>
              <li><a href="#">Forum</a></li>
              <li><a href="#">Chat</a></li>
              <li><a href="#">Donate</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

          {/* Help & Support Links */}
          <div>
            <h3 className="footer-title">Help & Support Links</h3>
            <ul className="footer-links">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Forum</a></li>
              <li><a href="#">User Manuals</a></li>
              <li><a href="#">Support Guide</a></li>
              <li><a href="#">Professional Support</a></li>
              <li><a href="#">Certification</a></li>
              <li><a href="#">Acknowledgements</a></li>
            </ul>
          </div>

          {/* Developer Links */}
          <div>
            <h3 className="footer-title">Developer Links</h3>
            <ul className="footer-links">
              <li><a href="#">Developer Manuals</a></li>
              <li><a href="#">Issues</a></li>
              <li><a href="#">GitHub</a></li>
            </ul>
          </div>
        </div>

        {/* --- Bottom Section --- */}
        <div className="footer-bottom">
          <p>Privacy Policy | Copyright © 2024 OpenEMR Foundation, Inc.</p>
          <p>
            Many of the icons used on the homepage are from flaticon.com and are licensed by CC 3.0 BY.
          </p>
          <p>
            Icon authors include: Madebyoliver, Freepik, Those Icons, Linh Pham, AnhGreen, Dave Gandy
          </p>
          <p>ONC CERTIFIED HIT® is a registered trademark of HHS.</p>
        </div>
      </div>
    </footer>
  );
};

export default HealthCareFooter;
