import React from "react";
import "../css/BuyAbilitySection.css";

const BuyAbilityLeft: React.FC = () => {
  return (
    <div className="buyability-left">
      <div className="loan-card">
        <div className="loan-values">
          <div>
            <h3>$--</h3>
            <p>Suggested target price</p>
          </div>
          <div>
            <h3>$--</h3>
            <p>
              BuyAbility<sup>℠</sup>
            </p>
          </div>
        </div>

        <div className="loan-values">
          <div>
            <h3>$--</h3>
            <p>Mo. payment</p>
          </div>
          <div>
            <h3>--%</h3>
            <p>Today’s rate</p>
          </div>
          <div>
            <h3>--%</h3>
            <p>APR</p>
          </div>
        </div>
      </div>

      <button className="buyability-btn">Let’s get started</button>
    </div>
  );
};

export default BuyAbilityLeft;
