import React from "react";
import "../css/SaveCard.css";

const SaveCard: React.FC = () => {
  return (
    <div className="save-card">
      <div className="save-hero">
        <div className="save-text-large">SAVE</div>
        <div className="save-text-small">up to</div>
        <div className="save-percentage">20%</div>
      </div>

      <div className="save-content">
        <h3 className="save-title">Save up to 20% vs. the other big guys.</h3>
        <p className="save-description">
          On comparable plans, plus optional streaming and in-flight Wi-Fi.
        </p>
        <p className="save-terms">
          <strong>Check the math at Demo website.com/Switch.</strong> Savings
          vs. comparable plans at AT&T and Verizon plus the costs of optional
          benefits; plan features and taxes & fees vary. Savings per line
          include 3rd line free via mo. bill credits; credits stop if you cancel
          any lines. Qualifying credit req'd.
        </p>
      </div>
    </div>
  );
};

export default SaveCard;
