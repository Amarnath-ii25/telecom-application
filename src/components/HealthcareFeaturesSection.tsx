import React from "react";
import "../css/HealthcareFeaturesSection.css";

import SchedulingCard from "../components/features/SchedulingCard";
import EPrescribingCard from "../components/features/EPrescribingCard";
import MedicalBillingCard from "../components/features/MedicalBillingCard";
import CMSReportingCard from "../components/features/CMSReportingCard";
import LabIntegrationCard from "../components/features/LabIntegrationCard";
import ClinicalDecisionRulesCard from "../components/features/ClinicalDecisionRulesCard";
import AdvancedSecurityCard from "../components/features/AdvancedSecurityCard";
import MultilingualSupportCard from "../components/features/MultilingualSupportCard";

const HealthcareFeaturesSection: React.FC = () => {
  return (
    <div className="healthcare-features">
      <h2>A Feature-Rich Solution</h2>
      <p>
        Our vibrant community of volunteers and contributors have maintained
        critical OpenEMR features for over a decade. With over{" "}
        <a href="#">30 supported languages</a>, many customizations, and full
        data ownership, OpenEMR’s features shine. On top of this, users in need
        of support can take advantage of our{" "}
        <a href="#">volunteer support network</a> as well as over{" "}
        <a href="#">professional support and vendors</a>.
      </p>

      <div className="healthcare-grid">
        <SchedulingCard />
        <EPrescribingCard />
        <MedicalBillingCard />
        <CMSReportingCard />
        <LabIntegrationCard />
        <ClinicalDecisionRulesCard />
        <AdvancedSecurityCard />
        <MultilingualSupportCard />
      </div>
    </div>
  );
};

export default HealthcareFeaturesSection;
