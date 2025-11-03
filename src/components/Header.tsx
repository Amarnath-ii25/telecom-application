import React from "react";
import "../css/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="top-row">
          <div className="logo-section">
            <img
              src="https://cdg.us/wp-content/uploads/2024/05/Artwork-1.png"
              alt="CDG Logo"
              className="logo"
            />
          </div>
        </div>

        <nav className="nav-menu">
          <ul>
            <li>
              OSS/BSS Elements <span className="arrow">▼</span>
            </li>
            <li>
              Partners and Integrations <span className="arrow">▼</span>
            </li>
            <li>
              News and Events <span className="arrow">▼</span>
            </li>
            <li>
              Support <span className="arrow">▼</span>
            </li>
            <li>
              About Us <span className="arrow">▼</span>
            </li>
          </ul>
        </nav>
      </div>

      <button className="contact-btn">Contact Us</button>
    </header>
  );
};

export default Header;
