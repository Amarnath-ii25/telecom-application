import React from 'react';
import type { LucideIcon } from 'lucide-react';
import '../../css/FeatureCard.css';

interface FeatureCardProps {
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  title: string;
  description: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  iconColor, 
  iconBgColor, 
  title, 
  description, 
  link 
}) => {
  return (
    <div className="feature-card">
      <div className="feature-icon" style={{ backgroundColor: iconBgColor }}>
        <Icon size={28} color={iconColor} strokeWidth={2} />
      </div>
      <h3 className="feature-card-title">{title}</h3>
      <p className="feature-card-description">{description}</p>
      <a href={link} className="feature-link">
        Learn more →
      </a>
    </div>
  );
};

export default FeatureCard;