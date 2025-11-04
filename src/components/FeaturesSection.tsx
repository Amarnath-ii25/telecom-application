import React from 'react';
import '../css/FeaturesSection.css';
import FeatureCard from './cards/FeatureCard';
import { DollarSign, Users, CheckSquare, UserPlus, Calendar, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  id: number;
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  title: string;
  description: string;
  link: string;
}

const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: DollarSign,
      iconColor: '#00bcd4',
      iconBgColor: '#e0f7fa',
      title: 'Payroll',
      description: 'We redefined Payroll industry back in 2016. 6 simple steps. No manual tasks~ All on cloud.',
      link: '#',
    },
    {
      id: 2,
      icon: Users,
      iconColor: '#66bb6a',
      iconBgColor: '#e8f5e9',
      title: 'Modern HR',
      description: 'All your people information in one place to create a connected digital workplace.',
      link: '#',
    },
    {
      id: 3,
      icon: CheckSquare,
      iconColor: '#ec407a',
      iconBgColor: '#fce4ec',
      title: 'Performance',
      description: 'Build a high-performing culture driven by contextual feedback and goal alignment.',
      link: '#',
    },
    {
      id: 4,
      icon: UserPlus,
      iconColor: '#ffa726',
      iconBgColor: '#fff3e0',
      title: 'Hiring & Onboarding',
      description: 'Empower your recruiter to discover, hire, and onboard the best talent.',
      link: '#',
    },
    {
      id: 5,
      icon: Calendar,
      iconColor: '#7e57c2',
      iconBgColor: '#ede7f6',
      title: 'Project timesheet',
      description: 'Track your employee time and maintain effective utilization to grow your services business.',
      link: '#',
    },
    {
      id: 6,
      icon: Clock,
      iconColor: '#ffca28',
      iconBgColor: '#fff9e6',
      title: 'Time & Attendance',
      description: 'Automated Attendance and leave — unified with payroll. Biometric and GPS Tracking.',
      link: '#',
    },
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">
          Everything you need to create a high<br />performance culture
        </h2>

        <div className="features-grid">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              iconColor={feature.iconColor}
              iconBgColor={feature.iconBgColor}
              title={feature.title}
              description={feature.description}
              link={feature.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;