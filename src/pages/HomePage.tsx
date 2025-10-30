import React from "react";
import Header from "../components/Header";
import "../css/HomePage.css";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import CDGElements from "../components/CDGElements";
import SubscriberInterconnect from "../components/SubscriberInterconnect";
import WhatsNewCDG from "../components/WhatsNewCDG";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <Header />
      <main className="main-content">
        <Banner />
        <CDGElements />
        <SubscriberInterconnect />
        <WhatsNewCDG />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
