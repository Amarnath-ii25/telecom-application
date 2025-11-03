import React from "react";
import { Brain } from "lucide-react";

const ClinicalDecisionRulesCard: React.FC = () => (
  <div className="flex flex-col items-center  rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-200">
    <Brain className="w-12 h-12 text-red-700 mb-4" />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">
      Clinical Decision Rules
    </h3>
    <p className="text-gray-600 text-sm leading-relaxed">
      Navigate complex patient algorithms using the clinical decision rules
      engine to ensure the highest quality of care for patients.
    </p>
  </div>
);

export default ClinicalDecisionRulesCard;
