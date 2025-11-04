import React from "react";
import "../css/HRFooter.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import kekaLogo from "../assets/images/KekaLogoWhite.svg";
import isoIcon from "../assets/images/iso.png";
import gdprIcon from "../assets/images/gdpr.png";
import socIcon from "../assets/images/soc.png";
import skyhighIcon from "../assets/images/skyhigh.png";

const HRFooter: React.FC = () => {
  return (
    <footer className="hr-footer">
      <div className="hr-footer-container">
        {/* Top Section: Logo + Description + Socials + Certifications */}
        <div className="hr-footer-top">
          <div className="hr-footer-brand">
            <img src={kekaLogo} alt="Keka Logo" className="hr-footer-logo" />
            <p className="hr-footer-desc">
              Keka is made for your people, by people like you,<br />
              who care for people in the organization
            </p>
            <div className="hr-footer-socials">
              <FaFacebookF />
              <FaInstagram />
              <FaLinkedinIn />
              <FaPinterestP />
              <FaXTwitter />
              <FaYoutube />
            </div>
          </div>

          <div className="hr-footer-certifications">
            <img src={skyhighIcon} alt="Skyhigh" />
            <img src={socIcon} alt="SOC" />
            <img src={gdprIcon} alt="GDPR" />
            <img src={isoIcon} alt="ISO" />
          </div>
        </div>

        <hr className="hr-footer-line" />

        {/* Middle Section: Links */}
        <div className="hr-footer-links">
          <div>
            <h4>Core HR</h4>
            <ul>
              <li>HR Software</li>
              <li>ESS Portal</li>
              <li>Employee Profiles</li>
              <li>Documents</li>
              <li>Helpdesk</li>
              <li>Pulse Surveys</li>
              <li>HR Analytics</li>
            </ul>
          </div>

          <div>
            <h4>Payroll</h4>
            <ul>
              <li>Payroll Software</li>
              <li>Compliance</li>
              <li>Expense Management</li>
              <li>Compensation</li>
              <li>Loans & Advances</li>
              <li>Employee Finances</li>
            </ul>
          </div>

          <div>
            <h4>Hiring & Onboarding</h4>
            <ul>
              <li>Applicant Tracking System</li>
              <li>Hiring Software</li>
              <li>Offer Management</li>
              <li>Employee Onboarding</li>
            </ul>
            <h4 className="learn-title">Learn</h4>
            <ul>
              <li>Learning Management System</li>
            </ul>
          </div>

          <div>
            <h4>Time Attendance</h4>
            <ul>
              <li>Attendance Management</li>
              <li>Leave Management</li>
              <li>GPS / Mobile Attendance</li>
              <li>Shift Management</li>
            </ul>
            <h4>Performance</h4>
            <ul>
              <li>Performance Management</li>
              <li>360 Degree Reviews</li>
              <li>OKR Software</li>
              <li>One on One Meeting</li>
              <li>Continuous Feedback</li>
            </ul>
          </div>

          <div>
            <h4>PSA</h4>
            <ul>
              <li>PSA Software</li>
              <li>Resource Management</li>
              <li>Project Management</li>
              <li>Timesheet Software</li>
              <li>Billing System</li>
              <li>Analytics</li>
              <li>Opportunity Management</li>
            </ul>

            <h4>Contact</h4>
            <ul>
              <li>Sales: +91 89292 08062</li>
              <li>isales@keka.com</li>
              <li>Support: support@keka.com</li>
              <li>Marketing: marketing@keka.com</li>
              <li>
                12th & 14th Floor, Vasavi Sky City, Gachibowli, Hyderabad, India
              </li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Customer Stories</li>
              <li>Partner with Us</li>
              <li>News</li>
              <li>Marketplace</li>
              <li>Security</li>
              <li className="we-are-hiring">We are hiring!</li>
            </ul>
          </div>
        </div>

        <hr className="hr-footer-line" />

        {/* Contact Locations */}
        <div className="hr-footer-locations">
          <div>
            <h4>Contact Us</h4>
            <p>Portland — +1-540-503-4550</p>
            <p>Kolkata — +91 9281116365</p>
          </div>
          <div>
            <p>Singapore — +65 6232 6961</p>
            <p>Pune — +91 9346991504</p>
          </div>
          <div>
            <p>Bengaluru — +91 9000015743</p>
            <p>Hyderabad — +91 9281115885</p>
          </div>
          <div>
            <p>Chennai — +91 9000017131</p>
            <p>Delhi NCR — +91 9100085589</p>
          </div>
          <div>
            <p>Mumbai — +91 9000017303</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="hr-footer-bottom">
          <p>© 2025 Keka Technologies Private Limited. All rights reserved.</p>
          <div className="hr-footer-policy">
            <a href="#">Security Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">DPA</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HRFooter;
