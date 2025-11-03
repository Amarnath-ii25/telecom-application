import React from "react";
import { FileText } from "lucide-react";

const EPrescribingCard: React.FC = () => (
  <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-200">
    <FileText className="w-12 h-12 text-red-700 mb-4" />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">e-Prescribing</h3>
    <p className="text-gray-600 text-sm leading-relaxed">
      Enter a prescription into an encounter and have it electronically sent to
      the patient’s pharmacy.
    </p>
  </div>
);

export default EPrescribingCard;
