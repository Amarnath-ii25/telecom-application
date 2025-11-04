import React from "react";
import BuyAbilityLeft from "./BuyAbilityLeft";
import BuyAbilityRight from "./BuyAbilityRight";
import "../css/BuyAbilitySection.css";

const BuyAbilitySection: React.FC = () => {
  return (
   <section className="buyability-section">
  <div className="buyability-container">
    <div className="buyability-header">
      <h2 className="buyability-title">
        Find homes you can afford with{" "}
        <span>
          BuyAbility<sup>℠</sup>
        </span>
      </h2>
      <p className="buyability-subtext">
        Answer a few questions. We'll highlight homes you're likely to qualify for.
      </p>
    </div>

    <div className="buyability-content">
      <BuyAbilityLeft />
      <BuyAbilityRight />
    </div>
  </div>
</section>

  );
};

export default BuyAbilitySection;
