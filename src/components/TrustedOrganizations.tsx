import React from "react";
import "../css/TrustedOrganizations.css";
import heteroLogo from "../assets/images/hetero.jpeg";
import yuluLogo from "../assets/images/yulu.avif";
import apolloLogo from "../assets/images/appollo.jpeg";
import thrillophiliaLogo from "../assets/images/thrillophilia.png";
import oneplusLogo from "../assets/images/oneplus.jpg";
import cleartaxLogo from "../assets/images/ClearTax-Logo.webp";
import jupiterLogo from "../assets/images/jupiter.webp";
import bombayLogo from "../assets/images/bombaysc.webp";
import plumLogo from "../assets/images/plum.svg";
import bydLogo from "../assets/images/byd.jpeg";
import delhiLogo from "../assets/images/dd.jpg";
import astroLogo from "../assets/images/astro.webp";
import xoxodayLogo from "../assets/images/xoxoday.webp";
import zivameLogo from "../assets/images/zivame.jpg";
import rajasthanLogo from "../assets/images/rr.jpg";

const organizations = [
  {
    name: "Hetero",
    img: heteroLogo,
  },
  {
    name: "Yulu",
    img: yuluLogo,
  },
  {
    name: "Apollo",
    img: apolloLogo,
  },
  {
    name: "Thrillophilia",
    img: thrillophiliaLogo,
  },
  {
    name: "OnePlus",
    img: oneplusLogo,
  },
  {
    name: "ClearTax",
    img: cleartaxLogo,
  },
  {
    name: "Jupiter",
    img: jupiterLogo,
  },
  {
    name: "Bombay Shaving Company",
    img: bombayLogo,
  },
  {
    name: "Plum",
    img: plumLogo,
  },
  {
    name: "BYD",
    img: bydLogo,
  },
  {
    name: "Delhi Daredevils",
    img: delhiLogo,
  },
  {
    name: "Astrotalk",
    img: astroLogo,
  },
  {
    name: "Xoxoday",
    img: xoxodayLogo,
  },
  {
    name: "Zivame",
    img: zivameLogo,
  },
  {
    name: "Rajasthan Royals",
    img: rajasthanLogo,
  },
];

const TrustedOrganizations: React.FC = () => {
  return (
    <section className="trusted-orgs">
      <div className="trusted-left">
        <h2>
          Trusted by 10,000+ <br /> Organizations
        </h2>
      </div>

      <div className="divider" />

      <div className="trusted-right">
        <div className="logo-slider">
          <div className="logo-track">
            {organizations.concat(organizations).map((org, index) => (
              <div key={index} className="logo-item">
                <img src={org.img} alt={org.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedOrganizations;