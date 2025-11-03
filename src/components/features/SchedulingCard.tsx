import React from "react";
import { Calendar } from "lucide-react";

const SchedulingCard: React.FC = () => (
  <div className="flex flex-col items-center  rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-200">
    <Calendar className="w-12 h-12 text-red-700 mb-4" />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">Scheduling</h3>
    <p className="text-gray-600 text-sm leading-relaxed">
      Advanced scheduling allows clinics to create repeating events,
      automated-workflows triggered by check-in, and patient reminds.
    </p>
  </div>
);

export default SchedulingCard;
