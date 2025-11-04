import React from 'react';
import '../css/SmartHRSection.css';
import dashboardImage from '../assets/images/dashboard.png';

const SmartHRSection: React.FC = () => {
  const features = [
    {
      id: 1,
      title: 'People data & Analytics',
      description: 'Connect all your people together in one place and gain powerful insights',
    },
    {
      id: 2,
      title: 'Payroll & Expense tracking',
      description: 'Automate and Pay employees in 6 steps- like clockwork. Stay 100% Compliant.',
    },
    {
      id: 3,
      title: 'Performance and Culture',
      description: 'Employ SMART Goals and OKRs to measure & maximize talent performance.',
      isHighlighted: true,
    },
    {
      id: 4,
      title: 'Hiring and Onboarding',
      description: 'Source, hire and onboard top talent. Personalized dashboards for insights.',
    },
    {
      id: 5,
      title: 'Timesheets & Projects (PSA)',
      description: 'Manage time, resource and project profitability efficiently',
    },
  ];

  return (
    <section className="smart-hr-section">
      <div className="smart-hr-container">
        <div className="smart-hr-header">
          <h2 className="smart-hr-title">Smart HR to outsmart the changing world</h2>
          <p className="smart-hr-description">
            The world has changed, and it's going to keep changing. Keka HR helps your teams to adapt,
            evolve, and scale by working more effectively. Spend less time on mundane tasks and focus more
            on strategy. Turn data into smarter decisions and create experiences your employees will love.
          </p>
        </div>

        <div className="smart-hr-content">
          <div className="features-list">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`feature-item ${feature.isHighlighted ? 'highlighted' : ''}`}
              >
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="dashboard-preview">
            <img src={dashboardImage} alt="HR Dashboard Preview" className="dashboard-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartHRSection;