import React from 'react';
import '../css/RealEstateFooter.css';

export const RealEstateFooter: React.FC = () => {
  return (
    <footer className="real-estate-footer">
      <div className="real-estate-footer-container">
        {/* Accessibility Statement */}
        <p className="real-estate-footer-text">
          RealEstatePro Group is committed to ensuring digital accessibility for individuals with disabilities. 
          We are continuously working to improve the accessibility of our web experience for everyone, 
          and we welcome feedback and accommodation requests. If you wish to report an issue or seek 
          an accommodation, please{' '}
          <a href="#" className="real-estate-footer-link">let us know</a>.
        </p>

        {/* Licensing Information */}
        <p className="real-estate-footer-text">
          RealEstatePro, Inc. holds real estate brokerage{' '}
          <a href="#" className="real-estate-footer-link">licenses</a> in multiple states. 
          RealEstatePro (Canada), Inc. holds real estate brokerage{' '}
          <a href="#" className="real-estate-footer-link">licenses</a> in multiple provinces.
        </p>

        <p className="real-estate-footer-text">
          This site is not authorized by the New York State Department of Financial Services. 
          No mortgage solicitation activity or loan applications for properties located in the 
          state of New York can be facilitated through this site. All mortgage lending products 
          and information provided by RealEstatePro Home Loans, LLC, NMLS #10287.{' '}
          <a href="#" className="real-estate-footer-link">NMLS Consumer Access</a>
        </p>

        {/* Legal Links */}
        <p className="real-estate-footer-text">
          <a href="#" className="real-estate-footer-link">§ 442-H New York Standard Operating Procedures</a>
        </p>

        <p className="real-estate-footer-text">
          <a href="#" className="real-estate-footer-link">§ New York Fair Housing Notice</a>
        </p>

        <p className="real-estate-footer-text">
          TREC:{' '}
          <a href="#" className="real-estate-footer-link">Information about brokerage services</a>,{' '}
          <a href="#" className="real-estate-footer-link">Consumer protection notice</a>
        </p>

        <p className="real-estate-footer-text real-estate-footer-dre">
          California DRE #1522444
        </p>

        {/* Contact Link */}
        <p className="real-estate-footer-text">
          <a href="#" className="real-estate-footer-link real-estate-footer-contact">Contact RealEstatePro, Inc. Brokerage</a>
        </p>

        {/* Canadian Trademark Notice */}
        <p className="real-estate-footer-text real-estate-footer-canada">
          For listings in Canada, the trademarks REALTOR®, REALTORS®, and the REALTOR® logo are 
          controlled by The Canadian Real Estate Association (CREA) and identify real estate 
          professionals who are members of CREA. The trademarks MLS®, Multiple Listing Service® 
          and the associated logos are owned by CREA and identify the quality of services provided 
          by real estate professionals who are members of CREA. Used under license.
        </p>

        {/* App Store Badges */}
        <div className="real-estate-footer-badges">
          <a href="#" className="real-estate-badge-link" aria-label="Download on the App Store">
            <div className="real-estate-app-badge real-estate-app-store-badge">
              <svg className="real-estate-badge-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="real-estate-badge-text">
                <div className="real-estate-badge-small">Download on the</div>
                <div className="real-estate-badge-large">App Store</div>
              </div>
            </div>
          </a>

          <a href="#" className="real-estate-badge-link" aria-label="Get it on Google Play">
            <div className="real-estate-app-badge real-estate-google-play-badge">
              <svg className="real-estate-badge-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="real-estate-badge-text">
                <div className="real-estate-badge-small">GET IT ON</div>
                <div className="real-estate-badge-large">Google Play</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};