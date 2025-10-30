import React from "react";
import "../css/WhatsNewCDG.css";

interface NewsItemProps {
  title: string;
  description: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, description }) => {
  return (
    <div className="news-item">
      <h3 className="news-title">{title}</h3>
      <p className="news-description">{description}</p>
      <div className="news-divider"></div>
    </div>
  );
};

const WhatsNewCDG: React.FC = () => {
  const newsItems = [
    {
      title:
        "VTX1 Implements CDG's Elements Platform to Power the Future of Rural Broadband",
      description:
        "Champaign, IL – Communications Data Group (CDG) is pleased to announce that VTX1, a leading rural broadband provider based in Raymondville, TX, has partnered with Communications Data Group (CDG) to implement CDG's cloud-based OSS/BSS platform, Elements, marking a...",
    },
    {
      title:
        "Innovation Incubator Expand Partnership with CDG to Offer Advanced Telecom Data Integration and AI Automation Services",
      description:
        "New York, NY – Innovation Incubator, Inc., an AWS advanced service partner, is pleased to announce that it is expanding its strategic partnership with Communications Data Group, Inc. (CDG) to offer advanced data integration, process refinement, and AI automation...",
    },
    {
      title:
        "CDG Integrates Elements OSS/BSS Platform with Nokia's Altiplano and Corteca Cloud Platforms",
      description:
        "CDG Integrates Elements OSS/BSS Platform with Nokia's Altiplano and Corteca Cloud Platforms  Champaign, IL – Communications Data Group, Inc. (CDG), a leading provider of innovative OSS/BSS solutions for broadband service providers, is pleased to announce its...",
    },
  ];

  return (
    <section className="whats-new-section">
      <div className="whats-new-content">
        {/* Header */}
        <div className="section-header-news">
          <div className="header-decoration-news">
            <div className="decoration-line-news"></div>
            <div className="decoration-dots-news">
              <span className="dot-news"></span>
              <span className="dot-news"></span>
            </div>
          </div>
          <div className="header-text-news">
            <h2 className="section-title-news">WHAT’S NEW WITH CDG?</h2>
            <p className="section-subtitle-news">
              Catch up on the latest happenings with CDG and our partners
            </p>
          </div>
        </div>

        {/* News List */}
        <div className="news-list">
          {newsItems.map((item, index) => (
            <NewsItem key={index} {...item} />
          ))}
        </div>

        {/* Read More */}
        <div className="read-more-container">
          <a href="#read-more" className="read-more-link">
            READ MORE NEWS
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatsNewCDG;
