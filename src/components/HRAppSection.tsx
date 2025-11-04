import React from 'react';
import '../css/HRAppSection.css';
import mobile from '../assets/images/mobile.png';

interface Feature {
  id: number;
  title: string;
  description: string;
}

const HRAppSection: React.FC = () => {
  const leftFeatures: Feature[] = [
    {
      id: 1,
      title: 'Simplified leave & attendance',
      description:
        'Let employees clock in or take leave- remotely, on field or in-office. Embrace self-accountability.',
    },
    {
      id: 2,
      title: 'A Culture of Recognition',
      description:
        'Give and Receive Praises to build a culture of recognition. Take a moment to take it in.',
    },
    {
      id: 3,
      title: 'Adaptable to employee preferences',
      description:
        'Each employee can find their preferred features on the main screen',
    },
  ];

  const rightFeatures: Feature[] = [
    {
      id: 1,
      title: 'Tax and Expense - in 2 Clicks',
      description:
        'Let employees manage tax declarations and proofs. File and update expenses in 2 clicks.',
    },
    {
      id: 2,
      title: 'Approvals from a single window',
      description:
        'Enable managers to approve or reject requests from a single window',
    },
    {
      id: 3,
      title: 'Faster resolution of employee issues',
      description:
        'A reliable help-desk with super-easy process for raising and resolving issues',
    },
  ];

  return (
    <section className="hr-app-section">
      <div className="hr-app-container">
        <h2 className="hr-app-title">
          One HR app, embraced by <br />
          2.5 Million Employees
        </h2>

        <div className="hr-app-content">
          {/* Phone image - left side */}
          <div className="hr-app-phone">
            <img
              src={mobile}
              alt="HR Mobile App"
              className="hr-app-phone-image"
            />
          </div>

          {/* Feature columns - right side */}
          <div className="hr-app-features">
            <div className="hr-app-features-left">
              {leftFeatures.map((feature) => (
                <div key={feature.id} className="hr-app-feature">
                  <h3 className="hr-app-feature-title">{feature.title}</h3>
                  <p className="hr-app-feature-description">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="hr-app-features-right">
              {rightFeatures.map((feature) => (
                <div key={feature.id} className="hr-app-feature">
                  <h3 className="hr-app-feature-title">{feature.title}</h3>
                  <p className="hr-app-feature-description">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HRAppSection;
