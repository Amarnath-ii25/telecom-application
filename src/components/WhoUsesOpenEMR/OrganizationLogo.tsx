import React from "react";

interface OrganizationLogoProps {
  src: string;
  alt: string;
}

const OrganizationLogo: React.FC<OrganizationLogoProps> = ({ src, alt }) => {
  return (
    <div className="flex justify-center items-center w-32 md:w-40 mx-6">
      <img src={src} alt={alt} className="object-contain w-full h-auto" />
    </div>
  );
};

export default OrganizationLogo;
