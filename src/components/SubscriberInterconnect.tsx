import React from "react";
import "../css/SuscriberInterconnect.css";

interface ElementCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const ElementCard: React.FC<ElementCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="element-card">
      <div className="element-icon">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="element-content">
        <h3 className="element-title">{title}</h3>
        <p className="element-description">{description}</p>
      </div>
    </div>
  );
};

const SubscriberInterconnect: React.FC = () => {
  const elements = [
    {
      imageUrl: "https://cdg.us/wp-content/uploads/2024/04/Hex_Operate-1.png",
      title: "Operate",
      description: "Operations, provisioning, ticketing, and order management",
    },
    {
      imageUrl: "https://cdg.us/wp-content/uploads/2024/03/Hex_Engage.png",
      title: "Engage",
      description: "Subscriber connect, support, generative AI, and engagement",
    },
    {
      imageUrl: "https://cdg.us/wp-content/uploads/2024/04/Hex_Evolve.png",
      title: "Evolve",
      description: "Business intelligence, insights, reporting, and analytics",
    },
    {
      imageUrl: "https://cdg.us/wp-content/uploads/2024/04/Hex_Bill-1.png",
      title: "Bill",
      description:
        "Record and batch processing, rating, invoicing, and fulfillment",
    },
    {
      imageUrl: "https://cdg.us/wp-content/uploads/2024/03/Hex_Manage.png",
      title: "Manage",
      description:
        "Subscriber care, POS, system configuration, and member management",
    },
    {
      imageUrl:
        "https://cdg.us/wp-content/uploads/2024/04/Hex_Interconnect-1.png",
      title: "Interconnect",
      description:
        "Wholesale and access billing, settlements, and partner management",
    },
  ];

  return (
    <div className="subscriber-interconnect-container">
      <div className="section-header">
        <div className="header-decoration">
          <div className="decoration-line"></div>
          <div className="decoration-dots">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <h2 className="section-title">SUBSCRIBER AND INTERCONNECT ELEMENTS</h2>
      </div>

      <div className="elements-grid">
        <div className="elements-column">
          {elements.slice(0, 3).map((element, index) => (
            <ElementCard key={index} {...element} />
          ))}
        </div>
        <div className="elements-column">
          {elements.slice(3, 6).map((element, index) => (
            <ElementCard key={index} {...element} />
          ))}
        </div>
      </div>

      <div className="cta-container">
        <a href="#schedule-demo" className="cta-button">
          Schedule a Demo
        </a>
      </div>
    </div>
  );
};

export default SubscriberInterconnect;
