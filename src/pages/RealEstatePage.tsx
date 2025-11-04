import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import RealEstateNavbar from "../components/RealEstateNavbar";
import RealEstateHero from "../components/RealEstateHero";
import FallLaunchBanner from "../components/FallLaunchBanner";
import HomeRecommendations from "../components/HomeRecommendations";
import BuyAbilitySection from "../components/BuyAbilitySection";
import HomeOptionsSection from "../components/HomeOptionsSection";
import AboutRecommendations from "../components/AboutRecommendations";
import { RealEstateFooter } from "../components/RealEstateFooter";
import AgentSelector from "../components/AgentSelector";
import type { Agent } from "../types/agent.types";
import "../css/RealEstatePage.css";

const RealEstatePage: React.FC = () => {
  const location = useLocation();
  const categoryId = location.state?.categoryId;
  const categoryName = location.state?.categoryName || "testing";
  const [, setSelectedAgent] = useState<Agent | null>(null);

  const handleAgentSelect = (agent: Agent | null) => {
    setSelectedAgent(agent);
    console.log("Selected Agent:", agent);
  };

  return (
    <>
      <RealEstateNavbar />
      {categoryId && (
        <AgentSelector
          categoryId={categoryId}
          categoryName={categoryName}
          onAgentSelect={handleAgentSelect}
        />
      )}
      <RealEstateHero />
      <FallLaunchBanner />
      <HomeRecommendations />
      <BuyAbilitySection />
      <HomeOptionsSection />
      <AboutRecommendations />
      <RealEstateFooter />
    </>
  );
};

export default RealEstatePage;