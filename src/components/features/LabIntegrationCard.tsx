import React from "react";
import { TestTube2 } from "lucide-react";

const LabIntegrationCard: React.FC = () => (
  <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-200">
    <TestTube2 className="w-12 h-12 text-red-700 mb-4" />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">Lab Integration</h3>
    <p className="text-gray-600 text-sm leading-relaxed">
      Have lab orders automatically sent to a lab and integrate the results into
      a patient’s chart automatically.
    </p>
  </div>
);

export default LabIntegrationCard;
