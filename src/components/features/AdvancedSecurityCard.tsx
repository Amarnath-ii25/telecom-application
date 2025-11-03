import React from "react";
import { Lock } from "lucide-react";

const AdvancedSecurityCard: React.FC = () => (
  <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-200">
    <Lock className="w-12 h-12 text-red-700 mb-4" />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">
      Advanced Security
    </h3>
    <p className="text-gray-600 text-sm leading-relaxed">
      HIPAA-friendly access control and password hashing protect your practice
      from intrusion.
    </p>
  </div>
);

export default AdvancedSecurityCard;
