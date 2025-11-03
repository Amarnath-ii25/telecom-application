import React from "react";

interface BackgroundSectionProps {
  image: string;
  children?: React.ReactNode;
}

const BackgroundSection: React.FC<BackgroundSectionProps> = ({ image, children }) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat w-full min-h-[80vh] flex flex-col justify-center items-center text-center transition-all duration-700 ease-in-out"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-blue-900/50" />
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
};

export default BackgroundSection;
