// IndustrySection.tsx
import React from 'react';
import '../css/IndustrySection.css';
import IndustryCard from './cards/IndustryCard';
import { Activity, Heart, Sprout, PieChart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Industry {
  id: number;
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  iconOuterBg: string;
  title: string;
  description: string;
  link: string;
}

const IndustrySection: React.FC = () => {
  const industries: Industry[] = [
    {
      id: 1,
      icon: Activity,
      iconColor: '#00bcd4',
      iconBgColor: '#b3e5f0',
      iconOuterBg: '#d9f2f7',
      title: 'Technology & Services',
      description: 'Powerful HCM software for technology and white collar services companies where EX is essential.',
      link: '#',
    },
    {
      id: 2,
      icon: Heart,
      iconColor: '#ec407a',
      iconBgColor: '#f48fb1',
      iconOuterBg: '#fce4ec',
      title: 'Pharma & Manufacturing',
      description: 'HR & Payroll for Pharma and manufacturing companies. For both blue-collar and white-collar employees.',
      link: '#',
    },
    {
      id: 3,
      icon: Sprout,
      iconColor: '#66bb6a',
      iconBgColor: '#a5d6a7',
      iconOuterBg: '#e8f5e9',
      title: 'Banks & Financial Services',
      description: 'Complete HCM and Payroll for banks and financial services where compliance and audit processes are a must.',
      link: '#',
    },
    {
      id: 4,
      icon: PieChart,
      iconColor: '#9575cd',
      iconBgColor: '#b39ddb',
      iconOuterBg: '#ede7f6',
      title: 'Retail & Other Industries',
      description: 'One central HR platform for all retail stores. 24x7 accessibility & updates from anywhere on earth.',
      link: '#',
    },
  ];

  return (
    <section className="industry-section">
      <div className="industry-container">
        <h2 className="industry-title">
          Personalized HCM Software for YOUR industry
        </h2>
        
        <p className="industry-subtitle">
          You need someone that understands you. Check our tailored offerings for your industry. This is<br />
          People Management - À la carte.
        </p>

        <div className="industry-grid">
          {industries.map((industry) => (
            <IndustryCard
              key={industry.id}
              icon={industry.icon}
              iconColor={industry.iconColor}
              iconBgColor={industry.iconBgColor}
              iconOuterBg={industry.iconOuterBg}
              title={industry.title}
              description={industry.description}
              link={industry.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;