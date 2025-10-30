import React, { useEffect, useState } from "react";
import "../css/Banner.css";

const Banner: React.FC = () => {
  const texts = [
    "Operations Focused, Open Architecture Platform",
    "Streamlining Business Operations For More Than 50 Years",
    "Evolved OSS/BSS Solutions For Service Providers",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section className="banner-section">
      <div className="banner-box fade-animation">
        <h1 key={index}>{texts[index]}</h1>
      </div>
    </section>
  );
};

export default Banner;
