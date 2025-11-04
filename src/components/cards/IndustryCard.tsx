import React from 'react';
import type { LucideIcon } from 'lucide-react';
import '../../css/IndustryCard.css';

interface IndustryCardProps {
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  iconOuterBg: string;
  title: string;
  description: string;
  link: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ 
  icon: Icon, 
  iconColor, 
  iconBgColor,
  iconOuterBg,
  title, 
  description, 
  link 
}) => {
  return (
    <div className="industry-card">
      <div className="industry-icon-outer" style={{ backgroundColor: iconOuterBg }}>
        <div className="industry-icon-inner" style={{ backgroundColor: iconBgColor }}>
          <Icon size={24} color={iconColor} strokeWidth={2.5} />
        </div>
      </div>
      <h3 className="industry-card-title">{title}</h3>
      <p className="industry-card-description">{description}</p>
      <a href={link} className="industry-link">
        Know More
      </a>
    </div>
  );
};

export default IndustryCard;