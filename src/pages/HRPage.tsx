import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import HrNavbar from "../components/HRNavbar";
import HrHeroSection from "../components/HRHeroSection";
import TrustedOrganizations from "../components/TrustedOrganizations";
import AwardsSection from "../components/AwardsSection";
import SmartHRSection from "../components/SmartHRSection";
import FeaturesSection from "../components/FeaturesSection";
import IndustrySection from "../components/IndustrySection";
import HRAppSection from "../components/HRAppSection";
import HRFooter from "../components/HRFooter";
import AgentSelector from "../components/AgentSelector";
import type { Agent } from "../types/agent.types";
import "../css/HRPage.css";

const HrPage: React.FC = () => {
  const location = useLocation();
  const categoryId = location.state?.categoryId || 1;
  const [, setSelectedAgent] = useState<Agent | null>(null);

  const handleAgentSelect = (agent: Agent | null) => {
    setSelectedAgent(agent);
    console.log("Selected HR Agent:", agent);
  };

  return (
    <div className="hr-page">
      <HrNavbar />
      <main className="hr-content">
        <AgentSelector
          categoryId={categoryId}
          categoryName="HR Management"
          onAgentSelect={handleAgentSelect}
        />
        <HrHeroSection />
        <TrustedOrganizations />
        <AwardsSection />
        <SmartHRSection />
        <FeaturesSection />
        <IndustrySection />
        <HRAppSection />
      </main>
      <HRFooter />
    </div>
  );
};

export default HrPage;
