import React from "react";
import HealthCareHeader from "../components/HealthCareHeader";
import "../css/OpenEMRHome.css";

// Import images
import giveNowImg from "../assets/images/heart.svg";
import tryNowImg from "../assets/images/monitor.png";
import findSupportImg from "../assets/images/info.png";
import downloadImg from "../assets/images/download-arrow.png";

const OpenEMRHome: React.FC = () => {
  const features = [
    {
      image: giveNowImg,
      title: "Give Now",
      text: "Help support ongoing development of OpenEMR.",
    },
    {
      image: tryNowImg,
      title: "Try Now",
      text: "Try the demo or launch your own free, hosted OpenEMR now.",
    },
    {
      image: findSupportImg,
      title: "Find Support",
      text: "Find community-based or professional help.",
    },
    {
      image: downloadImg,
      title: "Download for Free",
      text: "Get the latest version for Windows, macOS, or Linux.",
    },
  ];

  return (
    <div className="openemr-home">
      {/* Sticky Header */}
      <HealthCareHeader />

      {/* Hero Section */}
      <main className="openemr-hero">
        <h2 className="openemr-title">
          The world's leading open-source <br className="hidden md:block" /> medical record software.
        </h2>
        <p className="openemr-subtitle">
          Donations fund ONC Certification, API, FHIR and more!
        </p>

        {/* Feature Cards */}
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <img src={f.image} alt={f.title} />
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default OpenEMRHome;
