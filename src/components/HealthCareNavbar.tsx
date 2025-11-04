import React from "react";
import "../css/HealthCareNavbar.css"; // import the CSS file

const HealthCareNavbar: React.FC = () => {
  const navItems = [
    "Features",
    "RealEstatePro",
    "Download",
    "Modules",
    "Blog",
    "Docs",
    "Forum",
    "Chat",
    "Support",
  ];

  return (
    <nav className="healthcare-navbar">
      {navItems.map((item) => (
        <a key={item} href="#">
          {item}
        </a>
      ))}
    </nav>
  );
};

export default HealthCareNavbar;
