import React from "react";
import "../css/TestimonialsSection.css";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      company: "PEMTEL",
      text: `"CDG is a great company to work with. During our conversion Regina was great to answer my questions and help me understand our 'new system.' CDG is very prompt with answering our questions and helping with whatever is needed."`,
      color: "#4B2E83",
    },
    {
      company: "MINFORD",
      text: `"I have had nothing but positive experiences with CDG. We have dealt with Mary, Niki and Myra and they have all been wonderful! I consider them more like a friend than work acquaintance."`,
      color: "#143b6e",
    },
    {
      company: "CITIZENS TELEPHONE CORPORATION",
      text: `"Using CDG’s MBS billing software [has] made my job easier and smoother. I can process twice as many service orders with MBS than I did with our old system. I have loved MBS from the start, and with the upgrades and improvements that CDG keeps making, it just gets better!"`,
      color: "#f46a1f",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="top-divider"></div>
      <h2 className="testimonials-title">
        Our customers think we are pretty great...
      </h2>

      <div className="testimonials-container">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="testimonial-card"
            style={{ borderColor: item.color }}
          >
            <h3 style={{ color: item.color }}>{item.company}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="dots">
        {[...Array(8)].map((_, i) => (
          <span key={i} className={`dot ${i === 2 ? "active" : ""}`}></span>
        ))}
      </div>

      <div className="bottom-divider"></div>
    </section>
  );
};

export default TestimonialsSection;
