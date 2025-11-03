import React from "react";
import { ClipboardList } from "lucide-react";

const CMSReportingCard: React.FC = () => (
  <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-200">
    <ClipboardList className="w-12 h-12 text-red-700 mb-4" />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">CMS Reporting</h3>
    <p className="text-gray-600 text-sm leading-relaxed">
      Generate reports with just a few clicks.
    </p>
  </div>
);

export default CMSReportingCard;
