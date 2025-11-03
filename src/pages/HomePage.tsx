import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useCategories } from "../hooks/useCategories";
import CategoryCard from "../components/CategoryCard";
import "../css/HomePage.css";
import homeIcon from "../assets/images/home-banner.png";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { categories, loading, error } = useCategories();

  const telecomCategory = categories.find(
    (cat) => cat.name?.toLowerCase() === "telecom"
  );

  const handleCategoryClick = (category: any) => {
    navigate(category.config.route, {
      state: {
        categoryId: category.id,
        categoryName: category.name,
      },
    });
  };

  if (loading) {
    return (
      <div className="home-page">
        {/* Centered logo */}
        <div className="logo-container">
          <img
            src={homeIcon}
            alt="Agent Platform Logo"
            className="center-logo"
          />
        </div>

        <main className="home-content">
          <section className="hero-section">
            <h1 className="hero-title">Agent Management Platform</h1>
            <p className="hero-subtitle">Loading categories...</p>
          </section>
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="home-page">
        <div className="logo-container">
          <img
            src={homeIcon}
            alt="Agent Platform Logo"
            className="center-logo"
          />
        </div>

        <main className="home-content">
          <section className="hero-section">
            <h1 className="hero-title">Agent Management Platform</h1>
            <p className="hero-subtitle error-text">{error}</p>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="home-page">
      <div className="logo-container">
        <img src={homeIcon} alt="Agent Platform Logo" className="center-logo" />
      </div>

      <main className="home-content">
        <section className="hero-section">
          <h1 className="hero-title">Agent Management Platform</h1>
          <p className="hero-subtitle">Explore Telecom Management Agents</p>
        </section>

        <section className="categories-section">
          <div className="categories-grid">
            {telecomCategory ? (
              <CategoryCard
                key={telecomCategory.id}
                category={telecomCategory}
                onCategoryClick={handleCategoryClick}
              />
            ) : (
              <div className="no-categories">
                <p>Telecom category not found</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
