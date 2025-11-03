import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AnnouncementBar from '../components/AnnouncementBar';
import HealthCareHeader from '../components/HealthCareHeader';
import OpenEMRHome from '../components/OpenEMRHome';
import OpenSourceSection from "../components/OpenSourceSection";
import OncCertifiedSection from "../components/OncCertifiedSection";
import HealthcareFeaturesSection from '../components/HealthcareFeaturesSection';
import WhoUsesOpenEMR from '../components/WhoUsesOpenEMR/WhoUsesOpenEMR';
import HelpSection from '../components/HelpSection';
import HealthCareFooter from '../components/HealthCareFooter';
import AgentSelector from '../components/AgentSelector';
import type { Agent } from '../types/agent.types';
import { categoryService } from '../services/categoryService';
import '../css/HealthCarePage.css';

const HealthcarePage: React.FC = () => {
  const location = useLocation();
  const [categoryId, setCategoryId] = useState<number | null>(
    location.state?.categoryId || null
  );
  const [, setSelectedAgent] = useState<Agent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategoryId = async () => {
      if (!categoryId) {
        try {
          const category = await categoryService.getCategoryByName('healthcare');
          if (category) {
            setCategoryId(category.id);
          }
        } catch (error) {
          console.error('Error fetching Healthcare category:', error);
        }
      }
      setLoading(false);
    };

    fetchCategoryId();
  }, [categoryId]);

  const handleAgentSelect = (agent: Agent | null): void => {
    setSelectedAgent(agent);
    console.log('Selected Healthcare Agent:', agent);
  };

  return (
    <div className="healthcare-page">
      {/* ✅ Fixed elements on top */}
      <AnnouncementBar />
      <HealthCareHeader />

      {/* ✅ Add margin-top to push AgentSelector below the fixed bars */}
      <div className="agentselector-wrapper">
        {!loading && categoryId && (
          <AgentSelector
            categoryId={categoryId}
            categoryName="Healthcare"
            onAgentSelect={handleAgentSelect}
          />
        )}
      </div>

      {/* Main Content */}
      <main className="main-content">
        <OpenEMRHome />
        <OncCertifiedSection />
        <HealthcareFeaturesSection />
        <WhoUsesOpenEMR />
        <HelpSection />
        <OpenSourceSection />
      </main>

      <HealthCareFooter />
    </div>
  );
};

export default HealthcarePage;
