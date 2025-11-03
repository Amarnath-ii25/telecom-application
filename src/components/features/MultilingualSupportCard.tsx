import React from "react";
import { Globe } from "lucide-react";

const MultilingualSupportCard: React.FC = () => (
  <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-200">
    <Globe className="w-12 h-12 text-red-700 mb-4" />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">
      Multilingual Support
    </h3>
    <p className="text-gray-600 text-sm leading-relaxed">
      Available in over 30 languages, and customizable to add more.
    </p>
  </div>
);

export default MultilingualSupportCard;
