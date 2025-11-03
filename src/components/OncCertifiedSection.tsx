import React from 'react';
import oncLogo from '../assets/images/onc-certified.jpg';
import '../css/OncCertifiedSection.css';

const OncCertifiedSection: React.FC = () => {
  return (
    <section className="onc-certified-section">
      <div className="onc-certified-container">
        {/* Text Section */}
        <div className="onc-certified-text">
          <h3 className="onc-certified-title">ONC Certified</h3>
          <p className="onc-certified-description">
            OpenEMR is ONC Certified! More details on how the OpenEMR community
            completed this feat can be{' '}
            <a href="#">found on our blog article</a>. The ONC Certification
            Transparency and Disclosure Requirements for OpenEMR can{' '}
            <a href="#">be viewed here</a>. Additional costs may apply and the
            additional costs disclosure can <a href="#">be viewed here</a>.
          </p>
        </div>

        {/* Logo Section */}
        <div className="onc-certified-logo">
          <img
            src={oncLogo}
            alt="ONC Certified Health IT Logo"
          />
        </div>
      </div>
    </section>
  );
};

export default OncCertifiedSection;
