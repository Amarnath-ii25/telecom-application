import React from "react";
import { Receipt } from "lucide-react";

const MedicalBillingCard: React.FC = () => (
  <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-200">
    <Receipt className="w-12 h-12 text-red-700 mb-4" />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">Medical Billing</h3>
    <p className="text-gray-600 text-sm leading-relaxed">
      Integrated billing supporting HIPAA ASC X12 Version 5010 Transaction and
      Code Set Standards.
    </p>
  </div>
);

export default MedicalBillingCard;
