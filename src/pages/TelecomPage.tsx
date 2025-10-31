// pages/TelecomPage.tsx

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import CDGElements from '../components/CDGElements';
import SubscriberInterconnect from '../components/SubscriberInterconnect';
import WhatsNewCDG from '../components/WhatsNewCDG';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import AgentSelector from '../components/AgentSelector';
import type { Agent } from '../types/agent.types';
import '../css/TelecomPage.css';

const TelecomPage: React.FC = () => {
  const location = useLocation();
  const categoryId = location.state?.categoryId || 2; // Default to Telecom category ID
  const [, setSelectedAgent] = useState<Agent | null>(null);

  const handleAgentSelect = (agent: Agent | null) => {
    setSelectedAgent(agent);
    console.log('Selected Agent:', agent);
    // Add any additional logic here when an agent is selected
  };

  return (
    <div className="telecom-page">
      <Header />
      <main className="main-content">
        <AgentSelector
          categoryId={categoryId}
          categoryName="Telecom"
          onAgentSelect={handleAgentSelect}
        />
        <Banner />
        <CDGElements />
        <SubscriberInterconnect />
        <WhatsNewCDG />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default TelecomPage;